import { useEffect, useRef } from "react";
import * as THREE from "three";

const TECHS = [
  { label: "JS",     name: "JavaScript",  bg: "#F7DF1E", fg: "#222222" },
  { label: "TS",     name: "TypeScript",  bg: "#3178C6", fg: "#ffffff" },
  { label: "Python", name: "Python",      bg: "#3776AB", fg: "#FFE873" },
  { label: "Java",   name: "Java",        bg: "#5382A1", fg: "#ffffff" },
  { label: "C/C++",  name: "C / C++",     bg: "#00599C", fg: "#ffffff" },
  { label: "Go",     name: "Golang",      bg: "#00ACD7", fg: "#ffffff" },
  { label: "C#",     name: "C Sharp",     bg: "#9B4F96", fg: "#ffffff" },
  { label: "React",  name: "React",       bg: "#20232A", fg: "#61DAFB" },
  { label: "Vue",    name: "Vue.js",      bg: "#42B883", fg: "#ffffff" },
  { label: "Spring", name: "Spring Boot", bg: "#6DB33F", fg: "#ffffff" },
  { label: "Node",   name: "Node.js",     bg: "#215732", fg: "#8CC84B" },
  { label: "Next",   name: "Next.js",     bg: "#111111", fg: "#ffffff" },
  { label: "AWS",    name: "AWS",         bg: "#232F3E", fg: "#FF9900" },
  { label: "Docker", name: "Docker",      bg: "#2496ED", fg: "#ffffff" },
  { label: "Git",    name: "Git",         bg: "#F05032", fg: "#ffffff" },
  { label: "CSS",    name: "CSS 3",       bg: "#264DE4", fg: "#ffffff" },
  { label: "SQL",    name: "PostgreSQL",  bg: "#336791", fg: "#ffffff" },
  { label: "Obj-C",  name: "Objective-C", bg: "#333333", fg: "#ffffff" },
];

const POSITIONS = [
  // Row 0 — top
  [-5.7,  2.0,  0.2],
  [-3.4,  2.1, -0.3],
  [-1.1,  1.9,  0.4],
  [ 1.2,  2.0, -0.2],
  [ 3.5,  1.9,  0.1],
  [ 5.8,  2.1, -0.4],
  // Row 1 — middle
  [-5.9,  0.1, -0.3],
  [-3.6,  0.0,  0.5],
  [-1.3,  0.2, -0.1],
  [ 1.0,  0.1,  0.3],
  [ 3.4,  0.0, -0.4],
  [ 6.0,  0.2,  0.2],
  // Row 2 — bottom
  [-5.8, -1.9,  0.3],
  [-3.5, -2.0, -0.2],
  [-1.2, -1.8,  0.5],
  [ 1.1, -1.9, -0.3],
  [ 3.6, -1.8,  0.1],
  [ 5.9, -2.0, -0.5],
];

function makeTexture(label, name, bg, fg) {
  const S = 256;
  const c = document.createElement("canvas");
  c.width = c.height = S;
  const ctx = c.getContext("2d");

  // Drop shadow
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 18;
  ctx.shadowColor = "rgba(0,0,0,0.45)";

  // Rounded rect background
  const pad = 8, r = 32;
  ctx.beginPath();
  ctx.moveTo(pad + r, pad);
  ctx.lineTo(S - pad - r, pad);
  ctx.arcTo(S - pad, pad, S - pad, pad + r, r);
  ctx.lineTo(S - pad, S - pad - r);
  ctx.arcTo(S - pad, S - pad, S - pad - r, S - pad, r);
  ctx.lineTo(pad + r, S - pad);
  ctx.arcTo(pad, S - pad, pad, S - pad - r, r);
  ctx.lineTo(pad, pad + r);
  ctx.arcTo(pad, pad, pad + r, pad, r);
  ctx.closePath();
  ctx.fillStyle = bg;
  ctx.fill();

  ctx.shadowColor = "transparent";

  // Subtle inner highlight
  ctx.strokeStyle = "rgba(255,255,255,0.10)";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Label
  const fontSize = label.length <= 2 ? 90 : label.length <= 3 ? 80 : label.length <= 4 ? 64 : label.length <= 5 ? 54 : 44;
  ctx.font = `${fontSize}px Impact, "Arial Black", sans-serif`;
  ctx.fillStyle = fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, S / 2, S / 2 - 10);

  // Subtitle
  ctx.font = `400 19px Arial, sans-serif`;
  ctx.fillStyle = fg;
  ctx.globalAlpha = 0.42;
  ctx.fillText(name.toUpperCase(), S / 2, S / 2 + fontSize / 2 + 6);
  ctx.globalAlpha = 1;

  return new THREE.CanvasTexture(c);
}

