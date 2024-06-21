'use client'
import React, { useState } from 'react'
import { Headings } from '@/components/atoms'
import { CardFaq } from '@/components/molecules';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    const faqData = [
        {
            question: 'What is trustprover?',
            answer: 'trustprover is an innovative platform that aggregates reviews from various review sites, compiling them into a comprehensive overall rating for businesses and products. Our mission is to provide users with a holistic view of consumer feedback, making it easier to make informed decisions.'
        },
        {
            question: 'Can I write a review directly on trustprover?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
        {
            question: 'How does trustprover gather reviews?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
        {
            question: 'Is trustprover free to use?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
        {
            question: 'How often is the information on trustprover updated?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
        {
            question: 'Can businesses manage their profile on trustprover?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
        {
            question: 'What should I do if I find incorrect information on trustprover?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
        {
            question: 'How does trustprover ensure the authenticity of reviews?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
        {
            question: 'Can I see individual reviews on trustprover, or only the aggregated rating?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
        {
            question: 'How can I contact trustprover for support or inquiries? ',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum dolores provident exercitationem autem iusto odio itaque consequatur tenetur iste recusandae sapiente id illum quasi inventore in harum dicta earum numquam est odit rem, consequuntur explicabo? Perferendis quas adipisci tempore quasi quisquam, laboriosam mollitia explicabo, ab enim aperiam temporibus tempora?'
        },
    ];

    return (
        <section className="bg-white px-5 pb-5 pt-5 lg:pt-[130px] lg:pb-[136px]">
            <div className="container mx-auto">
                <div className="max-w-[676px] mx-auto text-center mb-5">
                    <Headings control="h1" text="Frequently asked questions" className="mb-2 leading-[50.4px]" />
                    <p className="text-base text-gray-500 px-2 leading-[25.6px]">
                        Got a question? We&apos;re here to answer! If you don&apos;t see your question here, drop us a line on our Contact Page.
                    </p>
                </div>
                <div className="max-w-[820px] mx-auto">
                    {faqData.map((item, index) => (
                        <CardFaq
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq