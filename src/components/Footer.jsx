'use client';
import Image from 'next/image';

import { SiGmail } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <footer className='flex items-center justify-center gap-4 flex-col py-4 mt-2'>
                <div className='flex items-center gap-2 justify-center'>
                    <a href='/'>
                        <Image
                            className='relative rounded-full'
                            src='/logo maulana.png'
                            alt='Maul Logo'
                            width={35}
                            height={15}
                            quality={100}
                            priority
                        />
                    </a>
                    <p className='text-md font-unbounded text-purple-1'>portfolio</p>
                </div>

                <div className='flex flex-row items-center justify-center gap-2'>
                    <a href='/'>
                        <SiGmail size={'1rem'} />
                    </a>
                    <a href='/'>
                        <FiGithub size={'1rem'} />
                    </a>
                    <a href='/'>
                        <FaLinkedin size={'1rem'} />
                    </a>
                </div>
            </footer>
            <div className='border-base-300 border-t bg-blue-1 py-2'>
                <p className='text-sm font-unbounded text-sm text-white text-center'>Copyright ©{new Date().getFullYear()}-All right reserved</p>
            </div>
        </>
    );
}
