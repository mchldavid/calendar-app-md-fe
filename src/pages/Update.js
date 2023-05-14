import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AppointmentForm from "../components/Appointment/AppointmentForm"
import Title from "../components/Title"
import { FormContext } from "../context/FormContext"

const Update = () => {
  const navigate = useNavigate()

  //context
  const { formData } = useContext(FormContext)

  const handleSave = (data) => {
    console.log("name: ", data.name)
    console.log("date: ", data.date)
    console.log("status: ", data.status)
  }

  const handleDelete = () => {}

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
        <Title />
      </div>
      {console.log("Form Context: ")}
      <AppointmentForm
        id={formData.id}
        title={formData.name}
        clickHandlerSave={handleSave}
        clickHandlerDelete={handleDelete}
        name={formData.name}
        date={formData.date}
        status={formData.status}
        rightButtonName={"💾 Update"}
        showDelete={true}
      />
    </div>
  )
}

export default Update
