import React from "react";

export default function StatisticItems() {
    return (
        <div className="making__statistics-items flex gap-16 mt-4 mb-6">
            <div className="making__statistics-item">
                <div className="flex items-center font-extrabold">
                    <h3 className="text-7xl">99</h3>
                    <h4 className="text-7xl color-blue">%</h4>
                </div>
                <p className="font-semibold">CUSTOMER SATISFACTION</p>
            </div>

            <div className="making__statistics-item">
                <div className="flex items-center font-extrabold">
                    <h3 className="text-7xl">16</h3>
                    <h4 className="text-7xl color-blue">Y+</h4>
                </div>
                <p className="font-semibold">YEARS OF EXPERIENCE</p>
            </div>
        </div>
    )
}