import React, { useEffect } from 'react';
import { FormHeading } from "../components/UI/FormHeading.jsx";
import RadioAsk from '../components/UI/QuestionsUI/RadioAsk.jsx';
import SelectAsk  from "../components/UI/QuestionsUI/SelectAsk.jsx";
import Slider  from "../components/UI/QuestionsUI/SliderAsk.jsx";
import Select from '@mui/material/Select';
import { SubmitButton } from "../components/UI/SubmitButton.jsx";


export function Questions() {

    return (
        <main className="main-authentification bg-clr-dark-blue w-full min-h-screen max-h-[90vh] overflow-hidden flex items-center justify-center">
            <div className=" relative w-[30%] max-w-[1020px] min-w-[360px] h-[640px] bg-white rounded-[3.3rem]">
                <div className="m-9 inner-box grid gap-4 absolute w-[calc(100%_-_4.1rem)] h-[calc(100%_-_4.1rem)] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                    
                    <div className='flex items-center'>
                        <FormHeading title="Let us know you better!" subHeading="Please answear all questions"/>
                    </div>
                        <div>
                         <RadioAsk />   
                        <h3 className="mt-8 font-medium text-gray-900 ">Do you have a scholarship?</h3>
                            <selectAsk/> 
                            <select className="mt-3 text-base">
                                <option value="noShol">No scholarship</option>
                                <option value="partial">Partial scholarship</option>
                                <option value="full">Full scholarship</option>
                            </select>
                        <h3 className="mt-8 font-medium text-gray-900 ">How many hours do you sleep?</h3>
                        <Slider />
                        </div>
                        
                    <div className="w-[30%]">
                       <SubmitButton value="Next" /> 
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Questions;
