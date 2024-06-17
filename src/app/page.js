import Image from 'next/image';

// COMPONENTS
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TabProject from '@/components/TabProject';
import Header from '@/components/Header';

// ICONS
import { FaReact } from 'react-icons/fa';
export default function Home() {
    return (
        <>
            <Navbar />
            {/* SECTION 1 */}
            <div className='flex gap-4 sm:h-[90vh] sm:flex-col md:h-[90vh] md:flex-row xl:h-screen'>
                <div className='font-unbounded font-bold sm:mt-[5rem] sm:w-[100%] sm:self-end sm:px-4 md:mt-[0rem] md:w-[60%] md:self-center md:px-4 xl:px-12'>
                    <h1 className='sm:text-xl md:text-xl xl:text-2xl'>Hello,</h1>
                    <h3 className='text-purple-1 sm:text-lg lg:text-2xl xl:text-3xl'>I am Maulana Hassan Sechuti,</h3>
                    <h1 className='sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>Web developer</h1>
                </div>

                <div className='lg:w-[40%]] relative flex h-full items-center justify-center px-4 sm:w-full md:w-[50%]'>
                    <div className='absolute right-0 z-0 rounded-full bg-purple-1 sm:top-0 sm:h-[17rem] sm:w-[17rem] md:top-[5rem] md:h-[20rem] md:w-[20rem] lg:h-[25rem] lg:w-[25rem] xl:h-[30rem] xl:w-[30rem]' />
                    <div className='z-1 absolute relative bottom-0 rounded-full sm:h-[17rem] sm:w-[17rem] md:h-[20rem] md:w-[20rem] lg:h-[30rem] lg:w-[30rem] xl:h-[32rem] xl:w-[32rem]'>
                        <Image
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

            <div className='mb-[1rem] mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-blue-1 text-white sm:h-[100%] sm:px-4 sm:py-4 lg:h-[70vh] lg:px-12 lg:py-0'>
                <Header text={`biography`} title={'Who am I?'} />
                <div className='mb-[1rem] mt-2 flex w-full items-center text-white sm:flex-col sm:gap-4 lg:flex-row lg:gap-[5rem]'>
                    <div className='rounded-full sm:h-[17rem] sm:w-[17rem] md:h-[20rem] md:w-[20rem] lg:h-[25rem] lg:w-[25rem] xl:h-[30rem] xl:w-[30rem]'>
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

                    <div className='flex flex-col gap-2 sm:w-[100%] sm:text-center lg:w-[50%] lg:text-left'>
                        <p className={`mb-1 font-raleway text-lg font-bold text-purple-1`}>About Me</p>
                        <p className={`text-whitesmoke mb-1 font-raleway text-2xl font-bold`}>
                            Maulana Hassan Sechuti Detail Profile
                        </p>
                        <p className={`text-md mb-1 font-raleway font-medium text-white`}>
                            lorem ipsum amet dolor sukamnua dwaofwa awfawgaw awdawwad gawdaw dwa daw dwa awd gwa gwag aw
                        </p>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-[1rem] mt-2 flex h-screen w-full flex-col items-center justify-center gap-4 sm:px-4 lg:px-12'>
                <TabProject />
            </div>

            <div className='mb-[1rem] mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-xl text-blue-1 sm:h-[100%] sm:px-4 sm:py-4 lg:h-[70vh] lg:px-12 lg:py-0'>
                <Header text={`Experience`} title={'Field Work Practice'} />
                <div className='border-md border-blue-1 shadow-purple-1 rounded shadow-xl mb-[1rem] mt-2 flex w-full items-center gap-4 text-white sm:flex-col lg:flex-row'>
                    <Image
                        src='/pkl.jpg'
                        className='rounded sm:w-[100%] lg:w-[50%]'
                        alt='Project 1'
                        width={320}
                        height={220}
                        quality={90}
                        priority
                    />
                    <div className='flex flex-col gap-2 sm:w-[100%] sm:text-justify lg:w-[50%] lg:text-left px-6 pb-4'>
                        <div className='font raleway text-lg font-bold text-black text-center'>PT. Infra Solution</div>
                        <p className={`text-md mb-1 font-raleway font-medium text-black`}>
                            lorem ipsum amet dolor sukamnua dwaofwa awfawgaw awdawwad gawdaw dwa daw dwa awd gwa gwag aw
                        </p>
                        <div className='flex flex-row gap-2 items-center'>
                            <p className='font-unbounded text-bold text-black text-sm'>Tech Stack:</p>
                            <div
                                className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-lg shadow-purple shadow-purple-1`}>
                                <FaReact size={'1rem'} className='text-purple-500' />
                            </div>
                            <div
                                className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-lg shadow-purple shadow-purple-1`}>
                                <FaReact size={'1rem'} className='text-purple-500' />
                            </div>
                            <div
                                className={`text-md cursor-pointer rounded-full bg-white px-2 py-2 font-raleway text-black shadow-lg shadow-lg shadow-purple shadow-purple-1`}>
                                <FaReact size={'1rem'} className='text-purple-500' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-[1rem] mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-xl text-blue-1 sm:h-[100%] sm:px-4 sm:py-4 lg:h-[70vh] lg:px-12 lg:py-0'>
                <Header text={`Studi Independen`} title={'Binar Academy'} />
                <div className='mb-[1rem] mt-2 flex w-full items-center gap-4 text-white sm:flex-col lg:flex-row'>
                    <Image
                        src='/c1.jpg'
                        className='rounded sm:w-[100%] lg:w-[50%]'
                        alt='Project 1'
                        width={320}
                        height={220}
                        quality={90}
                        priority
                    />

                    <div className='flex flex-col gap-2 sm:w-[100%] sm:text-center lg:w-[50%] lg:text-left'>
                        <p className={`text-md mb-1 font-raleway font-medium text-black`}>
                            lorem ipsum amet dolor sukamnua dwaofwa awfawgaw awdawwad gawdaw dwa daw dwa awd gwa gwag aw
                        </p>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                            <div
                                className={`text-md flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-raleway text-black shadow-lg shadow-md shadow-purple shadow-purple-1`}>
                                <FaReact size={'1.5rem'} className='text-purple-500' />
                                <p className='lg:text-md font-bold sm:text-sm'>ReactJS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
