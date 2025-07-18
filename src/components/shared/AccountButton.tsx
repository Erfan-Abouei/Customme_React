import type { AccountButtonProps } from "@/types/components-props.types"
import { Link } from "react-router"

const AccountButton = ({ children, toPath }: AccountButtonProps) => {
    return (
        <Link to={toPath} className="cursor-pointer h-10 px-5.5 max-xl:px-3 flex items-center gap-x-1 text-gray-900 text-xs font-dana-medium transition-colors hover:text-gray-950">
            {children}
        </Link>
    )
}

export default AccountButton