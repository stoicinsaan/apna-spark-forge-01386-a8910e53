import { Globe, Search, MousePointerClick, PenTool, Video, Mail, BarChart, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard } from "./animations";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website & Branding",
      description: "Landing pages, brand logos, e-commerce setup on Shopify/WordPress/Wix",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "On-page, off-page SEO, local SEO (GMB), keyword research, content optimization",
    },
    {
      icon: MousePointerClick,
      title: "PPC Advertising",
      description: "Google Ads, Meta Ads, LinkedIn Ads, remarketing, conversion tracking",
    },
    {
      icon: PenTool,
      title: "Social Media Marketing",
      description: "Strategy, content creation, posts/reels/stories, monthly analytics, influencer collaboration",
    },
    {
      icon: Video,
      title: "Content & Creative",
      description: "Content strategy, copywriting, blog writing, graphics, video creation, motion graphics",
    },
    {
      icon: Mail,
      title: "Email & WhatsApp Marketing",
      description: "Email campaigns, WhatsApp Business automation, customer retargeting",
    },
    {
      icon: BarChart,
      title: "Analytics & CRO",
      description: "Google Analytics, Tag Manager, conversion rate optimization, funnels & A/B testing",
    },
    {
      icon: Plus,
      title: "Additional Add-ons",
      description: "Domain & hosting help, business profile setup, ORM, 24/7 support",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive digital marketing solutions to accelerate your business growth
          </motion.p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedCard
                key={index}
                index={index}
                className="group bg-card border border-border rounded-xl p-6 cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(0,168,255,0.15)]"
              >
                <motion.div
                  className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
