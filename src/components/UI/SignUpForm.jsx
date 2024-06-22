import React, { useState } from "react";
import "../../index.css";
import { FormHeading } from "../UI/FormHeading.jsx";
import { SignInputs } from "../UI/SignInputs.jsx";
import { SubmitButton } from "../UI/SubmitButton.jsx";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData(event.target);

        const fullname = formData.get("fullname");
        const fullnameParts = fullname.split(" ");

        // Verify that the fullname has at least 3 words
        if (fullnameParts.length >= 3) {
            formData.set("name", fullnameParts[0]);
            formData.set("lastname1", fullnameParts[1]);
            formData.set("lastname2", fullnameParts[2]);
        } else {
            setErrors({ fullname: "Fullname must consist of at least 3 words." });
            setLoading(false);
            return; 
        }

        try {
            const response = await fetch("http://attimobackend.test/api/user/add", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log("User registered successfully:", result);

                localStorage.setItem("user", JSON.stringify(result.user));
                navigate("/Questions");
            } else {
                const errorData = await response.json();
                const formattedErrors = {};

                if (errorData.errors) {
                    for (const key in errorData.errors) {
                        formattedErrors[key] = errorData.errors[key][0];
                    }
                }

                setErrors(formattedErrors);
                console.error("Failed to register user:", errorData);
            }
        } catch (error) {
            setErrors({ form: "An error occurred during registration. Username or email may already be in use " });
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="sign-up-form forms-authentification px-10 py-0 w-full h-full flex flex-col justify-center gap-8 col-[1_/_2] row-[1_/_2] transition-opacity duration-[0.02s] delay-[0.3s] mx-auto my-0 opacity-0 pointer-events-none">
            <FormHeading title="Get Started" subHeading="Already have an account?" linkText="Sign In" />
            <div>
                <SignInputs type="text" name="fullname" isFullname={true} />
                {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
                <SignInputs type="text" name="username" />
                {errors.username && <p className="text-red-500">{errors.username}</p>}
                <SignInputs type="email" name="email" />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <SignInputs type="password" name="password" />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <input type="hidden" name="users_types_id" value={1} />
            <input type="hidden" name="name" value="" />
            <input type="hidden" name="lastname1" value="" />
            <input type="hidden" name="lastname2" value="" />
            <SubmitButton value="Sign Up" subHeading="By signing up, I agree to the " linkText="Terms of services" />
            {errors.form && <p className="text-red-500">{errors.form}</p>}
            {loading && <p>Loading...</p>}
        </form>
    );
}
