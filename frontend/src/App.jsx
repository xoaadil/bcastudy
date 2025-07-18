import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SemesterSubjects from "./pages/SemesterSubjects";
import CodingPage from "./pages/CodingPage";
import AdvicePage from "./pages/AdvicePage";
import Layout from "./components/Layout";
import  SemesterPage from "./pages/SemesterPage2"
import MaterialPage from "./pages/MaterialPage";
//hello
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/semesters" element={<SemesterPage />} />
            <Route path="/semester/:id" element={<SemesterSubjects />} />
            <Route path="/coding" element={<CodingPage />} />
            <Route path="/advice" element={<AdvicePage />} />
             <Route path="/material/:id" element={<MaterialPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
