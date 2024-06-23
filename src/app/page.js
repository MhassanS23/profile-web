'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// COMPONENTS
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TabProject from '@/components/TabProject';
import Header from '@/components/Header';

// ICONS
import { FaReact, FaHtml5, FaBootstrap, FaNodeJs, FaLaravel, FaCss3Alt } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { SiChakraui, SiJavascript, SiPostgresql, SiEjs } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
export default function Home() {
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target,
                            { y: -100, opacity: 0 },
                            { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out' },
                        );
                    }
                });
            },
            { threshold: 0.5 },
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <>
            <Navbar />
            {/* SECTION 1 */}
            <div className='flex gap-4 sm:h-[95vh] sm:flex-col md:h-[90vh] md:flex-row xl:h-screen'>
                <div className='font-unbounded font-bold sm:mt-[5rem] sm:w-[100%] sm:self-end sm:px-4 md:mt-[0rem] md:w-[60%] md:self-center md:px-4 xl:px-12'>
                    <h1 className='sm:text-xl md:text-xl xl:text-2xl'>Hello,</h1>
                    <h3 className='text-purple-1 sm:text-lg lg:text-2xl xl:text-3xl'>I am Maulana Hassan Sechuti,</h3>
                    <h1 className='sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>Web developer</h1>
                </div>

                <div className='lg:w-[40%]] relative flex h-full items-center justify-center px-4 sm:w-full md:w-[50%]'>
                    <div className='absolute right-0 z-0 rounded-full bg-purple-1 sm:top-0 sm:h-[17rem] sm:w-[17rem] md:top-[5rem] md:h-[20rem] md:w-[20rem] lg:h-[25rem] lg:w-[25rem] xl:h-[30rem] xl:w-[30rem]' />
                    <div className='z-1 absolute relative bottom-0 rounded-full sm:h-[17rem] sm:w-[17rem] md:h-[20rem] md:w-[20rem] lg:h-[30rem] lg:w-[30rem] xl:h-[32rem] xl:w-[32rem]'>
                        <Image
                            ref={imageRef}
                            className='rounded-full py-2 shadow-2xl shadow-blue-1 sm:h-[100%] sm:w-[100%]'
                            src='/pribadi.png'
                            alt='Maul Logo'
                            fill
                            quality={90}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className='mb-[1rem] mt-4 flex sm:h-[100%] lg:h-screen w-full flex-col items-center justify-center gap-2 rounded-xl bg-blue-1 text-white sm:h-[100%] sm:px-4 sm:py-4 lg:px-12 lg:py-2'>
                <Header text={`biography`} title={'Who am I?'} />
                <div className='mb-[1rem] mt-2 flex w-full items-center text-white sm:flex-col sm:gap-4 lg:flex-row lg:gap-[5rem]'>
                    <div className='rounded-full sm:h-[12rem] sm:w-[12rem] md:h-[15rem] md:w-[15rem] lg:h-[20rem] lg:w-[20rem]'>
                        <Image
                            className='rounded-full py-2 shadow-2xl shadow-blue-1 sm:h-[100%] sm:w-[100%]'
                            src='/aboutme.jpg'
                            alt='Maul Logo'
                            width={220}
                            height={110}
                            quality={90}
                            priority
                        />
                    </div>

                    <div className='flex flex-col gap-2 sm:w-[100%] sm:text-center lg:w-[60%] lg:text-left xl:w-[70%]'>
                        <p className={`mb-1 font-raleway text-lg font-bold text-purple-1`}>About Me</p>
                        <p className={`text-whitesmoke mb-1 font-raleway text-2xl font-bold`}>
                            Maulana Hassan Sechuti Detail Profile
                        </p>
                        <p className={`text-md mb-1 font-raleway font-medium text-white`}>
                            Hello, I am maulana graduate student from upn veteran university of east java. Currently, I am
                            interested in frontend and backend website development.
                        </p>
                        <p className={`text-md mb-1 font-raleway font-medium text-white`}>
                            Have experience in developing web-based systems as part of the final project determining menu
                            recommendations for promotions that were successfully implemented in an umkm shop. I am committed to
                            developing a career in website development by following the development of technology in the future.
                        </p>
                        <p className={`text-md mb-1 font-raleway font-medium text-white`}>
                            There are several tech stacks that I have used in projects including:
                        </p>

                        <div className='flex flex-wrap items-center justify-center gap-4'>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-orange-1`}>
                                <FaHtml5 size={'1.5rem'} className='text-orange-1' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>Html</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-blue-2`}>
                                <FaCss3Alt size={'1.5rem'} className='text-blue-2' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>Css</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-yellow-1`}>
                                <TbBrandJavascript size={'1.5rem'} className='text-yellow-1' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>Javascript</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple-1`}>
                                <FaBootstrap size={'1.5rem'} className='text-purple-1' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>Bootstrap</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-blue-2`}>
                                <RiTailwindCssFill size={'1.5rem'} className='text-blue-2' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>Tailwind</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-green-1`}>
                                <FaNodeJs size={'1.5rem'} className='text-green-1' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>Expressjs</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-blue-1' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-white`}>
                                <RiNextjsFill size={'1.5rem'} className='text-blue-1' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>NextJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-blue-3`}>
                                <SiChakraui size={'1.5rem'} className='text-blue-3' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>Chakra UI</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-red-1`}>
                                <FaLaravel size={'1.5rem'} className='text-red-1' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>Laravel</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-md shadow-blue-4`}>
                                <BiLogoPostgresql size={'1.5rem'} className='text-blue-4' />
                                <p className='lg:text-md font-bold sm:hidden sm:text-sm md:block'>PostgreSQL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Header title={'Experience'} container={'sm:mt-[2rem] lg:mt-[5rem]'} />
            <div className='mb-[1rem] mt-6 flex h-full w-full justify-center gap-4 sm:flex-col sm:px-4 md:flex-row lg:px-12'>
                <div className='md:w-[50%]'>
                    <Header text={`Field Work Practice`} title={'PT. Infra Solution'} />
                    <div className='rounded shadow-lg shadow-purple-1'>
                        <Image
                            src='/pkl.jpg'
                            className='w-full rounded sm:h-[10rem] lg:h-[15rem]'
                            alt='Project 1'
                            width={420}
                            height={320}
                            quality={90}
                            priority
                        />
                        <div className='flex w-full flex-col gap-2 px-6 pb-4 sm:text-justify lg:text-left'>
                            <div className='font raleway text-center text-lg font-bold text-black'>Frontend Developer</div>
                            <p className={`text-md mb-1 text-center font-raleway font-medium text-black`}>
                                Developed a buying and selling system on the frontend. My job here is slicing pages with
                                responsive and connecting several APIs.
                            </p>
                            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-red-1`}>
                                    <FaLaravel size={'1.2rem'} className='text-red-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-yellow-1`}>
                                    <SiJavascript size={'1.2rem'} className='text-yellow-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-purple-1`}>
                                    <FaBootstrap size={'1.2rem'} className='text-purple-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-blue-2`}>
                                    <FaCss3Alt size={'1.2rem'} className='text-blue-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%]'>
                    <Header text={`Studi Independen`} title={'Binar Academy'} />
                    <div className='rounded shadow-lg shadow-purple-1'>
                        <Image
                            src='/c1.jpg'
                            className='w-full rounded sm:h-[10rem] lg:h-[15rem]'
                            alt='Project 1'
                            width={420}
                            height={320}
                            quality={90}
                            priority
                        />
                        <div className='flex w-full flex-col gap-2 px-6 pb-4 sm:text-justify lg:text-left'>
                            <div className='font raleway text-center text-lg font-bold text-black'>Fullstack Course</div>
                            <p className={`text-md mb-1 text-center font-raleway font-medium text-black`}>
                                Learn various tech stacks about fullstack on the frontend and backend. Here I know the fullstack
                                world from teamwork to developing a system together.
                            </p>
                            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-blue-1`}>
                                    <FaReact size={'1.2rem'} className='text-blue-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-green-1`}>
                                    <FaNodeJs size={'1.2rem'} className='text-green-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-yellow-1`}>
                                    <SiJavascript size={'1.2rem'} className='text-yellow-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-purple-1`}>
                                    <FaBootstrap size={'1.2rem'} className='text-purple-1' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-blue-2`}>
                                    <FaCss3Alt size={'1.2rem'} className='text-blue-2' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple shadow-blue-4`}>
                                    <SiPostgresql size={'1.2rem'} className='text-blue-4' />
                                </div>
                                <div
                                    className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-purple`}>
                                    <SiEjs size={'1.2rem'} className='text-purple' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex w-full flex-col items-center justify-center gap-4 py-6 sm:mb-[2rem] sm:mt-6 sm:h-full sm:px-4 md:mb-[1rem] md:mt-2 xl:h-screen lg:px-12'>
                <TabProject />
            </div>

            <Footer />
        </>
    );
}
