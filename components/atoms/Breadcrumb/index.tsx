'use client'
import React, { useState, useEffect } from 'react'
import { Link, usePathname } from "@/i18n.config";
import { RiArrowRightSLine } from "react-icons/ri";


const Breadcrumb = ({ parent, icon }: any) => {
    const pathname = usePathname();
    const pathArray = pathname.split('/').filter((path) => path).slice(1);

    const kebabToTitleCase = (str: string) => {
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <nav className="flex text-gray-700 py-5 border-b border-b-gray-100" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/" className="flex items-center text-base font-medium text-black-500">
                        {icon}
                        <span className="ml-2">{parent}</span>
                    </Link>
                </li>
                {pathArray.map((path, index) => {
                    const href = '/' + pathArray.slice(0, index + 1).join('/');
                    const isLast = index === pathArray.length - 1;
                    return (
                        <li key={href} className="inline-flex items-center">
                            <div className="flex items-center">
                                <RiArrowRightSLine className="text-blue-500" />
                                <Link href={href} className="ml-1 text-base font-medium text-blue-500 md:ml-3">
                                    {kebabToTitleCase(path)}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
