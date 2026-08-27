import { useEffect, useRef, useState } from "react"

function useCountUp(target, start, duration=1400){
  const [val,setVal]=useState(0)
  useEffect(()=>{
    if(!start) return
    let raf
    const t0 = performance.now()
    const ease = t=> 1 - Math.pow(1-t,3)
    const tick = (now)=>{
      const p = Math.min(1,(now-t0)/duration)
      setVal(Math.floor(ease(p)*target))
      if(p<1) raf=requestAnimationFrame(tick)
      else setVal(target)
    }
    raf=requestAnimationFrame(tick)
    return ()=> cancelAnimationFrame(raf)
  },[start,target,duration])
  return val
}

function Stat({value,suffix,label,delay}){
  const ref=useRef(null)
  const [active,setActive]=useState(false)
  const count = useCountUp(value, active)
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting){ setTimeout(()=>setActive(true),delay); obs.disconnect()} },{threshold:0.2})
    if(ref.current) obs.observe(ref.current)
    return ()=>obs.disconnect()
  },[delay])
  return (
    <div ref={ref} className="will-change-transform" style={{transition:`opacity 600ms ease ${delay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`, opacity: active?1:0, transform: active? "translateY(0)":"translateY(14px)" }}>
      <div className="text-[clamp(36px,5.2vw,64px)] font-medium leading-none tracking-[-0.04em] text-[#f4f2ed] tabular-nums">
        {active ? count : 0}{suffix}
      </div>
      <div className="mt-[10px] text-[10px] uppercase tracking-[0.08em] text-[#f4f2ed]/45 font-medium">{label}</div>
    </div>
  )
}

export default function StatsBar({variant="primary"}){
  // CONTENT-ONLY SWAP — numeric stats replaced with [FILL] placeholders per instructions. No layout/CSS changed.
  // Primary row: real Lade Stack metrics not yet provided — flagged.
  // Footer variant repurposed: FREE FOREVER / NO LOGIN / TOOLS LIVE / RESPONSE — flagged.
  const items = variant==="primary"
    ? [
        // {v/value display} — if string contains [FILL], animation is bypassed
        {v:"[FILL: 6+]",s:"",l:"TOOLS SHIPPED",d:100, note:"[FILL: exact count of tools live on ladestack.in — e.g. 6+]" },
        {v:"[FILL]",s:"",l:"VISITS / USERS",d:200, note:"[FILL: real visits if tracked, else replace with — or remove — DO NOT fabricate]" },
        {v:"[FILL]",s:"",l:"MONTHS ACTIVE",d:300, note:"[FILL: months since first tool shipped]" },
        {v:"FREE",s:"",l:"FREE FOREVER — NO LOGIN",d:400, note:"static, not a count"},
      ]
    : [
        {v:"FREE",s:"",l:"FREE FOREVER",d:80},
        {v:"NO",s:" LOGIN",l:"NO LOGIN REQUIRED",d:150},
        {v:"[FILL]",s:"",l:"TOOLS LIVE",d:220, note:"[FILL: live tools count]"},
        {v:"24H",s:"",l:"INQUIRY RESPONSE",d:290, note:"[FILL: your avg response time — replace if different]"},
      ]
  return (
    <section className="bg-black border-y border-white/[0.07] overflow-x-clip">
      <div className="mx-auto max-w-[1280px] px-4 xs:px-5 md:px-10">
        {/* ruler */}
        <div className="relative h-[22px] border-b border-white/[0.06]">
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-1 opacity-40">
            <span className="text-[8px] font-mono tracking-[0.08em] text-white/35">01</span>
            <span className="text-[8px] font-mono tracking-[0.08em] text-white/30">02</span>
            <span className="text-[8px] font-mono tracking-[0.08em] text-white/30">03</span>
            <span className="text-[8px] font-mono tracking-[0.08em] text-white/30">04</span>
          </div>
          <div className="absolute inset-x-0 bottom-[6px] h-px bg-[#f4f2ed]/[0.09]" />
          {/* ticks */}
          <div className="absolute inset-x-0 bottom-0 h-[12px] flex justify-between px-[1%]">
            {Array.from({length:32}).map((_,i)=>(
              <span key={i} className={`w-px ${i%8===0 ? "h-[12px] bg-white/18" : "h-[6px] bg-white/[0.07] mt-[6px]"}`} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 xs:gap-8 md:gap-6 py-6 xs:py-8 md:py-10">
          {items.map(it=>{
            const isFill = typeof it.v === "string" && it.v.includes("[FILL")
            const isStatic = typeof it.v === "string" && (it.v==="FREE"||it.v==="NO")
            if(isFill || isStatic){
              return (
                <div key={it.l} className="will-change-transform min-w-0">
                  <div className="text-[clamp(22px,7.2vw,52px)] xs:text-[clamp(28px,4.2vw,52px)] font-medium leading-none tracking-[-0.04em] text-[#f4f2ed] break-words">
                    {it.v}{it.s}
                    {isFill && <span className="ml-1 text-[8px] xs:text-[9px] align-super font-mono tracking-[0.04em] text-[#f4f2ed]/35">*</span>}
                  </div>
                  <div className="mt-2 xs:mt-[10px] text-[9px] xs:text-[10px] uppercase tracking-[0.08em] text-[#f4f2ed]/45 font-medium leading-tight break-safe">{it.l}</div>
                  {it.note && <div className="mt-1 text-[8px] xs:text-[9px] font-mono leading-[1.3] text-amber-300/70 break-words">{it.note}</div>}
                </div>
              )
            }
            return <Stat key={it.l} value={it.v} suffix={it.s} label={it.l} delay={it.d}/>
          })}
        </div>
      </div>
    </section>
  )
}
