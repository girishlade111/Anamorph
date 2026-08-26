import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function RevealWords({ text, muted = false, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const words = text.split(" ")
  return (
    <span ref={ref} className="inline">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.2, y: 18, filter: "blur(6px)" }}
          animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.64, ease: [0.16,1,0.3,1], delay: delay + i*0.045 }}
          className="inline-block will-change-transform"
          style={{ color: muted ? "rgba(244,242,237,0.52)" : "#f4f2ed", marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  )
}

export default function Tagline(){
  const logos = ["adidas","allbirds","audi","pexels","airbnb"]
  // duplicate 3x
  const track = [...logos, ...logos, ...logos, ...logos]
  return (
    <section className="bg-black border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 pt-[84px] pb-12">
        <h2 className="max-w-[14ch] text-left text-[clamp(36px,6.2vw,78px)] font-medium leading-[0.94] tracking-[-0.04em]">
          <RevealWords text="The people who call when it" delay={0.1} />
          <br/>
          <RevealWords text="has to feel like film, not content" muted delay={0.34} />
        </h2>
        <div className="mt-[22px] text-[10px] uppercase tracking-[0.1em] text-[#f4f2ed]/35 font-medium">CLIENTS — 2021–2026</div>
      </div>

      {/* marquee */}
      <div className="relative overflow-hidden mask-fade bg-black pb-2">
        <div className="flex w-max gap-4 py-4" style={{ animation: "marquee 28s linear infinite" }}>
          {track.map((l, i) => (
            <div key={i} className="flex h-[104px] w-[180px] shrink-0 items-center justify-center rounded-[20px] border border-white/[0.06] bg-[#0a0a0a] px-6">
              {l==="audi" ? (
                <span className="flex gap-[2px] opacity-80"><span className="h-[22px] w-[22px] rounded-full border-[2.2px] border-[#c8c4bf] inline-block -mr-2"/><span className="h-[22px] w-[22px] rounded-full border-[2.2px] border-[#c8c4bf] inline-block -mr-2"/><span className="h-[22px] w-[22px] rounded-full border-[2.2px] border-[#c8c4bf] inline-block -mr-2"/><span className="h-[22px] w-[22px] rounded-full border-[2.2px] border-[#c8c4bf] inline-block"/></span>
              ) : l==="allbirds" ? (
                <span className="text-[19px] font-light italic tracking-tight text-[#c8c4bf]">allbirds</span>
              ) : l==="pexels" ? (
                <span className="text-[19px] font-light italic tracking-tight text-[#c8c4bf]">pexels</span>
              ) : l==="airbnb" ? (
                <span className="inline-flex items-center gap-1.5 text-[16px] font-medium tracking-tight text-[#c8c4bf]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 6c2-3 6-2 6 2 0 4-6 8-6 8S6 12 6 8c0-4 4-5 6-2z"/><circle cx="12" cy="12" r="2"/></svg> airbnb</span>
              ) : (
                <span className="text-[18px] font-bold tracking-[-0.02em] text-[#c8c4bf]">{l}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
