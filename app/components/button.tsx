"use client";

import { useState } from "react";
import { useRef } from "react";

export const Btn = ({children, className} : {children: string | React.JSX.Element, className ?: string}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || isFocused) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };
  
    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };
  
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`bg-[rgba(225,225,225,0.3)] backdrop-blur-md cursor-pointer text-[#fff] font-bold text-md relative minw-w-[150px] text-center overflow-hidden rounded-xl bg-gradient-to-r px-3 py-5 shadow-2xl ${className}`}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 text-center"
          style={{
            opacity,
            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.2), transparent 100%)`,
          }}
        />
        {children}
      </div>
    );
  };
  