import React, { useRef, useState } from "react";

function TiltCard({ children, className = "", style = {}, maxRotation = 15 }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    // Calculate rotation angles
    // Moving mouse to the right should rotate Y positively (tilt right)
    // Moving mouse down should rotate X negatively (tilt down)
    const rotateY = normalizedX * maxRotation;
    const rotateX = -normalizedY * maxRotation;

    setCoords({ x: rotateY, y: rotateX, rawX: x, rawY: y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Card transform styles
  const transformStyle = isHovered
    ? {
        transform: `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
      }
    : {
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out",
      };

  // Shiny light overlay styles
  const shineStyle = isHovered && coords.rawX !== undefined
    ? {
        background: `radial-gradient(circle at ${coords.rawX}px ${coords.rawY}px, rgba(255, 255, 255, 0.12) 0%, transparent 60%)`,
        opacity: 1,
        transition: "opacity 0.2s ease-out",
      }
    : {
        opacity: 0,
        transition: "opacity 0.5s ease-out",
      };

  return (
    <div
      ref={cardRef}
      className={`relative preserve-3d transition-shadow duration-500 ${className}`}
      style={{
        ...style,
        ...transformStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Light sheen overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden"
        style={shineStyle}
      />
      {children}
    </div>
  );
}

export default TiltCard;
