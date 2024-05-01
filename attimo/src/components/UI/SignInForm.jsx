import React from "react";
import "../../index.css";
import { FormHeading } from "./FormHeading.jsx";
import { SignInputs } from "../UI/SignInputs.jsx";
import { SubmitButton } from "../UI/SubmitButton.jsx";

export function SignInForm() {
    return (
        <form action="" autoComplete="off" className="forms-authentification sign-in-form login-forms px-10 py-0 w-full h-full flex flex-col justify-center gap-8 col-[1_/_2] row-[1_/_2] transition-opacity duration-[0.02s] delay-[0.3s] mx-auto my-0">
            <FormHeading title="Welcome Back" subHeading="Not registered yet?" linkText="Sign Up" />

            <div>
                <SignInputs type="text" name="username" />  
                <SignInputs type="password" name="password" />
            </div>

            <SubmitButton value="Sign In" subHeading="Forgot you password? " linkText="Recover it" />
        </form>
    )
}