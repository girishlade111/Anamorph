import { motion } from "framer-motion"

const plans = [
  // CONTENT-ONLY — default to (b) How I work, since Lade Stack tools are free. Prices are [FILL] — do not fabricate.
  { num:"01", title:"Solo Build", desc:"Free, production-grade tools at ladestack.in — no login, no paywall. I design, code, and maintain everything solo, inspired by real dev friction.", tag:"PRODUCT — SHIPPED SOLO", eyebrow:"FREE FOREVER", price:"[FILL: —]" },
  { num:"02", title:"Advisory / Consulting", desc:"Thought-partner for product, UX, or AI-tooling — reviews, roadmaps, and build guidance.", tag:"SESSION — [FILL: SCOPE]", eyebrow:"[FILL: RATE]", price:"[FILL: $/hr]" },
  { num:"03", title:"Custom Tool Dev", desc:"Need a bespoke internal tool or AI workflow? I scope and ship it end-to-end — fast, private, maintainable.", tag:"PROJECT — [FILL: SCOPE]", eyebrow:"[FILL: RATE]", price:"[FILL: $ flat]" },
]

export default function Pricing(){
  return (
    <section className="bg-black border-t border-white/[0.07] overflow-x-clip">
      <div className="mx-auto max-w-[1040px] px-4 xs:px-5 md:px-10 py-12 sm:py-16 md:py-20">
        <h2 className="text-center text-[clamp(30px,8vw,72px)] sm:text-[clamp(36px,5.6vw,72px)] font-medium leading-[0.95] tracking-[-0.04em] break-safe">
          <span className="block text-[#f4f2ed]">How I work — solo,</span>
          <span className="block text-[#f4f2ed]/52">end-to-end, no handoffs</span>
        </h2>

        <div className="mt-8 sm:mt-12 border-t border-white/[0.08]">
          {plans.map((p,i)=>(
            <motion.div
              key={p.num}
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-12%" }}
              transition={{ duration:0.62, ease:[0.16,1,0.3,1], delay:i*0.09 }}
              className="group grid grid-cols-[44px_1fr] xs:grid-cols-[56px_1fr_auto] md:grid-cols-[72px_1fr_140px_72px] items-start xs:items-center gap-3 md:gap-4 border-b border-white/[0.08] py-6 sm:py-7 md:py-8 transition-colors hover:bg-white/[0.03]"
            >
              <div className="text-[28px] xs:text-[36px] md:text-[56px] font-medium leading-none tracking-[-0.03em] text-[#f4f2ed]/28 group-hover:text-[#f4f2ed]/52 transition tabular-nums row-span-2 xs:row-span-1">{p.num}</div>

              <div className="min-w-0 col-span-1">
                <h3 className="text-[15px] xs:text-[16px] md:text-[17px] font-medium tracking-[-0.02em] text-[#f4f2ed] break-safe">{p.title}</h3>
                <p className="mt-1 max-w-[44ch] text-[11px] leading-[1.5] text-[#f4f2ed]/55 break-safe">{p.desc}</p>
                <div className="mt-1 text-[8px] xs:text-[9px] uppercase tracking-[0.06em] text-[#f4f2ed]/32 break-safe">{p.tag}</div>
              </div>

              <div className="text-left xs:text-right col-start-2 xs:col-start-3 md:col-start-auto w-full xs:w-auto mt-2 xs:mt-0">
                <div className="text-[8px] xs:text-[9px] uppercase tracking-[0.08em] text-[#f4f2ed]/38 break-safe">{p.eyebrow}</div>
                <div className="mt-1 text-[16px] xs:text-[18px] md:text-[22px] font-medium tracking-[-0.02em] text-[#f4f2ed] tabular-nums break-words">{p.price}</div>
                <a href="#contact" className="inline-flex xs:hidden mt-2 items-center gap-1.5 text-[11px] font-medium tracking-[0.06em] text-[#db3903]">BOOK →</a>
              </div>

              <a href="#contact" className="group/cta hidden xs:hidden md:inline-flex items-center justify-end gap-1.5 text-[11px] font-medium tracking-[0.06em] text-[#db3903] hover:text-[#f04a13] transition">
                BOOK <span className="inline-block transition-transform group-hover/cta:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
