import { motion } from "framer-motion"

const plans = [
  { num:"01", title:"One Cut", desc:"A single feature or film-grade reel — pre-pro, edit, colour, two passes of revisions.", tag:"PROJECT — UP TO 12 MIN", eyebrow:"FROM — FLAT", price:"$4,800" },
  { num:"02", title:"Retainer", desc:"A monthly slate. Long-form plus cut-downs, priority turnaround, dedicated calendar slot.", tag:"SLATE — 4–8 CUTS / MONTH", eyebrow:"FROM — MONTHLY", price:"$6,400" },
  { num:"03", title:"Day Rate", desc:"A focused day on-set or in-suite. Edit, colour or motion. Bookable in 1-day blocks.", tag:"SESSION — UP TO 10 HRS", eyebrow:"PER DAY", price:"$850" },
]

export default function Pricing(){
  return (
    <section className="bg-black border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1040px] px-5 md:px-10 py-16 md:py-20">
        <h2 className="text-center text-[clamp(36px,5.6vw,72px)] font-medium leading-[0.95] tracking-[-0.04em]">
          <span className="block text-[#f4f2ed]">Clear rates up front</span>
          <span className="block text-[#f4f2ed]/52">no surprises later</span>
        </h2>

        <div className="mt-12 border-t border-white/[0.08]">
          {plans.map((p,i)=>(
            <motion.div
              key={p.num}
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-12%" }}
              transition={{ duration:0.62, ease:[0.16,1,0.3,1], delay:i*0.09 }}
              className="group grid grid-cols-[56px_1fr_auto] md:grid-cols-[72px_1fr_140px_72px] items-center gap-3 md:gap-4 border-b border-white/[0.08] py-7 md:py-8 transition-colors hover:bg-white/[0.03]"
            >
              <div className="text-[36px] md:text-[56px] font-medium leading-none tracking-[-0.03em] text-[#f4f2ed]/28 group-hover:text-[#f4f2ed]/52 transition tabular-nums">{p.num}</div>

              <div>
                <h3 className="text-[16px] md:text-[17px] font-medium tracking-[-0.02em] text-[#f4f2ed]">{p.title}</h3>
                <p className="mt-1 max-w-[44ch] text-[11px] leading-[1.5] text-[#f4f2ed]/55">{p.desc}</p>
                <div className="mt-1 text-[9px] uppercase tracking-[0.06em] text-[#f4f2ed]/32">{p.tag}</div>
              </div>

              <div className="text-right">
                <div className="text-[9px] uppercase tracking-[0.08em] text-[#f4f2ed]/38">{p.eyebrow}</div>
                <div className="mt-1 text-[20px] md:text-[22px] font-medium tracking-[-0.02em] text-[#f4f2ed] tabular-nums">{p.price}</div>
              </div>

              <a href="#contact" className="group/cta hidden md:inline-flex items-center justify-end gap-1.5 text-[11px] font-medium tracking-[0.06em] text-[#db3903] hover:text-[#f04a13] transition">
                BOOK <span className="inline-block transition-transform group-hover/cta:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
