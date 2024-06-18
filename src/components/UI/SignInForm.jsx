import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { FormHeading } from "./FormHeading.jsx";
import { SignInputs } from "../UI/SignInputs.jsx";
import { SubmitButton } from "../UI/SubmitButton.jsx";

export function SignInForm() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData(event.target);
        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
        };

        try {
            const response = await fetch("http://attimobackend.test/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem('user', JSON.stringify(result.user)); // Guarda los datos del usuario en localStorage
                navigate("/attimo/home");
            } else {
                const errorData = await response.json();
                setErrors({ form: errorData.message });
                console.error('Error response:', errorData);
            }
        } catch (error) {
            setErrors({ form: "An error occurred during login." });
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="forms-authentification sign-in-form login-forms px-10 py-0 w-full h-full flex flex-col justify-center gap-8 col-[1_/_2] row-[1_/_2] transition-opacity duration-[0.02s] delay-[0.3s] mx-auto my-0">
            <FormHeading title="Welcome Back" subHeading="Not registered yet?" linkText="Sign Up" />
            <div>
                <SignInputs type="text" name="username" />
                <SignInputs type="password" name="password" />
            </div>
            {errors.form && <p className="text-red-500">{errors.form}</p>}
            <SubmitButton value="Sign In" subHeading="Forgot your password?" linkText="Recover it" link="/recoverPassword"/>
            {loading && <p>Loading...</p>}
        </form>
    );
}
