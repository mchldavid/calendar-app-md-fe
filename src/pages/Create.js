import React from "react"
import { useNavigate } from "react-router-dom"
import AppointmentForm from "../components/AppointmentForm"

const Create = () => {
  const navigate = useNavigate()

  const formattedDate = new Date().toISOString().slice(0, 10)

  const handleSave = (data) => {
    console.log("name: ", data.name)
    console.log("date: ", data.date)
    console.log("status: ", data.status)
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="home max-w-md w-full flex flex-col p-6 h-full">
      <div className="flex justify-start mx-1 mb-5">
        <button
          onClick={handleBack}
          className="back-button text-2xl font-light"
        >
          {"<"}
        </button>
        <h1 className="text-3xl font-bold">Calendar App</h1>
      </div>
      <AppointmentForm
        clickHandler={handleSave}
        name={""}
        date={formattedDate}
        status={"pending"}
        rightButtonName={"Save"}
      />
    </div>
  )
}

export default Create
