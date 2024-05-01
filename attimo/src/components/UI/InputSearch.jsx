import React from "react";
import {Search} from "lucide-react";
import "../../index.css";

export function InputSearch({ placeholder }) {
    return (
      <div className="flex justify-between bg-clr-light-gray rounded-md overflow-hidden text-clr-white">
        <input
          className="w-full py-2 placeholder:text-white px-4 bg-transparent cursor-pointer focus:outline-none"
          type="text"
          placeholder={placeholder} // Usar el prop 'placeholder' aquí
          name="search"
        />
        <Search size={24} className="px-2 bg-clr-dark-gray h-full" />
      </div>
    );
  }
  
