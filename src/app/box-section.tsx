import React from "react";
import { ScissorsIcon } from '@heroicons/react/20/solid'

interface TypeBoxSection {
    title: string;
    text: string;
    center?: boolean;
    logo?: boolean
}

export default function BoxSection({title, text, center, logo}: TypeBoxSection) {
    return (
        <div className="div">
            <div className={`flex items-center ${center && `justify-center`} mt-20`}>
                <hr className={`${logo ? `border-white` : `border-black`} w-14 border-1`} />
                <ScissorsIcon className="w-8 h-8 -rotate-90" />
                <hr className={`${logo ? `border-white` : `border-black`} w-14 border-1`} />
            </div>
            <h5 className={`${center && `text-center`} text-4xl mt-5 font-semibold`}>{title}</h5>
            <p className={`${center && `text-center`} mt-5 mb-5`}>
                {text}
            </p>
        </div>

    )
}