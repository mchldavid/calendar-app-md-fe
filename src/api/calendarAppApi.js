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
export const getAppointments = async (filter) => {
  try {
    const response = await calendarAppApi.get("/appointment")

    //to filter response
    var filteredResponse = response.data
    if (filter && Object.keys(filter).length > 0) {
      //to filter name & status
      filteredResponse = filteredResponse.filter((appointment) => {
        const { name, status } = filter

        if (name) {
          const text = appointment.name.toLowerCase()
          if (text.indexOf(name.toLowerCase()) < 0) {
            return false
          }
        }

        if (status && status !== "all") {
          if (appointment.status !== status) {
            console.log("api status: ", appointment.status, status)
            return false
          }
        }

        return true
      })

      //to date date
      if (filter.sortDate === true) {
        console.log("Is Sorted:", filter.sortDate)
        filteredResponse = filteredResponse.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.date) - new Date(a.date)
        })
      }
    }
    console.log(response.data)
    return filteredResponse
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
