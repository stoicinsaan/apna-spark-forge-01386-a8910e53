import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  hoverScale?: number;
}

const AnimatedCard = ({
  children,
  className = "",
  index = 0,
  hoverScale = 1.02,
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: hoverScale,
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
