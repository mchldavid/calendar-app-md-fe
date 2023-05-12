import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"

const App = () => {
  return (
    <div className="font-inter text-sm flex justify-center items-center w-screen h-screen bg-c1 text-c4">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
