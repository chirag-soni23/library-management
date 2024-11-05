import React, { useRef } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Attendance from './components/Attendance';
import Card from './components/Card';
import Rules from './components/Rules';
import Services from './components/Services';
import Video from './components/Video';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Thoughts from './components/Thoughts';

const Layout = () => {
  const containerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const cardRef = useRef(null);
  const rulesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div ref={containerRef}>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} cardRef={cardRef} rulesRef={rulesRef} servicesRef={servicesRef} contactRef={contactRef} />
      <div ref={homeRef}><Home contactRef={contactRef} /></div>
      <div><Thoughts /></div>
      <div ref={aboutRef}><About /></div>
      <div><Attendance /></div>
      <div ref={cardRef}><Card /></div>
      <div ref={rulesRef}><Rules /></div>
      <div ref={servicesRef}><Services /></div>
      <div><Video /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer homeRef={homeRef} aboutRef={aboutRef} cardRef={cardRef} rulesRef={rulesRef} servicesRef={servicesRef} contactRef={contactRef} />
    </div>
  )
}

export default Layout;