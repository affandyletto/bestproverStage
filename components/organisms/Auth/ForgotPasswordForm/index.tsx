'use client'
import React from 'react'
import { BsEye } from "react-icons/bs";
import { Buttons, Headings } from '@/components/atoms'
import { MdCheckCircle } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const ForgotPasswordForm = () => {

  return (
    <section className="bg-white p-4 lg:p-6">
        <div className="flex justify-center items-start p-4 lg:py-[70px] lg:pt-[72px] bg-gray-300 rounded-md lg:rounded-df  lg:min-h-[796px]">
            <div className="bg-white rounded-md lg:rounded-df lg:w-[580px] p-8">
              <div className="mb-5">
                <Headings control="h5" text="Please type code we just sent" className="mb-2" />
                <p className="text-base text-gray-500">We have sent 6 digits code to <span className="text-black-500">jonathandoeimanuel@gmail.com</span></p>
              </div>
              <div className="mb-4">
                <label htmlFor="input_verification" className="block text-base font-semibold text-black-500 mb-2">
                    Verification Code
                </label>
                <div className="relative">
                  <input type="text" id="input_verification" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Enter your password" />
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">
                    <MdCheckCircle className="text-green-500" />
                    {/* <IoMdCloseCircle className="text-red-500" /> */}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <Buttons control="primary" type="submit" text="Verifying" className="py-[18px] lg:py-4 w-full" />
              </div>
              <div className="">
                <Buttons control="secondary" type="button" text="Get New Code" className="py-[18px] lg:py-4 w-full" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default ForgotPasswordForm