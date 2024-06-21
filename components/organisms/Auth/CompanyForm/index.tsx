'use client'
import React, { useState } from 'react'
import { Buttons, DropdownForm, DropdownCheckboxes, Headings, Tooltips } from '@/components/atoms'
import { MdOutlineCheck } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const CompanyForm = () => {
  const selectType = [
    { label: "Offline", value: "Offline" },
    { label: "Online", value: "Online" },
  ]

  const selectCountry = [
    { label: "United States", value: "en" },
    { label: "French", value: "fr" },
    { label: "Indonesia", value: "in" },
    { label: "Malaysia", value: "my" },
    { label: "Netherlands", value: "nl" },
  ]

  const selectCategories = [
    { value: 'Restaurant', label: 'Restaurant' },
    { value: 'Shopping', label: 'Shopping' },
    { value: 'Nightlife', label: 'Nightlife' },
    { value: 'Food & Baverage', label: 'Food & Baverage' },
    { value: 'Legal privacy', label: 'Legal privacy' },
    { value: 'Beauty & Spas', label: 'Beauty & Spas' },
  ];

  const dropdownCategory = [
    { label: "Category", data: selectCategories },
    { label: "Subcategory", data: selectCategories }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleDropdownClick = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white p-4 lg:p-6">
      <div className="flex justify-center items-center p-4 lg:py-[70px] bg-gray-300 rounded-md lg:rounded-df">
        <div className="bg-white rounded-md lg:rounded-df lg:w-[580px] p-8">
          <div className="mb-5">
            <Headings control="h5" text="Set up your account" className="mb-2" />
            <p className="text-base font-normal text-gray-500">Let&apos;s get started and complete your account</p>
          </div>
          <div className="flex justify-center items-center mb-5 p-3 md:p-5 rounded-df border border-gray-150">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-sm font-medium text-blue-500 bg-orange-500 rounded-full w-[38px] h-[38px]">
                <MdOutlineCheck />
              </div>
              <p className="hidden md:block text-sm font-medium text-black-500 ml-3">
                Sign Up
              </p>
            </div>
            <div className="w-[18px] h-0.5 mx-[18px] bg-orange-500"></div>
            <div className="flex items-center">
              <div className="flex justify-center items-center text-sm font-medium text-black-500 bg-orange-500 rounded-full w-[38px] h-[38px]">
                2
              </div>
              <p className="hidden md:block text-sm font-medium text-black-500 ml-3">
                Company Detail
              </p>
            </div>
            <div className="w-[18px] h-0.5 mx-[18px] bg-gray-350"></div>
            <div className="flex items-center">
              <div className="flex justify-center items-center text-sm font-medium text-black-500 bg-gray-300 rounded-full w-[38px] h-[38px]">
                3
              </div>
              <p className="hidden md:block text-sm font-medium text-black-500 ml-3">
                Summary
              </p>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="input_companyname" className="block text-base font-semibold text-black-500 mb-2">Company Name <span className="text-red-500">*</span></label>
            <input type="text" id="input_companyname" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Your company name" />
          </div>
          <div className="mb-6">
            <label htmlFor="input_website" className="block text-base font-semibold text-black-500 mb-2">Website <span className="text-red-500">*</span></label>
            <input type="text" id="input_website" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Your website" />
          </div>
          <div className="mb-6">
            <label htmlFor="select_companytype" className="text-base font-semibold text-black-500 mb-2 flex items-start">
              Company Type <span className="text-red-500 mx-1">*</span>
              <Tooltips text={<span>If you select <b>&apos;Offline&apos;</b> in the company type, a location form will appear. Offline stores are for companies not listed on Google reviews but have location details</span>} />
            </label>
            <div className="relative">
              <DropdownForm data={selectType} label="Type" value="" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="input_email" className="block text-base font-semibold text-black-500 mb-2">Company E-Mail <span className="text-red-500">*</span></label>
            <input type="email" id="input_email" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Your e-mail" />
          </div>
          <div className="mb-6">
            <label htmlFor="select_countrycode" className="block text-base font-semibold text-black-500 mb-2">Company Phone Number <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-1">
                <div className="relative">
                  <DropdownForm data={selectCountry} label="Country" value="" />
                </div>

              </div>
              <div className="col-span-2">
                <input type="text" id="input_phone" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Your phone number" />
              </div>
            </div>

          </div>
          <div className="mb-6 relative">
            <label htmlFor="input_location" className="block text-base font-semibold text-black-500 mb-2">Location <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="text" id="input_location" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Enter your location" />
              <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">
                <FiMapPin />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="select_category" className="text-base font-semibold text-black-500 mb-2 flex items-start">
              Category <span className="text-red-500 mx-1">*</span>
              <Tooltips text="User need to pick 1 Main Category and max. 3 Sub categories." />
            </label>
            {
              dropdownCategory?.map((item: any, i: number) => {
                return (
                  <div key={i + "checkboxes"} className={`relative ${i == 0 && 'mb-2'}`}>
                    <DropdownCheckboxes
                      label={item?.label}
                      data={item?.data}
                      isOpen={openIndex === i}
                      onClick={() => handleDropdownClick(i)}
                    />
                  </div>
                )
              })
            }
          </div>
          <div className="">
            <Buttons
              control="primary"
              type="submit"
              text="Continue"
              className="py-[18px] lg:py-4 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyForm