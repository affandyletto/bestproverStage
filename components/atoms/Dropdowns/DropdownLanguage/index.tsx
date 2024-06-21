'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    usePathname,
    useRouter,
    type Locale,
  } from "@/i18n.config";

const languages = [
    { name: 'English', flag: '/images/flags/en.webp', value: 'en' },
    { name: 'Française', flag: '/images/flags/fr.webp', value: 'fr' },
    { name: 'Bahasa', flag: '/images/flags/id.webp', value: 'id' },
    { name: 'Melayu', flag: '/images/flags/my.webp', value: 'my' },
    { name: 'Netherlands', flag: '/images/flags/nl.webp', value: 'nl' },
];

export default function DropdownLanguage({
    locale,
  }: {
    locale: Locale;
  }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    useEffect(() => {
        const currentLanguage = languages.find((lang) => lang.value === locale);
        if (currentLanguage) {
            setSelectedLanguage(currentLanguage);
        }
    }, [pathname, locale]);

    const changeLanguage = (language: any) => {
        setSelectedLanguage(language);
        setIsOpen(false);
        router.replace(pathname, { locale: language.value });
    };

    return (
        <div className="relative lg:inline-block flex justify-center mb-2 lg:mb-0">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center rounded-df border border-black-700 shadow-sm px-4 py-3 bg-black-500 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedLanguage && (
                        <Image
                            src={selectedLanguage.flag}
                            alt={`${selectedLanguage.name} flag`}
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded-full mr-3"
                        />
                    )}
                    {selectedLanguage ? selectedLanguage.name : 'Select Language'}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute bottom-14 right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 mt-2 w-56 rounded-df shadow-lg bg-black-500 border border-black-700 focus:outline-none overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="">
                        {languages.map((language) => (
                            <button
                                key={language.name}
                                onClick={() => changeLanguage(language)}
                                className={`${
                                    selectedLanguage?.name === language.name ? 'bg-gray-800 text-white' : 'text-gray-300'
                                } group flex items-center px-4 py-2 text-sm w-full text-left`}
                            >
                                <Image
                                    src={language.flag}
                                    alt={`${language.name} flag`}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 rounded-full mr-3"
                                />
                                <span className="flex-grow">{language.name}</span>
                                {selectedLanguage?.name === language.name && (
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
