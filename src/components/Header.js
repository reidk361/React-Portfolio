import React, { useState } from "react";
import NavBar from "./NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import DigitalArt from "./pages/DigitalArt";
import ContactForm from "./pages/ContactForm";

function Header() {
  let [page, setPage] = useState("About Me");
  const renderPage = () => {
    if (page === "About Me") {
      return <AboutMe />;
    } else if (page === "Projects") {
      return <Projects />;
    } else if (page === "Digital Art") {
      return <DigitalArt />;
    } else if (page === "Contact Form") {
      return <ContactForm />;
    }
  };
  return (
    <>
      <header>
        <h1>Kalyn Reid</h1>
        <h2>Full Stack Web Developer</h2>
        <NavBar page={page} setPage={setPage} />
      </header>
      {renderPage()}
    </>
  );
}

export default Header;
