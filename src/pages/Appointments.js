import React, { useContext, useEffect } from "react"
import "./appointments.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useQueryGetAllAppointments } from "../functions/useQuery"
import Title from "../components/Title"
import Filter from "../components/Appointment/Filter"
import { useMutateToggleStatus } from "../functions/useMutation"
import { FormContext } from "../context/FormContext"

const Appointments = () => {
  const navigate = useNavigate()

  //useQuery
  const { data, isSuccess, refetch } = useQueryGetAllAppointments()

  //useMutation
  const mutateToggleStatus = useMutateToggleStatus()

  //context
  const { currentUser } = useContext(AuthContext)
  const { setFormData } = useContext(FormContext)

  const handleFilterChange = (res) => {
    console.log("Filters: ", res)
  }

  const handleViewDetails = (e, item) => {
    setFormData({...item})
    console.log("Selected detail: ", item)
    //redirect to view details by id
    navigate(`/appointments/update/${item.name}`)
  }

  const handleToggleStatus = (e, item) => {
    e.stopPropagation()
    console.log("toggle is working: ", item)

    //Patch status of appointment
    mutateToggleStatus.mutate({
      id: item.id,
      status: item.status === "pending" ? "completed" : "pending",
    })
  }

  if (mutateToggleStatus.isLoading) {
    refetch()
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

      <Filter
        handleFilterChange={(filterResult) => handleFilterChange(filterResult)}
      />

      {/* List appointments */}
      <ul className="flex flex-col gap-y-3 w-full h-full overflow-y-auto">
        {isSuccess ? (
          data.map((item, id) => (
            <li key={id}>
              <div
                className="rounded-2xl bg-c4 text-c3 px-4 py-2"
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
                        color={item.status === "completed" ? "#03C988" : "gray"}
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

                  <div>{item.date}</div>
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

      <div className="flex justify-end mt-7 w-full">
        <button
          className="rounded-2xl bg-c3 text-c4 font-bold"
          onClick={() => navigate("/appointments/create")}
        >
          ➕ Add
        </button>
      </div>

      {"users: " + currentUser.user.email}
    </div>
  )
}

export default Appointments
