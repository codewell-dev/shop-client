import Image from "next/image";
import React, { ReactElement } from "react";
import { AtSymbolIcon, PhoneArrowUpRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import FooterContacts from "./footer-contact";
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
                <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto mb-10" />
                <ButtonBlue text="book an appoitment" color={true} />
            </div>
            <div>
                {data.map((el: TypeFooterContacts) => (
                    <Link href="/" className="flex items-center gap-3 mb-5">
                        <div className="bg-blue p-3 btn-blue">
                                <el.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h6 className="font-bold uppercase text-xl text-gray-400">{el.title}</h6>
                            <h4 className="font-semibold text-3xl border-black">{el.text}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
}