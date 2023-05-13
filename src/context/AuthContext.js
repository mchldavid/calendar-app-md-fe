import { createContext, useState } from "react"

export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    accessToken: null,
    user: {
      email: "",
      id: null,
    }
  });

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}
