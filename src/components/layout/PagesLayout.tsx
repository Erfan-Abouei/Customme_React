import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import Overlay from "../shared/Overlay"
import MagnetSection from "./MagnetSection"

import { useProgress } from "@/hooks/useProgress"
import { useOfflineAlert } from "@/hooks/useOfflineAlert"
import MagnetSectionProvider from "@/contexts/magnetSectionContext"
import Modal from "../shared/Modal"

const PagesLayout = () => {
    const isHomePage = useMatch('/')
    const isLoginPage = useMatch('/login')
    useProgress()
    useOfflineAlert()

    return (
        <>

            {isHomePage && <WebsiteAlert />}
            {!isLoginPage && <>
                <Header />

                <MagnetSectionProvider>
                    <MagnetSection />
                </MagnetSectionProvider>
            </>
            }
            <Modal.Content modalName="test">
                <Modal.Header>Header</Modal.Header>
                <p>Test</p>
            </Modal.Content>
            <main>
                <Outlet />
            </main>

            {/* Footer ( After Create ) */}
        </>
    )
}

export default PagesLayout