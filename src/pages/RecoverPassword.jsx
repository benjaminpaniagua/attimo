import React from "react";
import { FormHeading } from "../components/UI/FormHeading";
import { SignInputs } from "../components/UI/SignInputs";
import { SubmitButton } from "../components/UI/SubmitButton";
import useLogin from "../components/hooks/useLogin.js";
import useNavigation from "../components/hooks/useNavigation.js";
import useLightMode from "../components/hooks/useLightMode.js";

export function RecoverPassword() {
    useLogin();
    useLightMode();
    const handleSubmit = useNavigation("/");

    return (
        <div className="bg-clr-dark-blue flex justify-center items-center min-h-screen p-6 w-full">
            <form onSubmit={handleSubmit} autoComplete="off" className="bg-clr-white rounded-xl p-8 max-w-[27rem] grid gap-4">
                <div className="text-center">
                    <FormHeading title="Recover Password" subHeading="Enter your data to update your password" />
                </div>
                <div className="mt-4">
                    <SignInputs type="email" name="email" />
                    <SignInputs type="password" name="new password" />
                </div>
                <SubmitButton value="Change Password" subHeading='Remember password?' linkText='Sign In'/>
            </form>
        </div>
    );
}

export default RecoverPassword;
