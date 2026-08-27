export default function StickyDock(){
  return (
    <div className="fixed left-3 xs:left-4 sm:left-6 bottom-[calc(12px+env(safe-area-inset-bottom))] sm:bottom-6 z-40 flex items-center gap-1.5 xs:gap-2 will-change-transform" aria-hidden={false}>
      <button aria-label="Menu" className="grid h-8 w-8 xs:h-9 xs:w-9 place-items-center rounded-full border border-white/[0.07] bg-[#0a0a0a]/90 backdrop-blur-[6px] text-white transition hover:bg-[#1a1a1a] active:scale-95">
        <svg width="13" height="9" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M0 1h14M0 5h14M0 9h14"/></svg>
      </button>
      <a href="#contact" className="inline-flex items-center gap-1.5 xs:gap-2 rounded-full bg-[#db3903] px-3.5 xs:px-4 py-2 xs:py-2 text-[11px] font-medium tracking-tight text-white transition hover:bg-[#c53703] hover:scale-[1.02] active:scale-[0.98] will-change-transform whitespace-nowrap">
        <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.12)] shrink-0" aria-hidden /> Book a call
      </a>
    </div>
  )
}
