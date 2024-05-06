import React from "react";
import { FormHeading } from "../components/UI/FormHeading";
import { SignInputs } from "../components/UI/SignInputs";
import { SubmitButton } from "../components/UI/SubmitButton";
import useLogin from "../components/hooks/useLogin.js";

export function RecoverPassword() {
    useLogin();

    return (
        <div className="bg-clr-dark-blue flex justify-center items-center min-h-screen p-6">
            <main className="bg-clr-white rounded-xl p-8 grid gap-4">
                <div className="text-center">
                    <FormHeading title="Recover Password" subHeading="Enter your data to update your password" />
                </div>

                <div className="mt-4">
                    <SignInputs type="email" name="email" />
                    <SignInputs type="password" name="new password" />
                </div>

                <SubmitButton value="Change Password" subHeading='Remember password?' linkText='Sign In'/>
            </main>
        </div>
    );
}

export default RecoverPassword;
