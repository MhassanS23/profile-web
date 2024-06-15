import Image from 'next/image';

// COMPONENTS
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            {/* SECTION 1 */}
            <div className='flex h-screen justify-center gap-4 sm:flex-col md:flex-row'>
                <div className='sm:w-[100%] sm:mt-[5rem] sm:self-end md:w-[60%] md:self-center font-unbounded font-bold sm:px-4 md:px-8 xl:px-16'>
                    <h1 className='sm:text-xl md:text-xl xl:text-2xl'>Hello,</h1>
                    <h3 className='sm:text-xl md:text-2xl xl:text-3xl text-purple-500'>I am Maulana Hassan Sechuti,</h3>
                    <h1 className='sm:text-2xl md:text-4xl xl:text-6xl'>Web developer</h1>
                </div>

                <div className='relative px-4 flex h-full items-center justify-center self-end sm:w-[95%] md:w-[50%] xl:w-[40%]'>
                    <div className='absolute right-0 sm:top-[0.5rem] md:top-[4.5rem] xl:top-[5rem] xl:top-0 z-0 sm:h-[17rem] sm:w-[17rem] md:h-[20rem] md:w-[20rem] lg:h-[25rem] lg:w-[25rem] xl:h-[35rem] xl:w-[35rem] rounded-full bg-purple-500' />
                    <div className='absolute bottom-0 self-end z-1 relative sm:h-[80%] sm:w-[80%] md:h-[80%] md:w-[100%]'>
                        <Image
                            className='object-cover'
                            src='/pribadi.png'
                            alt='Maul Logo'
                            layout='fill'
                            objectFit='cover'
                            quality={90}
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
