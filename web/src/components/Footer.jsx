export default function Footer(){
  return (
    <footer className="bg-black border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#f4f2ed]/38">(00) — STUDIO</div>
            <p className="mt-4 max-w-[26ch] text-[13px] leading-[1.55] text-[#f4f2ed]/56">
              <span className="font-medium text-[#f4f2ed]">A film-grade editing</span> <span className="text-[#f4f2ed]/55">and motion studio cutting reels,</span> <span className="text-[#f4f2ed]/55">campaigns and title work for</span> <span className="font-medium text-[#f4f2ed]">creatives and brands.</span>
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
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#f4f2ed]/38">(02) — VISIT US</div>
            <div className="mt-4 text-[14px] font-medium text-[#f4f2ed]">Downtown, Dubai — UAE</div>
            <div className="mt-1 text-[11px] text-[#f4f2ed]/55 font-mono">Mon–Fri 09:00 – 18:00</div>
            <div className="text-[11px] text-[#f4f2ed]/55 font-mono">Sat: 10:00 – 16:00</div>

            <div className="mt-5 flex items-center gap-2.5">
              {[
                { id:"x", label:"X", svg:<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.6l-5.2-6.5L4 22H1l8-9.2L1 2h6.7l4.7 5.9L18 2zM17 20h1.7L7 4H5.2L17 20z"/></svg> },
                { id:"ig", label:"Instagram", svg:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg> },
                { id:"yt", label:"YouTube", svg:<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5c-.3-2.1-1.2-3-3.3-3.3C17 4 12 4 12 4s-5 0-7.7.2C2.2 4.5 1.3 5.4 1 7.5.8 9.5.8 12 .8 12s0 2.5.2 4.5c.3 2.1 1.2 3 3.3 3.3C7 20 12 20 12 20s5 0 7.7-.2c2.1-.3 3-1.2 3.3-3.3.2-2 .2-4.5.2-4.5s0-2.5-.2-4.5zM10 15.5v-7l5.5 3.5-5.5 3.5z"/></svg> },
              ].map(s=>(
                <a key={s.id} href="#" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.07] bg-[#0a0a0a] text-white/85 transition hover:bg-[#1a1a1a]">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/[0.07] pt-6 text-[9px] font-mono tracking-[0.08em] text-[#f4f2ed]/32">
          <span>© 2026 — ANAMORPH™</span>
          <span className="text-[#f4f2ed]/22">+</span>
          <span>EDITOR & COLOURIST — V2.4</span>
        </div>
      </div>
    </footer>
  )
}
