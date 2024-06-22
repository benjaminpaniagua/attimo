import React, { createContext, useState, useContext } from "react";
const SelectedOptionContext = createContext();

export const SelectedOptionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(0); // Initial value of the selected option

  return (
    <SelectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SelectedOptionContext.Provider>
  );
};

// Functionality to be used in the components
export const useSelectedOption = () => {
  const context = useContext(SelectedOptionContext);
  if (!context) {
    throw new Error("useSelectedOption debe ser usado dentro de un SelectedOptionProvider");
  }
  return context;
};
