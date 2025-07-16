import ModalProvider from "@/contexts/modalContext"
import { useModalContext } from "@/hooks/contexts-hooks/useModalContext"
import type { ChildrenProp } from "@/types/components-props.types"
import { Children, cloneElement, isValidElement } from "react"
import { createPortal } from "react-dom"

// Compound Component 
const Modal = ({ children }: ChildrenProp) => {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}

const ModalContent = ({ children, modalName }: { children: React.ReactNode, modalName: string }) => {
    const { activeModalName, closeModal } = useModalContext();

    if (modalName !== activeModalName) return null;

    return createPortal((
        <div
            onClick={closeModal}
            className="overlay__modal--show size-full inset-0 fixed transition-all bg-black/50 z-10 flex items-center justify-center"
        >
            <div onClick={e => e.stopPropagation()}>
                {Children.map(children, child =>
                    isValidElement(child)
                        ? cloneElement(child)
                        : child
                )}
            </div>
        </div>
    ), document.getElementById('modal-container__root')!);
};



const ModalHeader = ({ children }: ChildrenProp) => {
    return children
}

Modal.Header = ModalHeader
Modal.Content = ModalContent

export default Modal