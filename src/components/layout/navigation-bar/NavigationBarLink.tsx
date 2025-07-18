import Spinner from "@/components/ui/Spinner";
import type { NavigationBarLinkProps } from "@/types/components-props.types";
import clsx from "clsx";
import { NavLink } from "react-router";

const NavigationBarLink = ({ title, icon, activeIcon, path }: NavigationBarLinkProps) => {
    return (
        <NavLink to={path} className="flex items-center flex-col gap-y-2">
            {({ isActive, isPending }) => (
                isPending ? <Spinner customClass="*:bg-white *:size-4 gap-x-1" /> :
                    <>
                        {isActive ? <span className="size-6 text-white">{activeIcon}</span> : <span className="size-6 text-gray-500">{icon}</span>}
                        <span
                            className={clsx("text-xs font-dana", {
                                "text-white": isActive,
                                "text-gray-500": !isActive,
                            })}
                        >
                            {title}
                        </span>
                    </>
            )}
        </NavLink>
    );
};

export default NavigationBarLink;
