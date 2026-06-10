import { useEffect, useRef, useState } from "react";

export default function SignaturePad({
  value,
  onChange,
  hint,
  clearLabel,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(Boolean(value));

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ratio = window.devicePixelRatio || 1;
    const { width } = container.getBoundingClientRect();

    canvas.width = width * ratio;
    canvas.height = 260 * ratio;

    canvas.style.width = `${width}px`;
    canvas.style.height = "260px";

    const context = canvas.getContext("2d");

    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = 4;
    context.strokeStyle = "#111827";

    if (value) {
      const image = new Image();

      image.onload = () => {
        context.drawImage(image, 0, 0, width, 260);
      };

      image.src = value;
    }
  };

  useEffect(() => {
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const getPointerPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = (event) => {
    event.preventDefault();

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const position = getPointerPosition(event);

    context.beginPath();
    context.moveTo(position.x, position.y);

    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;

    event.preventDefault();

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const position = getPointerPosition(event);

    context.lineTo(position.x, position.y);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const signature = canvas.toDataURL("image/png");

    setIsDrawing(false);
    onChange(signature);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    setHasSignature(false);
    onChange(null);
  };

  return (
    <div className="signature-pad">
      <div ref={containerRef} className="signature-pad__canvas-wrap">
        <canvas
          ref={canvasRef}
          className="signature-pad__canvas"
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
        />
      </div>

      <div className="signature-pad__footer">
        <p className="signature-pad__hint">{hint}</p>

        <button
          type="button"
          onClick={clearSignature}
          disabled={!hasSignature}
          className="signature-pad__clear"
        >
          {clearLabel}
        </button>
      </div>
    </div>
  );
}