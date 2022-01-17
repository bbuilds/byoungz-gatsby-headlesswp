import React, { useEffect, useRef } from "react"
import sr, { srConfig } from "@utils/sr"

export default function SectionHeader({ title }) {
  const revealTitle = useRef(null)

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig({ origin: "bottom" }, "20px"))
  }, [])

  return (
    <header>
      <hr className="dashed border-t-3 border-dashed border-white mb-4 w-24 mx-0" />
      <h2 className="uppercase md:text-5xl mb-8" ref={revealTitle}>
        {title}
      </h2>
    </header>
  )
}
