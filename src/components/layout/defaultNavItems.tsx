import React from "react";
import {
    CalendarIcon,
    FolderIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
    {
        label: "Dashboard",
        href: "/",
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        label: "About",
        href: "/about",
        icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
        label: "Projects",
        href: "/play-around-projects",
        icon: <FolderIcon className="w-6 h-6" />,
    },
    {
        label: "Blog",
        href: "/blog",
        icon: <CalendarIcon className="w-6 h-6" />,
    },
];
