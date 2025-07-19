import { useEffect, useRef } from "react";

export function useSmoothScroll({ speed = 1, easing = 0.1 } = {}) {
  const targetY = useRef(window.scrollY);
  const currentY = useRef(window.scrollY);
  const ticking = useRef(false);

  // Função de easing (lerp)
  const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      // Ajusta deltaY pelo “speed” (quanto maior, mais lento)
      targetY.current = Math.max(
        0,
        Math.min(
          document.body.scrollHeight - window.innerHeight,
          targetY.current + e.deltaY * speed
        )
      );
      requestTick();
    };

    const updateScroll = () => {
      currentY.current = lerp(currentY.current, targetY.current, easing);
      window.scrollTo(0, currentY.current);

      // Se ainda não chegamos, continua a pedir frame
      if (Math.abs(currentY.current - targetY.current) > 0.5) {
        requestAnimationFrame(updateScroll);
      } else {
        ticking.current = false;
      }
    };

    const requestTick = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [speed, easing]);
}
