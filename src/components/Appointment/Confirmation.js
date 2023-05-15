import React from "react"

const Confirmation = (props) => {
  const handleClick = (feedback) => {
    props.clickHandler(feedback)
  }

  return (
    <div className="z-40 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-c1 bg-opacity-60">
      <div className="rounded-2xl bg-c4 text-c3 p-7 w-max flex flex-col gap-5">
        <div className="font-bold">{props.message}</div>
        <div>
          <button
            onClick={() => handleClick(true)}
            className="transition-all hover:opacity-80 rounded-2xl bg-c3 text-c4 font-bold"
          >
            OK
          </button>
          <button
            onClick={() => handleClick(false)}
            className="ml-8 transition-all hover:opacity-80 rounded-2xl bg-c3 text-c4 font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
