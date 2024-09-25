import React from "react";
import { ScissorsIcon } from '@heroicons/react/20/solid'
import ButtonBlue from "./button-blue";

export default function Section() {
    return <div className="mx-auto section">
        <div className="section__inner">
            <div className="section__content flex justify-center items-center text-white flex-col mx-auto w-2/4">
                <div className="flex items-center justify-center mb-4">
                    <hr className="w-20 border-white border-1" />
                    <ScissorsIcon className="w-12 h-12 -rotate-90" />
                    <hr className="w-20 border-white border-1" />
                </div>
                <h1 className="text-bold text-5xl mb-5 text-center">BarHead: Місце для Стильних Чоловіків</h1>
                <p className="text-2xl text-gray-400 mb-3">Завітайте до нас ще сьогодні й отримайте ідеальний вигляд відразу ж!</p>
                <div className="section__btns flex gap-5">
                    <ButtonBlue text="Наші послуги" color={true} />
                    <ButtonBlue text="Забронювати зараз" color={false} />
                </div>
            </div>
        </div>
    </div>
}