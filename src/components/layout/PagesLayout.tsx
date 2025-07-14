import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import Overlay from "../shared/Overlay"
import MagnetSection from "./MagnetSection"

import { useProgress } from "@/hooks/useProgress"
import { useOfflineAlert } from "@/hooks/useOfflineAlert"
import MagnetSectionProvider from "@/contexts/magnetSectionContext"

const PagesLayout = () => {
    const isHomePage = useMatch('/')
    useProgress()
    useOfflineAlert()

    return (
        <>

            {isHomePage && <WebsiteAlert />}
            <Header />

            <MagnetSectionProvider>
                <MagnetSection />
            </MagnetSectionProvider>
            <main>
                <Outlet />
            </main>

            {/* Footer ( After Create ) */}

            {/* Overlay */}
            <Overlay />
        </>
    )
}

export default PagesLayout