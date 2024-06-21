'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import { Link } from '@/i18n.config';
import {
    RiUser3Line,
    RiLogoutBoxLine,
    RiDashboard3Line,
    RiBookmarkLine,
    RiSettings3Line,
    RiFolderSettingsLine,
    RiMailUnreadLine,
    RiArticleLine,
    RiBuilding3Line,
} from "react-icons/ri";
import { MdOutlineCookie } from "react-icons/md";

const DropdownAccount = () => {
    const [isAvatar, setIsAvatar] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const navLinkData = [
        {
            title: "Go to Dashboard",
            url: "/",
            icon: <RiDashboard3Line />
        },
        {
            title: "My Profile",
            url: "/",
            icon: <RiUser3Line />
        },
        {
            title: "Saved Company",
            url: "/home/saved-companies",
            icon: <RiBookmarkLine />
        },
        {
            title: "Private Settings",
            url: "/",
            icon: <RiSettings3Line />
        },
        {
            title: "Company Settings",
            url: "/",
            icon: <RiFolderSettingsLine />
        },
        {
            title: "E-Mail Notification",
            url: "/",
            icon: <RiMailUnreadLine />
        },
        {
            title: "Cookies Settings",
            url: "/",
            icon: <MdOutlineCookie />
        },
    ]

    return (
        <>
            <div className="hidden lg:block relative w-[52px] h-[52px] ml-6">
                <div>
                    <button
                        type="button"
                        className="flex justify-center items-center w-[52px] h-[52px] bg-brown-100 rounded-full text-xl text-black-500 focus:outline-none focus:ring-0 focus:border-0"
                        id='account-dropdown'
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {
                            isAvatar ? (
                                <Image
                                    src="/images/comments/default-avatar-1.webp"
                                    width={52}
                                    height={52}
                                    alt="Foto"
                                    className="w-[52px] h-[52px]"
                                />
                            ) : (
                                <RiUser3Line />
                            )
                        }
                    </button>
                </div>

                {isOpen && (
                    <div
                        className="absolute z-50 top-[120px] right-0 p-6 w-[380px] rounded-df shadow-lg bg-white border border-gray-100 overflow-hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="">
                            <div className="flex justify-start items-center mb-6">
                                {
                                    isAvatar ? (
                                        <Image
                                            src="/images/comments/default-avatar-1.webp"
                                            width={52}
                                            height={52}
                                            alt="Foto"
                                            className="w-[52px] h-[52px]"
                                        />
                                    ) : (
                                        <RiUser3Line />
                                    )
                                }
                                <div className="ml-4">
                                    <h6 className="text-base font-medium text-black-500 mb-1">Jonathan Immanuel</h6>
                                    <p className="text-sm font-normal text-black-500 mb-0">jonathandoeimenuel@gmail.com</p>
                                </div>
                            </div>
                            <div className="text-base font-medium text-black-500 pt-6 pb-2 border-y border-y-gray-100">
                                {
                                    navLinkData?.map((item: any, i: number) => {
                                        return (
                                            <Link key={i} href={item?.url} className="flex justify-start items-center hover:font-semibold mb-4">
                                                {item?.icon}
                                                <span className="ml-3">{item?.title}</span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            <div className="text-base font-medium text-red-500 pt-6">
                                <Link href={'/auth/login'} className="flex justify-start items-center hover:font-semibold">
                                    <RiLogoutBoxLine className="mr-3" />
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="block lg:hidden mt-2">
                <div className="flex justify-start items-center pt-3 border-t border-t-gray-100 mb-3">
                    {
                        isAvatar ? (
                            <Image
                                src="/images/comments/default-avatar-1.webp"
                                width={52}
                                height={52}
                                alt="Foto"
                                className="w-[52px] h-[52px]"
                            />
                        ) : (
                            <RiUser3Line />
                        )
                    }
                    <div className="ml-4 text-left">
                        <h6 className="text-base font-medium text-black-500 mb-0">Jonathan Immanuel</h6>
                        <p className="text-sm font-normal text-black-500 mb-0">jonathandoeimenuel@gmail.com</p>
                    </div>
                </div>
                <div className="text-base font-medium text-black-500 pt-4 pb-1 border-y border-y-gray-100">
                    {
                        navLinkData?.map((item: any, i: number) => {
                            return (
                                <Link key={i} href={item?.url} className="flex justify-start items-center mb-3">
                                    {item?.icon}
                                    <span className="ml-3">{item?.title}</span>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="text-base font-medium text-red-500 pt-4">
                    <Link href={'/auth/login'} className="flex justify-start items-center">
                        <RiLogoutBoxLine className="mr-3" />
                        Logout
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DropdownAccount