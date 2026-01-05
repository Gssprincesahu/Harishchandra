import { Routes, Route } from "react-router-dom";
import Navbar from "./NavFoot/Navbar.jsx";
import Footer from "./NavFoot/Footer.jsx";

import HomePage from "./WebPages/HomePage/HomePage.jsx";
import EducationPage from "./WebPages/EducationPage/EducationPage.jsx";
import AwardAndHonour from "./WebPages/AwardAndHonour/AwardAndHonour.jsx";

function App() {
  return (
    <>
      <Navbar />

      {/* Navbar fixed hai isliye padding */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/awards-and-honors" element={<AwardAndHonour />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
