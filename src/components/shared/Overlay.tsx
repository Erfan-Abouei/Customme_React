import { useState } from "react"
import { useLocationHash } from "@/hooks/useLocationHash"
import { useSearchParams } from "react-router"

const Overlay = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [_, setSearchParams] = useSearchParams()

    // if url has hash ( set is modal show else dotn show)
    useLocationHash(() => location.hash.split('#')[1] ? setIsShow(true) : setIsShow(false))
    const handleDeleteEverything = () => {
        window.location.hash = ""
        setSearchParams({})
    }
    return (
        <div onClick={handleDeleteEverything} className={`${isShow ? 'overlay__modal--show' : 'overlay__modal--close'} size-full inset-0 fixed transition-all bg-black/50 z-10`}></div>
    )

}

export default Overlay