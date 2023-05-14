import { useEffect, useState } from "react"

const Filter = (props) => {
  const [filterKeywords, setFilterKeywords] = useState("")
  const [filterDate, setFilterDate] = useState(
    String(new Date().toISOString().slice(0, 10))
  )
  const [filterButton, setFilterButton] = useState("🔍 Filter")

  const handleSearch = (e) => {
    setFilterKeywords(e.target.value)

    handleChange()
  }

  const handleFilterDate = (e) => {
    console.log(e.target.value)
    setFilterDate(e.target.value)

    handleChange()
  }

  const handleFilterButton = () => {
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

  //to get the data from this component
  const handleChange = () => {
    props.handleFilterChange({
      name: filterKeywords,
      date: filterDate,
      status: "pending",
    })
  }

  return (
    <div
      id="search_filter"
      data-visible="false"
      className=" flex justify-start flex-col mb-3 text-c4 w-full h-fit"
    >
      <div className="flex justify-end">
        <button onClick={handleFilterButton}>{filterButton}</button>
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
  )
}

export default Filter
