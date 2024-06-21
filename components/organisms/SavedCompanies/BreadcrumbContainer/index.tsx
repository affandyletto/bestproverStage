import React from 'react'
import { Breadcrumb } from '@/components/atoms'
import { RiHome2Line } from "react-icons/ri";

const BreadcrumbContainer = () => {
  return (
    <section className="px-5">
        <div className="container max-w-container mx-auto">
            <Breadcrumb parent="Home" icon={<RiHome2Line />} />
        </div>
    </section>
  )
}

export default BreadcrumbContainer