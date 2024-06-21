import { Container1 } from '@/components/molecules'
import React from 'react'

const Container = () => {
  return (
    <section className="bg-gray-300 px-5 lg:px-20 py-5 lg:py-[180px]">
        <Container1
          title="Why join trustprover"
          desc={`At trustprover, we offer more than just a job; we provide an opportunity to be at the forefront of transforming digital trust and security. Joining our team means being part of a dynamic environment where innovation thrives, collaboration is valued, and your contributions truly make an impact. Come be a part of reshaping the future of technology with us.`}
          image="/images/containers/image-3.webp"
        />
    </section>
  )
}

export default Container