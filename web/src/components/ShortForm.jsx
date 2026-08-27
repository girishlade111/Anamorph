import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const reels = [
  { id:1, handle:"@maison.veldt", caption:"Autumn drop — shot cold, graded warm.", img:"/hero-alt-1.jpg", likes:"48.2k", comments:"612", shares:"1.2k" },
  { id:2, handle:"@sable.jun", caption:"Under real starlight, no relight.", img:"/about-noah.jpg", likes:"21.1k", comments:"204", shares:"540" },
]

export default function ShortForm(){
  const wrapperRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start","end end"] })
  const [active,setActive]=useState(0)
  useEffect(()=> {
    const unsub = scrollYProgress.on("change", v=> setActive(v>0.5 ? 1 : 0))
    return ()=> unsub()
  },[scrollYProgress])
  const shortColor = useTransform(scrollYProgress, [0,0.48,0.52,1], ["#f4f2ed","#f4f2ed","rgba(244,242,237,0.42)","rgba(244,242,237,0.42)"])
  const formColor = useTransform(scrollYProgress, [0,0.48,0.52,1], ["rgba(244,242,237,0.42)","rgba(244,242,237,0.42)","#f4f2ed","#f4f2ed"])
  const trackY = useTransform(scrollYProgress,[0,1],["0%","-50%"])

  return (
    <section ref={wrapperRef} className="relative h-[240vh] bg-black">
      <div className="sticky top-0 grid h-[100vh] place-items-center overflow-hidden">
        {/* header ticks */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 md:px-7 py-[10px] text-[10px] font-mono uppercase tracking-[0.08em] text-[#f4f2ed]/38">
          <span>(03) — SHORT-FORM REELS</span>
          <span className="hidden md:inline opacity-30">+</span>
          <span>00:03:00:00</span>
        </div>

        <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-6 py-10">
          {/* left word */}
          <motion.div style={{ color: shortColor }} className="hidden md:block justify-self-end text-right text-[clamp(64px,9vw,164px)] font-semibold leading-none tracking-[-0.04em] will-change-[color]">Short</motion.div>
          <div className="flex flex-col items-center md:hidden">
            <div className="text-[48px] font-semibold leading-none tracking-[-0.04em] text-[#f4f2ed]">Short</div>
          </div>

          {/* phone */}
          <motion.div
            initial={{ opacity:0, y:40, scale:0.88 }}
            whileInView={{ opacity:1, y:0, scale:1 }}
            viewport={{ once:true, margin:"-10%" }}
            transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
            className="relative h-[62vh] min-h-[460px] w-[62vw] max-w-[340px] md:h-[68vh] md:w-[340px] overflow-hidden rounded-[32px] border border-white/12 bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
            style={{ animation:"floatY 4s ease-in-out infinite" }}
          >
            {/* notch */}
            <div className="absolute left-1/2 top-2 z-10 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black" />
            {/* top bar inside phone */}
            <div className="absolute inset-x-0 top-[14px] z-10 flex items-center justify-between px-5 text-[11px] font-medium tracking-tight">
              <button className="text-white/80">+</button>
              <div className="flex gap-3 text-white"><span className="font-semibold">Reels</span><span className="opacity-45">Friends</span></div>
              <span className="text-white/60">≋</span>
            </div>
            {/* track */}
            <motion.div style={{ y: trackY }} className="will-change-transform">
              {reels.map(r=>(
                <div key={r.id} className="relative h-[68vh] min-h-[460px] w-full">
                  <img src={r.img} alt={r.caption} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  {/* right icons */}
                  <div className="absolute bottom-[74px] right-3 flex flex-col items-center gap-4 text-white">
                    <div className="flex flex-col items-center"><span className="text-[18px] leading-none">♡</span><span className="mt-1 text-[9px] font-mono">{r.likes}</span></div>
                    <div className="flex flex-col items-center"><span className="text-[16px] leading-none">◯</span><span className="mt-1 text-[9px] font-mono">{r.comments}</span></div>
                    <div className="flex flex-col items-center"><span className="text-[16px] leading-none">↗</span><span className="mt-1 text-[9px] font-mono">{r.shares}</span></div>
                    <span className="text-[14px]">▭</span>
                    <span className="text-[14px]">⋮</span>
                  </div>
                  {/* caption */}
                  <div className="absolute bottom-4 left-4 right-12 text-left">
                    <div className="text-[11px] font-semibold leading-tight text-white">{r.handle}</div>
                    <div className="mt-1 text-[11px] leading-snug text-white/80">{r.caption}</div>
                  </div>
                </div>
              ))}
              {/* duplicate second track for seamless */}
              {reels.map(r=>(
                <div key={r.id+"-dup"} className="relative h-[68vh] min-h-[460px] w-full">
                  <img src={r.img} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </motion.div>
            {/* inner bevel */}
            <div className="pointer-events-none absolute inset-0 rounded-[32px] shadow-[inset_0_0_0_3px_rgba(255,255,255,0.06)]" />
          </motion.div>

          <motion.div style={{ color: formColor }} className="hidden md:block text-[clamp(64px,9vw,164px)] font-semibold leading-none tracking-[-0.04em]">Form</motion.div>
          <div className="text-center md:hidden text-[48px] font-semibold leading-none tracking-[-0.04em] text-[#f4f2ed]/42">Form</div>
        </div>

        <div className="absolute inset-x-0 bottom-0 hidden md:flex items-center justify-between px-7 py-3 text-[10px] font-mono uppercase tracking-[0.08em] text-white/30">
          <span>EDITOR — COLOURIST</span><span>RUNTIME — 0:15</span><span>RATIO — 9:16</span>
        </div>
      </div>
    </section>
  )
}
