import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => { if (window.innerWidth > 700) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-logo">Akshar Patel</a>
        <ul className="nav-links">
          <li><a href="#work">Experience</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          className={`nav-hamburger${open ? " nav-hamburger--open" : ""}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="nav-drawer" onClick={close}>
          <ul className="nav-drawer-links" onClick={e => e.stopPropagation()}>
            <li><a href="#work" onClick={close}>Experience</a></li>
            <li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#contact" onClick={close}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
}
