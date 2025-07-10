import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import Overlay from "../shared/Overlay"
import MainMenu from "./MainMenu"

const PagesLayout = () => {
    const isHomePage = useMatch('/')

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