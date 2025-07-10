import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import Overlay from "../shared/Overlay"
import MainMenu from "./MainMenu"

import { useProgress } from "@/hooks/useProgress"

const PagesLayout = () => {
    const isHomePage = useMatch('/')
    useProgress()

    return (
        <>

            {isHomePage && <WebsiteAlert />}
            <Header />

            <MainMenu />

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