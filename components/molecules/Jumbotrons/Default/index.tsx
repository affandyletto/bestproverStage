'use client'
import React from 'react'
import Image from 'next/image'
import { Buttons, Headings, AbsolutePill } from '@/components/atoms'

const Default = (props: any) => {
  const { image, title, desc, btn, url, isPill, positionPil, iconPil, titlePil, descPil } = props

  return (
    <section className="bg-white p-3 md:px-4 md:py-9 ">
      <div className="max-w-container-jumbotron lg:h-[528px] mx-auto bg-blue-500 rounded-df p-5 md:px-6 lg:px-[56px] lg:py-[64px] bg-[url('/images/containers/bg-jumbotron.webp')] bg-cover bg-center">
        <div className="md:grid md:grid-cols-2 md:gap-x-[148px]">
          <div className="my-auto">
            <Headings control="h1" text={title} fontColor="text-white" className="lg:leading-[50.4px]" />
            <p className="text-sm lg:text-base font-normal text-white leading-df mt-6">
              {desc}
            </p>
            {
              btn && (
                <Buttons
                  control="primary"
                  isLink={true}
                  url={url}
                  text={btn} className="py-2.5 lg:py-4 px-8 mt-5 lg:mt-[42px] shadow-md"
                />
              )
            }
          </div>
          <div className="mt-5 md:mt-0">
            <div className="relative">
              <Image
                src={image}
                width={1000}
                height={1000}
                alt="Image"
                className="w-full"
              />
              {
                isPill && (
                  <AbsolutePill 
                      position={positionPil}
                      icon={iconPil}
                      title={titlePil}
                      desc={descPil}
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Default