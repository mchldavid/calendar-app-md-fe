import axios from "axios"

const BASE_URL = "http://localhost:3000" // Replace with your API base URL

const calendarAppApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

//POST Login
export const loginApi = async (user) => {
  try {
    const response = await calendarAppApi.post("/login", {
      email: user.email,
      password: user.password,
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error Login:", error)
  }
}

// GET all Appointments
export const getAppointments = async () => {
  try {
    const response = await calendarAppApi.get("/appointment")
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error Fetching appointments:", error)
  }
}

// POST Create new
export const createAppointment = async (detail) => {
  try {
    const response = await calendarAppApi.post("/appointment", {
      name: detail.name,
      date: detail.date,
      status: detail.status,
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error in Create New:", error)
  }
}

// PUT Edit details
export const editAppointment = async (detail) => {
  try {
    const response = await calendarAppApi.put(`/appointment/${detail.id}`, {
      name: detail.name,
      date: detail.date,
      status: detail.status,
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error in Edit Appointment:", error)
  }
}

// PATCH Status
export const toggleStatusAppointment = async (detail) => {
  try {
    const response = await calendarAppApi.patch(`/appointment/${detail.id}`, {
      status: detail.status,
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error in toggle status Appointment:", error)
  }
}

// DELETE Appointment
export const deleteAppointment = async (detail) => {
  try {
    const response = await calendarAppApi.delete(`/appointment/${detail.id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error in Deleting Appointment:", error)
  }
}

export default calendarAppApi
