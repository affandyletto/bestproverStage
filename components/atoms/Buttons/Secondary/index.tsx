import React from 'react'
import Link from "next/link";

const Secondary = (props: any) => {
    const { text, isLink, url, className, type, onClick } = props
    return (
        <>
            {
                isLink ? (
                    <Link
                        href={url || '/'}
                        className={`inline-block rounded-full text-base font-semibold text-black-500 bg-white border border-gray-100 ${className}`}
                        onClick={onClick} >
                        {text}
                    </Link>
                ) : (
                    <button
                        type={type || 'button'}
                        className={`inline-block rounded-full text-base font-semibold text-black-500 bg-white border border-gray-100 ${className}`}
                        onClick={onClick} >
                        {text}
                    </button>
                )
            }

        </>
    )
}

export default Secondary