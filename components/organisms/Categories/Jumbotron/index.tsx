'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Link } from "@/i18n.config";
import { Buttons } from '@/components/atoms'
import { BsSearch, BsFillStarFill } from "react-icons/bs";

const Jumbotron = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const searchChange = (event: any) => {
    const value = event.target.value
    setSearchValue(value);
    setShowOverlay(value !== '');
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Search term:', searchValue);
  }

  const dataSearch = [
    {
      category: "COMPANIES",
      data: [
        {
          name: "Google",
          url: "www.google.com",
          reviews: "1,483",
          rating: "4.5"
        },
        {
          name: "Google",
          url: "www.google.com",
          reviews: "1,483",
          rating: "4.5"
        },
        {
          name: "Google",
          url: "www.google.com",
          reviews: "1,483",
          rating: "4.5"
        }
      ]
    },
    {
      category: "CATEGORY",
      data: [
        {
          name: "Search Engine Company",
          url: "www.google.com",
        },
        {
          name: "Media Company",
          url: "www.google.com",
        },
        {
          name: "Technology",
          url: "www.google.com",
        }
      ]
    }
  ]

  return (
    <section className="bg-white p-3 md:px-4 md:py-9 ">
      {showOverlay && (
        <div className="fixed inset-0 bg-black-1000 bg-opacity-50 z-[58]">
        </div>
      )}

      <div className="max-w-container-jumbotron lg:h-[318px] mx-auto bg-blue-500 rounded-df p-5 md:px-6 lg:px-[56px] lg:py-[64px] bg-[url('/images/containers/bg-jumbotron.webp')] bg-cover bg-center">
        <div className="flex items-center justify-center h-full mx-auto md:w-[646px]">
          <div className="">
            <div className="mb-5 md:mb-[42px] text-center">
              <h1 className="font-semibold text-2xl lg:text-[42px] text-white leading-tight">
                What are you looking for?
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="">
              <div className="input-group relative w-full lg:w-[543px] ">
                <input
                  type="text"
                  className={`${showOverlay ? 'rounded-t-3xl rounded-b-none' : 'rounded-full'} relative z-[60] bg-white text-sm lg:text-base w-full h-14 lg:h-16 px-4 lg:px-8 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-0`}
                  placeholder="Enter Company / Link / Category"
                  value={searchValue}
                  onChange={searchChange}
                />
                <Buttons
                  control="primary"
                  type="submit"
                  text="Search"
                  className="hidden lg:block z-[60] absolute top-1/2 -translate-y-1/2 right-2 h-10 md:h-12 px-4 md:px-8 shadow-md"
                />
                <Buttons
                  control="primary"
                  type="submit"
                  text={<BsSearch />}
                  className="lg:hidden absolute z-[60] top-1/2 -translate-y-1/2 flex justify-center items-center right-2 md:right-1 w-10 md:w-12 h-10 md:h-12 shadow-md"
                />
                {
                  searchValue !== '' && (
                    <div className="absolute z-[59] top-0 left-0 w-full bg-white rounded-3xl">
                      <div className="mt-14 lg:mt-16 ">
                        {
                          dataSearch?.map((ctg: any, index: number) => {
                            return (
                              <div key={'ctg' + index} className="p-2 border-t border-t-black-500">
                                <div className="uppercase text-sm font-semibold text-blue-500 py-2 md:px-6 lg:px-8">
                                  {ctg?.category}
                                </div>
                                {
                                  ctg?.data?.map((item: any, i: number) => {
                                    return (
                                      <Link key={ctg + 'data' + i} href={item?.url} className="flex justify-between items-center md:py-2 lg:py-4 md:px-6 lg:px-8 cursor-pointer group hover:bg-gray-400 rounded-xl">
                                        <div className="mb-2 md:mb-0">
                                          <h6 className="capitalize text-base font-semibold text-black-500 mb-0 lg:mb-1">
                                            {item?.name}
                                          </h6>
                                          <p className="inline-block text-sm font-normal text-gray-500 mb-0">
                                            {item?.url} {item?.reviews && (<span>|</span>)} {item?.reviews && `${item?.review} reviews`}
                                          </p>
                                        </div>
                                        {
                                          item?.rating && (
                                            <div className="flex justify-center items-center py-1 lg:py-1.5 px-2 bg-gray-400 group-hover:bg-white rounded-full">
                                              <BsFillStarFill className="text-orange-500 mr-1" />
                                              <span className="text-xs lg:font-sm text-medium text-black-500">{item?.rating}</span>
                                            </div>
                                          )
                                        }
                                      </Link>
                                    )
                                  })
                                }
                              </div>
                            )
                          })
                        }
                      </div>
                      <div className="py-2 md:py-4 lg:py-6 px-2 md:px-6 lg:px-8">
                        <Buttons
                          control="primary"
                          type="submit"
                          text="Show All Results"
                          className="w-full h-[58px] flex justify-center items-center shadow-md"
                        />
                      </div>
                    </div>
                  )
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jumbotron;