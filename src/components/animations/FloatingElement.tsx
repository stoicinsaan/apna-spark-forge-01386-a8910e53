import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children?: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

const FloatingElement = ({
  children,
  className = "",
  duration = 3,
  distance = 15,
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
