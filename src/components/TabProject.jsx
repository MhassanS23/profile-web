'use client';
import React from 'react';


import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import Header from '@/components/Header';
import SwiperProject from './SwiperProject';

export default function TabProject() {
    return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-2 text-black'>
            <Header text={`the project I m working on`} title={'My Project'} className={'text-blue-1'}/>
            <div className='w-full'>
                <TabGroup>
                    <TabList className='flex items-center justify-center gap-4'>
                        <Tab className='shadow-purple data-[selected]:bg-blue-1 rounded-full px-3 py-1 text-sm/6 font-semibold shadow-lg focus:outline-none data-[hover]:bg-white data-[hover]:text-black data-[selected]:text-white'>
                            Self Project
                        </Tab>
                        <Tab className='shadow-purple data-[selected]:bg-blue-1 rounded-full px-3 py-1 text-sm/6 font-semibold shadow-lg focus:outline-none data-[hover]:bg-white data-[hover]:text-black data-[selected]:text-white'>
                            Team Project
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel className='mt-3'>
                          <SwiperProject/>  
                        </TabPanel>
                        <TabPanel className='mt-3'>
                          <SwiperProject/>  
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
}
