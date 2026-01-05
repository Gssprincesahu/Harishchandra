import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./WebPages/HomePage/HomePage.jsx";
import EducationPage from "./WebPages/EducationPage/EducationPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education" element={<EducationPage />} />
    </Routes>
  );
}

export default App;
