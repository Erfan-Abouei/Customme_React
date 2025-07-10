import LogoComponent from "../ui/LogoComponent"

const LoadingScreen = () => {
    return (
        <div className="z-50 fixed inset-0 size-full bg-white flex items-center justify-center">
            <LogoComponent customLogoTypeClass="hidden" customLogoClass="animate-bounce size-20 rounded-full max-md:size-15 shadow-custom shadow-red-500" />
        </div>
    )
}

export default LoadingScreen