'use client'
import cx from 'classnames';

type ButtonTypes = {
    text: string,
    handler: () => void,
}

export default function Button({ text, handler }: ButtonTypes) {
    const buttonClasses = cx({
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded': true,
    });
    
    return (
        <button className={buttonClasses} onClick={handler}>{text}</button>
    )
}