import React from "react";
import "../../index.css";
import carousel1 from "../../assets/imgs/carousel1.webp";
import carousel2 from "../../assets/imgs/carousel2.webp";
import carousel3 from "../../assets/imgs/carousel3.webp";
import PropTypes from "prop-types";
export function Carousel() {
    return (
        <div className="carousel absolute h-full w-[55%] bg-clr-light-secondary-bg grid grid-rows-[auto_1fr] overflow-hidden pb-8 rounded-3xl left-[45%] duration-[0.3s,transform] ease-in-out top-0">
            <div className="images-wrapper grid grid-cols-[1fr] grid-rows-[1fr]">
                <img src={carousel1} className="image img-1 show w-full col-[1/2] row-[1/2] opacity-0 transition-opacity duration-[0.3s,transform] delay-[0.1s] translate-x-" alt="Carousel"/>
                <img src={carousel2} className="image img-2 w-full col-[1/2] row-[1/2] opacity-0 transition-opacity duration-[0.3s,transform] delay-[0.1s] translate-x-0" alt="Carousel"/>
                <img src={carousel3} className="image img-3 w-full col-[1/2] row-[1/2] opacity-0 transition-opacity duration-[0.3s,transform] delay-[0.1s] translate-x-0" alt="Carousel"/>
            </div>

            <div className="text-slider flex items-center justify-center flex-col">
                <div className="text-wrap max-h-[2.2rem] overflow-hidden mb-10">
                    <section className="text-group flex flex-col text-center translate-y-0 transition-[0.5s]">
                        <h3 className="text-3xl font-semibold">Never forget a carryover</h3>
                        <h3 className="text-3xl font-semibold">Stay up-to-date</h3>
                        <h3 className="text-3xl font-semibold">Organize your life</h3>
                    </section>
                </div>

                <div className="bullets flex items-center justify-centerflex justify-center">
                    <span className="active block w-2 h-2 bg-clr-light-gray cursor-pointer transition-[0.3s] mx-1 my-0 rounded-[50%]" data-value="1"></span>
                    <span data-value="2" className="bg-clr-light-gray block w-2 h-2 cursor-pointer transition-[0.3s] mx-1 my-0 rounded-[50%]"></span>
                    <span data-value="3" className="bg-clr-light-gray block w-2 h-2  cursor-pointer transition-[0.3s] mx-1 my-0 rounded-[50%]"></span>
                </div>
            </div>
        </div>
    )
}

Carousel.propTypes = {
    carousel1: PropTypes.string.isRequired,
    carousel2: PropTypes.string.isRequired,
    carousel3: PropTypes.string.isRequired
}

Carousel.defaultProps = {
    carousel1: carousel1,
    carousel2: carousel2,
    carousel3: carousel3
}