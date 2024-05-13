import { useEffect } from 'react';

export function useBlur(isOpen) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.overflow = ''; 
        }

        return () => {
            document.body.style.overflow = ''; 
        };
    }, [isOpen]);
}