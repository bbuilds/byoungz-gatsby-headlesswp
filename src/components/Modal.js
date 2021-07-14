import React, { useState, forwardRef, useImperativeHandle } from "react"
import Portal from "./Portal"
import CloseIcon from "../assets/images/svg/close.svg"
const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    }
  })

  const handleOpen = () => {
    setDisplay(true)
  }

  const handleClose = () => {
    setDisplay(false)
  }

  if (display) {
    return (
      <Portal>
        {props.children}
        <button onClick={handleClose}>
          <span clasName="close-search absolute flex items-center">
            CLOSE
            <i className="ml-4 close-icon">
              <CloseIcon />
            </i>
          </span>
        </button>
      </Portal>
    )
  }

  return null
})

export default Modal
