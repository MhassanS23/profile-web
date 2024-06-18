'use client';
import React from 'react';
import Image from 'next/image';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import Header from '@/components/Header';
import SwiperProject from './SwiperProject';

// ICONS
import { FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiSwagger } from 'react-icons/si';

export default function TabProject() {
    return (
        <div className='flex w-full flex-col items-center justify-center gap-2 text-black'>
            <Header text={`the project I m working on`} title={'My Project'} className={'text-blue-1'} />
            <div className='w-full'>
                <TabGroup>
                    <TabList className='flex items-center justify-center gap-4'>
                        <Tab className='rounded-full px-3 py-1 text-sm/6 font-semibold shadow-lg shadow-purple focus:outline-none data-[hover]:bg-white data-[selected]:bg-blue-1 data-[hover]:text-black data-[selected]:text-white'>
                            Self Project
                        </Tab>
                        <Tab className='rounded-full px-3 py-1 text-sm/6 font-semibold shadow-lg shadow-purple focus:outline-none data-[hover]:bg-white data-[selected]:bg-blue-1 data-[hover]:text-black data-[selected]:text-white'>
                            Team Project
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel className='mt-3'>
                            <SwiperProject />
                        </TabPanel>
                        <TabPanel className='mt-4'>
                            <div className='mt-3 flex items-center justify-center'>
                                <div className='rounded shadow-lg shadow-purple-1 sm:w-full md:w-[60%]'>
                                    <Image
                                        src='/swagger.png'
                                        className='w-full rounded sm:h-[10rem] lg:h-[15rem]'
                                        alt='Project 1'
                                        width={420}
                                        height={320}
                                        quality={90}
                                        priority
                                    />
                                    <div className='flex w-full flex-col gap-2 px-6 pb-4 sm:text-justify lg:text-left'>
                                        <div className='font raleway text-center text-lg font-bold text-black'>Backend Team</div>
                                        <p className={`text-md mb-1 text-center font-raleway font-medium text-black`}>
                                            This project is about creating an airplane ticket booking application from login,
                                            register, search for tickets, fill in passenger data, and purchase airplane tickets.
                                            airplane tickets. Here I am included in the backend team which consists of two people
                                            to create the erd, Rest API airplane ticket booking, and API documentation.
                                            Alhamdulillah, our team which is a combination with the frontend team received the
                                            best team award.
                                        </p>
                                        <div className='mb-4 flex flex-row flex-wrap items-center justify-center gap-2'>
                                            <div
                                                className={`text-md shadow-green-1 cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg`}>
                                                <FaNodeJs size={'1.2rem'} className='text-green-1' />
                                            </div>
                                            <div
                                                className={`text-md shadow-yellow-1 cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg`}>
                                                <SiJavascript size={'1.2rem'} className='text-yellow-1' />
                                            </div>
                                            <div
                                                className={`text-md shadow-blue-4 cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg`}>
                                                <SiPostgresql size={'1.2rem'} className='text-blue-4' />
                                            </div>
                                            <div
                                                className={`text-md shadow-blue-4 shadow-green-2 cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg`}>
                                                <SiSwagger size={'1.2rem'} className='text-green-2' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
}
