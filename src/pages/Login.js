import React from "react"
import "./login.css"
import { useMutateLoginCredentials } from "../functions/useMutation"
import Title from "../components/Title"

const Login = () => {
  const { mutate } = useMutateLoginCredentials()

  const handleLogin = (e) => {
    e.preventDefault()
    // const email = e.target[0].value
    // const password = e.target[1].value
    const email = document.getElementById("email").value
    const password = document.getElementById("pass").value
    console.log(email, password)

    //useMutation for POST login, if success redirect to apointment page
    mutate({
      email: email,
      password: password,
    })
  }

  return (
    <div className="login max-w-xs w-full flex flex-col">
      <div className="flex justify-start mx-1 mb-5">
        <Title />
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
            onClick={(e) => {
              handleLogin(e)
            }}
          >
            🔑 Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
