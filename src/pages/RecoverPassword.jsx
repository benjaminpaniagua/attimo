import React, { useState } from "react";
import { FormHeading } from "../components/UI/FormHeading";
import { SignInputs } from "../components/UI/SignInputs";
import { SubmitButton } from "../components/UI/SubmitButton";
import useLogin from "../components/hooks/useLogin.js";
import useLightMode from "../components/hooks/useLightMode.js";
import { useNavigate } from "react-router-dom";

export function RecoverPassword() {
    useLogin();
    useLightMode();

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData(event.target);
        try {
            const response = await fetch("http://attimobackend.test/api/user/recover", {
                method: "POST",
                body: formData,
            });
            const responseData = await response.json();
            if (response.ok) {
                window.alert("Password updated successfully. Please login with your new password.");
                navigate("/login");
            } else {
                setErrors({ form: responseData.message || "Failed to update password." });
            }
        } catch (error) {
            setErrors({ form: "An error occurred during recover password." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-clr-dark-blue flex justify-center items-center min-h-screen p-6 w-full">
            <form onSubmit={handleSubmit} autoComplete="off" className="bg-clr-white rounded-xl p-8 max-w-[27rem] grid gap-4">
                <div className="text-center">
                    <FormHeading title="Recover Password" subHeading="Enter your data to update your password" />
                </div>
                <div className="mt-4">
                    <SignInputs type="email" name="email" />
                    <SignInputs type="password" name="password" />
                </div>
                {errors.form && <p className="text-red-500">{errors.form}</p>}
                <SubmitButton value="Change Password" subHeading='Remember password?' linkText='Sign In'/>
            </form>
        </div>
    );
}

export default RecoverPassword;
