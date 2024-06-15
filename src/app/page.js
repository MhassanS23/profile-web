import Image from 'next/image';

// COMPONENTS
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className='h-full w-full'>
                {/* SECTION 1 */}
                <div className='flex h-screen justify-center gap-4 sm:flex-col lg:flex-row'>
                    <div className='w-[60%] self-center font-unbounded font-bold sm:px-4 lg:px-16'>
                        <h1 className='sm:text-md lg:text-2xl'>Hello,</h1>
                        <h3 className='sm:text-md lg:text-4xl'>Iam Maulana Hassan Sechuti</h3>
                        <h1 className='sm:text-md lg:text-7xl'>Web developer</h1>
                    </div>

                    <div className='relative self-end sm:w-[100%] lg:w-[40%]'>
                        <div className='w-full'>
                            <Image
                                className='w-full object-cover'
                                src='/pribadi.png'
                                alt='Maul Logo'
                                width={320}
                                height={220}
                                objectFit='cover'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
