import { useQuery } from "react-query"
import { getAppointments, loginApi } from "../api/calendarAppApi"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

//use to fetch all appointments
export const useQueryGetAllAppointments = () => {
  return useQuery({ queryKey: ["appointments"], queryFn: getAppointments })
}
