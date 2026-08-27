import Hero from "./components/Hero"
import Tagline from "./components/Tagline"
import StatsBar from "./components/StatsBar"
import SelectedWork from "./components/SelectedWork"
import ShortForm from "./components/ShortForm"
import Services from "./components/Services"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import StickyDock from "./components/StickyDock"
import GlobalHUD from "./components/GlobalHUD"

export default function App(){
  return (
    <div className="bg-black text-[#f4f2ed]">
      <GlobalHUD/>
      <main>
        <Hero/>
        <Tagline/>
        <StatsBar variant="primary"/>
        <section id="work" className="h-0" aria-hidden />
        <SelectedWork/>
        <section id="reels" className="h-0" aria-hidden />
        <ShortForm/>
        <Services/>
        <About/>
        <Pricing/>
        <Testimonial/>
        <Contact/>
      </main>
      <StatsBar variant="footer"/>
      <Footer/>
      <StickyDock/>
    </div>
  )
}
