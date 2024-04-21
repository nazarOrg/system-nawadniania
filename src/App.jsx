import React, { useRef, useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Content } from './components/Content';
import { PlacesToUse } from './components/PlacesToUse';
import { Footer } from './components/Footer';

function App() {

  const[hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let lastScrollTop = 0;
            const scrollTop = window.pageYOffset;
            if (scrollTop > 50 && scrollTop > lastScrollTop) {
                setHideNavbar(true);
            } else {
                setHideNavbar(false);
            }
            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  const sectionRefs = {
    section0: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='app'>
      <NavBar hideNavbar={hideNavbar} />
      <Content />
      <PlacesToUse />
      <Footer />
    </div>
  )
}

export default App
