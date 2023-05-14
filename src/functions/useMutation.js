import { useMutation } from "react-query"
import {
  createAppointment,
  deleteAppointment,
  editAppointment,
  loginApi,
  toggleStatusAppointment,
} from "../api/calendarAppApi"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { FormContext } from "../context/FormContext"

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

//use to Edit appointment
export const useMutateEditAppointment = () => {
  const { setFormData } = useContext(FormContext)
  const navigate = useNavigate()

  return useMutation(
    (item) => {
      return editAppointment(item)
    },
    {
      onSuccess: () => {
        console.log("Edit Successful!")
        setFormData(null)
        navigate(`/appointments`)
      },
    }
  )
}

//use to delete appointment
export const useMutateDeleteAppointment = () => {
  const { setFormData } = useContext(FormContext)
  const navigate = useNavigate()

  return useMutation(
    (item) => {
      return deleteAppointment(item)
    },
    {
      onSuccess: () => {
        console.log("Delete Successful! ")
        setFormData(null)
        navigate(`/appointments`)
      },
    }
  )
}
