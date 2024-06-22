import "../../index.css";
import { InputSearch } from "../UI/InputSearch.jsx";
import { useFetchCourses } from "../hooks/useFetchCourses.js";
import { useFetchCategories } from "../hooks/useFetchCategories.js";
import PropTypes from "prop-types";
import MultipleSelectCheckmarks from "../UI/MultipleSelectCheckmarks.jsx";
import SingleSelectDropdown from "../UI/SingleSelectDropdown";

export function EventsFilters({
  setSearch,
  selectedCategories,
  setSelectedCategories,
  selectedCourses,
  setSelectedCourses,
  setSelectedGroup,
}) {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useFetchCategories();

  const {
    data: courses,
    isLoading: isLoadingCourses,
    error: errorCourses,
  } = useFetchCourses(1); // User ID

  if (isLoadingCategories || isLoadingCourses) {
    return <div>Loading...</div>;
  }

  if (errorCategories || errorCourses) {
    return <div>Error loading filters</div>;
  }

  const handleCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCategories(typeof value === "string" ? value.split(",") : value);
    setSelectedGroup(null);
  };

  const handleCourseChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCourses(typeof value === "string" ? value.split(",") : value);
  };

  const handleGroupChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedGroup(value === "0" ? null : value); // '0' represents All Groups
  };

  const selectedGroup = courses.find(
    (course) => course.id === parseInt(selectedCourses[0])
  )?.name;

  return (
    <div className="flex md:flex-col justify-between gap-4 my-2 w-full items-center">
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
        {selectedCategories.includes("Course") && (
          <SingleSelectDropdown
            options={courses}
            value={selectedCourses[0] || "0"}
            onChange={handleGroupChange}
            label="All Groups"
            placeholder="Select a group"
            valueLabel={selectedGroup}
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
  setSelectedGroup: PropTypes.func.isRequired,
};
