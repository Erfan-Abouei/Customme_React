import { useOverlay } from "@/hooks/useOverlay"

import type { OverlayProps } from "@/types/components-props.types"

const Overlay = ({ zIndex, onClick }: OverlayProps) => {
    const { isShow } = useOverlay()

    return (
        <div onClick={onClick} className={`${isShow ? 'overlay__modal--show' : 'overlay__modal--close'} size-full inset-0 fixed bg-black/50 z-${zIndex}`}></div>
    )

}

export default Overlay