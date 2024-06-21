import React from 'react'

const Heading5 = (props: any) => {
    const { text, fontStyle, fontColor, className } = props
    return (
        <h5 className={`text-xl lg:text-2xl ${fontStyle || 'font-semibold'} ${fontColor || 'text-black-500'} ${className}`}>
            {text}
        </h5>
    )
}

export default Heading5