import React from 'react'
import Navbar from '../Navbar';
import About from './About';
import Services from './Services';
import Feedback from './Feedback';
import Footer from '../Footer';
import Contact from './Contact';
import AuthModal from './AuthModal';

function Home() {
  return (
    <>
      <AuthModal />
      <main
        style={{ background: "#121212", color: "white", minHeight: "100vh" }}
      >
        <About />
        <Services />
        <Feedback />
        <Contact />
      </main>
    </>
  );
}

export default Home;