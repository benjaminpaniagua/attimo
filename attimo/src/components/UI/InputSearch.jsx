import React from "react";
import { Search} from "lucide-react";
import "../../index.css";

export function InputSearch() {
    return (
        <div className="md:w-full w-72 flex justify-between bg-clr-light-gray/40 text-clr-dark-gray rounded-md overflow-hidden dark:bg-clr-dark-gray/30 dark:text-clr-light-gray">
            <input className="w-full py-2 px-4 placeholder:text-clr-dark-gray bg-transparent cursor-pointer focus:outline-none" type="text" placeholder="Search an event" name="search"/>
            <Search size={28} className="p-2 h-full bg-transparent" />
        </div>
    );
}
