import React from 'react'
import Image from 'next/image'

const Team = ({ data }: any) => {
  return (
    <div className="border border-gray-150 rounded-df overflow-hidden">
      <div className="w-full h-[280px">
        <Image
          src={data?.image}
          width={1000}
          height={1000}
          alt="icon"
        />
      </div>
      <div className="p-5 bg-white">
        <p className="text-base font-semibold text-black-500 leading-[20.8px] mb-1">
          {data?.name}
        </p>
        <p className="text-sm font-normal text-black-500 mb-0">
          {data?.position}
        </p>
      </div>
    </div>
  )
}

export default Team