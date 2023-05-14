import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Appointments from "./pages/Appointments"
import Create from "./pages/Create"
import Update from "./pages/Update"
import TestApi from "./pages/TestApi"
import { AuthContext } from "./context/AuthContext"

const App = () => {
  //if there's a logged in person, redirect to
  const AuthenticatedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext)

    if (!currentUser.accessToken) {
      return <Navigate to="/" />
    }

    return children
  }

  return (
    <div className="font-inter text-sm flex justify-center items-center w-screen h-screen bg-c1 text-c4">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          index
          path="/appointments"
          element={
            <AuthenticatedRoute>
              <Appointments />
            </AuthenticatedRoute>
          }
        />

        <Route
          path="/appointments/create"
          element={
            <AuthenticatedRoute>
              <Create />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/appointments/update/:name"
          element={
            <AuthenticatedRoute>
              <Update />
            </AuthenticatedRoute>
          }
        />
        <Route path="/testapi" element={<TestApi />} />
      </Routes>
    </div>
  )
}

export default App
