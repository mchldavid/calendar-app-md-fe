import React, { useContext, useEffect, useState } from "react"
import "./appointments.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useQueryGetAllAppointments } from "../functions/useQuery"

const Appointments = () => {
  const [filterKeywords, setFilterKeywords] = useState("")
  const [appointments, setAppoinments] = useState([])
  const [filterDate, setFilterDate] = useState(
    String(new Date().toISOString().slice(0, 10))
  )
  const [filterButton, setFilterButton] = useState("🔍 Filter")
  const navigate = useNavigate()

  //useQuery
  const {data, isSuccess} = useQueryGetAllAppointments()
  console.log("Query: ", appointments)

  //context
  const { currentUser } = useContext(AuthContext)

  const handleSearch = (e) => {
    setFilterKeywords(e.target.value)
  }

  const handleFilterDate = (e) => {
    console.log(e.target.value)
    setFilterDate(e.target.value)
  }

  const handleAdd = () => {
    setAppoinments((list) => [
      ...list,
      { name: "New", status: "pending", date: "Jan. 05 2023", id: "123" },
    ])
  }

  const handleFilter = () => {
    //show/hide the filter card
    const filter = document.querySelector("#search_filter")

    if (filter.getAttribute("data-visible") === "true") {
      filter.setAttribute("data-visible", false)
      setFilterButton("🔍 Filter")
    } else {
      filter.setAttribute("data-visible", true)
      setFilterButton("❌ Filter")
    }
  }

  const handleViewDetails = (e, itemId) => {
    //redirect to view details by id
    navigate(`/appointments/update/${itemId}`)
  }

  const handleToggleStatus = (e) => {
    e.stopPropagation()
    console.log("toggled")
  }

  useEffect(() => {
    //set default radio
    const radioDefault = document.querySelector("#all")
    radioDefault.checked = true
  }, [])

  return (
    <div className="home max-w-md w-full flex flex-col p-6 h-full">
      <div className="flex justify-start mx-1 mb-5">
        <h1 className="text-3xl font-bold">Calendar App</h1>
      </div>

      <div
        id="search_filter"
        data-visible="false"
        className=" flex justify-start flex-col mb-3 text-c4 w-full h-fit"
      >
        <div className="flex justify-end">
          <button onClick={handleFilter}>{filterButton}</button>
        </div>
        <div className="flex flex-col py-2 border-y border-c3 gap-1">
          <div className="flex flex-col">
            <label className="font-light">Search</label>
            <input
              className="rounded-2xl bg-c4 text-c3"
              type="input"
              onChange={(e) => handleSearch(e)}
              placeholder="Search Keywords"
              value={filterKeywords}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-light">Date</label>
            <input
              className="rounded-2xl bg-c4 text-c3"
              type="date"
              onChange={(e) => handleFilterDate(e)}
              placeholder="Search Keywords"
              value={String(filterDate)}
            />
          </div>

          <div className="flex justify-center w-full gap-6 mt-3">
            <div>
              <input type="radio" id="all" name="status" value="All" />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input type="radio" id="done" name="status" value="Done" />
              <label htmlFor="done">Done</label>
            </div>
            <div>
              <input type="radio" id="pending" name="status" value="Pending" />
              <label htmlFor="pending">Pending</label>
            </div>
          </div>
        </div>
      </div>

      {/* List appointments */}
      <ul className="flex flex-col gap-y-3 w-full h-full overflow-y-auto">
        {isSuccess ? (
          data.map((item, id) => (
            <li key={id}>
              <div
                className="rounded-2xl bg-c4 text-c3 px-4 py-2"
                onClick={(e) => handleViewDetails(e, item.id)}
              >
                <div className="font-bold text-c3 h-10">{item.name}</div>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <div
                      id="toggleStatus"
                      onClick={(e) => handleToggleStatus(e)}
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

      <button onClick={handleAdd}>Bypass Add Item</button>

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
