import React from "react";
import "../../index.css";
import { FilterSelect } from "../UI/FilterSelect.jsx";
import { InputSearch } from "../UI/InputSearch.jsx";
import { useFetchCourses } from "../hooks/useFetchCourses.js";
import { useFetchCategories } from "../hooks/useFetchCategories.js";
import PropTypes from "prop-types";

export function EventsFilters({ setSearch }) {
  const { data: categories } = useFetchCategories();
  const { data: courses } = useFetchCourses();

  return (
    <div className="flex md:flex-col justify-between gap-4 my-4 w-full">
      <InputSearch placeholder="Search an event" setSearch={setSearch} />
      <div className="flex gap-4 items-center">
        <p className="dark:text-clr-light-gray lg:hidden">Sort by:</p>
        <FilterSelect items={categories} responsive={true} />
        <FilterSelect items={courses} responsive={true} />
      </div>
    </div>
  );
}

EventsFilters.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
