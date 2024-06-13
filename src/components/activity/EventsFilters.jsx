import React from "react";
import "../../index.css";
import { FilterSelect } from "../UI/FilterSelect.jsx";
import { courses } from "../../pages/HomePage.jsx";
import { InputSearch } from "../UI/InputSearch.jsx";
import PropTypes from "prop-types";

export function EventsFilters({ setSearch }) {
  const categories = [
    { id: 1, title: "University" },
    { id: 2, title: "Course" },
    { id: 3, title: "Students" },
    { id: 4, title: "Major" },
  ];

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
