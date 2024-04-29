import React from "react";
import "../../index.css";

export function FilterSelect({items }) {
    return (
        <>
            <select className="bg-clr-light-gray py-2 px-4 cursor-pointer rounded-md focus:outline-none text-clr-white">
                {items && items.map(item => ( // Verifica si items es válido antes de llamar a map
                    <option key={item.id} value={item.title}>
                        {item.title}
                    </option>
                ))}
            </select>
        </>
    );
}
