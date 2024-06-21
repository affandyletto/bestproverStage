'use client'
import React from 'react'
import { Link } from "@/i18n.config";
import Image from 'next/image'
import { Buttons, Headings } from '@/components/atoms'
import { BsEye } from "react-icons/bs";
import { RiAlertFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const SignupForm = () => {

  const showPassword = () => {
    console.log('Password show')
  }

  return (
    <section className="bg-white p-4 lg:p-6">
      <div className="flex justify-center items-center p-4 lg:py-[70px] bg-gray-300 rounded-md lg:rounded-df">
        <div className="bg-white rounded-md lg:rounded-df lg:w-[580px] p-8">
          <div className="mb-5">
            <Headings control="h5" text="Create account" className="mb-2" />
            <p className="text-base font-normal text-gray-500">Join to unlock the best of trustprover</p>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div className="mb-6">
              <label htmlFor="input_firstname" className="block text-base font-semibold text-black-500 mb-2">First Name <span className="text-red-500">*</span></label>
              <input type="text" id="input_firstname" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Your first name" />
            </div>
            <div className="mb-6">
              <label htmlFor="input_lastname" className="block text-base font-semibold text-black-500 mb-2">Last Name <span className="text-red-500">*</span></label>
              <input type="text" id="input_lastname" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Your last name" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="input_email" className="block text-base font-semibold text-black-500 mb-2">E-Mail <span className="text-red-500">*</span></label>
            <input type="email" id="input_email" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Your e-mail" />
          </div>
          <div className="mb-6">
            <label htmlFor="input_countrycode" className="block text-base font-semibold text-black-500 mb-2">Phone Number <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-1">
                <div className="relative">
                  <select
                    id="select_country"
                    className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0 appearance-none"
                  >
                     <option value="" disabled selected>Country</option>
                    <option value="en">United States</option>
                    <option value="fr">French</option>
                    <option value="id">Indonesia</option>
                    <option value="my">Malaysia</option>
                    <option value="nl">Netherland</option>
                  </select>
                  <MdKeyboardArrowDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

              </div>
              <div className="col-span-2">
                <input type="text" id="input_phone" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Your phone number" />
              </div>
            </div>
          </div>
          <div className="mb-5 relative">
            <label htmlFor="input_password" className="block text-base font-semibold text-black-500 mb-2">Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="password" id="input_password" className="w-full py-4 px-6 bg-gray-200 rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder="Enter your password" />
              <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer" onClick={showPassword}>
                <BsEye />
              </div>
            </div>
            <div className="flex items-center text-sm text-red-500 mt-2">
              <RiAlertFill className="mr-2" /> The password you entered is incorrect. Please try again.
            </div>
          </div>
          <div className="mb-8">
            <Buttons control="disabled" type="submit" text="Create Account" className="py-[18px] lg:py-4 w-full disabled" />
          </div>
          <div className="relative border border-gray-150">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 text-sm text-gray-500 bg-white px-2">
              or using
            </span>
          </div>
          <div className="mt-8 mb-4">
            <Buttons control="secondary" type="button" text={<TextFacebook />} className="py-[18px] lg:py-4 w-full disabled" />
          </div>
          <div className="mb-5">
            <Buttons control="secondary" type="button" text={<TextGoogle />} className="py-[18px] lg:py-4 w-full disabled" />
          </div>
          <div className="text-base text-center">
            <span className="text-gray-500">Don&apos;t have an account?</span><Link href="/auth/login" className="text-black-500 font-semibold ml-2">Sign In</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupForm

const TextFacebook = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/icons/icon-facebook-1.webp"
        width={24}
        height={24}
        alt="icon"
        className="h-6 mr-3"
      /> Continue with Facebook
    </div>
  )
}

const TextGoogle = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/icons/icon-google-1.webp"
        width={24}
        height={24}
        alt="icon"
        className="h-6 mr-3"
      /> Continue with Goole
    </div>
  )
}