import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globalStyles.css";

import HomePage from "./modules/homePage/index";
import ErrorPage from "./modules/errorPage/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
