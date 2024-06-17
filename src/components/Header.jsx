'use client';

export default function Header({ className, text, title, children }) {
    return (
    <div>
        <h1
            className={`${className} mb-1 text-lg text-center font-raleway font-bold text-purple-1`}>
            {text || children}
        </h1>
        <h1
            className={`${className} mb-1 text-2xl text-center font-unbounded font-bold`}>
            {title}
        </h1>
    </div>
    );
}
