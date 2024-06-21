import React from 'react'
import clsx from 'clsx';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Faq = ({ question, answer, isOpen, onClick }: any) => {
    return (
        <div className="bg-white rounded-df border border-gray-100 p-6 mb-6">
            <div className="flex justify-between items-center">
                <div className="max-w-[260px] md:max-w-[658px]">
                    <button
                        className="w-full text-left focus:outline-none"
                        onClick={onClick}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-base font-semibold text-black-500 leading-[20.8px] mb-0">{question}</h3>
                        </div>
                    </button>
                    <div
                        className={clsx(
                            'faq-content overflow-hidden',
                            {
                                'faq-content-hidden': !isOpen,
                                'faq-content-visible pt-4 pb-0': isOpen,
                            }
                        )}
                    >
                        <p className="text-base font-normal text-gray-500 leading-[25.6px] mb-0">{answer}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 shadow-md rounded-full">
                    {
                        isOpen ? (
                            <MdKeyboardArrowUp />
                        ) : (
                            <MdKeyboardArrowDown />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq