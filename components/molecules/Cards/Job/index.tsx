import React from 'react'
import { RiBriefcase2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";

const Job = ({ data }: any) => {
  return (
    <div className="bg-white border border-gray-100 rounded-df p-6">
        <div className="border-b border-b-gray-100 mb-6">
            <p className="text-sm font-medium text-blue-500 mb-4">
                {data?.category}
            </p>
            <h6 className="text-base font-semibold text-black-500 mb-2">
                {data?.title}
            </h6>
            <p className="text-sm font-normal text-gray-500 mb-6">
                {data?.desc}
            </p>
        </div>
        <div className="flex justify-start items-center">
            <div className="flex justify-start items-center text-base font-normal leading-df mr-4">
                <RiBriefcase2Line className="text-black-500 mr-2" />
                <span className="text-gray-500">{data?.type}</span>
            </div>
            <div className="flex justify-start items-center text-base font-normal leading-df mr-4">
                <FiMapPin className="text-black-500 mr-2" />
                <span className="text-gray-500">{data?.location}</span>
            </div>
        </div>
    </div>
  )
}

export default Job