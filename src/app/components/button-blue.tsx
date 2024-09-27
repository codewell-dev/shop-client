import React from "react";

interface ButtonBlueType {
    text: string;
    color?: boolean;
}

export default function ButtonBlue ({text, color}: ButtonBlueType) {
    return (
        <button
            type="submit"
            className={`${color ? `btn-blue text-white`: `bg-transparent border-4 border-sky-50 hover:bg-blue-50 hover:text-black`} w-56 uppercase rounded-md py-5 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
            {text}
          </button>
    )
}