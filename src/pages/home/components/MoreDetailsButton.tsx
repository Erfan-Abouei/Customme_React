import { Link } from "react-router"

const MoreDetailsButton = ({ path }: { path: string }) => {
    return (
        <Link to={path} className="h-10 max-md:h-8 flex items-center justify-center max-md:px-1 px-6 text-primary max-md:font-dana font-dana-medium max-md:text-custom text-sm">مشاهده بیشتر</Link>
    )
}

export default MoreDetailsButton