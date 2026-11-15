import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mediaFine = window.matchMedia('(pointer: fine)');

    const updateAvailability = () => {
      setEnabled(!mediaMotion.matches && mediaFine.matches && window.innerWidth >= 1024);
    };

    updateAvailability();
    mediaMotion.addEventListener('change', updateAvailability);
    mediaFine.addEventListener('change', updateAvailability);
    window.addEventListener('resize', updateAvailability);

    return () => {
      mediaMotion.removeEventListener('change', updateAvailability);
      mediaFine.removeEventListener('change', updateAvailability);
      window.removeEventListener('resize', updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let rafId = 0;
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setCoords({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [enabled]);

  if (!enabled || !coords) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        background: `radial-gradient(520px circle at ${coords.x}px ${coords.y}px, rgba(37, 99, 235, 0.055), rgba(13, 148, 136, 0.035) 45%, transparent 72%)`,
      }}
    />
  );
};
