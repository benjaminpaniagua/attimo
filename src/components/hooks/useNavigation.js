import { useNavigate } from "react-router-dom";

function useNavigation(redirectPath) {
    const navigate = useNavigate();
    const handleSubmit = async (event, formData) => {
        if (!formData) {
            formData = new FormData(event.target);
        }
        try {
            const response = await fetch(event.target.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                navigate(redirectPath);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return handleSubmit;
}

export default useNavigation;
