'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

// ICONS
import { FaReact, FaBootstrap, FaCss3Alt } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiChakraui, SiJavascript } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiSwiper, SiRedux } from 'react-icons/si';

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
                    style={{ padding: '1rem 0.5rem 1rem 0rem', borderRadius: '1rem' }}
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
                    }}>
                    <SwiperSlide className='rounded shadow-lg shadow-purple-1'>
                        <Image
                            src='/TODO.png'
                            className='w-full rounded sm:h-[10rem] lg:h-[15rem]'
                            alt='Project 1'
                            width={420}
                            height={320}
                            quality={90}
                            priority
                        />
                        <div className='flex sm:h-[18rem] lg:h-[15rem] flex-col items-center justify-center gap-2 px-4 py-2 text-center'>
                            <p className='text-xl font-bold'>Todo List</p>
                            <p className='text-center text-base text-gray-700'>
                                This website is used to make it easier for us to organize our activities by listing our activities
                                in a day.
                            </p>
                            <a
                                href='https://to-do-self-sigma.vercel.app/'
                                className='text-body-6 mb-6 rounded-2xl bg-blue-1 px-4 py-1 font-raleway font-bold font-medium text-white shadow-md shadow-blue-1'>
                                see website
                            </a>
                            <div className='mb-4 flex flex-row flex-wrap items-center justify-center gap-2'>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-blue-1`}>
                                    <FaReact size={'1.2rem'} className='text-blue-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-yellow-1`}>
                                    <SiJavascript size={'1.2rem'} className='text-yellow-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-purple-1`}>
                                    <FaBootstrap size={'1.2rem'} className='text-purple-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-2`}>
                                    <FaCss3Alt size={'1.2rem'} className='text-blue-2' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='rounded shadow-lg shadow-purple-1'>
                        <Image
                            src='/project-1.png'
                            className='w-full rounded sm:h-[10rem] lg:h-[15rem]'
                            alt='Project 1'
                            width={420}
                            height={320}
                            quality={90}
                            priority
                        />
                        <div className='flex sm:h-[18rem] lg:h-[15rem] flex-col items-center justify-center gap-2 px-4 py-2 text-center'>
                            <p className='text-xl font-bold'>Movie Project</p>
                            <p className='text-center text-base text-gray-700'>
                                This project is a website that makes it easy for us to find information about a movie.
                            </p>
                            <a
                                href='https://portofolio-hassan.vercel.app/'
                                className='text-body-6 mb-6 rounded-2xl bg-blue-1 px-4 py-1 font-raleway font-bold font-medium text-white shadow-md shadow-blue-1'>
                                see website
                            </a>
                            <div className='mb-4 flex flex-row flex-wrap items-center justify-center gap-2'>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-2`}>
                                    <FaCss3Alt size={'1.2rem'} className='text-blue-2' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-yellow-1`}>
                                    <TbBrandJavascript size={'1.2rem'} className='text-yellow-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-1`}>
                                    <FaReact size={'1.2rem'} className='text-blue-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-3`}>
                                    <SiChakraui size={'1.2rem'} className='text-blue-3' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-2`}>
                                    <SiSwiper size={'1.2rem'} className='text-blue-2' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple-1`}>
                                    <SiRedux size={'1.2rem'} className='text-purple-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-orange-1`}>
                                    <IoLogoFirebase size={'1.2rem'} className='text-orange-1' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='rounded shadow-lg shadow-purple-1'>
                        <Image
                            src='/rental.png'
                            className='w-full rounded sm:h-[10rem] lg:h-[15rem]'
                            alt='Project 1'
                            width={420}
                            height={320}
                            quality={90}
                            priority
                        />
                        <div className='flex sm:h-[18rem] lg:h-[15rem] flex-col items-center justify-center gap-2 px-4 py-2 text-center'>
                            <p className='text-xl font-bold'>Rental Car</p>
                            <p className='text-center text-base text-gray-700'>
                                This project is a car rental website that have features on this website to search for cars that
                                are available for rent.
                            </p>
                            <a
                                href='https://sewo-mobil.vercel.app/'
                                className='text-body-6 mb-6 rounded-2xl bg-blue-1 px-4 py-1 font-raleway font-bold font-medium text-white shadow-md shadow-blue-1'>
                                see website
                            </a>
                            <div className='mb-4 flex flex-row flex-wrap items-center justify-center gap-2'>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-2`}>
                                    <FaCss3Alt size={'1.2rem'} className='text-blue-2' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-yellow-1`}>
                                    <TbBrandJavascript size={'1.2rem'} className='text-yellow-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-1`}>
                                    <FaReact size={'1.2rem'} className='text-blue-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-3`}>
                                    <SiChakraui size={'1.2rem'} className='text-blue-3' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-blue-2`}>
                                    <SiSwiper size={'1.2rem'} className='text-blue-2' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple-1`}>
                                    <SiRedux size={'1.2rem'} className='text-purple-1' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}
            <div className='btn-tanda-cast mt-3 flex items-center justify-center gap-2'>
                <div ref={prevRef} className='swiper-prev shadow-lg shadow-purple'>
                    <p className='text-sm font-bold'>Prev</p>
                </div>
                <div ref={nextRef} className='swiper-next shadow-lg shadow-purple'>
                    <p className='text-sm font-bold'>Next</p>
                </div>
            </div>
        </>
    );
}
