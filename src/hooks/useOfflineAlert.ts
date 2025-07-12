import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE";
import { showToast } from "@/utils/showToast";
import { useEffect } from "react";

export const useOfflineAlert = () => {
    useEffect(() => {
        function handleOffline() {
            showToast(ERROR_MESSAGES.OFFLINE_ERROR, "error");
        }

        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

}