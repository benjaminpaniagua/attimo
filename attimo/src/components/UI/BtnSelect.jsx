import React from "react";
import "../../index.css";

export const BtnSelect = () => {
    return (
        <>
            <select className="bg-clr-light-gray py-2 px-4 rounded-md focus:outline-none text-clr-white">
              <option value="1">This Week</option>
              <option value="2">Today</option>
            </select>
        </>
      );
}