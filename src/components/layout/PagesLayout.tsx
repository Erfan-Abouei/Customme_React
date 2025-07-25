import { Outlet, useMatch } from "react-router"
import { useProgress } from "@/hooks/useProgress"
import { useOfflineAlert } from "@/hooks/useOfflineAlert"
import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import MagnetSection from "./MagnetSection"
import MagnetSectionProvider from "@/contexts/magnetSectionContext"
import NavigationBar from "./navigation-bar/NavigationBar"

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

            {/* Navigation Bar ( For Mobile ) */}
            <NavigationBar />

            {/* Footer ( After Create ) */}
        </>
    )
}

export default PagesLayout