'use client';
import React, { useState } from 'react';
import { RiCheckLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const DropdownWithCheckboxes = ({ data, label, isOpen, onClick }: any) => {
    const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>({});
    const [value, setValue] = useState(label)

    const handleCheckboxChange = (value: string) => {
        const result = {
            ...selectedItems,
            [value]: !selectedItems[value]
        }
        setSelectedItems(result)

        const joinValue = Object.keys(result).filter(key => result[key]).join(', ');
        setValue(joinValue)
    };

    return (
        <div className="relative w-full">
            <div
                className="flex justify-between items-center w-full py-4 px-6 bg-gray-200 rounded-full cursor-pointer"
                onClick={onClick}
            >
                <p className=" text-sm font-normal text-black-500 mb-0">
                    {value || label}
                </p>
                <MdKeyboardArrowDown />
            </div>

            {isOpen && (
                <div
                    className="absolute z-10 top-14 right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 w-full rounded-df bg-white border border-gray-100 p-6 overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="input-group relative w-full mb-4">
                        <span className="absolute left-6 top-2/4 -translate-y-2/4 text-base text-gray-500"><BsSearch /></span>
                        <input type="text" className="bg-gray-200 w-full py-[14px] pl-14 pr-6 rounded-full text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder={"Search"} />
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        {data?.map((item: any, i: number) => (
                            <div
                                key={item.value}
                                className={`flex items-center space-x-3 cursor-pointer py-4 border-y border-y-gray-100`}
                                onClick={() => handleCheckboxChange(item.value)}
                            >
                                <div className={`w-[18px] h-[18px] border-2 border-gray-500 ${selectedItems[item.value] ? 'bg-yellow-400' : 'bg-white'} flex items-center justify-center`}>
                                    {selectedItems[item.value] && (
                                        <RiCheckLine />
                                    )}
                                </div>
                                <span className="text-base font-medium text-gray-500">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownWithCheckboxes;
