import Image from "next/image";
import React, { ReactElement } from "react";
import { AtSymbolIcon, PhoneArrowUpRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import ButtonBlue from "./button-blue";
import Link from "next/link";

interface TypeFooterContacts {
    id: number;
    title: string;
    text: string;
    icon: any;
}

let data: TypeFooterContacts[] = [
    {
        id: 1,
        title: "GIVE US A CALL",
        text: "030 92400267",
        icon: PhoneArrowUpRightIcon,
    },
    {
        id: 2,
        title: "EMAIL US",
        text: "cut@andersbarbers.de",
        icon: AtSymbolIcon
    },
    {
        id: 3,
        title: "VISIT US",
        text: "Schwedenstr. 17A, 13357 Berlin",
        icon: MapPinIcon
    },

]

export default function Footer() {
    return <div className="border-t-2 w-full">
        <div className="flex justify-between mx-auto max-w-7xl mt-10">
            <div className="logo">
                <div className="">
                <h6 className="text-xl font-semibold mb-2">Ми в соціальних мережах:</h6>
                    <div className="flex gap-5 mb-4">
                        <img src="https://www.svgrepo.com/show/13639/instagram.svg" className="h-8 w-8" />
                        <img src="https://www.svgrepo.com/show/13643/facebook.svg" className="h-8 w-8" />
                        <img src="https://www.svgrepo.com/show/13671/youtube.svg" className="h-8 w-8" />
                        <img src="https://www.svgrepo.com/show/13677/twitter.svg" className="h-8 w-8" />
                    </div>

                </div>
                <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto mb-6" />
                <ButtonBlue text="Записатися" color={true} />
            </div>
            <ul className="menu__list">
                <li className="mb-1 font-semibold text-xl">Меню</li>
                <li>Домашня сторінка</li>
                <li>Школа</li>
                <li>Ціни</li>
                <li>Школа</li>
                <li>Ціни</li>
            </ul>

            <ul className="menu__list">
                <li className="mb-1 font-semibold  text-xl">Магазин</li>
                <li>Домашня сторінка</li>
                <li>Школа</li>
                <li>Ціни</li>
            </ul>


            <div>
                {data.map((el: TypeFooterContacts) => (
                    <Link key={el.id} href="/" className="flex items-center gap-3 mb-5">
                        <div className="bg-blue p-3 btn-blue">
                            <el.icon className="h-6 w-6 text-white" />

                        </div>
                        <div>
                            <h6 className="font-bold uppercase text-sm text-gray-400">{el.title}</h6>
                            <h4 className="font-semibold text-xl border-black">{el.text}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
}