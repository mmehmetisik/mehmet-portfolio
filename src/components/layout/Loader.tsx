// ============================================================
// Loader — Loading screen with particle network + orbit animation
// SRP: Responsible only for the initial loading experience
// ============================================================

import { useEffect, useRef, useState } from "react";

const COLORS = ["#22d3ee", "#a78bfa", "#34d399", "#f472b6", "#fbbf24"];
const PARTICLE_COUNT = 60;
const LOADER_DURATION = 2800;

interface Particle {
  x: number; y: number; size: number; color: string;
  speedX: number; speedY: number; opacity: number;
}

export function Loader({ onFinish }: { onFinish: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    setSize();

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speedX: (Math.random() - 0.5) * 0.5, speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let running = true;
    function draw() {
      if (!running || !ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.speedX; p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.globalAlpha = p.opacity; ctx.fill(); ctx.globalAlpha = 1;
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#22d3ee"; ctx.globalAlpha = 0.03 * (1 - dist / 120); ctx.stroke(); ctx.globalAlpha = 1;
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener("resize", setSize);
    return () => { running = false; window.removeEventListener("resize", setSize); };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), LOADER_DURATION);
    const t2 = setTimeout(onFinish, LOADER_DURATION + 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onFinish]);

  // Shared absolute center helper
  const absCenter: React.CSSProperties = {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const nodes = [
    { color: "#22d3ee", shadow: "#22d3ee40", size: 8, anim: "orbitA", dur: "3s", delay: "0.4s" },
    { color: "#a78bfa", shadow: "#a78bfa40", size: 6, anim: "orbitB", dur: "3s", delay: "0.6s" },
    { color: "#34d399", shadow: "#34d39940", size: 8, anim: "orbitC", dur: "2.5s", delay: "0.5s" },
    { color: "#f472b6", shadow: "#f472b640", size: 5, anim: "orbitD", dur: "2.5s", delay: "0.7s" },
    { color: "#fbbf24", shadow: "#fbbf2440", size: 6, anim: "orbitE", dur: "3.5s", delay: "0.3s" },
    { color: "#22d3ee", shadow: "#22d3ee30", size: 4, anim: "orbitF", dur: "2.8s", delay: "0.8s" },
  ];

  const conns = [0, 60, 120, 180, 240, 300];

  const bars = [
    { h: 6, c: "#22d3ee", d: "1.5s" }, { h: 10, c: "#a78bfa", d: "1.55s" },
    { h: 8, c: "#22d3ee", d: "1.6s" }, { h: 14, c: "#34d399", d: "1.65s" },
    { h: 11, c: "#22d3ee", d: "1.7s" }, { h: 16, c: "#22d3ee", d: "1.75s" },
    { h: 9, c: "#a78bfa", d: "1.8s" },
  ];

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999, background: "#0a0f1e",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.7s ease, visibility 0.7s ease",
      opacity: fadeOut ? 0 : 1, visibility: fadeOut ? "hidden" as const : "visible" as const,
    }}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* Center content */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* === Orbit scene === */}
        <div style={{ position: "relative", width: 220, height: 220 }}>

          {/* Outer ring */}
          <div style={{
            position: "absolute", inset: 0,
            border: "1px solid #1e293b", borderRadius: "50%",
            animation: "ringIn 0.6s ease-out 0.1s both",
          }} />

          {/* Inner dashed ring */}
          <div style={{
            position: "absolute", inset: 20,
            border: "1px dashed #1e293b", borderRadius: "50%",
            animation: "ringIn 0.6s ease-out 0.3s both",
          }} />

          {/* Connection lines */}
          {conns.map((deg, i) => (
            <div key={`c${i}`} style={{
              position: "absolute", top: "50%", left: "50%",
              width: 100, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.08), transparent)",
              transformOrigin: "left center",
              transform: `rotate(${deg}deg)`,
              animation: `connPulse 2s ease-in-out ${1 + i * 0.15}s infinite`,
            }} />
          ))}

          {/* Orbiting nodes */}
          {nodes.map((n, i) => (
            <div key={`n${i}`} style={{
              position: "absolute", top: "50%", left: "50%",
              width: n.size, height: n.size,
              marginTop: -(n.size / 2), marginLeft: -(n.size / 2),
              borderRadius: "50%",
              background: n.color,
              boxShadow: `0 0 10px ${n.shadow}`,
              animation: `${n.anim} ${n.dur} linear ${n.delay} infinite, fadeIn 0.3s ease ${n.delay} both`,
            }} />
          ))}

          {/* Center glow */}
          <div style={{
            ...absCenter,
            width: 80, height: 80, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)",
            animation: "glowPulse 2s ease-in-out infinite",
          }} />

          {/* Logo: MI */}
          <div style={{
            ...absCenter,
            fontSize: 42, fontWeight: 700, color: "#e2e8f0",
            animation: "logoReveal 0.7s ease-out 0.6s both",
          }}>
            M<span style={{ color: "#22d3ee" }}>I</span>
          </div>
        </div>

        {/* === Bottom info === */}
        <div style={{ marginTop: 36, textAlign: "center" }}>
          <div style={{
            fontSize: 13, color: "#475569", letterSpacing: 5, textTransform: "uppercase" as const,
            animation: "slideUp 0.5s ease-out 1s both",
          }}>
            Data Scientist
          </div>

          <div style={{
            display: "flex", gap: 8, marginTop: 14, justifyContent: "center",
            animation: "slideUp 0.5s ease-out 1.2s both",
          }}>
            {[
              { label: "ML", bc: "rgba(34,211,238,0.2)", c: "rgba(34,211,238,0.5)" },
              { label: "NLP", bc: "rgba(167,139,250,0.2)", c: "rgba(167,139,250,0.5)" },
              { label: "GenAI", bc: "rgba(52,211,153,0.2)", c: "rgba(52,211,153,0.5)" },
            ].map((t) => (
              <span key={t.label} style={{
                fontSize: 10, padding: "3px 10px", border: `1px solid ${t.bc}`,
                borderRadius: 20, letterSpacing: 1, color: t.c,
              }}>
                {t.label}
              </span>
            ))}
          </div>

          <div style={{
            display: "flex", alignItems: "flex-end", gap: 3,
            marginTop: 18, justifyContent: "center", height: 16,
            animation: "slideUp 0.4s ease-out 1.4s both",
          }}>
            {bars.map((b, i) => (
              <div key={i} style={{
                width: 3, height: b.h, background: b.c,
                borderRadius: 1, opacity: 0.5,
                animation: `barGrow 0.4s ease-out ${b.d} both`,
              }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}