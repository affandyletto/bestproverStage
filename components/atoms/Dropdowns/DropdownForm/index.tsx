'use client';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const DropdownForm = ({ data, label, value }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState({ label, value });

    useEffect(() => {
        const currentValue = data.find((item: any) => item.value === value);
        if (currentValue) {
            setSelected(currentValue);
        }
    }, [data, value]);

    const changeValue = (language: any) => {
        setSelected(language);
        setIsOpen(false);
    };

  return (
    <div className="relative w-full">
            <div>
                <button
                    type="button"
                    className="flex justify-between items-center w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0"
                    id={`options-menu-${label}`}
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selected ? selected.label : `${label}`}
                    <MdKeyboardArrowDown />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute z-10 top-11 right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 mt-2 w-full rounded-md shadow-lg bg-gray-200  focus:outline-none overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="">
                        {data?.map((item: any) => (
                            <button
                                key={item.value}
                                onClick={() => changeValue(item)}
                                className={`${
                                    selected?.value === item.value ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black-500 hover:bg-gray-600'
                                }  group flex items-center px-4 py-2 text-sm w-full text-left`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
  )
}

export default DropdownForm