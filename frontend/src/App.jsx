import { Routes, Route } from "react-router-dom";
import HomePage from "./WebPages/HomePage/HomePage.jsx";
import EducationPage from "./WebPages/EducationPage/EducationPage.jsx";
import Navbar from "./NavFoot/Navbar.jsx";
import Footer from "./NavFoot/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
