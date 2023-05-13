import axios from "axios"

const BASE_URL = "http://localhost:3000" // Replace with your API base URL

const calendarAppApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Login
export const loginApi = async (user) => {
  try {
    const response = await calendarAppApi
      .post("/login", {
        email: user.email,
        password: user.password,
      })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching users:", error)
  }
}

export default calendarAppApi
