import { useQuery } from "react-query"
import { getAppointments } from "../api/calendarAppApi"

//use to fetch all appointments
export const useQueryGetAllAppointments = (filter) => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: () => getAppointments(filter),
    refetchInterval: 500,
  })
}
