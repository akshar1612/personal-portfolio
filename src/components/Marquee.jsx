import { marqueeItems } from "../data";

export default function Marquee() {
  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {marqueeItems.map((item, i) => (
          <span key={i} className={item === "·" ? "sep" : ""}>{item}</span>
        ))}
      </div>
    </div>
  );
}
