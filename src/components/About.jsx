import { skills } from "../data";

export default function About() {
  return (
    <section id="about">
      <div className="about-left">
        <h2 className="about-title">ABOUT<br />ME</h2>
        <div className="about-body">
          <p>
            I'm a <strong>creative developer</strong> with 8 years of experience building immersive digital products. I live at the intersection of engineering and design — where a pixel is never just a pixel.
          </p>
          <p>
            Currently based in <strong>New York</strong>, I work with ambitious brands and agencies to bring their boldest ideas to life — from interactive 3D web experiences to precision-crafted UI systems.
          </p>
          <p>
            When I'm not building, I'm probably sketching typographic experiments or pushing Three.js further than it was meant to go.
          </p>
        </div>
      </div>
      <div className="about-right">
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: "0.05em", marginBottom: "1.5rem", color: "var(--fg)" }}>
          CRAFT & TOOLS
        </h3>
        <div className="skills-list">
          {skills.map((s, i) => (
            <div className="skill-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="skill-name">{s.name}</span>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${s.pct * 100}%`, animationDelay: `${0.3 + i * 0.1}s` }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
          {[["8+", "Years exp."], ["40+", "Projects shipped"], ["12", "Happy clients"], ["3", "Awards won"]].map(([n, l], i) => (
            <div key={i} style={{ background: "var(--surface2)", padding: "1.4rem" }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.4rem", lineHeight: 1, color: i % 2 === 0 ? "var(--accent)" : "var(--fg)" }}>{n}</div>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-dim)", marginTop: "0.3rem" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
