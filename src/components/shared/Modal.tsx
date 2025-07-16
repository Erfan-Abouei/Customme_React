import ModalProvider from "@/contexts/modalContext"
import { useModalContext } from "@/hooks/contexts-hooks/useModalContext"
import type { ChildrenProp } from "@/types/components-props.types"
import React, { Children, cloneElement, isValidElement } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from 'framer-motion'

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

    return createPortal((
        <AnimatePresence>
            {modalName === activeModalName && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    onClick={closeModal}
                    className="overlay__modal--show fixed inset-0 size-full flex items-center justify-center transition-all bg-black/50 z-10"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
                        className="relative"
                    >
                        {Children.map(children, child =>
                            isValidElement(child)
                                ? cloneElement(child)
                                : child
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    ), document.getElementById('modal-container__root')!);
};

const ModalHeader = ({ children }: ChildrenProp) => {
    return children
}

Modal.Header = ModalHeader
Modal.Content = ModalContent

export default Modal
