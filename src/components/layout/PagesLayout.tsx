import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import Overlay from "../shared/Overlay"

const PagesLayout = () => {
    const isHomePage = useMatch('/')

    return (
        <>

            {isHomePage && <WebsiteAlert />}
            <Header />
            <main>
                <Outlet />
            </main>

            {/* Footer ( After Create ) */}

            {/* Overlay */}
            <Overlay zIndex={10} onClick={() => location.hash = ''} />
        </>
    )
}

export default PagesLayout