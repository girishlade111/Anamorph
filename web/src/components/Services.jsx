import { motion } from "framer-motion"

const services = [
  {
    num:"01",
    title:"Long-form Edits",
    desc:"Cut for retention — narrative-first structure, clean dialogues, endings that land. 8–22 minute masters built to be watched to the last frame.",
    img:"/work-meridian-real.jpg",
    tag:"FEATURE — 12 MIN FINAL",
    altRight:false
  },
  {
    num:"02",
    title:"Short-form Reels",
    desc:"Hooks in 1.2 seconds, payoffs by 17. Shot 9:16 native — no crop rescues, just planned coverage and smart punch-ins.",
    img:"/phone-reel-1.jpg",
    tag:"REELS — 0:15 CUT-DOWNS",
    altRight:true
  },
  {
    num:"03",
    title:"Colour Grade",
    desc:"Log footage graded to feel like film — consistent skin, lifted blacks, a look that carries the whole cut without shouting.",
    img:"/work-karama-real.jpg",
    tag:"LOOK — FILM EMULATION 35MM",
    altRight:false
  },
  {
    num:"04",
    title:"Motion & Titles",
    desc:"Titles, lower-thirds and animated type that move with the edit — clean systems that scale across a full series, not one-offs.",
    img:"/work-citadel-real.jpg",
    tag:"SYSTEM — TYPE + LOWER THIRDS",
    altRight:true
  },
]

export default function Services(){
  return (
    <section id="services" className="bg-black border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10">
        {services.map((s, idx)=>(
          <motion.div
            key={s.num}
            initial={{ opacity:0, y:18 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-12%" }}
            transition={{ duration:0.62, ease:[0.16,1,0.3,1], delay: idx*0.08 }}
            className={`group flex flex-col md:flex-row items-stretch md:items-center gap-5 md:gap-7 border-b border-white/[0.07] py-7 md:py-8 ${s.altRight ? "md:flex-row-reverse" : ""}`}
          >
            <div className="hidden md:block w-[88px] shrink-0 text-[84px] font-medium leading-none tracking-[-0.03em] text-[#f4f2ed]/28 group-hover:text-[#f4f2ed]/50 transition-colors tabular-nums">{s.num}</div>
            <div className="md:hidden text-[40px] font-medium leading-none text-white/30 tabular-nums">{s.num}</div>

            <div className="relative h-[150px] w-full md:w-[280px] shrink-0 overflow-hidden rounded-[6px] border border-white/[0.06] bg-[#0a0a0a]">
              <motion.img
                initial={{ clipPath:"inset(0 12% 0 12%)", scale:1.08 }}
                whileInView={{ clipPath:"inset(0 0% 0 0%)", scale:1 }}
                viewport={{ once:true }}
                transition={{ duration:0.75, ease:[0.16,1,0.3,1], delay:0.12 }}
                src={s.img} alt={s.title} className="h-full w-full object-cover will-change-transform group-hover:scale-[1.04] transition duration-500"
              />
            </div>

            <div className={`flex-1 py-1 ${s.altRight ? "md:text-left" : ""}`}>
              <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[#f4f2ed]">{s.title}</h3>
              <p className="mt-2 max-w-[46ch] text-[12px] leading-[1.55] text-[#f4f2ed]/56">{s.desc}</p>
              <div className="mt-2 text-[9px] uppercase tracking-[0.08em] text-[#f4f2ed]/30">{s.tag}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
