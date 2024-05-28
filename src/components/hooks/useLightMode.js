import { useEffect } from 'react';
import useDarkMode from './useDarkMode';

const useLightMode = () => {
    const { theme } = useDarkMode();

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
};

export default useLightMode;
