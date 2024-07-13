//styles
import "./App.css";

//context
import { ThemeModeProvider } from "./context/ThemeModeProvider";

//react router
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

function App() {
  return (
    <ThemeModeProvider>
      <RouterProvider router={router} />
    </ThemeModeProvider>
  );
}

export default App;
