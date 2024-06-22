import React, { useState } from "react";
import { FormHeading } from "../components/UI/FormHeading";
import { SignInputs } from "../components/UI/SignInputs";
import { SubmitButton } from "../components/UI/SubmitButton";
import useLogin from "../components/hooks/useLogin.js";
import useNavigation from "../components/hooks/useNavigation.js";
import useLightMode from "../components/hooks/useLightMode.js";
import useRecoverPassword from "../components/hooks/useRecoverPassword.js"; // Asegúrate de ajustar la ruta correcta

export function RecoverPassword() {
    useLogin();
    useLightMode();
    const handleSubmit = useNavigation("/");

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const { recoverPassword, loading, error } = useRecoverPassword();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            email: email,
            newPassword: newPassword,
        };
        await recoverPassword(formData);
    };

    return (
        <div className="bg-clr-dark-blue flex justify-center items-center min-h-screen p-6 w-full">
            <form onSubmit={handleFormSubmit} autoComplete="off" className="bg-clr-white rounded-xl p-8 max-w-[27rem] grid gap-4">
                <div className="text-center">
                    <FormHeading title="Recover Password" subHeading="Enter your data to update your password" />
                </div>
                <div className="mt-4">
                    <SignInputs
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <SignInputs
                        type="password"
                        name="new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <SubmitButton value={loading ? "Changing Password..." : "Change Password"} subHeading='Remember password?' linkText='Sign In'/>
            </form>
        </div>
    );
}

export default RecoverPassword;
