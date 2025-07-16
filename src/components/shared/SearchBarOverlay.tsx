import { useState } from "react"
import { useLocationHash } from "@/hooks/useLocationHash"
import { createPortal } from "react-dom"

const SearchBarOverlay = () => {
    const [isShow, setIsShow] = useState<boolean>(false)

    // if url has hash ( set is modal show else dotn show)
    useLocationHash(() => location.hash.split('#')[1] === 'search' ? setIsShow(true) : setIsShow(false))
    const handleDeleteEverything = () => {
        window.location.hash = ""
    }
    return createPortal((
        <div onClick={handleDeleteEverything} className={`search-bar__overlay ${isShow ? 'overlay__modal--show' : 'overlay__modal--close'} size-full inset-0 fixed transition-all bg-black/50 z-10`}></div>
    ), document.body)

}

export default SearchBarOverlay