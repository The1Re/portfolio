import React from "react"

function Line() {
  return (
    <div className="flex w-full flex-row justify-center items-center space-x-12">
        <div className="rounded-full w-2 h-2 bg-primary"></div>
        <div className="rounded-full w-2 h-2 bg-primary"></div>
        <div className="w-1/2 h-1 bg-primary"></div>
        <div className="rounded-full w-2 h-2 bg-primary"></div>
        <div className="rounded-full w-2 h-2 bg-primary"></div>
    </div>
  )
}

export default Line