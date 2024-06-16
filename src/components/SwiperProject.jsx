'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

// ICONS
import { FaReact } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function SwiperProject() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [navigationEnabled, setNavigationEnabled] = useState(false);

    useEffect(() => {
        setNavigationEnabled(true);
    }, []);

    return (
        <>
            {navigationEnabled && (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    modules={[Navigation]}
                    onSwiper={(swiper) => {
                        if (swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.update();
                        }
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide className='shadow-purple-1 rounded shadow-lg'>
                        <Image
                            src='/project-1.png'
                            className='w-full rounded'
                            alt='Project 1'
                            width={420}
                            height={320}
                            quality={90}
                            priority
                        />
                        <div className='flex flex-col items-center justify-center gap-2 px-4 py-2 text-center'>
                            <p className='text-xl font-bold'>Movie Project</p>
                            <p className='text-justify text-base text-gray-700'>
                                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                                loremloremloremlorem
                            </p>
                            <FaReact size={'1rem'} className='mb-6 text-center' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-purple-1 rounded shadow-lg'>
                        <Image
                            src='/project-1.png'
                            className='w-full rounded'
                            alt='Project 1'
                            width={420}
                            height={320}
                            quality={90}
                            priority
                        />
                        <div className='flex flex-col items-center justify-center gap-2 px-4 py-2 text-center'>
                            <p className='text-xl font-bold'>Movie Project</p>
                            <p className='text-justify text-base text-gray-700'>
                                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                                loremloremloremlorem
                            </p>
                            <FaReact size={'1rem'} className='mb-6 text-center' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-purple-1 rounded shadow-lg'>
                        <Image
                            src='/project-1.png'
                            className='w-full rounded'
                            alt='Project 1'
                            width={420}
                            height={320}
                            quality={90}
                            priority
                        />
                        <div className='flex flex-col items-center justify-center gap-2 px-4 py-2 text-center'>
                            <p className='text-xl font-bold'>Movie Project</p>
                            <p className='text-justify text-base text-gray-700'>
                                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                                loremloremloremlorem
                            </p>
                            <FaReact size={'1rem'} className='mb-6 text-center' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}
            <div className='btn-tanda-cast flex items-center justify-center'>
                <div ref={prevRef} className='swiper-prev'>
                    <FaChevronLeft />
                </div>
                <div ref={nextRef} className='swiper-next'>
                    <FaChevronRight className='' />
                </div>
            </div>
        </>
    );
}
