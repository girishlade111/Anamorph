import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const yMark = useTransform(scrollYProgress, [0, 1], ["0%", "42%"])
  const opacityMark = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const opacityHUD = useTransform(scrollYProgress, [0, 0.35], [1, 0.85])

  return (
    <section ref={ref} className="relative h-[100svh] h-[100dvh] min-h-[560px] sm:min-h-[620px] w-full overflow-hidden bg-black">
      {/* background image with Ken Burns + parallax */}
      <motion.div style={{ y: yImg, scale: scaleImg }} className="absolute inset-[-4%] will-change-transform">
        <img
          src="/hero.jpg"
          alt="Girish Lade — founder portrait"
          /* TODO: replace /hero.jpg with your photo — exact aspect 21:9 landscape, subject centered, eyes upper-third, min 2560×1096, keep negative space left/right for overlay */
          className="h-full w-full object-cover object-[52%_18%] xs:object-[50%_26%] md:object-[50%_36%]"
          fetchPriority="high"
          decoding="async"
        />
        {/* scrim bottom for wordmark legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />
        {/* soft vignette */}
        <div className="absolute inset-0 bg-radial pointer-events-none" style={{background:"radial-gradient(70% 70% at 50% 85%, transparent 45%, rgba(0,0,0,0.55) 100%)"}} />
        {/* grain warm overlay tint */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwJy8+)"}} />
      </motion.div>

      {/* HUD overlay */}
      <motion.div style={{ opacity: opacityHUD }} className="pointer-events-none absolute inset-0 z-[3] hidden md:block" aria-hidden>
        {/* vertical divider lines */}
        <div className="absolute inset-y-0 left-[25%] w-px bg-[#f4f2ed]/[0.09]" />
        <div className="absolute inset-y-0 left-[50%] w-px bg-[#f4f2ed]/[0.09]" />
        <div className="absolute inset-y-0 left-[75%] w-px bg-[#f4f2ed]/[0.09]" />
        {/* timecode ticks top */}
        <div className="absolute inset-x-0 top-[84px] flex justify-between px-[2.4%] text-[10px] leading-none tracking-[0.08em] text-[#f4f2ed]/40 font-mono">
          <span>00:00</span><span>00:30</span><span>01:00</span><span>01:30</span><span>02:00</span>
        </div>
        {/* + crosshairs */}
        <span className="absolute left-[3.2%] top-[32%] text-[12px] leading-none text-[#f4f2ed]/25" style={{animation:"plusPulse 4s ease-in-out infinite"}}>+</span>
        <span className="absolute left-[27.2%] top-[56%] text-[12px] leading-none text-[#f4f2ed]/20" style={{animation:"plusPulse 4s 1.1s ease-in-out infinite"}}>+</span>
        <span className="absolute left-[48%] top-[18%] text-[11px] leading-none text-[#f4f2ed]/18" style={{animation:"plusPulse 4s 0.6s ease-in-out infinite"}}>+</span>
        <span className="absolute right-[9%] top-[20%] text-[12px] leading-none text-[#f4f2ed]/22" style={{animation:"plusPulse 4s 0.3s ease-in-out infinite"}}>+</span>
        <span className="absolute right-[2.2%] top-[40%] text-[10px] leading-none text-[#f4f2ed]/16">+</span>
        <span className="absolute left-[48%] bottom-[28%] text-[10px] leading-none text-[#f4f2ed]/14">+</span>
        {/* bottom faint tick line */}
        <div className="absolute inset-x-[2%] bottom-[112px] h-px bg-[#f4f2ed]/[0.07]" />
      </motion.div>

      {/* top nav */}
      <header className="relative z-20 flex items-center justify-between px-4 xs:px-5 md:px-7 py-4 sm:py-5 md:py-6">
        <a href="#" className="shrink-0 text-[14px] xs:text-[15px] font-semibold tracking-[-0.02em] text-[#f4f2ed] hover:opacity-90 transition">Lade Stack™</a>
        <nav className="hidden md:flex items-center gap-7 text-[11px] font-medium tracking-tight">
          <a href="#work" className="text-[#f4f2ed]">Work <span className="opacity-40 text-[10px] ml-1">01</span></a>
          <a href="#reels" className="text-[#f4f2ed]/55 hover:text-[#f4f2ed] transition">Reels <span className="opacity-40 text-[10px] ml-1">02</span></a>
          <a href="#services" className="text-[#f4f2ed]/55 hover:text-[#f4f2ed] transition">Services <span className="opacity-40 text-[10px] ml-1">03</span></a>
          <a href="#about" className="text-[#f4f2ed]/55 hover:text-[#f4f2ed] transition">About <span className="opacity-40 text-[10px] ml-1">04</span></a>
        </nav>
        <a href="#contact" className="inline-flex shrink-0 items-center gap-1.5 xs:gap-2 rounded-full bg-[#db3903] px-3.5 xs:px-[14px] md:px-[18px] py-[8px] md:py-[9px] text-[11px] xs:text-[12px] md:text-[13px] font-medium text-white hover:bg-[#c53703] transition will-change-transform hover:scale-[1.02] active:scale-[0.98] leading-none">
          <span className="h-[5px] w-[5px] xs:h-[6px] xs:w-[6px] rounded-full bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.12)] xs:shadow-[0_0_0_4px_rgba(255,255,255,0.12)]" aria-hidden /> <span className="whitespace-nowrap">Book a call</span>
        </a>
      </header>

      {/* REC indicator desktop */}
      <div className="hidden md:flex absolute left-7 top-[96px] z-20 items-center gap-2 text-[11px] font-mono tracking-[0.04em] text-[#f4f2ed]/60">
        <span className="h-[6px] w-[6px] rounded-full bg-[#db3903]" style={{animation:"blink 1.2s steps(2,end) infinite"}} aria-hidden />
        REC 00:14:12:11
      </div>

      {/* main grid content */}
      <div className="relative z-10 mx-auto flex h-[calc(100svh-64px)] sm:h-[calc(100svh-76px)] max-w-[1280px] flex-col justify-center px-4 xs:px-5 md:px-7 pb-[20vh] sm:pb-[22vh]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-center">
          {/* left services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16,1,0.3,1], delay: 0.18 }}
            className="hidden md:block md:col-span-4 md:pr-10"
          >
            <div className="text-[10px] uppercase tracking-[0.1em] text-[#f4f2ed]/45 font-medium">(01) — FOCUS</div>
            <div className="mt-4 space-y-[3px] text-[13px] leading-[1.45] text-[#f4f2ed]">
              {["Product Design & UX","AI-Powered Dev Tools","Full-Stack Engineering","Brand & Growth"].map((t,i)=> (
                <motion.div key={t} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.28 + i*0.06, duration:0.55, ease:[0.16,1,0.3,1]}}>{t}</motion.div>
              ))}
            </div>
            <div className="mt-4 text-[10px] tracking-[0.05em] text-[#f4f2ed]/30 font-mono">(EST. 2024 — LADE STACK V1)</div>
          </motion.div>

          {/* right tagline + card */}
          <div className="md:col-span-8 flex flex-col items-start md:items-end text-left md:text-right gap-3 sm:gap-4 md:gap-5 mt-1 sm:mt-2 md:mt-0 w-full">
            {/* floating Noah card */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.16,1,0.3,1], delay: 0.42 }}
              className="inline-flex max-w-full items-center gap-2.5 sm:gap-3 rounded-[12px] sm:rounded-[14px] border border-white/[0.08] bg-[rgba(18,18,18,0.72)] p-[5px] sm:p-[6px] pr-3 sm:pr-[14px] backdrop-blur-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.45)] will-change-transform"
              style={{ animation: "floatY 3.8s ease-in-out infinite" }}
            >
              <img src="/hero.jpg" alt="Girish Lade thumbnail" className="h-9 w-9 sm:h-11 sm:w-11 md:h-[44px] md:w-[44px] shrink-0 rounded-[8px] sm:rounded-[10px] object-cover object-top" />
              <div className="min-w-0 text-left leading-tight">
                <div className="text-[11px] sm:text-[12px] font-semibold tracking-tight text-white truncate">Hey, I’m Girish</div>
                <div className="text-[10px] sm:text-[11px] font-medium tracking-tight text-white/60 truncate">Founder, Lade Stack</div>
              </div>
              <a href="https://ladestack.in" target="_blank" rel="noreferrer" aria-label="Open Lade Stack" className="ml-1 sm:ml-2 grid h-6 w-6 sm:h-[28px] sm:w-[28px] shrink-0 place-items-center rounded-full bg-white text-black transition hover:scale-105">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5.14v14l11-7-11-7z"/></svg>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay: 0.5 }}
              className="max-w-[34ch] text-[13px] xs:text-[14px] sm:text-[15px] md:text-[15.5px] font-normal leading-[1.45] tracking-tight text-[#f4f2ed] md:text-right md:max-w-[32ch] text-balance md:text-pretty"
            >
              <span className="font-medium">Free, no-login dev tools</span> <span className="text-[#f4f2ed]/70">for builders — fast, private,</span><br className="hidden md:block" />
              <span className="text-[#f4f2ed]/70"> and production-grade. Solo-built at</span><br className="hidden md:block" />
              <span className="text-[#f4f2ed]/70"> ladestack.in for people who </span><span className="font-medium">just need it to work.</span>
            </motion.p>
          </div>
        </div>
      </div>

      {/* massive wordmark */}
      <motion.h1
        style={{ y: yMark, opacity: opacityMark }}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16,1,0.3,1], delay: 0.14 }}
        className="pointer-events-none absolute inset-x-0 bottom-[-0.02em] sm:bottom-[-0.06em] z-[6] select-none overflow-hidden text-center font-bold leading-[0.82] tracking-[-0.05em] text-[#f4f2ed] will-change-transform px-2 sm:px-0"
      >
        <span className="block whitespace-nowrap text-[clamp(44px,17vw,320px)] sm:text-[clamp(54px,19vw,320px)]">LADE STACK</span>
      </motion.h1>

      {/* mobile services below hero for small screens */}
      <div className="absolute bottom-[74px] sm:bottom-[74px] left-4 xs:left-5 right-4 xs:right-5 flex md:hidden items-end justify-between z-10">
        <div className="text-[11px] leading-4 text-white/90 max-w-[68%]">
          <div className="opacity-50 text-[9px] tracking-[0.1em]"> (01) — FOCUS</div>
          <div className="mt-1.5 space-y-0.5 text-[11px] leading-[1.35]">Product Design &amp; UX<br/>AI-Powered Tools<br/>Full-Stack Engineering<br/>Brand &amp; Growth</div>
        </div>
        <div className="hidden" />
      </div>
    </section>
  )
}
