import React from "react"
import { about } from "../contents/about"

function About() {

  return (
    <section id="About" className="mt-32">
      <div className="inline-block">
        <h1 className="text-primary text-4xl font-bold">Learn about me</h1>
        <div className="w-[40%] h-[5px] bg-primary mt-4"></div>
      </div>
      <p className="mt-4 text-2xl">{about.content}</p>
    </section>
  )
}

export default About