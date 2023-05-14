import { useState } from "react"
import debounce from "../../functions/useDebounce"
import "./filter.css"

const Filter = (props) => {
  const [filterKeywords, setFilterKeywords] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterButton, setFilterButton] = useState("Filter")
  const [isSortDate, setIsSortDate] = useState(false)

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
      sortDate: input.sortDate,
      status: input.status,
    })
  }

  //debounce when filterring data
  const searchDebounce = debounce((text) => {
    handleChange({
      name: text,
      sortDate: isSortDate,
      status: filterStatus,
    })
  })

  const handleSearch = (e) => {
    setFilterKeywords(e.target.value)
    searchDebounce(e.target.value)
  }

  const handleSortDate = () => {
    setIsSortDate(!isSortDate)
    handleChange({
      name: filterKeywords,
      sortDate: isSortDate,
      status: filterStatus,
    })
  }

  const handleStatus = () => {
    var status = document.getElementsByName("type")
    for (var radio of status) {
      if (radio.checked) {
        setFilterStatus(radio.value.toLowerCase())
        handleChange({
          name: filterKeywords,
          sortDate: isSortDate,
          status: radio.value.toLowerCase(),
        })
      }
    }
  }

  return (
    <>
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
      <div
        id="search_filter"
        data-visible="false"
        className=" flex justify-start flex-col mb-0 text-c4 w-full h-fit "
      >
        <div className="flex flex-col py-2 border-y border-c3 gap-1 pt-3">
          <div className="flex flex-col">
            <label className="font-light">Search</label>
            <input
              className="rounded-2xl bg-c4 text-c3"
              type="input"
              onChange={(e) => handleSearch(e)}
              placeholder="Search Name"
              value={filterKeywords}
            />
          </div>

          {/* Check box for sorting Date */}
          <div className="flex items-center">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="checkbox"
                data-ripple-dark="true"
              >
                <input
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 p-1  cursor-pointer appearance-none rounded-md border border-blue-c4 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-c4 checked:bg-c2 checked:before:bg-c4 hover:before:opacity-10"
                  id="checkbox"
                  onChange={handleSortDate}
                  value={isSortDate}
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </label>
            </div>
            Sort Date Newest to Oldest
          </div>

          <div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="all"
                data-ripple-dark="true"
              >
                <input
                  id="all"
                  name="type"
                  type="radio"
                  value="all"
                  onClick={handleStatus}
                  class="p-0 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-c4 checked:before:bg-c4 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-c4 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label class="mt-px cursor-pointer select-none" for="all">
                All
              </label>
            </div>

            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="done"
                data-ripple-dark="true"
              >
                <input
                  id="done"
                  name="type"
                  type="radio"
                  value="completed"
                  onClick={handleStatus}
                  class="p-0 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-c4 checked:before:bg-c4 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-c4 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label class="mt-px cursor-pointer select-none" for="done">
                Done
              </label>
            </div>

            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="pending"
                data-ripple-dark="true"
              >
                <input
                  id="pending"
                  name="type"
                  type="radio"
                  value="pending"
                  onClick={handleStatus}
                  class="p-0 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-c4 checked:before:bg-c4 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-c4 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label class="mt-px cursor-pointer select-none" for="pending">
                Pending
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
