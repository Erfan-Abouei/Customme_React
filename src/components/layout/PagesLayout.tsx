import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import MagnetSection from "./MagnetSection"

import { useProgress } from "@/hooks/useProgress"
import { useOfflineAlert } from "@/hooks/useOfflineAlert"
import MagnetSectionProvider from "@/contexts/magnetSectionContext"

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
            <main>
                <Outlet />
            </main>

            {/* Footer ( After Create ) */}
        </>
    )
}

export default PagesLayout