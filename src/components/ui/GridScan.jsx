// src/components/ui/GridScan.tsx
import React, { useEffect, useRef, useCallback } from "react";

/**
 * Minimal type additions to fix TypeScript errors:
 * - Add className and style to props so consumers can pass them (Hero.tsx)
 * - Keep all existing behavior untouched
 */

export type GridScanProps = {
  // existing props (keep optional to avoid breaking callers)
  enableWebcam?: boolean;
  showPreview?: boolean;
  modelsPath?: string;
  sensitivity?: number;
  lineThickness?: number;
  linesColor?: string;
  scanColor?: string;
  scanOpacity?: number;
  gridScale?: number;
  lineStyle?: string;
  lineJitter?: number;
  scanDirection?: string;
  noiseIntensity?: number;
  scanSpeed?: number;
  scanOnClick?: boolean;

  // minimal additions to satisfy the component type usage
  className?: string;
  style?: React.CSSProperties;
};

const defaultProps: Partial<GridScanProps> = {
  sensitivity: 0.5,
  lineThickness: 1,
  linesColor: "rgba(255,255,255,0.06)",
  scanColor: "rgba(255,215,0,0.9)",
  scanOpacity: 0.9,
  gridScale: 24,
  lineStyle: "solid",
  lineJitter: 0.1,
  scanDirection: "left-to-right",
  noiseIntensity: 0.01,
  scanSpeed: 0.6,
  scanOnClick: false,
};

const GridScan: React.FC<GridScanProps> = (props) => {
  const {
    sensitivity,
    lineThickness,
    linesColor,
    scanColor,
    scanOpacity,
    gridScale,
    lineStyle,
    lineJitter,
    scanDirection,
    noiseIntensity,
    scanSpeed,
    scanOnClick,
    className,
    style,
    // keep other props available for future use
    enableWebcam,
    showPreview,
    modelsPath,
  } = { ...defaultProps, ...props } as Required<GridScanProps>;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const scanPosRef = useRef<number>(0);
  const runningRef = useRef<boolean>(true);

  const resizeCanvas = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = container.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${Math.floor(rect.width)}px`;
    canvas.style.height = `${Math.floor(rect.height)}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  const drawGrid = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      // subtle noise background
      if (noiseIntensity > 0) {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const v = (Math.random() - 0.5) * 255 * noiseIntensity;
          data[i] = 0 + v;
          data[i + 1] = 0 + v;
          data[i + 2] = 0 + v;
          data[i + 3] = 6;
        }
        ctx.putImageData(imageData, 0, 0);
      }

      ctx.save();
      ctx.lineWidth = lineThickness;
      ctx.strokeStyle = linesColor;
      if (lineStyle === "dashed") ctx.setLineDash([4, 6]);
      else ctx.setLineDash([]);

      const step = Math.max(6, gridScale);
      for (let x = 0; x <= width; x += step) {
        const jitter = (Math.random() - 0.5) * lineJitter * step;
        ctx.beginPath();
        ctx.moveTo(x + jitter, 0);
        ctx.lineTo(x + jitter, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += step) {
        const jitter = (Math.random() - 0.5) * lineJitter * step;
        ctx.beginPath();
        ctx.moveTo(0, y + jitter);
        ctx.lineTo(width, y + jitter);
        ctx.stroke();
      }
      ctx.restore();
    },
    [gridScale, lineJitter, lineStyle, lineThickness, linesColor, noiseIntensity]
  );

  const drawScan = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = scanOpacity;

      const speed = Math.max(0.05, scanSpeed);
      scanPosRef.current = (scanPosRef.current + speed * (t / 60)) % 1;

      if (scanDirection === "left-to-right") {
        const x = scanPosRef.current * width;
        const grad = ctx.createLinearGradient(x - 120, 0, x + 120, 0);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.45, "transparent");
        grad.addColorStop(0.5, scanColor);
        grad.addColorStop(0.55, "transparent");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (scanDirection === "top-to-bottom") {
        const y = scanPosRef.current * height;
        const grad = ctx.createLinearGradient(0, y - 120, 0, y + 120);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.45, "transparent");
        grad.addColorStop(0.5, scanColor);
        grad.addColorStop(0.55, "transparent");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else {
        const cx = width / 2;
        const cy = height / 2;
        const r = Math.max(width, height) * scanPosRef.current;
        const grad = ctx.createRadialGradient(cx, cy, Math.max(0, r - 120), cx, cy, r + 120);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.7, "transparent");
        grad.addColorStop(1, scanColor);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.restore();
    },
    [scanColor, scanDirection, scanOpacity, scanSpeed]
  );

  const render = useCallback(
    (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      drawGrid(ctx, width, height);
      drawScan(ctx, width, height, time);

      if (runningRef.current) {
        rafRef.current = requestAnimationFrame(render);
      }
    },
    [drawGrid, drawScan]
  );

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    runningRef.current = true;
    rafRef.current = requestAnimationFrame(render);

    return () => {
      runningRef.current = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      window.removeEventListener("resize", resizeCanvas);

      const canvas = canvasRef.current;
      if (canvas) {
        const gl = (canvas as unknown as WebGLRenderingContext).getContext?.("webgl");
        if (gl && (gl as any).getExtension) {
          const ext = (gl as any).getExtension("WEBGL_lose_context");
          if (ext) ext.loseContext();
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resizeCanvas, render]);

  useEffect(() => {
    if (!scanOnClick) return;
    const el = containerRef.current;
    if (!el) return;
    const handler = () => {
      scanPosRef.current = (scanPosRef.current + 0.1) % 1;
    };
    el.addEventListener("click", handler);
    return () => el.removeEventListener("click", handler);
  }, [scanOnClick]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default GridScan;
