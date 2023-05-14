import React, { useState } from "react"
import {
  loginApi,
  getAppointments,
  createAppointment,
  editAppointment,
  toggleStatusAppointment,
  deleteAppointment,
} from "../api/calendarAppApi"
import Filter from "../components/Appointment/Filter"

const TestApi = () => {
  const [output, setOutput] = useState()
  const [toggle, setToggle] = useState("pending")

  const fetch = async (n) => {
    var getResponse
    switch (n) {
      case 1:
        getResponse = await loginApi({
          email: "guest@email.com",
          password: "Pass123",
        })
        console.log("API LOGIN: ", getResponse)
        setOutput(getResponse)
        break

      case 2:
        getResponse = await getAppointments()
        console.log("API Get appointments: ", getResponse)
        setOutput(getResponse)
        break

      case 3:
        getResponse = await createAppointment({
          name: "Meeting 1",
          date: "2023-12-01",
          status: "pending",
        })
        console.log("API Create New: ", getResponse)
        setOutput(getResponse)
        break

      case 4:
        getResponse = await editAppointment({
          id: "1",
          name: "Tobi",
          date: "2023-12-01",
          status: "completed",
        })
        console.log("API Edit: ", getResponse)
        setOutput(getResponse)
        break

      case 5:
        getResponse = await toggleStatusAppointment({
          id: "1",
          status: toggle === "pending" ? "completed" : "pending",
        })
        setToggle(getResponse.status)

        console.log("API Toggle: ", getResponse)
        setOutput(getResponse)
        break

      case 6:
        getResponse = await deleteAppointment({
          id: "1",
        })
        setToggle(getResponse.status)

        console.log("API Delete Appointment: ", getResponse)
        setOutput(getResponse)
        break
      default:
    }
  }

  const handleShow = (data) => {
    console.log("Filter: ", data)
  }

  return (
    <>
      <div className="w-full h-full flex justify-start items-start flex-col">
        <div>
          <button onClick={() => fetch(1)}>Test Login Api</button>{" "}
        </div>
        <div>
          <button onClick={() => fetch(2)}>Test Get Appointments</button>
        </div>
        <div>
          <button onClick={() => fetch(3)}>Test Create Appointment</button>
        </div>
        <div>
          <button onClick={() => fetch(4)}>Test Edit Appointment</button>
        </div>
        <div>
          <button onClick={() => fetch(5)}>Test Toggle Appointment</button>
        </div>
        <div>
          <button onClick={() => fetch(6)}>Test Delete Appointment</button>
        </div>
        <div className="bg-c4 text-c2 p-3 w-full break-word">
          <div className="break-all">{JSON.stringify(output)}</div>
        </div>
      </div>

      <Filter handleFilterChange={(result)=>handleShow(result)} />
    </>
  )
}

export default TestApi
