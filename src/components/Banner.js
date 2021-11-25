import React from "react"
//https://particles.js.org/
import Particles from "react-tsparticles"

const Banner = ({ title, subtitle }) => {
  return (
    <section id="banner" className="relative flex items-center h-28 md:h-48">
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 h-full w-full"
        options={{
          background: {
            color: {
              value: "#050608",
            },
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
              },
            },
          },
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#ffffff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
              },
            },
            destroy: {
              mode: "none",
              split: {
                count: 1,
                factor: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 3,
                },
                rate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
              },
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            links: {
              blink: false,
              color: {
                value: "#ffffff",
              },
              consent: false,
              distance: 150,
              enable: false,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "#00ff00",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 600,
                  y: 600,
                },
              },
              decay: 0,
              distance: 0,
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: true,
              size: false,
              speed: 1,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#000000",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              limit: 0,
              value: 160,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 1,
                sync: false,
                destroy: "none",
                minimumValue: 0,
                startValue: "random",
              },
            },
            reduceDuplicates: false,
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              speed: 25,
            },
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            shadow: {
              blur: 0,
              color: {
                value: "#000000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {},
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                count: 0,
                enable: false,
                speed: 4,
                sync: false,
                destroy: "none",
                minimumValue: 0.3,
                startValue: "random",
              },
            },
            stroke: {
              width: 0,
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: 50,
            },
          },
          detectRetina: true,
        }}
      />
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
