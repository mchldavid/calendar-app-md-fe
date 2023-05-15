import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AppointmentForm from "../components/Appointment/AppointmentForm"
import Title from "../components/Title"
import { FormContext } from "../context/FormContext"
import {
  useMutateDeleteAppointment,
  useMutateEditAppointment,
} from "../functions/useMutation"
import Loading from "../components/Loaders/Loading"

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

  useEffect(() => {
    if (!formData) {
      navigate("/appointments")
    }
  }, [formData, navigate])

  return (
    <div className="home max-w-md w-full flex flex-col p-6 h-full">
      {mutateEditAppointment.isLoading && <Loading />}
      {mutateDeleteAppointment.isLoading && <Loading />}
      <div className="flex justify-start mx-1 mb-5">
        <button
          onClick={handleBack}
          className="back-button text-2xl font-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <Title />
      </div>
      {formData && (
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
      )}
    </div>
  )
}

export default Update
