import WebsiteAlert from "@/components/ui/WebsiteAlert"
import { usePageTitle } from "@/hooks/usePageTitle"

const HomePage = () => {
    usePageTitle('صفحه اصلی')
    return (
        <WebsiteAlert />
    )
}

export default HomePage