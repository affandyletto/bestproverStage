'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { BsSearch, BsList, BsXLg } from "react-icons/bs";
import { Buttons, DropdownAccount } from '@/components/atoms';
import {
    RiArticleLine,
    RiBuilding3Line,
} from "react-icons/ri";


const Navbar = (props: any) => {
  const t = useTranslations("Navbar");
  const locale = useLocale() as Locale;

  const [isLogin, setIsLogin] = useState(props?.isLogin || false)
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const drawer = () => {
    setToggleNavbar(!toggleNavbar)
  }

  return (
    <>
      <nav className="flex items-center bg-white border border-gray-150 px-5 lg:px-20 h-[72px] lg:h-[92px]">
        <div className="container max-w-container mx-auto flex items-center justify-between flex-wrap ">
          <div className="flex items-center flex-shrink-0 text-white">
            <Link href={`${isLogin ? '/home' : '/'}`} className="flex items-center h-7">
              <Image
                src="/images/logo.webp"
                width={185}
                height={28}
                alt="Logo"
                className="mr-10 h-7"
              />
            </Link>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center text-2xl border-none text-black-500" type="button" onClick={drawer} >
              <BsList />
            </button>
          </div>
          <form action="" className="hidden lg:flex flex-grow lg:items-center mr-9">
            <div className="input-group relative w-full ">
              <span className="absolute left-6 top-2/4 -translate-y-2/4 text-lg text-gray-500"><BsSearch /></span>
              <input type="text" className="bg-gray-200 w-full py-[14px] pl-14 pr-6 rounded-full text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder={t('search_placeholder')} />
            </div>
          </form>
          <div className="hidden lg:flex lg:items-center">
            <div className="lg:flex-grow">
              <Link href={`/categories`} className="block mt-4 lg:inline-block lg:mt-0 mx-4 text-base font-medium text-black">
                {t('link_categories')}
              </Link>
              <Link href={`/blog`} className="block mt-4 lg:inline-block lg:mt-0 mx-4 text-base font-medium text-black">
                {t('link_blog')}
              </Link>
            </div>
            <div className="flex items-center">
              {!isLogin && (
                <Buttons control="secondary" isLink={true} url={`/${locale}/auth/login`} text={t('btn_login')} className="py-2.5 lg:py-4 px-8 ml-4 shadow-md" />
              )}
              <Buttons control="primary" isLink={true} url={`/${locale}/for-business`} text={t('btn_signup')} className="py-2.5 lg:py-4 px-8 ml-4 shadow-md" />
              {isLogin && (
                <DropdownAccount />
              )}
            </div>
          </div>
        </div>
      </nav>
      {
        toggleNavbar && (
          <div className="lg:hidden fixed z-[999] px-5 w-full bg-white transition-transform top-0 bottom-0 left-0 right-0 transform-none">
            <div className="container my-auto mx-auto flex items-center justify-between flex-wrap h-[72px] border-b ">
              <Link href={`${isLogin ? '/home' : '/'}`} className="flex items-center h-7">
                <Image
                  src="/images/logo.webp"
                  width={185}
                  height={28}
                  alt="Logo"
                  className="mr-10 h-7"
                />
              </Link>
              <button type="button" onClick={drawer}>
                <BsXLg />
              </button>
            </div>
            <div className="p-5 text-center">
              <form action="" className="mb-4">
                <div className="input-group relative w-full ">
                  <span className="absolute left-6 top-2/4 -translate-y-2/4 text-lg text-gray-500"><BsSearch /></span>
                  <input type="text" className="bg-gray-200 w-full text-base py-[14px] pl-14 pr-6 rounded-full text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder={t('search_placeholder_mobile')} />
                </div>
              </form>
              <div className="mb-4">
                <Link href={'/categories'} className="flex justify-start items-center mb-3">
                  <RiBuilding3Line className="mr-3" />
                  {t('link_categories')}
                </Link>
                <Link href={'/blog'} className="flex justify-start items-center mb-3">
                  <RiArticleLine className="mr-3" />
                  {t('link_blog')}
                </Link>
              </div>
              {
                !isLogin && (
                  <Buttons control="secondary" isLink={true} url={`/${locale}/auth/login`} text={t('btn_login')} className="w-full text-center py-2.5 lg:py-4 mb-4 shadow-md mr-2" />
                )
              }
              <Buttons control="primary" isLink={true} url={`/${locale}/for-business`} text={t('btn_signup')} className="w-full text-center py-2.5 lg:py-4 mb-4 shadow-md" />
              {
                isLogin && (
                  <DropdownAccount />
                )
              }
            </div>
          </div>
        )
      }
    </>
  )
}

export default Navbar