import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import AppointmentForm from "../components/AppointmentForm"
import { useParams } from "react-router-dom"

const Update = () => {
  const navigate = useNavigate()
  const paramsId = useParams()

  const [details, setDetails] = useState({
    name: "udpate1",
    date: "2020-10-15",
    status: "completed",
  })

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
        title={details.name + " - " + paramsId.id}
        clickHandler={handleSave}
        name={details.name}
        date={details.date}
        status={details.status}
        rightButtonName={"💾 Update"}
        showDelete={true}
      />
    </div>
  )
}

export default Update
