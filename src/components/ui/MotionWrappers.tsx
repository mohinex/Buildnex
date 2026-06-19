import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Magnetic Button Hover Component
 * CTAs/Buttons subtly follow the cursor within a spring radius
 */
export function Magnetic({ children, range = 50 }: { children: React.ReactElement; range?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const distance = Math.hypot(distanceX, distanceY);
    if (distance < range) {
      // Pull button towards cursor relative to distance
      x.set(distanceX * 0.35);
      y.set(distanceY * 0.35);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Skip on mobile devices for accessibility & performance
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return <>{children}</>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative inline-block"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * 3D Tilt Card Container with Dynamic Directional Shadow Shift
 */
export function TiltCard({
  children,
  className = "",
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shadowX, setShadowX] = useState(0);
  const [shadowY, setShadowY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Constrain maximum tilt angle between 3.5 and 4.5 degrees
    const maxTilt = 4;
    const rY = (mouseX / (width / 2)) * maxTilt;
    const rX = -(mouseY / (height / 2)) * maxTilt;

    setRotateY(rY);
    setRotateX(rX);

    // Directional shadow shifts
    setShadowX(-(mouseX / (width / 2)) * 10);
    setShadowY(-(mouseY / (height / 2)) * 14);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setShadowX(0);
    setShadowY(0);
  };

  const shadowValue = isHovered
    ? `${shadowX}px ${shadowY + 20}px 36px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.02)`
    : "0 4px 20px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.01)";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.025 : 1,
        boxShadow: shadowValue
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 24,
        mass: 0.7
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200
      }}
      className={`relative rounded-3xl overflow-hidden transition-colors duration-300 ${className}`}
      id={id}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated Gradient Border Glow Frame
 */
export function BorderGlow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-[1.5px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 hover:from-brand-red hover:via-brand-blue hover:to-indigo-500 rounded-[22px] group transition-all duration-500 ease-in-out ${className}`}>
      {/* Background radial soft diffusion glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/25 to-brand-blue/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-[22px] -z-10 pointer-events-none"></div>
      <div className="bg-white rounded-[20.5px] h-full w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/**
 * Desktop Spotlight Hover Follower for Hero/Section Backgrounds
 */
export function SpotlightHero({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
      id={id}
    >
      {/* Glow Layer */}
      {!isMobile && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 z-0"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 26, 47, 0.04), rgba(0, 102, 204, 0.02) 45%, transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * Framer Motion Stagger Containers for Smooth 60fps Entrance Staggers
 */
export function StaggerList({ children, className = "" }: { children: React.ReactNode; className?: string; key?: React.Key }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.06,
            delayChildren: 0.02
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string; key?: React.Key }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18, filter: "blur(3px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 140,
            damping: 18,
            mass: 0.55
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
