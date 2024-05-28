import { useNavigate } from "react-router-dom";

function useNavigation(redirectPath) {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(redirectPath); 
    };
    return handleSubmit;
}

export default useNavigation;