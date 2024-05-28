import { FormHeading } from "../components/UI/FormHeading.jsx";
import RadioAsk from '../components/UI/RadioAsk.jsx';
import Slider  from "../components/UI/SliderAsk.jsx";
import { SubmitButton } from "../components/UI/SubmitButton.jsx";
import { SelectAsk } from "../components/UI/SelectAsk.jsx";
import useNavigation from "../components/hooks/useNavigation.js";
import useLightMode from "../components/hooks/useLightMode.js";

export function Questions() {
    useLightMode();
    const handleSubmit = useNavigation("/attimo/home");

    return (    
        <div className="bg-clr-dark-blue flex justify-center items-center min-h-screen p-6 w-full">
            <form onSubmit={handleSubmit} autoComplete="off" className="bg-clr-white rounded-xl p-10 grid gap-4">
                <FormHeading className="text-center" title="Let us know you better!"/>
                    <section>
                        <RadioAsk />   
                        <h3 className="mt-8 font-regular text-clr-dark-blue">Do you have a scholarship?</h3>
                        <SelectAsk/>
                        <h3 className="mt-8 font-regular text-clr-dark-blue">How many hours do you sleep?</h3>
                        <Slider />
                    </section>
                    <div className="w-full">
                        <SubmitButton value="Next" /> 
                    </div>
            </form>
        </div>
    );
}

export default Questions;
