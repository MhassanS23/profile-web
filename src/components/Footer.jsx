'use client';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <div className='flex items-end gap-2'>
                <a href='/'>
                    <Image
                        className='relative rounded-full'
                        src='/logo maulana.png'
                        alt='Maul Logo'
                        width={45}
                        height={15}
                        quality={100}
                        priority
                    />
                </a>
                <p className='text-md font-unbounded text-purple-1'>portfolio</p>
            </div>

            <div className=''>
                <p>Copyright Maulana Hassan Sechuti 2024</p>
            </div>
        </footer>
    );
}
