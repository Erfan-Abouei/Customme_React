import { useState } from "react"
import { useLocationHash } from "@/hooks/useLocationHash"

const Overlay = () => {
    const [isShow, setIsShow] = useState<boolean>(false)

    // if url has hash ( set is modal show else dotn show)
    useLocationHash(() => location.hash.split('#')[1] ? setIsShow(true) : setIsShow(false))

    return (
        <div onClick={() => window.location.hash = ""} className={`${isShow ? 'overlay__modal--show' : 'overlay__modal--close'} size-full inset-0 fixed transition-all bg-black/50 z-10`}></div>
    )

}

export default Overlay