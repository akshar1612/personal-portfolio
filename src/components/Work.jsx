import { useState } from "react";
import { experiences } from "../data";

export default function Work() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section id="work">
      <div className="work-header">
        <h2 className="section-title">Experience</h2>
        <span className="section-label">04 roles</span>
      </div>
      <div className="exp-list">
        {experiences.map((exp, i) => {
          const isOpen = activeIdx === i;
          return (
            <div key={i} className={`exp-row${isOpen ? " exp-row--open" : ""}`}>
              <div className="exp-header" onClick={() => setActiveIdx(isOpen ? null : i)}>
                <div className="proj-num">{exp.num}</div>
                <div className="exp-main">
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-meta">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-dot">·</span>
                    <span className="exp-years">{exp.years}</span>
                  </div>
                </div>
                <div className="exp-tags">
                  {exp.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div>
                <div className="exp-toggle">
                  <span /><span />
                </div>
              </div>

              <div className="exp-body">
                <div className="exp-body-inner">
                  <div className="exp-content-wrap">
                    <div className="exp-accent-line" />
                    <div className="exp-content">
                      <p className="exp-desc">{exp.description}</p>
                      <ul className="exp-bullets">
                        {exp.bullets.map((b, j) => (
                          <li key={j} style={{ "--delay": `${j * 0.09 + 0.28}s` }}>
                            <span className="bullet-mark" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
