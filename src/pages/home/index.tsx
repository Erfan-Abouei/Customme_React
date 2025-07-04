import { usePageTitle } from "@/hooks/usePageTitle"

const HomePage = () => {
    usePageTitle('صفحه اصلی')

    return (
        <div className="text-6xl mt-20 font-iran-bold text-center">صفحه اصلی</div>
    )
}

export default HomePage