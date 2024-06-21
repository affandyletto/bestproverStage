'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickGroup = (props: any) => {
    const { data, Component, countDesktop, countTablet, countMobile, slidesToScroll, countRows, className } = props;
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: countDesktop || 4,
        slidesToScroll: slidesToScroll,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: countTablet || 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: countMobile || 1,
                }
            }
        ]
    };

    const [groupedData, setGroupedData] = useState<any[]>([]);

    const groupData = useCallback((data: any[]) => {
        const result = [];
        for (let i = 0; i < data.length; i += countRows) {
            result.push(data.slice(i, i + countRows));
        }
        setGroupedData(result);
    }, [countRows]);

    useEffect(() => {
        groupData(data);
    }, [data, groupData]);

    return (
        <Slider {...settings}>
            {groupedData.map((group: any[], index: number) => (
                <div key={index} className={className}>
                    {group.map((item: any, i: number) => (
                        <div key={i} className="w-full mb-4">
                            <Component data={item} />
                        </div>
                    ))}
                </div>
            ))}
        </Slider>
    );
}

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="hidden absolute z-10 top-1/2 -translate-y-1/2 -right-3 lg:-right-5 cursor-pointer md:flex items-center justify-center w-8 lg:w-11 h-8 lg:h-11 bg-white rounded-full border border-gray-100"
            onClick={onClick}>
            <FaChevronRight />
        </div>
    );
}

const PrevArrow = (props: any) => {
    const { onClick, currentSlide } = props;
    if (currentSlide === 0) {
        return null;
    }
    return (
        <div className="hidden absolute z-10 top-1/2 -translate-y-1/2 -left-3 lg:-left-5 cursor-pointer md:flex items-center justify-center w-8 lg:w-11 h-8 lg:h-11 bg-white rounded-full border border-gray-100"
            onClick={onClick}>
            <FaChevronLeft />
        </div>
    );
}

export default SlickGroup;
