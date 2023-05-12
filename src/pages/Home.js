import React, { useState } from "react"
import "./home.css"

const Home = () => {
  const [keywords, setKeywords] = useState()

  const handleSearch = (e) => {
    setKeywords(e.target.value)
  }

  return (
    <div className="home max-w-md w-full flex flex-col p-6">
      <div className="flex justify-start mx-1 mb-5">
        <h1 className="text-3xl font-bold">Calendar App</h1>
      </div>

      <div className="flex justify-end flex-col mb-3 text-c4 w-full">
        <div className="flex justify-end">
          <button>Filter</button>
        </div>
        <div className="flex flex-col py-2 border-y border-c3 ">
          <div className="flex flex-col">
            <label className="font-light">Search</label>
            <input
              className="rounded-2xl bg-c4 text-c3"
              type="input"
              onChange={(e) => {
                handleSearch(e)
              }}
              placeholder="Search Keywords"
              value={keywords}
            />
          </div>

          <div className="flex justify-center w-full gap-6 mt-3">
            <div>
              <input type="radio" id="all" name="status" value="All" />
              <label for="all">All</label>
            </div>
            <div>
              <input type="radio" id="done" name="status" value="Done" />
              <label for="done">Done</label>
            </div>
            <div>
              <input type="radio" id="pending" name="status" value="Pending" />
              <label for="pending">Pending</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 w-full h-full min-h-10">
        <div className="rounded-2xl bg-c4 text-c3 px-4 py-2">
          <div className="font-bold text-c3 h-10">Meeting A</div>
          <div className="flex justify-between">
            <div className="bg-done text-c4 px-3 py-0.5 rounded-2xl">Done</div>
            <div>Jan. 07 2023</div>
          </div>
        </div>

        <div className="rounded-2xl bg-c4 text-c3 px-4 py-2">
          <div className="font-bold text-c3 h-10">Meeting A</div>
          <div className="flex justify-between">
            <div className="bg-pending text-c4 px-3 py-0.5 rounded-2xl">
              Pending
            </div>
            <div>Jan. 07 2023</div>
          </div>
        </div>
        <div className="rounded-2xl bg-c4 text-c3 px-4 py-2">
          <div className="font-bold text-c3 h-10">Meeting A</div>
          <div className="flex justify-between">
            <div className="bg-done text-c4 px-3 py-0.5 rounded-2xl">Done</div>
            <div>Jan. 07 2023</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-7 w-full">
        <button className="rounded-2xl bg-c3 text-c4 font-bold">Add</button>
      </div>
    </div>
  )
}

export default Home
