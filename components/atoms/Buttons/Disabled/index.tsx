import React from 'react'
import Link from "next/link";

const Disabled = (props: any) => {
    const { text, isLink, url, className, type } = props
    return (
        <>
            {
                isLink ? (
                    <Link href={url || '/'}
                        className={`inline-block rounded-full text-base font-semibold text-gray-600 bg-gray-300 border border-gray-300 ${className}`}>
                        {text}
                    </Link>
                ) : (
                    <button type={type || 'button'}
                        className={`inline-block rounded-full text-base font-semibold text-gray-600 bg-gray-300 border border-gray-300 ${className}`}>
                        {text}
                    </button>
                )
            }

        </>
    )
}

export default Disabled