import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube } from "lucide-react";
import { motion } from "framer-motion";

// Marketing keywords for the matrix effect
const marketingKeywords = [
  ["SEO", "GROWTH", "LEADS", "ADS", "ROI", "PPC", "SOCIAL", "WEB", "DESIGN", "BRAND"],
  ["STRATEGY", "CONTENT", "ANALYTICS", "CRO", "EMAIL", "FUNNEL", "CLICKS", "REACH", "VIRAL", "TRAFFIC"],
  ["DIGITAL", "MARKETING", "CREATIVE", "DATA", "SCALE", "CONVERT", "ENGAGE", "BOOST", "OPTIMIZE", "TARGET"],
  ["REVENUE", "RESULTS", "CAMPAIGN", "LAUNCH", "SUCCESS", "PROFIT", "VISION", "IMPACT", "GOALS", "METRICS"],
];

// Single scrolling column component
const MatrixColumn = ({ 
  keywords, 
  direction = "down", 
  duration = 25,
  className = ""
}: { 
  keywords: string[]; 
  direction?: "up" | "down"; 
  duration?: number;
  className?: string;
}) => {
  // Triple the keywords for seamless loop
  const extendedKeywords = [...keywords, ...keywords, ...keywords];
  
  return (
    <div className={`flex flex-col overflow-hidden h-full ${className}`}>
      <motion.div
        className="flex flex-col gap-8"
        initial={{ y: direction === "down" ? "-33.33%" : "0%" }}
        animate={{ y: direction === "down" ? "0%" : "-33.33%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {extendedKeywords.map((keyword, index) => (
          <span
            key={`${keyword}-${index}`}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground/[0.03] select-none whitespace-nowrap"
          >
            {keyword}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Digital Marketing Matrix Background */}
      <div className="absolute inset-0 bg-background">
        {/* Matrix columns container */}
        <div className="absolute inset-0 flex justify-around pointer-events-none overflow-hidden">
          <MatrixColumn keywords={marketingKeywords[0]} direction="down" duration={30} />
          <MatrixColumn keywords={marketingKeywords[1]} direction="up" duration={25} />
          <MatrixColumn keywords={marketingKeywords[2]} direction="down" duration={35} />
          <MatrixColumn keywords={marketingKeywords[3]} direction="up" duration={28} />
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none" />
        
        {/* Subtle center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trial Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary font-semibold"
            >
              🎉 7-Day Free Trial
            </motion.span>
            <span className="text-muted-foreground">— Try Risk-Free</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Grow Your Brand with{" "}
            <span className="gradient-text">Creative & Result-Driven</span> Marketing
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Websites • SEO • Ads • Graphic — 7-Day Free Trial included
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                <a href="#packages">
                  Get Started <ArrowRight className="ml-2" />
                </a>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <Button 
                variant="outline" 
                size="lg" 
                className="relative text-lg px-8 py-6 h-auto bg-background border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300" 
                asChild
              >
                <a 
                  href="https://youtube.com/@apnagrowthmedia?si=HG4dqAM2Lncl8Vgm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Youtube className="text-primary" size={24} />
                  </motion.div>
                  <span className="text-foreground">Watch on YouTube</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "150+", label: "Active Clients" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="cursor-default"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
