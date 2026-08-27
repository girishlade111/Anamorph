import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const quote = ["He","sends","one","cut,","not","options.","Ten","episodes","in,","it’s","still","the","right","one.","Unbelievable."]

function Quote(){
  const ref = useRef(null)
  const [active,setActive] = useState(false)
  useEffect(()=>{
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting){ setActive(true); obs.disconnect()} },{ threshold:0.25 })
    if(ref.current) obs.observe(ref.current)
    return ()=> obs.disconnect()
  },[])
  return (
    <blockquote ref={ref} className="text-[clamp(26px,3.4vw,46px)] font-medium leading-[1.06] tracking-[-0.035em]">
      {quote.map((w,i)=>(
        <motion.span
          key={i}
          initial={{ opacity: 0.22, y: 12, filter: "blur(4px)" }}
          animate={ active ? { opacity: 1, y:0, filter:"blur(0px)" } : {} }
          transition={{ duration: 0.5, ease:[0.16,1,0.3,1], delay: 0.05 + i*0.032 }}
          className="inline-block will-change-transform"
          style={{
            color: i < 6 ? "#f4f2ed" : i < 12 ? "rgba(244,242,237,0.9)" : "rgba(244,242,237,0.68)",
            marginRight:"0.28em"
          }}
        >{w}</motion.span>
      ))}
    </blockquote>
  )
}

export default function Testimonial(){
  return (
    <section className="bg-black border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10 py-16 md:py-20">
        <div className="mb-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.08em] text-[#f4f2ed]/38">
          <span>(07) — CLIENT REVIEWS</span>
          <span className="hidden md:inline opacity-30">+</span>
          <span>00:07:00:00</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <Quote/>
            <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{ duration:0.55, ease:[0.16,1,0.3,1], delay:0.4 }} className="mt-8">
              <div className="text-[11px] font-semibold tracking-[0.06em] text-[#f4f2ed]">DANA KOVAC</div>
              <div className="mt-1 text-[10px] tracking-[0.04em] text-[#f4f2ed]/45 font-mono">SHOWRUNNER — NETFLIX</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity:0, clipPath:"inset(8% 0 8% 0)", scale:1.04 }}
            whileInView={{ opacity:1, clipPath:"inset(0 0 0 0)", scale:1 }}
            viewport={{ once:true, margin:"-10%" }}
            transition={{ duration:0.75, ease:[0.16,1,0.3,1], delay:0.2 }}
            className="relative mx-auto w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-[6px] border border-white/[0.06] bg-[#0a0a0a]"
          >
            <img src="/hero-alt-1.jpg" alt="Dana Kovac portrait, warm red fabric light" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
