import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x0c0c0f, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    const count = 2800;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 1.6;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      phases[i] = Math.random() * Math.PI * 2;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("phase", new THREE.BufferAttribute(phases, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.022,
      color: 0xe8e4dc,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(geo, particleMat);
    scene.add(particles);

    const icoGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xe84d1c,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    const innerGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0c0c0f,
      wireframe: false,
      transparent: true,
      opacity: 0.92,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    const ringGeo = new THREE.TorusGeometry(1.7, 0.006, 4, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xe84d1c, transparent: true, opacity: 0.3 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    const ring2Geo = new THREE.TorusGeometry(2.1, 0.004, 4, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xe8e4dc, transparent: true, opacity: 0.07 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3.5;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

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

      ico.rotation.x = t * 0.18 + mouse.y * 0.3;
      ico.rotation.y = t * 0.24 + mouse.x * 0.3;
      inner.rotation.x = ico.rotation.x;
      inner.rotation.y = ico.rotation.y;

      particles.rotation.y = t * 0.04 + mouse.x * 0.08;
      particles.rotation.x = mouse.y * 0.06;

      ring.rotation.z = t * 0.12;
      ring.rotation.y = t * 0.06 + mouse.x * 0.1;
      ring2.rotation.z = -t * 0.08;
      ring2.rotation.x = Math.PI / 3.5 + mouse.y * 0.05;

      icoMat.opacity = 0.28 + Math.sin(t * 0.7) * 0.08;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
