import React from "react"
import SearchIcon from "../assets/images/svg/search.svg"

const Searchbar = () => {
  // const [focused, setFocused] = useState(false)
  // const inputElementRef = useRef(null)
  // const handleKeyDown = event => {
  //   if (
  //     (event.ctrlKey && event.code === "KeyK") &&
  //     inputElementRef.current !== document.activeElement
  //   ) {
  //     event.preventDefault()
  //     inputElementRef.current.focus()
  //     inputElementRef.current.select()
  //   }

  //   if (
  //     event.code === "Escape" &&
  //     inputElementRef.current === document.activeElement
  //   ) {
  //     event.preventDefault()
  //     inputElementRef.current.blur()
  //   }
  // }
  return (
    <div className="container px-10 mx-auto">
      <label
        htmlFor="search-input"
        className="block mb-4 text-xl lg:mb-8 font-grenze lg:text-3xl"
      >
        Search Byoungz Posts
      </label>
      <div className="input-search search-form flex items-center p-2 mb-1 text-base leading-normal bg-white text-grey-darker border border-grey rounded">
        <SearchIcon className="stroke-current" />
        <input
          id="search-input"
          type="search"
          name="search-input"
          placeholder={`Search Byoungz`}
          className="search p-2 flex-grow bg-white"
        />
        <span className="hidden md:block">Esc</span>
      </div>
    </div>
  )
}

export default Searchbar
