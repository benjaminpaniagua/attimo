import React, { useState } from "react";
import "../../index.css";
import { InputSearch } from "../UI/InputSearch.jsx";
import { useFetchCourses } from "../hooks/useFetchCourses.js";
import { useFetchCategories } from "../hooks/useFetchCategories.js";
import PropTypes from "prop-types";
import MultipleSelectCheckmarks from "../UI/MultipleSelectCheckmarks.jsx";

export function EventsFilters({
  setSearch,
  selectedCategories,
  setSelectedCategories,
  selectedCourses,
  setSelectedCourses,
}) {
  const { data: categories, isLoading: isLoadingCategories, error: errorCategories } = useFetchCategories();
  const { data: courses, isLoading: isLoadingCourses, error: errorCourses } = useFetchCourses(1); // User ID

  const selectedCategory = selectedCategories.includes("Course") ? "Course" : "";

  if (isLoadingCategories || isLoadingCourses) {
    return <div>Loading...</div>;
  }

  if (errorCategories || errorCourses) {
    return <div>Error loading filters</div>;
  }

  const handleCategoryChange = (event) => {
    const { target: { value } } = event;
    setSelectedCategories(typeof value === 'string' ? value.split(',') : value);
    setSelectedCourses([]); // Clear selected courses on category change
  };

  const handleCourseChange = (event) => {
    const { target: { value } } = event;
    setSelectedCourses(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div className="flex md:flex-col justify-between gap-4 my-4 w-full">
      <InputSearch placeholder="Search an event" setSearch={setSearch} />
      <div className="flex gap-4 items-center">
        <p className="dark:text-clr-light-gray lg:hidden">Sort by:</p>
        <MultipleSelectCheckmarks
          items={categories}
          selectedItems={selectedCategories}
          handleChange={handleCategoryChange}
          label="Categories"
          width={200}
        />
        {selectedCategory === "Course" && (
          <MultipleSelectCheckmarks
            items={courses}
            selectedItems={selectedCourses}
            handleChange={handleCourseChange}
            label="Courses"
            width={200}
          />
        )}
      </div>
    </div>
  );
}

EventsFilters.propTypes = {
  setSearch: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
  selectedCourses: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedCourses: PropTypes.func.isRequired,
};