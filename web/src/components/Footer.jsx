export default function Footer(){
  return (
    <footer className="bg-black border-t border-white/[0.07] overflow-x-clip">
      <div className="mx-auto max-w-[1100px] px-4 xs:px-5 md:px-10 pt-12 sm:pt-16 pb-10 pb-[calc(10px+env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#f4f2ed]/38">(00) — STUDIO</div>
            <p className="mt-4 max-w-[28ch] text-[13px] leading-[1.55] text-[#f4f2ed]/56">
              <span className="font-medium text-[#f4f2ed]">Solo founder, Lade Stack</span> <span className="text-[#f4f2ed]/55">— mechanical engineer (Pune/PCMC) turning</span> <span className="text-[#f4f2ed]/55">into product. Free AI dev tools,</span> <span className="font-medium text-[#f4f2ed]">no login, no friction.</span>
            </p>
          </div>

          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#f4f2ed]/38">(01) — NAVIGATION</div>
            <ul className="mt-4 flex flex-col gap-2 text-[13px] tracking-tight text-[#f4f2ed]/72">
              {[["Work","#work"],["Reels","#reels"],["Services","#services"],["About","#about"],["Contact","#contact"]].map(([t,h])=>(
                <li key={t}><a href={h} className="hover:text-[#f4f2ed] underline underline-offset-4 decoration-transparent hover:decoration-[#db3903] transition">{t}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#f4f2ed]/38">(02) — CONNECT</div>
            <div className="mt-4 text-[14px] font-medium text-[#f4f2ed]"><a href="https://ladestack.in" target="_blank" rel="noreferrer" className="hover:underline decoration-[#db3903] underline-offset-4">ladestack.in</a> — Pune/PCMC, India</div>
            <div className="mt-1 text-[11px] text-[#f4f2ed]/55 font-mono">[FILL: your email — e.g. girish@ladestack.in]</div>
            <div className="text-[11px] text-[#f4f2ed]/55 font-mono">Solo founder — open to collab/hiring</div>

            <div className="mt-5 flex items-center gap-2.5">
              {[
                { id:"ls", label:"Lade Stack", href:"https://ladestack.in", svg:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M8 7V5a4 4 0 018 0v2"/></svg> },
                { id:"gh", label:"GitHub", href:"[FILL: your GitHub URL]", svg:<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 .1-3.11 0 0 .32-.1 1.03.37A9 9 0 0112 7a9 9 0 012.43.33c.71-.48 1.03-.37 1.03-.37.34 1.11.1 2.01.05 3.11 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0012 2z"/></svg> },
                { id:"li", label:"LinkedIn", href:"[FILL: your LinkedIn URL]", svg:<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                { id:"x", label:"X", href:"[FILL: your X/Twitter URL]", svg:<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.6l-5.2-6.5L4 22H1l8-9.2L1 2h6.7l4.7 5.9L18 2zM17 20h1.7L7 4H5.2L17 20z"/></svg> },
              ].map(s=>(
                <a key={s.id} href={s.href.startsWith("[FILL") ? "#" : s.href} aria-label={s.label} title={s.href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.07] bg-[#0a0a0a] text-white/85 transition hover:bg-[#1a1a1a]">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-6 text-[9px] font-mono tracking-[0.08em] text-[#f4f2ed]/32">
          <span>© 2026 — LADE STACK™</span>
          <span className="hidden xs:inline text-[#f4f2ed]/22">+</span>
          <span>FOUNDER — GIRISH LADE</span>
        </div>
      </div>
    </footer>
  )
}
