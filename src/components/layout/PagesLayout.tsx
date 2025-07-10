import { Outlet, useMatch } from "react-router"

import Header from "./Header"
import WebsiteAlert from "../ui/WebsiteAlert"
import Overlay from "../shared/Overlay"
import MagnetSection from "./MagnetSection"

import { useProgress } from "@/hooks/useProgress"
import { useEffect } from "react"
import { showToast } from "@/utils/showToast"
import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE"

const PagesLayout = () => {
    const isHomePage = useMatch('/')
    useProgress()

    useEffect(() => {
        function handleOffline() {
            showToast(ERROR_MESSAGES.OFFLINE_ERROR, "error");
        }

        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

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