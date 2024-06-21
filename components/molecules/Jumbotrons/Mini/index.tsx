import React from 'react'
import { Buttons, Headings } from '@/components/atoms'

const Mini = ({ title, desc, btn, url }: any) => {
  return (

    <div className="container max-w-container mx-auto px-2 lg:px-0">
      <div className="bg-[url('/images/containers/frame-1.webp')] bg-cover bg-right lg:bg-center w-full px-4 lg:px-10 py-5 lg:py-14 rounded-df overflow-hidden">
        <div className="md:grid md:grid-cols-2 text-center md:text-left">
          <div className="my-auto text-white mb-2 lg:mb-0">
            <Headings control="h5" text={title} fontColor="text-white" className="mb-2" />
            <p className="text-base">
              {desc}
            </p>
          </div>
          <div className="my-auto ms-auto">
            <Buttons control="primary" isLink={true} url={url} text={btn} className="py-2.5 lg:py-4 px-8 shadow-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mini