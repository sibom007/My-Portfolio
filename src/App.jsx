/* eslint-disable no-unused-vars */
import LandingPage from "./Components/LandingPage"
import Navbar from "./Components/Navbar"
import NeverGiveUpPage from "./Components/NeverGiveUpPage"
import LocomotiveScroll from 'locomotive-scroll';
import PlayPage from "./Components/PlayPage";
import SkillsPage from "./Components/SkillsPage";


function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="h-screen">
      <Navbar />
      <LandingPage />
      <NeverGiveUpPage />
      <PlayPage />
      <SkillsPage />
    </div>
  )
}

export default App
