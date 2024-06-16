import { useEffect, useState } from "react";

export const useFetchCategories = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch("http://attimobackend.test/api/categories/all");
            const data = await response.json();
            const allCategories = [{ id: 0, name: "All" }, ...data];
            setData(allCategories);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        data,
        isLoading,
    };
};