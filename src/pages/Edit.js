import React from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const navigate = useNavigate()

  const handleSave = (e) => {
    e.preventDefault()
    console.log("name: ", e.target[0].value)
    console.log("date: ", e.target[1].value)
    console.log("status: ", e.target[2].value)
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="home max-w-md w-full flex flex-col p-6 h-full">
      <div className="flex justify-start mx-1 mb-5">
        <button onClick={handleBack} className="back-button text-2xl font-light">{"<"}</button>
        <h1 className="text-3xl font-bold">Calendar App</h1>
      </div>
      <form onSubmit={handleSave}>
        <div className="rounded-2xl bg-c4 text-c3 px-4 py-4">
          <div className="font-bold text-c3 text-xl h-10">Create</div>
          <div>
            <label htmlFor="" className="m-0 font-bold">
              Name:
            </label>
            <input
              className="rounded-2xl bg-c4 text-c3"
              id="name"
              type="text"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label htmlFor="" className="m-0 font-bold">
              Date:
            </label>
            <input
              className="rounded-2xl bg-c4 text-c3"
              id="name"
              type="date"
              placeholder="Enter date"
              required
            />
          </div>
          <div>
            <label htmlFor="status" className="m-0 font-bold">
              Status:
            </label>

            <select
              name="status"
              id="status"
              className="rounded-2xl bg-c4 text-c3"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-7 w-full">
          <button className="rounded-2xl bg-c3 text-c4 font-bold">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Create
