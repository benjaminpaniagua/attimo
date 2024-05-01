import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        // Si el tema está almacenado en localStorage, se usa
        if (storedTheme) {
            return storedTheme;
        }
        // Si no, se verifican las preferencias del sistema
        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };
    
    return {theme, handleChangeTheme};
}

export default useDarkMode;