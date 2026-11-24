import React, { useEffect, useRef } from 'react';

export default function NeuronBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const nodeCount = Math.min(48, Math.max(22, Math.floor((width * height) / 32000)));
    const connectionDist = 175;

    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.36,
      vy: (Math.random() - 0.5) * 0.36,
      radius: Math.random() * 1.8 + 1.8,
      pulsePhase: Math.random() * Math.PI * 2
    }));

    const signals = [];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulsePhase += 0.025;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dxMouse = mouse.x - n.x;
        const dyMouse = mouse.y - n.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < 200 && distMouse > 1) {
          n.x += (dxMouse / distMouse) * 0.25;
          n.y += (dyMouse / distMouse) * 0.25;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(b.x - a.x, b.y - a.y);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.24;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 100, 224, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            if (signals.length < 16 && Math.random() < 0.00045) {
              signals.push({
                from: a,
                to: b,
                progress: 0,
                speed: 0.012 + Math.random() * 0.012
              });
            }
          }
        }
      }

      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;
        const edgeDist = Math.hypot(sig.to.x - sig.from.x, sig.to.y - sig.from.y);

        if (sig.progress >= 1 || edgeDist > connectionDist * 1.15) {
          signals.splice(s, 1);
          continue;
        }

        const px = sig.from.x + (sig.to.x - sig.from.x) * sig.progress;
        const py = sig.from.y + (sig.to.y - sig.from.y) * sig.progress;

        const glow = ctx.createRadialGradient(px, py, 0, px, py, 8);
        glow.addColorStop(0, 'rgba(0, 194, 255, 0.85)');
        glow.addColorStop(0.5, 'rgba(8, 102, 255, 0.35)');
        glow.addColorStop(1, 'rgba(0, 100, 224, 0)');

        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#0866FF';
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(n.pulsePhase) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 3.5 + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 130, 251, ${(0.07 + pulse * 0.05).toFixed(3)})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 100, 224, 0.55)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
    />
  );
}
