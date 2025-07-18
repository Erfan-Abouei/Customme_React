import ModalProvider from "@/contexts/modalContext"
import { useModalContext } from "@/hooks/contexts-hooks/useModalContext"
import type { ChildrenProp } from "@/types/components-props.types"
import { AnimatePresence, motion } from "framer-motion"
import { createPortal } from "react-dom"

// Compound Component 
const Modal = ({ children }: ChildrenProp) => {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}

const ModalContent = ({ children, modalName }: { children: React.ReactElement, modalName: string }) => {
    const { activeModalName, closeModal } = useModalContext();
    return createPortal(
        <AnimatePresence>
            {activeModalName === modalName &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    onClick={closeModal}
                    className="overlay__modal--show fixed inset-0 flex items-center justify-center transition-all bg-black/50 z-10"
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </motion.div>
            }
        </AnimatePresence>,
        document.getElementById('modal-container__root')!
    );
};

const ModalHeader = ({ children }: ChildrenProp) => {
    return children
}

Modal.Header = ModalHeader
Modal.Content = ModalContent

export default Modal