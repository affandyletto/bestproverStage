import React from 'react'

const AbsolutePill = ({ position, icon, title, desc }: any) => {
  return (
    <div className={`absolute ${position}`}>
      <div className="flex items-center justify-between bg-white rounded-[20px] p-2 lg:p-3 pr-3 lg:pr-5">
        <div className="bg-blue-500 bg-opacity-10 rounded-full text-blue-500 text-2xl border border-gray-150 flex justify-center items-center flex-shrink-0 w-10 h-10 mr-3">
          {icon}
        </div>
        <div className="w-full">
          <p className="text-base font-semibold text-black-500 lg:mb-0.5">
            {title}
          </p>
          <p className="text-sm font-normal text-gray-500">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AbsolutePill