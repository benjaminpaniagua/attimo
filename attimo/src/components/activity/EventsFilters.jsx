import "../../index.css";
import { FilterSelect } from "../UI/FilterSelect.jsx";
import { courses } from "../../HomePage.jsx";
import { InputSearch } from "../UI/InputSearch.jsx";

export function EventsFilters(){
    const categories = [
        { id: 1, title:  "University"},
        { id: 2, title:  "Course"},
        { id: 3, title:  "Students"},
        { id: 4, title:  "Major"},
    ];

    return (
        <>
            <div className="flex flex-wrap gap-4 my-4">
                <InputSearch />
                <FilterSelect items={categories} />
                <FilterSelect items={courses} />
            </div>
        </>
    );
}

