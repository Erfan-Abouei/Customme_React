import type { OverlayProviderProp } from "@/types/components-props.types";
import type { OverlayContextType } from "@/types/contexts/overlay.type";

import { createContext, useState } from "react";

const OverlayContext = createContext<OverlayContextType | null>(null)

const OverlayProvider = ({ children }: OverlayProviderProp) => {
    const [isShow, setIsShow] = useState<boolean>(false)

    const showOverlay = () => setIsShow(true)
    const hideOverlay = () => setIsShow(false)

    return <OverlayContext.Provider value={{
        isShow,
        showOverlay,
        hideOverlay
    }}>
        {children}
    </OverlayContext.Provider>
}

export { OverlayProvider, OverlayContext }