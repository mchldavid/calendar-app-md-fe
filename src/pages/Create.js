import React from "react"
import { useNavigate } from "react-router-dom"
import AppointmentForm from "../components/Appointment/AppointmentForm"
import Title from "../components/Title"
import { useMutateCreateAppointment } from "../functions/useMutation"

const Create = () => {
  const navigate = useNavigate()

  //useMutation
  const mutateCreateAppointment = useMutateCreateAppointment()

  const formattedDate = new Date().toISOString().slice(0, 10)

  const handleSave = (data) => {
    console.log("name: ", data.name)
    console.log("date: ", data.date)
    console.log("status: ", data.status)

    mutateCreateAppointment.mutate({
      name: data.name,
      date: data.date,
      status: data.status,
    })
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
        <Title />
      </div>
      <AppointmentForm
        title={"Create"}
        clickHandler={handleSave}
        name={""}
        date={formattedDate}
        status={"pending"}
        rightButtonName={"💾 Save"}
      />
    </div>
  )
}

export default Create
