import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Appointments from "./pages/Appointments"
import Create from "./pages/Create"
import Update from "./pages/Update"

const App = () => {
  return (
    <div className="font-inter text-sm flex justify-center items-center w-screen h-screen bg-c1 text-c4">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/create" element={<Create />} />
        <Route path="/appointments/update/:id" element={<Update />} />
      </Routes>
    </div>
  )
}

export default App
