import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section id="hero">
      <HeroCanvas />
      <div className="hero-overlay">
        <div className="hero-eyebrow">Creative Developer & Designer</div>
        <h1 className="hero-name">AKSHAR<br /><span>PA</span>TEL</h1>
        <p className="hero-sub">
          I craft digital experiences at the intersection of <strong>design and code</strong> — where bold ideas become immersive, interactive worlds.
        </p>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
