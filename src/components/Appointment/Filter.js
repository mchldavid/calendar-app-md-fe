import { useState } from "react"
import debounce from "../../functions/useDebounce"

const Filter = (props) => {
  const [filterKeywords, setFilterKeywords] = useState("")
  const [filterDate, setFilterDate] = useState(
    String(new Date().toISOString().slice(0, 10))
  )
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterButton, setFilterButton] = useState("Filter")

  const handleFilterButton = () => {
    //show/hide the filter card
    const filter = document.querySelector("#search_filter")

    if (filter.getAttribute("data-visible") === "true") {
      filter.setAttribute("data-visible", false)
      setFilterButton("Filter")
    } else {
      filter.setAttribute("data-visible", true)
      setFilterButton("Filter")
    }
  }

  //to get the data from this component
  const handleChange = (input) => {
    props.handleFilterChange({
      name: input.name,
      date: input.date,
      status: input.status,
    })
  }

  //debounce
  const searchDebounce = debounce((text) => {
    handleChange({
      name: text,
      date: filterDate,
      status: filterStatus,
    })
  })

  const handleSearch = (e) => {
    setFilterKeywords(e.target.value)
    searchDebounce(e.target.value)
  }

  const handleFilterDate = (e) => {
    setFilterDate(e.target.value)
    handleChange({
      name: filterKeywords,
      date: e.target.value,
      status: filterStatus,
    })
  }

  const handleStatus = () => {
    var status = document.getElementsByName("radio-status")
    for (var radio of status) {
      if (radio.checked) {
        setFilterStatus(radio.value.toLowerCase())
        handleChange({
          name: filterKeywords,
          date: filterDate,
          status: radio.value.toLowerCase(),
        })
      }
    }
  }

  return (
    <div
      id="search_filter"
      data-visible="false"
      className=" flex justify-start flex-col mb-3 text-c4 w-full h-fit"
    >
      <div className="flex justify-end">
        <button
          onClick={handleFilterButton}
          className="flex items-center gap-2 p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          {filterButton}
        </button>
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
            <input
              type="radio"
              id="all"
              name="radio-status"
              value="All"
              onClick={handleStatus}
            />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input
              type="radio"
              id="completed"
              name="radio-status"
              value="Completed"
              onClick={handleStatus}
            />
            <label htmlFor="completed">Done</label>
          </div>
          <div>
            <input
              type="radio"
              id="pending"
              name="radio-status"
              value="Pending"
              onClick={handleStatus}
            />
            <label htmlFor="pending">Pending</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
