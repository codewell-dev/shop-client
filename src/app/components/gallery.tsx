import React from "react"

export default function Gallery() {
    return (
        <div className=" max-w-7xl mx-auto grid grid-cols-1 gap-2 mt-14 md:grid-cols-4">
            <img src="https://static.wixstatic.com/media/d1468f_2d09309f89224645b1c7e855a6911ba6~mv2.png/v1/fill/w_644,h_642,q_90/d1468f_2d09309f89224645b1c7e855a6911ba6~mv2.webp"
                alt=""
            />
            <img src="https://static.wixstatic.com/media/d1468f_cbce093fda814374aff78ab26798c2dc~mv2.jpg/v1/fill/w_1326,h_1326,q_90/d1468f_cbce093fda814374aff78ab26798c2dc~mv2.webp"
                className="col-span-1 row-span-1 bg-slate-700 md:col-span-2 md:row-span-2"
                alt="images"
            />
            <img src="https://static.wixstatic.com/media/d1468f_087c75b027594a44a08e7e708d3c4876~mv2.jpg/v1/fill/w_644,h_644,q_90/d1468f_087c75b027594a44a08e7e708d3c4876~mv2.webp"
                alt=""
            />
            <img src="https://static.wixstatic.com/media/d1468f_5497eb206d084159a412402f1d6656c1~mv2.png/v1/fill/w_578,h_578,q_90/d1468f_5497eb206d084159a412402f1d6656c1~mv2.webp"
                alt=""
            />
            <img src="https://static.wixstatic.com/media/d1468f_c592c400b9974e10ab66ba4acbaff684~mv2.jpg/v1/fill/w_578,h_580,q_90/d1468f_c592c400b9974e10ab66ba4acbaff684~mv2.webp"
                alt=""
            />
        </div>
    )
}