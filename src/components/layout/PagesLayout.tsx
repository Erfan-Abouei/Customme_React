import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import Overlay from "../shared/Overlay"
import MagnetSection from "./MagnetSection"

import { useProgress } from "@/hooks/useProgress"
import { useOfflineAlert } from "@/hooks/useOfflineAlert"
import MovieModal from "../shared/magnet-post/MovieModal"

const PagesLayout = () => {
    const isHomePage = useMatch('/')
    useProgress()
    useOfflineAlert()

    return (
        <>

            {isHomePage && <WebsiteAlert />}
            <Header />

            <MagnetSection />
            <MovieModal />

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