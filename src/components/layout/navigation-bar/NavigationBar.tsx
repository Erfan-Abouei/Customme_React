import NavigationBarLink from "./NavigationBarLink"
import { HiMiniHome as HomeActive } from "react-icons/hi2";
import { HiOutlineHome as HomeNotActive } from "react-icons/hi2";

import { HiOutlinePaintBrush as BrushNotActive } from "react-icons/hi2";
import { HiPaintBrush as BrushActive } from "react-icons/hi2";

import { HiOutlineShoppingCart as CartNotActive } from "react-icons/hi2";
import { HiMiniShoppingCart as CartActive } from "react-icons/hi2";

import { HiMiniUser as UserActive } from "react-icons/hi2";
import { HiOutlineUser as UserNotActive } from "react-icons/hi2";

const NavigationBar = () => {
    return (
        <div className="md:hidden fixed w-9/10 mx-auto h-20 px-6 bg-primary flex items-center justify-between gap-x-2 bottom-4 left-0 right-0 rounded-2xl">
            <NavigationBarLink activeIcon={<HomeActive className="size-full" />} icon={<HomeNotActive className="size-full" />} path="/" title="خانه" />
            <NavigationBarLink activeIcon={<BrushActive className="size-full" />} icon={<BrushNotActive className="size-full" />} path="/custom-design" title="طراحی سفارشی" />
            <NavigationBarLink activeIcon={<CartActive className="size-full" />} icon={<CartNotActive className="size-full" />} path="/cart" title="سبد خرید" />
            <NavigationBarLink activeIcon={<UserActive className="size-full" />} icon={<UserNotActive className="size-full" />} path="/profile" title="پروفایل" />
        </div>
    )
}

export default NavigationBar