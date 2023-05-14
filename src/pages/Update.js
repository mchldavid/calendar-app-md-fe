import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AppointmentForm from "../components/Appointment/AppointmentForm"
import Title from "../components/Title"
import { FormContext } from "../context/FormContext"
import {
  useMutateDeleteAppointment,
  useMutateEditAppointment,
} from "../functions/useMutation"

const Update = () => {
  const navigate = useNavigate()

  //context
  const { formData } = useContext(FormContext)

  //useMutation
  const mutateEditAppointment = useMutateEditAppointment()
  const mutateDeleteAppointment = useMutateDeleteAppointment()

  const handleSave = (data) => {
    mutateEditAppointment.mutate({
      id: data.id,
      name: data.name,
      date: data.date,
      status: data.status,
    })
  }

  const handleDelete = (data) => {
    console.log("Delete: ", data.id)
    mutateDeleteAppointment.mutate({
      id: data.id,
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
