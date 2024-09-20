import React from "react";

export default function HomePage() {
    return <div className="mx-auto section">
        <div className="section__inner">
            <div className="section__content flex justify-center items-center text-white flex-col mx-auto">
                <h1 className="text-bold text-5xl mb-5 text-center">BarHead: Місце для Стильних Чоловіків</h1>
                <p className="text-2xl text-gray-400 mb-3">Завітайте до нас ще сьогодні й отримайте ідеальний вигляд відразу ж!</p>
                <div className="section__btns flex gap-2">
                    <button
                        type="submit"
                        className="section__btn-order rounded-md px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Забронювати зараз
                    </button>
                    <button
                        type="submit"
                        className="section__btn-our two border-sky-100 px-10 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Наші послуги
                    </button>
                </div>
            </div>
        </div>
    </div>
}