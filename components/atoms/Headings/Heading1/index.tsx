import React from 'react'

const Heading1 = (props: any) => {
    const { text, fontStyle, fontColor, className } = props
    return (
        <h1 className={`text-2xl lg:text-[42px] ${fontStyle || 'font-semibold'} ${fontColor || 'text-black-500'} ${className}`}>
            {text}
        </h1>
    )
}

export default Heading1