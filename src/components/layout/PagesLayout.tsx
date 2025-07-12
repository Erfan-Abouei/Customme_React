import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import Overlay from "../shared/Overlay"
import MagnetSection from "./MagnetSection"

import { useProgress } from "@/hooks/useProgress"
import { useOfflineAlert } from "@/hooks/useOfflineAlert"

const PagesLayout = () => {
    const isHomePage = useMatch('/')
    useProgress()
    useOfflineAlert()

    return (
        <>

            {isHomePage && <WebsiteAlert />}
            <Header />

            <MagnetSection />
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