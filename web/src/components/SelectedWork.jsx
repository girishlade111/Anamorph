import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const slides = [
  // TODO: swap image references to your photos/product screenshots — expected 640×500 (aspect 1.28) min 1280w, subject centered, keep viewfinder brackets legibility.
  // Images currently use placeholder frames — replace with: /hero.jpg (your portrait, 2560×1096 21:9) or product screenshots (LS PDF, Coder) cropped to 4:3.
  { id:"01", name:"LADE STACK", img:"/hero.jpg", year:"2026", tall:false, desc:"TODO: replace with your portrait/product shot — 640×500, keep negative space" },
  { id:"02", name:"LADE STACK", img:"/work-citadel-real.jpg", year:"2026", tall:false, desc:"TODO: replace with product screenshot — 640×500" },
  { id:"03", name:"LADE STACK", img:"/work-karama-real.jpg", year:"2026", tall:false, desc:"TODO: replace with product screenshot — 640×500" },
]

export default function SelectedWork(){
  const wrapperRef = useRef(null)
  const [idx,setIdx]=useState(0)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start","end end"] })

  // map progress to index
  useEffect(()=>{
    const unsub = scrollYProgress.on("change",(v)=>{
      if(v<0.33) setIdx(0)
      else if(v<0.66) setIdx(1)
      else setIdx(2)
    })
    return ()=> unsub()
  },[scrollYProgress])

  const blurY = useTransform(scrollYProgress,[0,1],["-6%","6%"])

  return (
    <section ref={wrapperRef} className="relative h-[220vh] sm:h-[260vh] md:h-[300vh] bg-black overflow-x-clip">
      <div className="sticky top-0 h-[100svh] h-[100dvh] overflow-hidden">
        {/* header ticks */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-y border-white/[0.07] bg-black/40 backdrop-blur-[2px] px-4 xs:px-5 md:px-7 py-[9px] sm:py-[10px] text-[10px] font-mono uppercase tracking-[0.08em] text-[#f4f2ed]/45">
          <span>(01) — LADE STACK</span>
          <span className="hidden md:inline text-[#f4f2ed]/18">+</span>
          <span>2026</span>
        </div>

        {/* blurred backdrop layers crossfading */}
        <div className="absolute inset-0">
          {slides.map((s,i)=>(
            <motion.div key={s.id} className="absolute inset-[-12%] sm:inset-[-18%]" style={{ y: blurY, opacity: idx===i ? 0.62 : 0 }} transition={{duration:0.45}}>
              {/* heavy blur hidden on mobile for perf — lighter blur */}
              <img src={s.img} alt="" className="hidden sm:block h-full w-full object-cover scale-[1.12]" style={{filter:"blur(42px) brightness(0.82) saturate(1.05)"}} />
              <img src={s.img} alt="" className="block sm:hidden h-full w-full object-cover scale-[1.08]" style={{filter:"blur(20px) brightness(0.78) saturate(1.02)"}} />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 sm:from-black/20 via-transparent to-black/40" />
        </div>

        {/* foreground card */}
        <div className="relative grid h-full place-items-center px-4 xs:px-5 pt-10 sm:pt-0">
          <div className="relative w-[92vw] xs:w-[88vw] max-w-[640px] aspect-[1.35] sm:aspect-[1.28] overflow-hidden rounded-[6px] border border-white/[0.08] bg-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.55)] sm:shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
            {slides.map((s,i)=>(
              <motion.div key={s.name} className="absolute inset-0" initial={false} animate={{ opacity: idx===i?1:0, scale: idx===i?1:0.98 }} transition={{ duration: 0.42, ease: [0.25,1,0.5,1] }}>
                <img src={s.img} alt={`${s.name} project`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                {/* viewfinder brackets */}
                <span className="pointer-events-none absolute left-2.5 top-2.5 sm:left-3.5 sm:top-3.5 h-[10px] w-[10px] sm:h-[14px] sm:w-[14px] border-l border-t border-[#f4f2ed]/35" />
                <span className="pointer-events-none absolute right-2.5 top-2.5 sm:right-3.5 sm:top-3.5 h-[10px] w-[10px] sm:h-[14px] sm:w-[14px] border-r border-t border-[#f4f2ed]/35" />
                <span className="pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 h-[10px] w-[10px] sm:h-[14px] sm:w-[14px] border-b border-l border-[#f4f2ed]/35" />
                <span className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 h-[10px] w-[10px] sm:h-[14px] sm:w-[14px] border-b border-r border-[#f4f2ed]/35" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ticker bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[4vh] sm:bottom-[6vh] z-[6] overflow-hidden mask-fade">
          <div className="flex w-max items-center gap-2 sm:gap-3" style={{ animation:"ticker 24s linear infinite" }}>
            {Array.from({length:12}).map((_,i)=>{
              const s = slides[idx]
              const isActive = i%3===0
              return (
                <span key={i} className="inline-flex items-center gap-3 sm:gap-4 whitespace-nowrap pr-3 sm:pr-4">
                  <span className={`text-[clamp(36px,12vw,148px)] sm:text-[clamp(48px,9vw,148px)] font-medium leading-none tracking-[-0.04em] ${isActive ? "text-[#f4f2ed]" : "text-[#f4f2ed]/42"}`}>{s.name}</span>
                  <span className="text-[14px] sm:text-[18px] font-light leading-none text-[#f4f2ed]/25">+</span>
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
