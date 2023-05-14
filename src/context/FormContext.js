import { createContext, useState } from "react"

export const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
  const [appointment, setAppointment] = useState({})

  return (
    <FormContextProvider.Provider value={{ appointment, setAppointment }}>
      {children}
    </FormContextProvider.Provider>
  )
}
