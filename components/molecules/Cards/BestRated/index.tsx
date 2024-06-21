import React from 'react'
import Image from 'next/image'
import { BsFillStarFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const BestRated = ({ data }: any) => {
  const elementFirts = Array.from({ length: data?.stars }, (_, index) => index + 1);
  const elementSecond = Array.from({ length: 5 - data?.stars }, (_, index) => index + 1);
  return (
    <div className="overflow-hidden rounded-lg lg:rounded-df border border-gray-100">
      <div className="relative">
        <Image
          src={data?.image}
          width={1000}
          height={1000}
          alt="img"
          className="h-[120px] lg:h-[200px] w-full object-cover bg-center"
        />
        <div className="absolute top-2 lg:top-6 left-2 lg:left-6 w-8 lg:w-[46px] h-8 lg:h-[46px] bg-white rounded-full flex items-center justify-center">
          <Image
            src={"/images/icons/icon-company-1.webp"}
            width={1000}
            height={1000}
            alt='icon'
            className="w-full"
          />
        </div>
      </div>
      <div className="p-2.5 lg:p-4">
        {
          data?.isPlus ? (
            <div className="mb-2.5 inline-flex items-center bg-blue-100 rounded-full py-1.5 px-2">
              <Image
                src={"/images/icons/icon-verified-plus.webp"}
                width={1000}
                height={1000}
                alt='icon'
                className="w-4 mr-1"
              />
              <p className="text-sm font-medium text-blue-500">
                Verified <span className="font-semibold">Plus</span>
              </p>
            </div>
          ) : (
            <div className="mb-2.5 inline-flex items-center bg-blue-100 rounded-full py-1.5 px-2">
              <Image
                src={"/images/icons/icon-verified.webp"}
                width={1000}
                height={1000}
                alt='icon'
                className="w-4 mr-1"
              />
              <p className="text-sm font-medium text-blue-500">
                Verified
              </p>
            </div>
          )
        }
        <div className="mb-2 lg:mb-4">
          <h6 className="font-semibold text-base text-black-500 line-clamp-1 lg:mb-1">
            {data?.name}
          </h6>
          <p className="flex text-sm text-gray-500">
            <span className="mr-1 pt-1"><FiMapPin /></span>
            <span className="line-clamp-1">
              {data?.address}
            </span>
          </p>
        </div>
        <div className="flex items-center mb-1">
          {elementFirts?.map((el: any) => (
            <BsFillStarFill key={el} className="text-orange-500 mr-1" />
          ))}
          {elementSecond?.map((el: any) => (
            <BsFillStarFill key={el} className="text-gray-50 mr-1" />
          ))}
        </div>
        <div className="hidden lg:block">
          <p className="flex items-center text-sm text-gray-500">
            Ratings {data?.ratings} <span className="mx-2 text-gray-100">|</span> {data?.review} reviews
          </p>
        </div>
        <div className="block lg:hidden">
          <p className="flex items-center text-sm text-gray-500">
            Ratings {data?.ratings} <br />
            {data?.review} reviews
          </p>
        </div>
      </div>
    </div>
  )
}

export default BestRated