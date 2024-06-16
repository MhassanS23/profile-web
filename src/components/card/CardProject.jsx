'use client';
import Image from 'next/image';

export default function CardProject({ className, text, title, Icon }) {
    return (
        <div className={`${className} shadow-purple-1 max-w-sm overflow-hidden rounded shadow-xl`}>
            <Image
                className='w-full'
                src='/project-1.png'
                alt='Project 1'
                fill
                quality={90}
                priority
            />
            <div className='flex items-center justify-center gap-4'>
                <div className='mb-2 text-xl font-bold'>{title}</div>
                <p className='text-base text-gray-700'>{text}</p>
                <Icon />
            </div>
        </div>
    );
}
