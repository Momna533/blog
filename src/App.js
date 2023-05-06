import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import Home from "./components/Home";
// import Pakjobs from "./components/Pakjobs";
// import Scholarship from "./components/Scholarship";
// import AIOU from "./components/AIOU";
// import CSprogrammingnotes from "./components/CSprogrammingnotes";
// import CS619VUProjects from "./components/CS619VUProjects";
// import Blogpage from "./components/Blogpage/Blogpage";
// import VUpastpapers from "./components/VUpastpapers";
// import Page404 from "./components/page404";
// import VUAssignments from "./components/VUAssignments";
// import Pdfhandouts from "./components/Pdfhandouts";
// // import ThemeSwitch from "react-theme-switch-css"
// import Finaltermpastpapers from "./components/Finaltermpastpapers";
// import VUgrandquiz from "./components/VUgrandquiz";
// import VUgdb from "./components/VUgdb";
// import PPTSlides from "./components/PPTslides";

function App() {
  function LogoHeader() {
    return (
      <>
        <h1>logoheader</h1>
      </>
    );
  }
  function LinksHeader() {
    return (
      <>
        <h1>linksheader</h1>
      </>
    );
  }
  function VUActivities() {
    return (
      <>
        <h1>VUActivities</h1>
      </>
    );
  }
  function VUAssignments() {
    return (
      <>
        <h1>VUAssignments</h1>
      </>
    );
  }
  function VUGrandQuiz() {
    return (
      <>
        <h1>VUGrandQuiz</h1>
      </>
    );
  }
  function VUGDB() {
    return (
      <>
        <h1>VUGDB</h1>
      </>
    );
  }
  function VUhandouts() {
    return (
      <>
        <h1>VUhandouts</h1>
      </>
    );
  }
  function PDFHandouts() {
    return (
      <>
        <h1>PDFHandouts</h1>
      </>
    );
  }
  function PPTSlides() {
    return (
      <>
        <h1>PPTSlides</h1>
      </>
    );
  }
  function VUpastpapers() {
    return (
      <>
        <h1>VUpastpapers</h1>
      </>
    );
  }
  function Midtermpastpapers() {
    return (
      <>
        <h1>Midtermpastpapers</h1>
      </>
    );
  }
  function Finaltermpastpapers() {
    return (
      <>
        <h1>Finaltermpastpapers</h1>
      </>
    );
  }
  function CS619VUProjects() {
    return (
      <>
        <h1>CS619VUProjects</h1>
      </>
    );
  }
  function CSprogrammingnotes() {
    return (
      <>
        <h1>CSprogrammingnotes</h1>
      </>
    );
  }
  function Pakjobs() {
    return (
      <>
        <h1>Pakjobs</h1>
      </>
    );
  }
  function AIOU() {
    return (
      <>
        <h1>AIOU</h1>
      </>
    );
  }
  function Scholarship() {
    return (
      <>
        <h1>Scholarship</h1>
      </>
    );
  }
  function Footer() {
    return (
      <>
        <h1>footer</h1>
      </>
    );
  }
  return (
    <BrowserRouter>
      <LogoHeader />
      <LinksHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vu-activities" element={<VUActivities />} />
        <Route path="/vu-assignments" element={<VUAssignments />} />
        <Route path="/vu-grand-quiz" element={<VUGrandQuiz />} />
        <Route path="/vu-gdb" element={<VUGDB />} />
        <Route path="/vu-handouts" element={<VUhandouts />} />
        <Route path="/pdf-handouts" element={<PDFHandouts />} />
        <Route path="/ppt-slides" element={<PPTSlides />} />
        <Route path="/vu-past-papers" element={<VUpastpapers />} />
        <Route path="/mid-term-past-papers" element={<Midtermpastpapers />} />
        <Route
          path="/final-term-past-papers"
          element={<Finaltermpastpapers />}
        />
        <Route path="/vu-cs619-projects" element={<CS619VUProjects />} />
        <Route path="/cs-programming-notes" element={<CSprogrammingnotes />} />
        <Route path="/pak-jobs" element={<Pakjobs />} />
        <Route path="/aiou" element={<AIOU />} />
        <Route path="/scholarship" element={<Scholarship />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past-papers" element={<Blogpage />} />

        <Route path="/read-more" element={<Blogpage />} />
        <Route path="/page-404" element={<Page404 />} />
      </Routes> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
