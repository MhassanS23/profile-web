'use client';

export default function Header({ className, text, children }) {
    return (
        <h1
            className={`${className} mb-1 text-2xl font-raleway font-bold font-medium text-black`}>
            {text || children}
        </h1>
    );
}
