import React from 'react'

const Heading4 = (props: any) => {
    const { text, fontStyle, fontColor, className } = props
    return (
        <h5 className={`text-2xl lg:text-[28px] ${fontStyle || 'font-semibold'} ${fontColor || 'text-black-500'} ${className}`}>
            {text}
        </h5>
    )
}

export default Heading4