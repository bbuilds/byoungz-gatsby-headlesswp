import ScrollReveal from "scrollreveal"

export const srConfig = (props, distance = "200px") => {
  return {
    ...props,
    distance,
    duration: 300,
    scale: 1,
    opacity: 0,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  }
}

const isSSR = typeof window === "undefined"
const sr = isSSR ? null : ScrollReveal()

export default sr
