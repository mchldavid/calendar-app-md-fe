import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQueryGetAllAppointments } from "../functions/useQuery"
import Title from "../components/Title"
import Filter from "../components/Appointment/Filter"
import { useMutateToggleStatus } from "../functions/useMutation"
import { FormContext } from "../context/FormContext"
import formatDate from "../functions/formatDate"
import Loading from "../components/Loaders/Loading"
import { ToastContainer, toast } from "react-toastify"

const Appointments = () => {
  const navigate = useNavigate()

  //filter state
  const [filter, setFilter] = useState({})

  //context
  const { formData, setFormData } = useContext(FormContext)

  if (formData) {
    setFormData(null)
  }

  //useQuery
  const { data, isSuccess, isLoading } = useQueryGetAllAppointments(filter)

  //useMutation
  const mutateToggleStatus = useMutateToggleStatus()

  const handleFilterChange = (res) => {
    console.log("filter change: ", res)
    setFilter({ ...res })
  }

  const handleViewDetails = (e, item) => {
    setFormData({ ...item })
    console.log("Selected detail: ", item)
    //redirect to view details by id
    navigate(`/appointments/update/${item.name}`)
  }

  const handleToggleStatus = (e, item) => {
    e.stopPropagation()

    //Patch status of appointment
    mutateToggleStatus.mutate({
      id: item.id,
      status: item.status === "pending" ? "completed" : "pending",
    })

    if (mutateToggleStatus.isSuccess && item.status === "pending") {
      toast.success("Completed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }

  useEffect(() => {
    //set default radio
    const radioDefault = document.querySelector("#all")
    radioDefault.checked = true
  }, [])

  return (
    <div className="home max-w-md w-full flex flex-col p-6 h-full">
      <div className="flex justify-start mx-1 mb-5">
        <Title />
      </div>

      <div className=" overflow-hidden">
        <Filter
          handleFilterChange={(filterResult) =>
            handleFilterChange(filterResult)
          }
        />

        <ul className="flex flex-col gap-y-3 w-full h-full overflow-y-auto">
          {isLoading ? (
            <Loading />
          ) : isSuccess && data.length !== 0 ? (
            data.map((item, id) => (
              <li key={id} className="">
                <div
                  className="transition-all hover:opacity-80 rounded-2xl bg-c4 text-c3 px-4 py-2"
                  onClick={(e) => handleViewDetails(e, item)}
                >
                  <div className="font-bold text-c3 h-10">{item.name}</div>
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <div
                        id="toggleStatus"
                        onClick={(e) =>
                          handleToggleStatus(e, {
                            id: item.id,
                            status: item.status,
                          })
                        }
                        className="cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          color={
                            item.status === "completed" ? "#03C988" : "gray"
                          }
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div
                        className={
                          "text-c4 px-3 py-0.5 rounded-2xl " +
                          (item.status === "completed"
                            ? "bg-completed"
                            : " bg-pending")
                        }
                      >
                        {item.status === "completed" ? "Done" : "Pending"}
                      </div>
                    </div>

                    <div>{formatDate(item.date)}</div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="flex justify-center w-full text-c2 text-xl">
              There's no item 📋 to show.
            </div>
          )}
        </ul>
      </div>

      {/* List appointments */}

      <div className="flex justify-end mt-4 w-full">
        <button
          className="transition-all hover:opacity-80 rounded-2xl bg-c3 text-c4 font-bold"
          onClick={() => navigate("/appointments/create")}
        >
          ➕ Add
        </button>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default Appointments
