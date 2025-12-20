import { Button } from "@/components/ui/button";
import { Camera, Home, Building2, Package, Mic, Plane, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard } from "./animations";

const VideoProduction = () => {
  const videoServices = [
    { icon: Home, title: "Property Shoots", description: "Interior + Ai Generated" },
    { icon: Building2, title: "Hotel Shoots", description: "Hotel showcase videos" },
    { icon: Package, title: "Product Videos", description: "Professional product demos" },
    { icon: Mic, title: "Quality Audio", description: "Sounds Matter" },
    { icon: Plane, title: "Drone Shoots", description: "Aerial cinematography" },
    { icon: Calendar, title: "On time delivery", description: "24x7 Support" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Camera className="w-8 h-8 text-primary" />
              </motion.div>
              <span className="text-primary font-semibold text-lg">Video Production</span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Professional <span className="gradient-text">Video Shoots</span> & Photography
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Capture your brand's story with stunning visuals. From property tours we deliver quality that engages your audience.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">Book a Video Shoot</a>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {videoServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard
                  key={index}
                  index={index}
                  className="bg-card border border-border rounded-xl p-6 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,168,255,0.15)]"
                >
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProduction;
