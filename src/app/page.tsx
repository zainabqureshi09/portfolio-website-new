// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './components/About';
import ProjectsPage from './components/Projects';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function HomePage() {
  return (
    
    <> 
      {/* Background Gradient */}
      <div className=" bg-white">
      
      <Hero />
      <AboutPage/>
      <Skills/>
      <ProjectsPage/>
     <ContactPage/> 
     <Footer/>
     </div>

    </>
 
  );
}
