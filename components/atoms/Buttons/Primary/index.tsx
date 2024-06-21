import React from 'react'
import Link from "next/link";

const Primary = (props: any) => {
    const { text, isLink, url, className, type, onClick } = props
    return (
        <>
            {
                isLink ? (
                    <Link 
                        href={url || '/'}
                        className={`inline-block rounded-full text-base font-semibold text-blue-500 bg-orange-500 border-orange-500 ${className}`}
                        onClick={onClick} >
                        {text}
                    </Link>
                ) : (
                    <button 
                        type={type}
                        className={`inline-block rounded-full text-base font-semibold text-blue-500 bg-orange-500 border-orange-500 ${className}`}
                        onClick={onClick} >
                        {text}
                    </button>
                )
            }

        </>
    )
}

export default Primary