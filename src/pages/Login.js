import React from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    const email = e.target[0].value
    const password = e.target[1].value

    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="login max-w-xs w-full flex flex-col">
      <div className="flex justify-start mx-1 mb-5">
        <h1 className="text-3xl font-bold">Calendar App</h1>
      </div>

      <form
        className="login_form flex flex-col w-full gap-y-1 "
        onSubmit={handleLogin}
      >
        <label className="font-light">Email</label>
        <input
          className="rounded-2xl bg-c4 text-c3"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <label className="font-light mt-1">Password</label>
        <input
          className="rounded-2xl bg-c4 text-c3"
          id="pass"
          type="password"
          placeholder="Enter your password  "
          required
        />
        <div className="flex justify-end w-auto mt-7">
          <button
            className="rounded-2xl bg-c3 text-c4 font-bold"
            onClick={() => {
              navigate("/home")
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
