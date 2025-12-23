import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingElement } from "./animations";

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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,168,255,0.1),transparent_50%)]" />
        <FloatingElement className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px]" duration={4} distance={20} />
        <FloatingElement className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px]" duration={5} distance={25} />
        <FloatingElement className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/10 rounded-full filter blur-[80px]" duration={6} distance={15} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
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
                className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-50 blur-sm group-hover:opacity-80 transition-opacity duration-300"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              />
              <Button 
                variant="outline" 
                size="lg" 
                className="relative text-lg px-8 py-6 h-auto bg-background/95 border-primary/40 hover:bg-primary/10 hover:border-primary group" 
                asChild
              >
                <a 
                  href="https://youtube.com/@apnagrowthmedia?si=HG4dqAM2Lncl8Vgm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Youtube className="text-primary group-hover:text-secondary transition-colors" size={24} />
                  </motion.div>
                  <span className="text-foreground group-hover:text-primary transition-colors">Watch on YouTube</span>
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
