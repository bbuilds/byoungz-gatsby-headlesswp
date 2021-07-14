import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

const Portal = ({ children }) => {
  //Used to maintain immutable object. Delete same object we created.
  const elRef = useRef(null)

  if (!elRef.current) {
    elRef.current = document.createElement("div")
    elRef.current.className =
      "animated search-modal bg-black fixed left-0 right-0 bottom-0 top-0 w-full h-full flex items-center justify-center z-900 flex-col text-white overflow-y-scroll"
  }

  useEffect(() => {
    portalRoot.appendChild(elRef.current)
    return () => portalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(children, elRef.current)
}

export default Portal
