import { FormHeading } from "../components/UI/FormHeading.jsx";
import RadioAsk from '../components/UI/RadioAsk.jsx';
import Slider  from "../components/UI/SliderAsk.jsx";
import { SubmitButton } from "../components/UI/SubmitButton.jsx";


export function Questions() {

    return (    
        <div className="bg-clr-dark-blue flex justify-center items-center min-h-screen p-6 w-full">
            <main className="bg-clr-white rounded-xl p-10 grid gap-4">
                <div className="text-center">
                    <FormHeading title="Let us know you better!"/>
                </div>
                <section>
                    <RadioAsk />   
                    <h3 className="mt-8 font-medium text-clr-dark-blue">Do you have a scholarship?</h3>
                    <selectAsk/> 
                    <select className="mt-3 text-base">
                        <option value="noShol">No scholarship</option>
                        <option value="socioeconomic">Socioeconomic scholarship</option>
                        <option value="excellence">Excellence scholarship</option>
                        <option value="sportsArts">Sports/Arts scholarship</option>
                        <option value="representation">Representation scholarship</option>
                        <option value="external">External scholarship</option>
                    </select>
                    <h3 className="mt-8 font-medium text-clr-dark-blue">How many hours do you sleep?</h3>
                    <Slider />
                </section>
                <div className="w-full">
                    <SubmitButton value="Next" /> 
                </div>
            </main>
        </div>
    );
}

export default Questions;
