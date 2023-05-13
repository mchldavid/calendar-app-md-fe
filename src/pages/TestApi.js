import React, { useState } from "react"
import { loginApi } from "../api/calendarAppApi"

const TestApi = () => {
  const [resLoginApi, setResLoginApi] = useState()

  const testLogin = async (n) => {
    if (n === 1) {
      const getResponse = await loginApi({
        email: "guest@email.com",
        password: "Pass123",
      })
      console.log("API LOGIN: ", getResponse)
      setResLoginApi(getResponse)
    }
  }

  return (
    <>
      <div className="w-full h-full flex justify-start items-start">
        <div>
          <button onClick={() => testLogin(1)}>Test Login Api</button>{" "}
          <pre>{JSON.stringify(resLoginApi)}</pre>
        </div>
      </div>
    </>
  )
}

export default TestApi
