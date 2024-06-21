'use client'
import React, { useState } from 'react'
import { Buttons, DropdownBestCategory, Headings } from '@/components/atoms';
import {
    RiBookOpenLine,
    RiNewspaperLine,
    RiCamera3Line,
    RiVideoAddLine,
    RiStore3Line,
    RiBookletLine,
    RiArmchairLine,
    RiComputerLine,
    RiPrinterLine,
    RiStoreLine,
    RiBankLine,
} from "react-icons/ri";

const BestOfCategory = () => {
    const dataChild = [
        {
            icon: <RiBookOpenLine />,
            title: "Books & Magazines",
            url: "/"
        },
        {
            icon: <RiNewspaperLine />,
            title: "Media & Information",
            url: "/"
        },
        {
            icon: <RiCamera3Line />,
            title: "Photography",
            url: "/"
        },
        {
            icon: <RiVideoAddLine />,
            title: "Video & Sound",
            url: "/"
        },
        {
            icon: <RiStore3Line />,
            title: "Bookstore",
            url: "/"
        },
        {
            icon: <RiStore3Line />,
            title: "Record Store",
            url: "/"
        },
        {
            icon: <RiBookletLine />,
            title: "Magazines",
            url: "/"
        },
        {
            icon: <RiArmchairLine />,
            title: "Office Supplies",
            url: "/"
        },
        {
            icon: <RiComputerLine />,
            title: "Office Technology",
            url: "/"
        },
        {
            icon: <RiPrinterLine />,
            title: "Printer Cartridges",
            url: "/"
        },
        {
            icon: <RiStoreLine />,
            title: "Stationery Store",
            url: "/"
        },
        {
            icon: <RiBankLine />,
            title: "Stationery",
            url: "/"
        },
    ]

    const data = [
        {
            id: 1,
            image: "/images/icons/icon-best-1.webp",
            title: "Animals & Pets",
            total: 128,
            child: dataChild
        },
        {
            id: 2,
            image: "/images/icons/icon-best-2.webp",
            title: "Construction & Industrial",
            total: 128,
            child: dataChild
        },
        {
            id: 3,
            image: "/images/icons/icon-best-3.webp",
            title: "Events & Entertainment",
            total: 128,
            child: dataChild
        },
        {
            id: 4,
            image: "/images/icons/icon-best-4.webp",
            title: "Hobbies & Craft",
            total: 128,
            child: dataChild
        },
        {
            id: 5,
            image: "/images/icons/icon-best-5.webp",
            title: "Beauty & Boddy",
            total: 128,
            child: dataChild
        },
        {
            id: 6,
            image: "/images/icons/icon-best-6.webp",
            title: "Education & Mentoring",
            total: 128,
            child: dataChild
        },
        {
            id: 7,
            image: "/images/icons/icon-best-7.webp",
            title: "Food, Beverages, & Tobacco",
            total: 128,
            child: dataChild
        },
        {
            id: 8,
            image: "/images/icons/icon-best-8.webp",
            title: "Home & Garden",
            total: 128,
            child: dataChild
        },
        {
            id: 9,
            image: "/images/icons/icon-best-9.webp",
            title: "Business Service",
            total: 128,
            child: dataChild
        },
        {
            id: 10,
            image: "/images/icons/icon-best-10.webp",
            title: "Electronics & Technology",
            total: 128,
            child: dataChild
        },
        {
            id: 11,
            image: "/images/icons/icon-best-11.webp",
            title: "Healt & Medical",
            total: 128,
            child: dataChild
        },
        {
            id: 12,
            image: "/images/icons/icon-best-12.webp",
            title: "Home Service",
            total: 128,
            child: dataChild
        },
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleDropdownClick = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="bg-white px-3 lg:px-16 py-5 lg:py-14">
            <div className="container max-w-container mx-auto px-2 lg:px-0">
                <div className="flex items-center justify-between mb-4 lg:mb-5">
                    <div>
                        <Headings control="h1" text="Best of category" />
                    </div>
                    <div>
                        <Buttons control="primary" isLink={true} url="/" text="View All" className="py-2.5 lg:py-4 px-8 shadow-md" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
                    {
                        data?.map((item: any, i: number) => {
                            return (
                                <div key={i} className="mb-4 md:mb-0">
                                    <DropdownBestCategory
                                        data={item}
                                        isOpen={openIndex === i}
                                        onClick={() => handleDropdownClick(i)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BestOfCategory