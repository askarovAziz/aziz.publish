export default function Footer() {
  return (
    <footer
      className="border-t py-16 px-6 md:px-16"
      style={{ borderColor: 'rgba(200,169,110,0.1)', backgroundColor: '#0f0c0a' }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
        {/* Brand */}
        <div>
          <p className="text-bronze text-[10px] tracking-[0.4em] font-sans uppercase mb-2">Al Forsan · Abu Dhabi</p>
          <p className="font-serif text-ivory text-2xl tracking-[0.2em] font-light">DORAL SPA</p>
          <p className="text-sand/50 text-xs font-sans mt-3 leading-relaxed max-w-xs">
            Luxury Wellness, Elevated. Al Forsan Street, Khalifa City, Abu Dhabi.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <p className="text-bronze text-[10px] tracking-[0.4em] font-sans uppercase mb-5">Navigation</p>
          <ul className="space-y-3">
            {['Treatments', 'The Experience', 'Therapists', 'Gallery', 'Location', 'Book Now'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sand/50 hover:text-ivory text-xs tracking-[0.15em] font-sans uppercase transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-bronze text-[10px] tracking-[0.4em] font-sans uppercase mb-5">Contact</p>
          <div className="space-y-3">
            <p className="text-sand/50 text-xs font-sans">
              <a href="tel:+971567372259" className="hover:text-ivory transition-colors">+971 56 737 2259</a><br />
              <a href="tel:+971554855344" className="hover:text-ivory transition-colors">+971 55 485 5344</a>
            </p>
            <a href="mailto:doralspaabudhabi@gmail.com" className="block text-sand/50 hover:text-ivory text-xs font-sans transition-colors">doralspaabudhabi@gmail.com</a>
            <p className="text-sand/50 text-xs font-sans leading-relaxed">
              Al Forsan Street, Khalifa City A,<br />Abu Dhabi, UAE<br />Open daily · 10:00 AM – 2:30 AM
            </p>
          </div>
          <a
            href="https://wa.link/doralspa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 border border-bronze/40 text-bronze hover:bg-bronze hover:text-espresso px-5 py-2 text-[10px] tracking-[0.25em] font-sans uppercase transition-all duration-400"
          >
            WhatsApp
          </a>
          <div className="mt-4 flex gap-4">
            <a href="https://t.me/+971567372259" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-bronze text-[10px] tracking-[0.2em] uppercase transition-colors">Telegram</a>
            <a href="https://instagram.com/doral_luxury_spa" target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-bronze text-[10px] tracking-[0.2em] uppercase transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(200,169,110,0.08)' }}
      >
        <p className="text-muted-foreground text-[10px] tracking-[0.2em] font-sans">
          © 2026 Doral Spa Abu Dhabi. All rights reserved.
        </p>
        <p className="text-muted-foreground text-[10px] tracking-[0.2em] font-sans">
          doralspa.ae
        </p>
      </div>
    </footer>
  )
}
