import React from 'react'
import { RiInformationFill } from "react-icons/ri";

const Tooltips = ({ text }: any) => {
    return (
        <div className="relative group text-black-500 cursor-pointer">
            <RiInformationFill />
            <div className="hidden group-hover:block absolute bottom-4 left-0 w-[352px] text-xs text-white font-normal bg-black-1000 rounded-lg p-4">
                {text}
            </div>
        </div>
    )
}

export default Tooltips