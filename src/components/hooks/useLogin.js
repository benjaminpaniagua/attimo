import { useRef, useEffect } from 'react';

function useLogin() {
    const inputsRef = useRef([]);
    const toggleRef = useRef([]);
    const bulletsRef = useRef([]);
    const imgsRef = useRef([]);

    useEffect(() => {
        const main = document.querySelector(".main-authentification");
        const inputElements = document.querySelectorAll('.input-field');
        const toggleElements = document.querySelectorAll('.toggle');
        const bullets = document.querySelectorAll('.bullets span');
        const images = document.querySelectorAll(".image");

        inputElements.forEach((input) => {
            inputsRef.current.push(input);

            input.addEventListener("focus", () => {
                input.classList.add("active");
            });

            input.addEventListener("blur", () => {
                if (input.value !== "") return;
                input.classList.remove("active");
            });
        });
        toggleElements.forEach((toggle) => {
            toggleRef.current.push(toggle);

            toggle.addEventListener("click", () => {
                main.classList.toggle("sign-up-mode");
            });
        });
        if (bullets.length > 0) {
            bullets.forEach((bullet) => {
                bulletsRef.current.push(bullet);
                bullet.addEventListener("click", () => moveSlider(bullet.dataset.value));
            });
        }
        // Asignar las imágenes a imgsRef
        images.forEach((img) => {
            imgsRef.current.push(img);
        });
        return () => {
            inputElements.forEach((input) => {
                input.removeEventListener("focus", () => {
                    input.classList.add("active");
                });
                input.removeEventListener("blur", () => {
                    if (input.value !== "") return;
                    input.classList.remove("active");
                });
            });
            toggleElements.forEach((toggle) => {
                toggle.removeEventListener("click", () => {
                    main.classList.toggle("sign-up-mode");
                });
            });
            bullets.forEach((bullet) => {
                bullet.removeEventListener("click", () => moveSlider(bullet.dataset.value));
            });
            // Limpiar las referencias
            inputsRef.current = [];
            toggleRef.current = [];
            bulletsRef.current = [];
            imgsRef.current = [];
        };
    }, []);

    const moveSlider = (index) => {
        let currentImage = document.querySelector(`.img-${index}`);
        imgsRef.current.forEach((img) => img.classList.remove("show"));
        currentImage.classList.add("show");

        const textSlider = document.querySelector(".text-group");
        textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

        bulletsRef.current.forEach((bull) => bull.classList.remove("active"));
        bulletsRef.current[index - 1].classList.add("active");
    }
    return { inputsRef, toggleRef, bulletsRef, imgsRef, moveSlider };
}
export default useLogin;
