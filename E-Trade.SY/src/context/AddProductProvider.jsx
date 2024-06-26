import { useContext, createContext, useState } from "react";

const AddProductContext = createContext();

export default function AddProductProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <AddProductContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </AddProductContext.Provider>
  );
}

export const useAddProductContext = () => {
  return useContext(AddProductContext);
};
