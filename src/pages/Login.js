import React from "react"
import "./login.css"
import { useMutateLoginCredentials } from "../functions/useMutation"
import Title from "../components/Title"
import { ToastContainer, toast } from "react-toastify"
import Loading from "../components/Loaders/Loading"

const Login = () => {
  const { mutate, isError, isLoading} = useMutateLoginCredentials()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("pass").value
    
    //useMutation for POST login, if success redirect to apointment page
    mutate({
      email: email,
      password: password,
    })
  }

  if (isError) {
    toast.error("Login Failed", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }

  return (
    <div className="login max-w-xs w-full flex flex-col">
      {isLoading && <Loading />}
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
          <button className="transition-all hover:opacity-80 rounded-2xl bg-c3 text-c4 font-bold ">
            🔑 Login
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  )
}

export default Login
