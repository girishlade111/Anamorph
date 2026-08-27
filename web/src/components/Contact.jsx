import { useState } from "react"
import { motion } from "framer-motion"

const projects = ["Product idea","Collaboration","Hiring inquiry"]

export default function Contact(){
  const [proj, setProj] = useState(projects[0])
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  function handleSubmit(e){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = (fd.get("name")||"").toString().trim()
    const email = (fd.get("email")||"").toString().trim()
    const brief = (fd.get("brief")||"").toString().trim()
    const next = {}
    if(!name) next.name = true
    if(!email || !/^\S+@\S+\.\S+$/.test(email)) next.email = true
    if(!brief) next.brief = true
    setErrors(next)
    if(Object.keys(next).length) return
    setSent(true)
    setTimeout(()=> setSent(false), 2200)
  }

  return (
    <section id="contact" className="bg-black border-t border-white/[0.07]">
      <div className="mx-auto max-w-[760px] px-5 md:px-6 py-16 md:py-24">
        <h2 className="text-center text-[clamp(36px,6vw,72px)] font-medium leading-[0.96] tracking-[-0.04em]">
          <span className="block text-[#f4f2ed]">Let’s build something</span>
          <span className="block text-[#f4f2ed]/52">people actually use</span>
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] font-medium tracking-[0.08em] text-[#f4f2ed]/45">
          <span>SLOTS FOR JUL</span>
          <span className="flex items-center gap-1.5">
            <span className="h-[6px] w-[6px] rounded-full bg-[#db3903]" />
            <span className="h-[6px] w-[6px] rounded-full bg-[#db3903]" />
            <span className="h-[6px] w-[6px] rounded-full bg-[#db3903]" />
            <span className="h-[6px] w-[6px] rounded-full bg-[#db3903]" />
            <span className="h-[6px] w-[6px] rounded-full border border-[#3a3a3a] bg-transparent" />
          </span>
          <span className="font-semibold text-[#f4f2ed]">2 LEFT</span>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-12 flex flex-col gap-[22px]">
          {[
            { id:"01", label:"NAME", name:"name", placeholder:"Your name", type:"text" },
            { id:"02", label:"EMAIL", name:"email", placeholder:"you@studio.com", type:"email" },
          ].map((f,i)=>(
            <motion.div key={f.name} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.55, ease:[0.16,1,0.3,1], delay: 0.08 + i*0.08}}>
              <label className="flex items-baseline gap-2 mb-2 text-[10px] font-medium tracking-[0.08em]">
                <span className="text-[#db3903]">{f.id}</span>
                <span className="text-[#f4f2ed]/70">{f.label}</span>
              </label>
              <input name={f.name} type={f.type} placeholder={f.placeholder} className={`w-full rounded-[6px] border bg-[#0a0a0a] px-4 py-[14px] text-[13px] tracking-tight text-[#f4f2ed] placeholder:text-[#f4f2ed]/32 outline-none transition focus:bg-[#111111] focus:outline-2 focus:outline-offset-2 focus:outline-[#f4f2ed]/14 ${errors[f.name] ? "border-[#db3903]" : "border-white/[0.06] focus:border-[#f4f2ed]/60"}`} />
              {errors[f.name] && <div className="mt-1 text-[11px] text-[#db3903]">Required.</div>}
            </motion.div>
          ))}

          {/* project select */}
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.55, ease:[0.16,1,0.3,1], delay: 0.24}}>
            <label className="flex items-baseline gap-2 mb-2 text-[10px] font-medium tracking-[0.08em]">
              <span className="text-[#db3903]">03</span>
              <span className="text-[#f4f2ed]/70">TOPIC</span>
            </label>
            <div className="relative">
              <button type="button" onClick={()=> setOpen(o=>!o)} className="flex w-full items-center justify-between rounded-[6px] border border-white/[0.06] bg-[#0a0a0a] px-4 py-[14px] text-[13px] tracking-tight text-[#f4f2ed] hover:bg-[#111] transition">
                <span>{proj}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" className={`text-white/55 transition ${open?"rotate-180":""}`} fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {open && (
                <div className="absolute inset-x-0 top-[calc(100%+4px)] z-20 overflow-hidden rounded-[8px] border border-white/[0.08] bg-[#121212] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  {projects.map(p=>(
                    <button type="button" key={p} onClick={()=>{ setProj(p); setOpen(false) }} className={`block w-full px-4 py-3 text-left text-[13px] tracking-tight transition ${p===proj?"bg-white/[0.04] text-white":"text-white/70 hover:bg-white/[0.03]"}`}>{p}</button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* brief */}
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.55, ease:[0.16,1,0.3,1], delay: 0.32}}>
            <label className="flex items-baseline gap-2 mb-2 text-[10px] font-medium tracking-[0.08em]">
              <span className="text-[#db3903]">04</span>
              <span className="text-[#f4f2ed]/70">DETAILS</span>
            </label>
            <textarea name="brief" rows={4} placeholder="Your idea, context, timeline — and the one problem to solve." className={`w-full resize-y rounded-[6px] border bg-[#0a0a0a] px-4 py-[14px] text-[13px] tracking-tight text-[#f4f2ed] placeholder:text-[#f4f2ed]/32 outline-none transition focus:bg-[#111111] focus:border-[#f4f2ed]/60 focus:outline-2 focus:outline-offset-2 focus:outline-[#f4f2ed]/14 ${errors.brief ? "border-[#db3903]" : "border-white/[0.06]"}`} />
            {errors.brief && <div className="mt-1 text-[11px] text-[#db3903]">Required.</div>}
          </motion.div>

          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.55, ease:[0.16,1,0.3,1], delay: 0.42}} className="mt-6 flex flex-col items-center gap-3">
            <button type="submit" className={`group inline-flex items-center gap-2 rounded-full px-7 py-[14px] text-[13px] font-medium tracking-tight text-white transition will-change-transform active:scale-[0.98] ${sent? "bg-[#1a8f4a] hover:bg-[#1a8f4a]":"bg-[#db3903] hover:bg-[#c53703] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(219,57,3,0.32)]"}`}>
              {sent ? "Sent ✓" : "Send the brief"}
            </button>
            <a href="mailto:[FILL: your email]" className="text-[11px] text-[#f4f2ed]/55 underline decoration-dotted underline-offset-4 hover:text-[#f4f2ed] transition">or write: [FILL: your email — e.g. girish@ladestack.in]</a>
          </motion.div>
        </form>
      </div>
    </section>
  )
}
