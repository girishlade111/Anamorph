import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function Signature(){
  const [draw, setDraw] = useState(false)
  const ref = useRef(null)
  useEffect(()=>{
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting){ setTimeout(()=>setDraw(true), 300); obs.disconnect()} },{ threshold:0.3 })
    if(ref.current) obs.observe(ref.current)
    return ()=> obs.disconnect()
  },[])
  // handwritten "Noah" path - stylized cursive
  return (
    <svg ref={ref} viewBox="0 0 220 90" className="h-[58px] w-[140px] md:h-[78px] md:w-[180px]" fill="none" stroke="#f4f2ed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <motion.path
        initial={{ pathLength: 0, opacity: 0.6 }}
        animate={ draw ? { pathLength:1, opacity:0.95 } : {}}
        transition={{ duration: 1.1, ease:[0.16,1,0.3,1] }}
        d="M10 60 C 22 30, 38 24, 50 50 C 56 62, 60 64, 64 56 C 66 50, 60 38, 56 32 C 52 26, 50 28, 52 36 C 56 50, 78 70, 102 60 C 118 54, 124 38, 122 28 C 121 22, 117 22, 116 30 C 116 44, 134 64, 156 56 C 172 50, 182 36, 178 26"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0.6 }}
        animate={ draw ? { pathLength:1, opacity:0.95 } : {}}
        transition={{ duration: 1.0, ease:[0.16,1,0.3,1], delay:0.3 }}
        d="M58 72 C 80 80, 120 82, 168 70"
      />
    </svg>
  )
}

const credits = [
  ["DIRECTOR","Noah Reyes"],
  ["SOUND","Noah Reyes"],
  ["MOTION","Noah Reyes"],
  ["CATERING","Still Noah"],
  ["EDIT","Noah Reyes"],
  ["GRADE","Noah Reyes"],
]

export default function About(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset:["start end","end start"] })
  const yImg = useTransform(scrollYProgress, [0,1], ["-3%","-9%"])

  return (
    <section id="about" ref={ref} className="bg-black border-t border-white/[0.07]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14 px-5 md:px-10 py-16 md:py-24">
        <div className="relative w-full max-w-[380px] aspect-[3/4] overflow-hidden rounded-[6px] border border-white/[0.06] bg-[#0a0a0a] mx-auto md:mx-0">
          <motion.img style={{ y: yImg }} src="/about-noah.jpg" alt="Noah Reyes — editor and colourist, smiling against red curtains" className="absolute inset-[-3%] h-[106%] w-[106%] object-cover will-change-transform" />
          {/* signature overlay */}
          <div className="absolute -right-3 -top-3 md:-right-4 md:-top-4 rotate-[-6deg]">
            <Signature/>
          </div>
          <div className="absolute inset-x-3 bottom-2 flex items-center justify-between text-[8px] font-mono uppercase tracking-[0.06em] text-[#f4f2ed]/40">
            <span>NOAH_REYES@THISISREELS</span>
            <span>4K - 24 FPS</span>
          </div>
        </div>

        <div>
          <h2 className="text-[clamp(28px,3.4vw,42px)] font-medium leading-[1.02] tracking-[-0.03em] text-[#f4f2ed]">
            Every frame handled<br/>by the same person
          </h2>
          <div className="mt-8 flex flex-col items-start gap-[14px]">
            {credits.map(([label, value],i)=>(
              <motion.div key={label} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55, ease:[0.16,1,0.3,1], delay: i*0.07 }} className="flex w-full max-w-[320px] flex-col items-start">
                <span className={`text-[10px] uppercase tracking-[0.12em] ${i>=4? "text-[#f4f2ed]/28" : "text-[#f4f2ed]/38"}`}>{label}</span>
                <span className={`mt-1 text-[22px] font-medium ${i>=4? "text-[#a8a5a0]" : "text-[#f4f2ed]"}`}>{value}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 max-w-[40ch] text-[13px] leading-[1.55] text-[#f4f2ed]/55">
            <span className="font-medium text-[#f4f2ed]">Same name on every credit.</span> That’s just how I work.
            Twelve years on documentary, music and branded projects.
          </p>
        </div>
      </div>
    </section>
  )
}
