import type { AccountButtonProps } from "@/types/components-props.types"

const AccountButton = ({ children, onClick }: AccountButtonProps) => {
    return (
        <button onClick={onClick} className="cursor-pointer h-10 px-5.5 max-xl:px-3 flex items-center gap-x-1 text-gray-900 text-xs font-iran-medium">
            {children}
        </button>
    )
}

export default AccountButton