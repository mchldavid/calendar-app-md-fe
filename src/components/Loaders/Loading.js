import React from "react"
import "./loading.css"

const Loading = () => {
  return (
    <div className="w-full h-full z-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-c1 bg-opacity-60">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
