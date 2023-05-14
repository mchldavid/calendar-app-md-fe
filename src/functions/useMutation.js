import { useMutation } from "react-query"
import {
  createAppointment,
  loginApi,
  toggleStatusAppointment,
} from "../api/calendarAppApi"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

//use to login
export const useMutateLoginCredentials = () => {
  const { setCurrentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  return useMutation(
    (credentials) => {
      return loginApi(credentials)
    },
    {
      onSuccess: (data) => {
        console.log("Login Successful!: ", data.user.email)
        setCurrentUser({
          accessToken: data.accessToken,
          user: {
            email: data.user.email,
            id: data.user.id,
          },
        })
        navigate(`/appointments`)
      },
    }
  )
}

//use to create appointment
export const useMutateCreateAppointment = () => {
  const navigate = useNavigate()

  return useMutation(
    (item) => {
      return createAppointment(item)
    },
    {
      onSuccess: () => {
        navigate(`/appointments`)
      },
    }
  )
}

//use to Patched toggle Status
export const useMutateToggleStatus = () => {
  return useMutation(
    (item) => {
      return toggleStatusAppointment(item)
    },
    {
      onSuccess: () => {
        console.log("Toggled Successfully!: ")
      },
    }
  )
}
