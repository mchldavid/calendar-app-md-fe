import React, { useState, useEffect } from "react"

const AppointmentForm = (props) => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [status, setStatus] = useState("pending")

  useEffect(() => {
    // set the initial values from props when they change
    setName(props.name || "")
    setDate(props.date || "")
    setStatus(props.status || "pending")
  }, [props.name, props.date, props.status])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }

  //pass the data
  const handleClick = (e) => {
    e.preventDefault()
    props.clickHandler({
      name: name,
      date: date,
      status: status,
    })
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="rounded-2xl bg-c4 text-c3 px-4 py-4">
          <div className="font-bold text-c3 text-xl h-10">{props.title}</div>
          <div>
            <label htmlFor="" className="m-2 font-bold">
              Name:
            </label>
            <input
              className="rounded-2xl bg-c4 text-c3"
              id="name"
              type="text"
              placeholder="Enter name"
              onChange={handleNameChange}
              value={name}
              required
            />
          </div>
          <div>
            <label htmlFor="" className="m-2 font-bold">
              Date:
            </label>
            <input
              className="rounded-2xl bg-c4 text-c3"
              id="name"
              type="date"
              placeholder="Enter date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>
          <div>
            <label htmlFor="status" className="m-2 font-bold">
              Status:
            </label>

            <select
              name="status"
              id="status"
              className="rounded-2xl bg-c4 text-c3"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between self-end mt-7 w-full">
          {props.showDelete && (
            <button className="rounded-2xl bg-delete text-c4 font-bold">
            🗑️ Delete
            </button>
          )}
          {/* An invisible div is used to position the rightButton at the flex-end position while the delete button is hidden.*/}
          <div className="flex-1"></div>
          <button className="rounded-2xl bg-c3 text-c4 font-bold">
            {props.rightButtonName}
          </button>
        </div>
      </form>
    </div>
  )
}

AppointmentForm.defaultProps = {
  showDelete: false,
}

export default AppointmentForm
