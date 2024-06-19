import React from "react";
import "../../index.css";
import { FormHeading } from "../UI/FormHeading.jsx";
import { SignInputs } from "../UI/SignInputs.jsx";
import { SubmitButton } from "../UI/SubmitButton.jsx";
import useNavigation from "../hooks/useNavigation.js";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
    const handleSubmit = useNavigation("/Questions");

    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const fullname = formData.get("fullname");
        const fullnameParts = fullname.split(" ");

        // Verify that the fullname has at least 3 words
        if (fullnameParts.length >= 3) {
            formData.set("name", fullnameParts[0]);
            formData.set("lastname1", fullnameParts[1]);
            formData.set("lastname2", fullnameParts[2]);
        } else {
            // If the fullname is not valid, log an error and return
            console.error("Fullname must consist of at least 3 words.");
            return; // Not sent the form until the fullname is valid
        }

        try {
            const response = await fetch("http://attimobackend.test/api/user/add", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log("User registered successfully:", result);

                // Guardar el usuario en localStorage
                localStorage.setItem("user", JSON.stringify(result.user));
                // Llamar a la función de navegación
                navigate("/Questions");
            } else {
                console.error("Failed to register user.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="sign-up-form forms-authentification px-10 py-0 w-full h-full flex flex-col justify-center gap-8 col-[1_/_2] row-[1_/_2] transition-opacity duration-[0.02s] delay-[0.3s] mx-auto my-0 opacity-0 pointer-events-none">
            <FormHeading title="Get Started" subHeading="Already have an account?" linkText="Sign In" />
            <div>
                <SignInputs type="text" name="fullname" isFullname={true} />
                <SignInputs type="text" name="username" />
                <SignInputs type="email" name="email" />
                <SignInputs type="password" name="password" />
            </div>
            <input type="hidden" name="users_types_id" value={1} />
            <input type="hidden" name="name" value="" />
            <input type="hidden" name="lastname1" value="" />
            <input type="hidden" name="lastname2" value="" />
            <SubmitButton value="Sign Up" subHeading="By signing up, I agree to the " linkText="Terms of services" />
        </form>
    );
}
