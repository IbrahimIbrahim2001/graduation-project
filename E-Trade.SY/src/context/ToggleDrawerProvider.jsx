import { createContext, useContext, useState } from "react";

const ToggleDrawerContext = createContext(undefined);

export const ToggleDrawerContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (value) => {
    setOpen(value);
  };
  return (
    <ToggleDrawerContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </ToggleDrawerContext.Provider>
  );
};

export const useToggleDarwerContext = () => {
  const toggler = useContext(ToggleDrawerContext);
  if (toggler === undefined) {
    throw new Error("ToggleDrawerContext must be used in CustomerLayout only");
  }
  return toggler;
};
