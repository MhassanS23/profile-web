'use client';
import React, { useEffect, useState, Fragment } from 'react';
import Image from 'next/image';

// COMPONENT
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import Button from './Button';

// ICONS
import { AiFillHome, AiFillQuestionCircle, AiFillCaretDown } from 'react-icons/ai';
import { RiCustomerService2Fill, RiContactsBook2Fill, RiMenu2Line, RiCloseFill, RiLoginCircleLine } from 'react-icons/ri';

const products = [
    {
        name: 'Homepage',
        description: 'Get a better information in our website',
        href: '#',
        icon: AiFillHome,
    },
    {
        name: 'Our Service',
        description: 'Services provided at waroenk bromo',
        href: '#',
        icon: RiCustomerService2Fill,
    },
    {
        name: 'Why Us',
        description: 'Reasons why customers should choose waroenk bromo',
        href: '#',
        icon: AiFillQuestionCircle,
    },
    {
        name: 'Contact',
        description: 'Waroenk bromo contact information',
        href: '#',
        icon: RiContactsBook2Fill,
    },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    // STATES
    const [navActive, setNavActive] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // ROUTER
    // NEXTAUTH
    // FUNCTION
    const changeNav = () => {
        window.scrollY >= 30 ? setNavActive(true) : setNavActive(false);
    };

    // USEEFFECT
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, []);

    return (
        <header className={`${navActive ? 'bg-white opacity-100' : 'bg-white opacity-80'} shadow-xl border-2 rounded-br-xl rounded-bl-xl fixed z-[2] w-full transition duration-150 py-4`}>
            <nav
                className='mx-auto flex max-w-7xl items-center justify-between font-raleway font-black sm:px-4 lg:px-4'
                aria-label='Global'>
                <div className='flex'>
                    <a href='/'>
                        <Image
                            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                            src='/maul.png'
                            alt='Maul Logo'
                            width={70}
                            height={15}
                            quality={100}
                            priority
                        />
                    </a>
                </div>

                <div className='flex px-2 lg:hidden'>
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className='sr-only'>Buka Menu</span>
                        <RiMenu2Line className='h-6 w-6 text-black' aria-hidden='true' />
                    </button>
                </div>

                <div className='items-center justify-between gap-4 font-raleway sm:hidden lg:flex'>
                    <p>About</p>
                    <p>Portofolio</p>
                    <p>Contact</p>
                </div>

                <Button className={'rounded-lg bg-black sm:hidden lg:block'}>Download CV</Button>
            </nav>

            <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className='fixed inset-0 z-10' />
                <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-2/4 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        <a href='#' className='-m-1.5 p-1.5'>
                            <Image
                                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                                src='/maul.png'
                                alt='Maul Logo'
                                width={60}
                                height={15}
                                priority
                            />
                        </a>
                        <button
                            type='button'
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className='sr-only'>Tutup menu</span>
                            <RiCloseFill className='h-6 w-6' aria-hidden='true' />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                <Disclosure as='div' className='-mx-3'>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                                Menu
                                                <AiFillCaretDown
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden='true'
                                                />
                                            </Disclosure.Button>
                                            <Transition
                                                as={Fragment}
                                                enter='transition ease-out duration-500'
                                                enterFrom='opacity-0 translate-y-1'
                                                enterTo='opacity-100 translate-y-0'
                                                leave='transition ease-in duration-300'
                                                leaveFrom='opacity-100 translate-y-0'
                                                leaveTo='opacity-0 translate-y-1'>
                                                <Disclosure.Panel className='mt-2 space-y-2'>
                                                    {[...products].map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as='a'
                                                            href={item.href}
                                                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className='flex flex-col gap-2 py-6 text-black'>
                                <a href='/login' className='rounded-full px-2 py-2 text-sm font-semibold leading-6'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <span>Masuk</span>
                                        <RiLoginCircleLine className='h-5 w-5' />
                                    </div>
                                </a>
                                <a
                                    href='/register'
                                    className='rounded-full px-4 py-2 text-center text-sm font-semibold leading-6'>
                                    Daftar
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
