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
  const items = variant==="primary"
    ? [{v:120,s:"+",l:"PROJECTS DELIVERED",d:100},{v:48,s:"M+",l:"VIEWS GENERATED",d:200},{v:12,s:"",l:"YEARS EDITING",d:300},{v:24,s:"H",l:"FIRST CUT",d:400}]
    : [{v:24,s:"H",l:"REPLY TIME",d:80},{v:2,s:"",l:"REVISION ROUNDS",d:150},{v:98,s:"%",l:"ON-TIME DELIVERY",d:220},{v:5,s:"D",l:"FIRST CUT",d:290}]
  return (
    <section className="bg-black border-y border-white/[0.07]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 py-8 md:py-10">
          {items.map(it=> <Stat key={it.l} value={it.v} suffix={it.s} label={it.l} delay={it.d}/>)}
        </div>
      </div>
    </section>
  )
}
