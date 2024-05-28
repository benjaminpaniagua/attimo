import { SignUpForm } from "../components/UI/SignUpForm.jsx";
import { SignInForm } from "../components/UI/SignInForm.jsx";
import { Carousel } from "../components/UI/Carousel.jsx";
import useLogin from "../components/hooks/useLogin.js";
import useLightMode from "../components/hooks/useLightMode.js";

export function Login() {
    useLogin();
    useLightMode();
    
    return (
        <main className="main-authentification bg-clr-dark-blue w-full min-h-screen max-h-[90vh] overflow-hidden flex items-center justify-center p-8">
            <div className="box relative w-full max-w-[1020px] h-[640px] bg-white rounded-[3.3rem]">
                <div className="inner-box grid gap-4 absolute w-[calc(100%_-_4.1rem)] h-[calc(100%_-_4.1rem)] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
                    <div className="forms-wrap absolute h-full w-[45%] grid grid-cols-[1fr] grid-rows-[1fr] ease-in duration-300 left-0 top-0">
                        <SignInForm />
                        <SignUpForm />
                    </div>
                    <Carousel />
                </div>
            </div>
        </main>
    );
}

export default Login;
