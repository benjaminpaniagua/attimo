import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        // If the theme is saved in the localStorage we use it
        if (storedTheme) {
            return storedTheme;
        }
        // If is not we use the user's mode preference
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