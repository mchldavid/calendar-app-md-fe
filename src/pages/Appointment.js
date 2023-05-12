import React, { useState } from "react"

const Appointment = () => {
  const [appointment, setAppointment] = useState({
    name: "meet1",
    date: "Jan 1",
    status: "completed",
  })

  const handleSave = () => {
    console.log("save")
  }

  return (
    <div className="home max-w-md w-full flex flex-col p-6 h-full">
      <div className="flex justify-start mx-1 mb-5">
        <h1 className="text-3xl font-bold">Calendar App</h1>
      </div>

      <div className="rounded-2xl bg-c4 text-c3 px-4 py-2">
        <div className="font-bold text-c3 h-10">{appointment.name}</div>
        <div className="flex justify-between">
          <div
            className={
              "text-c4 px-3 py-0.5 rounded-2xl " +
              (appointment.status === "completed" ? "bg-done" : " bg-pending")
            }
          >
            {appointment.status === "completed" ? "Done" : "Pending"}
          </div>
          <div>{appointment.date}</div>
        </div>
      </div>

      <div className="flex justify-end mt-7 w-full">
        <button
          className="rounded-2xl bg-c3 text-c4 font-bold"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Appointment