export default function Canvas3DSection() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x0c0c0f, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7);

    // Build sprites
    const sprites = [];
    const spriteData = TECHS.map((tech, i) => {
      const texture = makeTexture(tech.label, tech.name, tech.bg, tech.fg);
      const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(mat);
      const [x, y, z] = POSITIONS[i];
      sprite.position.set(x, y, z);
      sprite.scale.set(1.04, 1.04, 1.04);
      scene.add(sprite);
      sprites.push(sprite);
      return {
        sprite,
        origPos: new THREE.Vector3(x, y, z),
        vel: new THREE.Vector3(),
        phase: Math.random() * Math.PI * 2,
        speed: 0.35 + Math.random() * 0.45,
        k: 0.018 + Math.random() * 0.016,
        dragged: false,
      };
    });

    // Interaction state
    const mouse = { x: 0, y: 0 };
    let dragData = null;
    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();
    const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const hitPoint = new THREE.Vector3();

    const toNDC = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onMouseMove = (e) => {
      toNDC(e);
      mouse.x = mouseVec.x;
      mouse.y = mouseVec.y;

      if (dragData) {
        raycaster.setFromCamera(mouseVec, camera);
        raycaster.ray.intersectPlane(dragPlane, hitPoint);
        dragData.sprite.position.copy(hitPoint);
        dragData.vel.set(0, 0, 0);
      } else {
        // Hover cursor
        const rect = canvas.getBoundingClientRect();
        const isOver = (
          e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom
        );
        if (isOver) {
          raycaster.setFromCamera(mouseVec, camera);
          const hits = raycaster.intersectObjects(sprites);
          canvas.style.cursor = hits.length > 0 ? "grab" : "default";
        }
      }
    };

    const onMouseDown = (e) => {
      toNDC(e);
      raycaster.setFromCamera(mouseVec, camera);
      const hits = raycaster.intersectObjects(sprites);
      if (hits.length > 0) {
        dragData = spriteData.find(d => d.sprite === hits[0].object);
        if (dragData) {
          dragData.dragged = true;
          dragData.vel.set(0, 0, 0);
          dragPlane.setFromNormalAndCoplanarPoint(
            camera.getWorldDirection(new THREE.Vector3()),
            dragData.sprite.position
          );
          canvas.style.cursor = "grabbing";
        }
      }
    };

    const onMouseUp = () => {
      if (dragData) {
        dragData.dragged = false;
        dragData = null;
        canvas.style.cursor = "default";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const onResize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      spriteData.forEach((data) => {
        if (data.dragged) return;

        // Spring target follows idle bob + mouse parallax
        const tx = data.origPos.x + mouse.x * 0.65;
        const ty = data.origPos.y + Math.sin(t * data.speed + data.phase) * 0.22 + mouse.y * 0.25;
        const tz = data.origPos.z;

        // Spring physics — low stiffness + low damping = bendy overshoot
        const damp = 0.91;
        data.vel.x = (data.vel.x + (tx - data.sprite.position.x) * data.k) * damp;
        data.vel.y = (data.vel.y + (ty - data.sprite.position.y) * data.k) * damp;
        data.vel.z = (data.vel.z + (tz - data.sprite.position.z) * data.k) * damp;

        data.sprite.position.x += data.vel.x;
        data.sprite.position.y += data.vel.y;
        data.sprite.position.z += data.vel.z;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={ref} />;
}
