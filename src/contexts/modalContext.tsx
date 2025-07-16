import type { ChildrenProp } from "@/types/components-props.types";
import { createContext, useState } from "react";

interface ModalProviderType {
    activeModalName: string
    activeModal: (modalName: string) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalProviderType | null>(null)

const ModalProvider = ({ children }: ChildrenProp) => {
    const [activeModalName, setActiveModalName] = useState<string>("")

    const activeModal = (modalName: string) => setActiveModalName(modalName)
    const closeModal = () => setActiveModalName("")
    return (
        <ModalContext.Provider value={{
            activeModalName,
            activeModal,
            closeModal,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext }
export default ModalProvider