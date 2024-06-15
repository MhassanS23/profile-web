'use client';

export default function Button({ className, text, children, isLoading, ...rest }) {
    return (
        <button
            {...rest}
            disabled={isLoading}
            className={`${className} text-body-6 px-4 py-2 font-raleway font-bold font-medium text-white`}>
            {text || children}
        </button>
    );
}
