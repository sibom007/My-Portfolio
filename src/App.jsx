/* eslint-disable no-unused-vars */
import LandingPage from "./Components/LandingPage"
import Navbar from "./Components/Navbar"
import NeverGiveUpPage from "./Components/NeverGiveUpPage"
import LocomotiveScroll from 'locomotive-scroll';
import PlayPage from "./Components/PlayPage";
import SkillsPage from "./Components/SkillsPage";
import ProjectPage from "./Components/ProjectPage";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";


function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="">
      <Navbar />
      <LandingPage />
      <NeverGiveUpPage />
      <PlayPage />
      <ProjectPage />
      <SkillsPage />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
