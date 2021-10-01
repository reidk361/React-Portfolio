import React from "react";

function NavBar({ page, setPage }) {
  // let [page, setPage] = useState("About Me");
  return (
    <div>
      <p>Current page is: "{page}"</p>
      <button id="about-me-button" onClick={() => setPage("About Me")}>
        About Me
      </button>
      <button id="project-button" onClick={() => setPage("Projects")}>
        Projects
      </button>
      <button id="digital-art-button" onClick={() => setPage("Digital Art")}>
        Digital Art
      </button>
      <button id="contact-button" onClick={() => setPage("Contact Form")}>
        Contact Form
      </button>
    </div>
  );
}

export default NavBar;
