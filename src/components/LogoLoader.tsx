import React, { useEffect, useState } from "react";

interface LogoLoaderProps {
  onZoomStart?: () => void;
  onComplete: () => void;
}

export default function LogoLoader({ onZoomStart, onComplete }: LogoLoaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Phase 1 (Draw & Fill) lasts 1.2s. Then start curtain lift.
    const liftTimer = setTimeout(() => {
      setIsExiting(true);
      if (onZoomStart) {
        onZoomStart();
      }
    }, 1200);

    // Phase 2 (Curtain Lift) takes 1.4s. Finish at 2.6s.
    const syncTimer = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("introFinished"));
    }, 2600);

    // Cleanly unmount right after.
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2700);

    return () => {
      clearTimeout(liftTimer);
      clearTimeout(syncTimer);
      clearTimeout(completeTimer);
    };
  }, [onZoomStart, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center select-none bg-black transition-transform duration-[1400ms] ${
        isExiting ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)" }}
      id="logo-loader-viewport"
    >
      {/* Keyframe Styles for Premium Stroke Drawing and Fills */}
      <style>{`
        @keyframes drawStroke {
          0% {
            stroke-dashoffset: 600;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fillBlue {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          70% {
            opacity: 0;
            transform: scale(0.92);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fillWhite {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          70% {
            opacity: 0;
            transform: scale(0.92);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fillBackground {
          0% {
            opacity: 0;
          }
          80% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-draw {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawStroke 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fill-bg {
          opacity: 0;
          animation: fillBackground 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fill-blue {
          opacity: 0;
          transform-origin: 50px 50px;
          animation: fillBlue 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .animate-fill-white {
          opacity: 0;
          transform-origin: 50px 50px;
          animation: fillWhite 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      <div className="relative flex items-center justify-center" id="logo-loader-container">
        {/* Outer subtle glow effect */}
        {!isExiting && (
          <div className="absolute w-[200px] h-[200px] rounded-full bg-white/5 blur-3xl opacity-50 pointer-events-none" />
        )}

        {/* High-End Vector Placeholder Logo */}
        <svg
          viewBox="0 0 100 100"
          className="w-36 h-36 md:w-44 md:h-44 relative z-10"
          id="animated-premium-svg"
        >
          {/* Outer Signature Bronze Ring with Drawing Animation */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#c5a059"
            strokeWidth="1.8"
            className="animate-draw"
          />

          {/* Core Dark Inner Circular Fill (Thick Black Ring Base) */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="#000000"
            className="animate-fill-bg"
          />

          {/* Quadrant Segments Sector 1 */}
          <path
            d="M 50,50 L 19,50 A 31,31 0 0,1 50,19 Z"
            fill="#0066B2"
            className="animate-fill-blue"
          />

          {/* Quadrant Segments Sector 2 */}
          <path
            d="M 50,50 L 50,19 A 31,31 0 0,1 81,50 Z"
            fill="#FFFFFF"
            className="animate-fill-white"
          />

          {/* Quadrant Segments Sector 3 */}
          <path
            d="M 50,50 L 81,50 A 31,31 0 0,1 50,81 Z"
            fill="#0066B2"
            className="animate-fill-blue"
          />

          {/* Quadrant Segments Sector 4 */}
          <path
            d="M 50,50 L 50,81 A 31,31 0 0,1 19,50 Z"
            fill="#FFFFFF"
            className="animate-fill-white"
          />

          {/* Inner Separation Ring */}
          <circle
            cx="50"
            cy="50"
            r="31"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            opacity="0.3"
            className="animate-fill-bg"
          />
        </svg>
      </div>
    </div>
  );
}
