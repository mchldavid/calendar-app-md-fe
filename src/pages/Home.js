import React, { useState } from "react"
import "./home.css"

const Home = () => {
  const [filterKeywords, setFilterKeywords] = useState("")
  const [appointments, setAppoinments] = useState([])
  const [filterDate, setFilterDate] = useState()

  const handleSearch = (e) => {
    setFilterKeywords(e.target.value)
  }

  const handleFilterDate = (e) => {
    console.log("date")
  }

  const handleAdd = () => {
    setAppoinments((list) => [
      ...list,
      { name: "New", status: "Pending", date: "Jan. 05 2023" },
    ])
  }

  const handleFilter = () => {
    //show/hide the filter card
    const filter = document.querySelector("#search_filter")

    if (filter.getAttribute("data-visible") === "true") {
      filter.setAttribute("data-visible", false)
    } else {
      filter.setAttribute("data-visible", true)
    }
  }

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
          <button onClick={handleFilter}>Filter</button>
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
              value={filterDate}
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
      <ul className="flex flex-col gap-y-3 w-full h-full overflow-y-auto">
        {Object.keys(appointments).length !== 0 ? (
          appointments.map((data, id) => (
            <li key={id}>
              <div className="rounded-2xl bg-c4 text-c3 px-4 py-2">
                <div className="font-bold text-c3 h-10">{data.name}</div>
                <div className="flex justify-between">
                  <div
                    className={
                      "text-c4 px-3 py-0.5 rounded-2xl " +
                      (data.status === "completed" ? "bg-done" : " bg-pending")
                    }
                  >
                    {data.status === "completed" ? "Done" : "Pending"}
                  </div>
                  <div>{data.date}</div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="flex justify-center w-full text-c2 text-xl">There's no item to show.</div>
        )}
      </ul>

      <div className="flex justify-end mt-7 w-full">
        <button
          className="rounded-2xl bg-c3 text-c4 font-bold"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default Home
