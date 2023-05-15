import React from "react"
import { useNavigate } from "react-router-dom"
import AppointmentForm from "../components/Appointment/AppointmentForm"
import Title from "../components/Title"
import { useMutateCreateAppointment } from "../functions/useMutation"
import Loading from "../components/Loaders/Loading"

const Create = () => {
  const navigate = useNavigate()

  //useMutation
  const mutateCreateAppointment = useMutateCreateAppointment()

  const formattedDate = new Date().toISOString().slice(0, 10)

  const handleSave = (data) => {
    
    
    

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
      {mutateCreateAppointment.isLoading && <Loading />}
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
      <AppointmentForm
        title={"Create"}
        clickHandlerSave={handleSave}
        name={""}
        date={formattedDate}
        status={"pending"}
        rightButtonName={"💾 Save"}
      />
    </div>
  )
}

export default Create
