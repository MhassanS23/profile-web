'use client';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <div className='footer-1'>
                <p>Jl Suroyo No.161 Mayangan Kota Probolinggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-456</p>
            </div>

            <div className='footer-2'>
                <ul>
                    <li>
                        <a href='#ourservice'>Our Service</a>
                    </li>
                    <li>
                        <a href='#whyus'>Why Us</a>
                    </li>
                    <li>
                        <a href='#testimonial'>Testimonial</a>
                    </li>
                    <li>
                        <a href='#FAQ'>FAQ</a>
                    </li>
                </ul>
            </div>

            <div className='footer-3'>
                <p>Connect with us</p>
                {/* <ul>
                    <li>
                        <a href='https://www.facebook.com' target='_blank'>
                            <Image src='' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com' target='_blank'>
                            <Image src='' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.twitter.com' target='_blank'>
                            <Image src='' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.gmail.com' target='_blank'>
                            <Image src='' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <Image src='' />
                        </a>
                    </li>
                </ul> */}
            </div>

            <div className='footer-4'>
                <p>Copyright Binar 2022</p>
                {/* <a href=''>Sewo Mobil</a> */}
            </div>
        </footer>
    );
}
