import { useState } from "react";

const useRecoverPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const recoverPassword = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://attimobackend.test/api/user/recover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Password updated successfully");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred while updating the password.");
    } finally {
      setLoading(false);
    }
  };

  return { recoverPassword, loading, error };
};

export default useRecoverPassword;
