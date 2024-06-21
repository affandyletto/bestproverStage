import { Container1 } from '@/components/molecules'
import React from 'react'

const Container = () => {
  return (
    <section className="bg-gray-300 px-5 lg:px-20 py-5 lg:py-[180px]">
        <Container1
          title="We are trustprover"
          desc={`As a team at trustprover, we take pride in being a platform that fosters trust and provides security to customers. Our commitment lies in assisting customers with their purchasing decisions by gathering and analyzing reviews and additional information about businesses. We believe that every customer deserves the right to a safe and trustworthy shopping experience. Through our efforts at trustprover, we strive to uphold this right and aid customers in selecting the highest-rated company. "We are trustprover" is not just a statement to us; it's a commitment that we passionately fulfill to earn and maintain the trust of our customers.`}
          image="/images/containers/image-2.webp"
        />
    </section>
  )
}

export default Container