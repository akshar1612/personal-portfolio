import { useState, useEffect } from "react";
import HeroCanvas from "./HeroCanvas";

const LINE1 = "AKSHAR";
const LINE2 = "PATEL";
const TOTAL = LINE1.length + 1 + LINE2.length; // +1 for the line break beat
const SPEED = 150;

function TypedName({ count }) {
  if (count <= LINE1.length) {
    return <>{LINE1.slice(0, count)}</>;
  }
  const l2 = LINE2.slice(0, count - LINE1.length - 1);
  const pa = l2.slice(0, 2);
  const rest = l2.slice(2);
  return <>{LINE1}<br /><span>{pa}</span>{rest}</>;
}

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= TOTAL) return;
    const t = setTimeout(() => setCount(c => c + 1), SPEED);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <section id="hero">
      <HeroCanvas />
      <div className="hero-overlay">
        <div className="hero-eyebrow">Software Developer</div>
        <h1 className="hero-name">
          <TypedName count={count} /><span className="hero-cursor">|</span>
        </h1>
        <p className="hero-sub">
          Recent <strong>computer science</strong> graduate with experiences and interests of <strong>Software and AI Development</strong>.
        </p>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
