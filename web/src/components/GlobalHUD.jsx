import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function GlobalHUD(){
  useEffect(()=>{
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const lenis = new Lenis({
      duration: reduced ? 0 : 1.1,
      easing: (t)=> Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduced,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time)=> lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    document.documentElement.classList.add("lenis")
    return ()=> {
      lenis.destroy()
      document.documentElement.classList.remove("lenis")
    }
  },[])
  return (
    <>
      {/* persistent vertical viewfinder ticks */}
      <div className="pointer-events-none fixed inset-y-0 left-0 z-[45] hidden md:flex flex-col items-center justify-between py-24 pl-3" aria-hidden>
        {Array.from({length:7}).map((_,i)=>(
          <span key={i} className="h-px w-3 bg-[#f4f2ed]/15" />
        ))}
      </div>
      <div className="pointer-events-none fixed inset-y-0 right-0 z-[45] hidden md:flex flex-col items-center justify-between py-24 pr-3" aria-hidden>
        {Array.from({length:7}).map((_,i)=>(
          <span key={i} className="h-px w-3 bg-[#f4f2ed]/15" />
        ))}
      </div>
      {/* film grain */}
      <div className="grain" aria-hidden />
    </>
  )
}
