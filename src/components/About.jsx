import { skills } from "../data";

function onCardMove(e) {
  const card = e.currentTarget;
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5;
  const y = (e.clientY - top) / height - 0.5;
  card.style.transform = `perspective(400px) rotateY(${x * 40}deg) rotateX(${-y * 40}deg) scale(1.06)`;
}

function onCardLeave(e) {
  e.currentTarget.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
}

function onCardAnimEnd(e) {
  e.currentTarget.style.animation = "none";
}

export default function About() {
  return (
    <section id="about">
      <div className="about-left">
        <h2 className="about-title">ABOUT<br />ME</h2>
        <div className="about-body">
          <p>
            👋 Hi, my name is <strong>Akshar</strong>!
          </p>
          <p>
            🎓 I'm a recent graduate from <strong>Wilfrid Laurier University</strong> with a Bachelor's in Computer Science.
          </p>
          <p>
            🤖 I love building cool end-to-end projects recently those powered by <strong>AI</strong>. Most recently I've been working on an <strong>AI-powered finance tracker</strong> that makes managing money actually fun.
          </p>
          <p>
            🏢 I've had the pleasure of working at some awesome companies including <strong>Intuit</strong>, <strong>Interac Corp</strong>, and <strong>First National Financial (twice)</strong>.
          </p>
        </div>
      </div>
      <div className="about-right">
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: "0.05em", marginBottom: "1.5rem", color: "var(--fg)" }}>
          LANGUAGES & TOOLS
        </h3>
        <div className="skill-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={i} style={{ animationDelay: `${i * 0.07}s`, transition: "transform 0.12s ease" }} onMouseMove={onCardMove} onMouseLeave={onCardLeave} onAnimationEnd={onCardAnimEnd}>
              <span className="skill-card-icon">{s.icon}</span>
              <span className="skill-card-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
