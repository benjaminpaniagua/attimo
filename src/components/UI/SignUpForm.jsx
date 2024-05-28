import React from "react";
import "../../index.css";
import { FormHeading } from "../UI/FormHeading.jsx";
import { SignInputs } from "../UI/SignInputs.jsx";
import { SubmitButton } from "../UI/SubmitButton.jsx";
import useNavigation from "../hooks/useNavigation.js";

export function SignUpForm() {
    const handleSubmit = useNavigation("/Questions");
    
    return (
        <form action="" autoComplete="off" onSubmit={handleSubmit} className="sign-up-form forms-authentification px-10 py-0 w-full h-full flex flex-col justify-center gap-8 col-[1_/_2] row-[1_/_2] transition-opacity duration-[0.02s] delay-[0.3s] mx-auto my-0 opacity-0 pointer-events-none">
            <FormHeading title="Get Started" subHeading="Already have an account?" linkText="Sign In" />
            <div>
                <SignInputs type="text" name="fullname" />
                <SignInputs type="text" name="username" />
                <SignInputs type="email" name="email" />
                <SignInputs type="password" name="password" />
            </div>
            <SubmitButton value="Sign Up" subHeading="By signing up, I agree to the " linkText="Terms of services" />
        </form>
    );
}
