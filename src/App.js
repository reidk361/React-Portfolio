import React from "react";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import DigitalArt from './components/DigitalArt';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <DigitalArt />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;