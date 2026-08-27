import { motion } from "framer-motion"

const services = [
  {
    num:"01",
    title:"Product Design & UX",
    desc:"Clean, no-friction interfaces — free to use, no login, built to feel effortless. If it needs a manual, it’s over-designed.",
    img:"/work-meridian-real.jpg", // TODO: replace with product screenshot — 280×150 (16:9), e.g. LS PDF UI, keep object-cover 1.04 hover
    tag:"UX — NO-LOGIN, INSTANT USE",
    altRight:false
  },
  {
    num:"02",
    title:"AI-Powered Dev Tools",
    desc:"Practical AI that does the job — not demos. From PDF ops to code helpers, tools that save hours, not add steps.",
    img:"/phone-reel-1.jpg", // TODO: picks your product screenshot — 280×150
    tag:"AI — FREE, PRODUCTION-GRADE",
    altRight:true
  },
  {
    num:"03",
    title:"Full-Stack Engineering",
    desc:"End-to-end solo builds — frontend, backend, AI integrations, infra. What you see in prod is what I shipped alone.",
    img:"/work-karama-real.jpg", // TODO: replace — code/editor screenshot 280×150
    tag:"STACK — REACT / NODE / AI",
    altRight:false
  },
  {
    num:"04",
    title:"Brand & Growth",
    desc:"Lade Stack isn’t just code — it’s positioning, content, and distribution. Building a suite people actually find and return to.",
    img:"/work-citadel-real.jpg", // TODO: replace — analytics/growth screenshot 280×150
    tag:"GROWTH — ladestack.in",
    altRight:true
  },
]

export default function Services(){
  return (
    <section id="services" className="bg-black border-t border-white/[0.07] overflow-x-clip">
      <div className="mx-auto max-w-[1100px] px-4 xs:px-5 md:px-10">
        {services.map((s, idx)=>(
          <motion.div
            key={s.num}
            initial={{ opacity:0, y:18 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-12%" }}
            transition={{ duration:0.62, ease:[0.16,1,0.3,1], delay: idx*0.08 }}
            className={`group flex flex-col md:flex-row items-stretch md:items-center gap-4 sm:gap-5 md:gap-7 border-b border-white/[0.07] py-6 sm:py-7 md:py-8 ${s.altRight ? "md:flex-row-reverse" : ""}`}
          >
            <div className="hidden md:block w-[88px] shrink-0 text-[84px] font-medium leading-none tracking-[-0.03em] text-[#f4f2ed]/28 group-hover:text-[#f4f2ed]/50 transition-colors tabular-nums">{s.num}</div>
            <div className="md:hidden text-[32px] xs:text-[36px] sm:text-[40px] font-medium leading-none text-white/30 tabular-nums">{s.num}</div>

            <div className="relative h-[132px] xs:h-[140px] sm:h-[150px] w-full md:w-[280px] shrink-0 overflow-hidden rounded-[6px] border border-white/[0.06] bg-[#0a0a0a]">
              <motion.img
                initial={{ clipPath:"inset(0 12% 0 12%)", scale:1.08 }}
                whileInView={{ clipPath:"inset(0 0% 0 0%)", scale:1 }}
                viewport={{ once:true }}
                transition={{ duration:0.75, ease:[0.16,1,0.3,1], delay:0.12 }}
                src={s.img} alt={s.title} className="h-full w-full object-cover will-change-transform group-hover:scale-[1.04] transition duration-500"
                loading="lazy" decoding="async"
              />
            </div>

            <div className={`flex-1 py-1 ${s.altRight ? "md:text-left" : ""} min-w-0`}>
              <h3 className="text-[18px] xs:text-[19px] sm:text-[22px] font-medium tracking-[-0.02em] text-[#f4f2ed] break-safe">{s.title}</h3>
              <p className="mt-2 max-w-[46ch] text-[12px] xs:text-[12.5px] sm:text-[12px] leading-[1.55] text-[#f4f2ed]/56 break-safe">{s.desc}</p>
              <div className="mt-2 text-[8px] xs:text-[9px] uppercase tracking-[0.08em] text-[#f4f2ed]/30 break-safe">{s.tag}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
