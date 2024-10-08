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
  setSelectedGroup,
}) {
  // Get user ID from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  const {
    data: categories,
    error: errorCategories,
  } = useFetchCategories();

  const {
    data: courses,
    error: errorCourses,
  } = useFetchCourses(userId); // Pass the userId to the hook

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
    <div className="flex md:flex-col justify-between gap-4 w-full items-center md:gap-2 my-4">
      <InputSearch placeholder="Search an event" setSearch={setSearch}/>
      <div className="flex gap-4 items-center md:w-full">
        <p className="dark:text-clr-light-gray lg:hidden">Sort by:</p>
        <MultipleSelectCheckmarks
          items={categories}
          selectedItems={selectedCategories}
          handleChange={handleCategoryChange}
          label="Categories"
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