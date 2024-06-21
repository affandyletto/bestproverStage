import React from 'react'
import { Link, type Locale } from "@/i18n.config";
import { Buttons, DropdownLanguage, Headings } from '@/components/atoms'
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale() as Locale;

  return (
    <footer className="bg-black-500 px-5 lg:px-20 py-5 lg:pt-7 lg:pb-5">
      <div className="container max-w-container mx-auto">
        <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 border-b border-b-black-700 py-6 lg:py-[52px]">
          <div className="my-auto text-center md:text-left">            
            <Headings control="h1" text={t('heading_subscribe')} fontColor="text-white" className="mb-2 lg:mb-6" />
            <p className="text-white text-sm lg:text-base font-normal leading-df mb-2 lg:mb-0 opacity-80">
              {t('desc_subscribe')}
            </p>
          </div>
          <div className="my-auto">
            <form action="" className="">
              <div className="input-group relative w-full ">
                <input type="text" className="bg-white text-base w-full py-4 lg:py-[18px] px-4 lg:px-8 rounded-full placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-0" placeholder={t('placeholder_subscribe')} />
                <Buttons control="primary" text={t('button_subscribe')} className="absolute top-1/2 -translate-y-1/2 right-2 h-10 lg:h-12 px-4 lg:px-8 shadow-md" />
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-5 md:gap-x-10 border-b border-b-black-700 py-[52px]">
          <div className="text-white text-sm lg:text-base font-normal leading-df">
            <h6 className="font-semibold mb-4">About Trustprover</h6>
            <Link href={"/about-us"} className="mb-3 block opacity-80">About Us</Link>
            <Link href={"/career"} className="mb-3 block opacity-80">Career</Link>
            <Link href={"/contact"} className="mb-3 block opacity-80">Contact</Link>
            <Link href={"/blog"} className="mb-3 block opacity-80">Blog</Link>
            <Link href={"/how-trustprover-works"} className="mb-3 block opacity-80">How trustprover works</Link>
            <Link href={"/trustprover-award"} className="block opacity-80">Trustprover award</Link>
          </div>
          <div className="text-white text-sm lg:text-base font-normal leading-df">
            <h6 className="font-semibold mb-4">Community</h6>
            <Link href={"/trust-in-reviews"} className="mb-3 block opacity-80">Trust in reviews</Link>
            <Link href={"/help-center"} className="mb-3 block opacity-80">Help Center</Link>
          </div>
          <div className="text-white text-sm lg:text-base font-normal leading-df">
            <h6 className="font-semibold mb-4">Business</h6>
            <Link href={"/"} className="mb-3 block opacity-80">Trustprover Business</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Plans & Pricing</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Bussines Login</Link>
          </div>
          <div className="text-white text-sm lg:text-base font-normal leading-df">
            <h6 className="font-semibold mb-4">Follow us on</h6>
            <Link href={"/"} className="mb-3 block opacity-80">Facebook</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Twitter</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Instagram</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Linkedin</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Youtube</Link>
          </div>
          <div className="text-white text-sm lg:text-base font-normal leading-df">
            <h6 className="font-semibold mb-4">Legal</h6>
            <Link href={"/"} className="mb-3 block opacity-80">Imprint</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Privacy Policy</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Terms & Conditions</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Guidelines for Companies</Link>
            <Link href={"/"} className="mb-3 block opacity-80">Manage cookies</Link>
          </div>
        </div>
        <div className="md:hidden grid grid-cols-2 gap-6 border-b border-b-black-700 py-6">
          <div>
            <div className="text-white text-sm lg:text-base font-normal leading-df mb-8">
              <h6 className="font-semibold mb-4">About Trustprover</h6>
              <Link href={"/about-us"} className="mb-3 block opacity-80">About Us</Link>
              <Link href={"/career"} className="mb-3 block opacity-80">Career</Link>
              <Link href={"/contact"} className="mb-3 block opacity-80">Contact</Link>
              <Link href={"/blog"} className="mb-3 block opacity-80">Blog</Link>
              <Link href={"/how-trustprover-works"} className="mb-3 block opacity-80">How trustprover works</Link>
              <Link href={"/trustprover-award"} className="block opacity-80">Trustprover award</Link>
            </div>
            <div className="text-white text-sm lg:text-base font-normal leading-df mb-8">
              <h6 className="font-semibold mb-4">Community</h6>
              <Link href={"/trust-in-reviews"} className="mb-3 block opacity-80">Trust in reviews</Link>
              <Link href={"/help-center"} className="mb-3 block opacity-80">Help Center</Link>
            </div>
            <div className="text-white text-sm lg:text-base font-normal leading-df">
              <h6 className="font-semibold mb-4">Business</h6>
              <Link href={"/"} className="mb-3 block opacity-80">Trustprover Business</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Plans & Pricing</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Bussines Login</Link>
            </div>
          </div>
          <div>
            <div className="text-white text-sm lg:text-base font-normal leading-df mb-8">
              <h6 className="font-semibold mb-4">Follow us on</h6>
              <Link href={"/"} className="mb-3 block opacity-80">Facebook</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Twitter</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Instagram</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Linkedin</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Youtube</Link>
            </div>
            <div className="text-white text-sm lg:text-base font-normal leading-df">
              <h6 className="font-semibold mb-4">Legal</h6>
              <Link href={"/"} className="mb-3 block opacity-80">Imprint</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Privacy Policy</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Terms & Conditions</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Guidelines for Companies</Link>
              <Link href={"/"} className="mb-3 block opacity-80">Manage cookies</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 lg:py-[52px]">
          <div className="order-2 md:order-1">
            <p className="text-white text-sm lg:text-base font-normal leading-df text-center lg:text-left opacity-80">© 2024 trustprover. All rights reserved.</p>
          </div>
          <div className="order-1 md:order-2">
            <DropdownLanguage locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer