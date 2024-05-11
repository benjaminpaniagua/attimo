import React from "react";
import "../../index.css";

export function FilterSelect({items, responsive=false}) {
    return (
        <>
            <select className={`bg-clr-light-gray/40 text-clr-dark-gray dark:bg-clr-dark-gray/30 dark:text-clr-light-gray py-2 px-4 cursor-pointer rounded-md focus:outline-none ${responsive ? 'lg:w-full' : ''}`}>
                {items && items.map(item => (
                    <option key={item.id} value={item.title}>
                        {item.title}
                    </option>
                ))}
            </select>
        </>
    );
}

