import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import WorksPage from "./WorksPage";
import AboutPage from "./AboutPage";

const MainContent = () => {
  return (
    <div className="page">
     <Header />
     <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/our-services" element={<ServicesPage />} />
          <Route path="/works" element={<WorksPage />} />
     </Routes>
     <Footer />
    </div>
  )
}

export default MainContent;