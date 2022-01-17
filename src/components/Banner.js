import React, { useEffect } from "react"
//https://particles.js.org/
import { tsParticles } from "tsparticles"
import particlesoptions from "../constants/particlesConfig.json"

const Banner = ({ title, subtitle }) => {
  useEffect(() => {
    tsParticles.load("tsparticles", particlesoptions)

    return () => {
      tsParticles.domItem(0).destroy()
    }
  }, [])

  return (
    <section id="banner" className="relative flex items-center h-28 md:h-48">
      <div
        id="tsparticles"
        className="absolute top-0 left-0 h-full w-full"
      ></div>
      <header className="container px-10 text-white mx-auto relative">
        <div className="bg-black-gradient p-4">
          <hr className="dashed border-t-3 border-dashed border-white mb-1 w-24 mx-0" />
          <h1 className="uppercase text-xl md:text-5xl">{title}</h1>
          {subtitle && <p>{`Filtering for: ${subtitle}`}</p>}
        </div>
      </header>
    </section>
  )
}

export default Banner
