import "../../index.css";
import { Pencil } from "lucide-react"; 
import React from "react";
import PropTypes from 'prop-types';
import defaultImage from "../../assets/imgs/image_card.png";
export function CardEditInfo({title,img}) {
    return(
        <div className='grid justify-center text-center gap-4'>
            <h2 className='dark:text-white'>{title}</h2>
            <div className="relative group w-48 mx-auto mt">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                    <img src={img} className='object-cover w-full h-full' alt="profile photo" />
                </div>
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-gray-500 opacity-50 rounded-full w-full h-full flex items-center justify-center">
                        <input type="file" accept=".jpg, .jpeg, .png, .webp" className="w-full cursor-pointer h-full opacity-0 absolute"/>
                        <Pencil className="text-white"/>
                    </div>
                </button>
            </div>
        </div>
    )
}

CardEditInfo.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

CardEditInfo.defaultProps = {
    title: "This is a title",
    img: defaultImage,
}

