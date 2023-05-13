import { useMutation } from "react-query"
import { loginApi } from "../api/calendarAppApi"
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
