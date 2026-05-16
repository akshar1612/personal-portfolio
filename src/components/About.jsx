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
            👋 Hey, I'm <strong>Akshar Patel</strong>!
          </p>
          <p>
            🎓 Recent graduate from <strong>Wilfrid Laurier University</strong> with a Bachelor's of Computer Science.
          </p>
          <p>
            🤖 I'm obsessed with <strong>AI</strong> and what you can build when you mix it with solid engineering.
          </p>
          <p>
            🧠 Recently I've been working on an <strong>AI-powered quantitative research platform</strong> because why not let machines do the hard thinking.
          </p>
          <p>
            🏢 I've shipped real products at <strong>Intuit</strong>, <strong>Interac Corp</strong>, and <strong>First National Financial (twice)</strong> and I'm just getting started.
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
