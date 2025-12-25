import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Globe, 
  Camera, 
  Bot, 
  GraduationCap, 
  Stethoscope, 
  ShoppingBag, 
  Building2,
  TrendingDown,
  TrendingUp,
  Search,
  Layout,
  Video,
  MessageSquare,
  ClipboardCheck,
  Target,
  Rocket,
  BarChart3,
  Users,
  Shield,
  Zap,
  HeartHandshake,
  ChevronDown,
  Phone,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection, AnimatedCard } from "@/components/animations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const ServicesPage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Industries data
  const industries = [
    {
      title: "Education",
      icon: GraduationCap,
      items: ["Schools", "Colleges", "Coaching Centers", "EdTech Startups"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Healthcare",
      icon: Stethoscope,
      items: ["Clinics", "Doctors", "Gyms & Fitness", "Wellness Centers"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Retail & Lifestyle",
      icon: ShoppingBag,
      items: ["Salons & Spas", "Restaurants", "Kirana Stores", "Fashion Boutiques"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Real Estate & Hospitality",
      icon: Building2,
      items: ["Property Dealers", "Hotels", "Builders", "Co-working Spaces"],
      color: "from-orange-500 to-amber-500"
    }
  ];

  // Pain points
  const painPoints = [
    { icon: MapPin, problem: "Invisible on Google Maps", solution: "Rank #1 in local searches" },
    { icon: TrendingDown, problem: "Low inquiries & footfall", solution: "10x qualified leads" },
    { icon: TrendingUp, problem: "Wasted ad spend, no ROI", solution: "Data-driven campaigns" },
    { icon: Phone, problem: "Missed customer calls", solution: "24/7 AI automation" }
  ];

  // Core services
  const coreServices = [
    {
      title: "Local Visibility",
      icon: Search,
      description: "Dominate your local market with powerful SEO strategies",
      features: ["Local SEO Optimization", "Google My Business Ranking", "Near-me Search Domination", "Review Management"]
    },
    {
      title: "Digital Foundation",
      icon: Layout,
      description: "Build a conversion-focused digital presence",
      features: ["High-converting Websites", "Lead Capture Forms", "CRM Integration", "Mobile-first Design"]
    },
    {
      title: "Visual Impact",
      icon: Video,
      description: "Showcase your business with stunning visuals",
      features: ["Property/Campus Shoots", "Instagram Reels", "Drone Videography", "Brand Photography"]
    },
    {
      title: "AI & Automation",
      icon: Bot,
      description: "Work smarter with intelligent automation",
      features: ["WhatsApp Automation", "AI Chatbots", "Auto-responders", "Lead Nurturing"]
    }
  ];

  // Process steps
  const processSteps = [
    { step: 1, title: "Audit", icon: ClipboardCheck, description: "Free comprehensive analysis of your current digital presence" },
    { step: 2, title: "Strategy", icon: Target, description: "Custom roadmap tailored to your business goals" },
    { step: 3, title: "Execution", icon: Rocket, description: "Implement campaigns across all digital channels" },
    { step: 4, title: "Optimization", icon: BarChart3, description: "Continuous improvement based on data insights" }
  ];

  // Why choose us
  const whyUs = [
    { icon: MapPin, title: "Hyper-Local Expertise", description: "We understand local markets like no one else" },
    { icon: BarChart3, title: "ROI-Driven Approach", description: "Every rupee spent is tracked and optimized" },
    { icon: HeartHandshake, title: "Honest Communication", description: "No jargon, just clear results and updates" },
    { icon: Zap, title: "Modern Tech Stack", description: "AI-powered tools for maximum efficiency" }
  ];

  // Pricing tiers
  const pricingTiers = [
    { name: "Starter Plan", audience: "For new businesses", features: ["GMB Setup", "Basic SEO", "Social Media Setup", "Monthly Report"] },
    { name: "Education Special", audience: "Schools & Coaching", features: ["Admission Campaigns", "Parent Engagement", "Campus Shoots", "WhatsApp Bot"] },
    { name: "Custom Business", audience: "Growing brands", features: ["Full Digital Suite", "Dedicated Manager", "AI Automation", "24/7 Support"] }
  ];

  // FAQs
  const faqs = [
    { question: "How do you help with school admissions?", answer: "We create targeted campaigns on Google and Meta Ads focusing on parents in your catchment area, combined with WhatsApp automation for instant inquiry handling and campus tour scheduling." },
    { question: "What's the minimum budget for local ads?", answer: "We recommend starting with ₹15,000-25,000/month for effective local campaigns. This covers both ad spend and management, ensuring meaningful results in your area." },
    { question: "How quickly can we see results?", answer: "Local SEO improvements typically show within 30-60 days. Paid campaigns start generating leads within the first week of going live." },
    { question: "Do you work with businesses outside metro cities?", answer: "Absolutely! Our specialty is Tier-2 and Tier-3 cities where local marketing expertise makes the biggest difference." },
    { question: "What makes you different from other agencies?", answer: "We focus exclusively on local businesses with a success-driven pricing model. Our team understands ground-level challenges and provides personalized attention to each client." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Local Business Growth Experts</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Empowering Local Businesses with{" "}
                <span className="gradient-text">Digital Dominance</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                From visibility to footfall—we help Doctors, Retailers, and Schools dominate 
                their local market with AI-driven marketing.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button variant="glow" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                  <a href="/site-audit">Get Free Local Audit</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto border-primary/30 hover:border-primary/60 hover:bg-primary/5"
                  asChild
                >
                  <a 
                    href="https://wa.me/919289040548?text=Hi!%20I'm%20interested%20in%20your%20local%20marketing%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5 text-primary" />
                    WhatsApp Us
                  </a>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-primary/60" />
          </motion.div>
        </section>

        {/* Industries Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industries We <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized solutions for local businesses across key sectors
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <AnimatedCard key={index} index={index}>
                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full group">
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                        <ul className="space-y-2">
                          {industry.items.map((item, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem vs Solution */}
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Problems, <span className="gradient-text">Our Solutions</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We understand the challenges local businesses face and deliver targeted solutions
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <AnimatedCard key={index} index={index}>
                    <Card className="bg-card border-border h-full overflow-hidden group hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6 relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-destructive/10 to-transparent rounded-bl-full group-hover:from-primary/10 transition-all duration-500" />
                        
                        <div className="mb-6">
                          <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-destructive group-hover:text-primary transition-colors duration-300" />
                          </div>
                          <p className="text-sm text-destructive font-medium line-through opacity-70 group-hover:opacity-100">{point.problem}</p>
                        </div>
                        
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="text-sm text-primary font-medium">Solution</span>
                          </div>
                          <p className="text-foreground font-semibold">{point.solution}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Four <span className="gradient-text">Pillars</span> of Growth
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive services designed to build your complete digital ecosystem
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AnimatedCard key={index} index={index}>
                    <Card className="bg-card border-border h-full hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="flex items-start gap-6 relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            
                            <ul className="grid grid-cols-2 gap-2">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process/Roadmap */}
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Execution <span className="gradient-text">Roadmap</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven process that delivers results every time
              </p>
            </AnimatedSection>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />
              
              <div className="grid grid-cols-4 gap-6 relative">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <AnimatedCard key={index} index={index} className="relative">
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 relative z-10 shadow-lg shadow-primary/30"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="w-10 h-10 text-primary-foreground" />
                        </motion.div>
                        <div className="absolute top-10 -z-10 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                        
                        <span className="text-primary font-bold text-lg mb-2">Step {step.step}</span>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </AnimatedCard>
                  );
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <AnimatedCard key={index} index={index}>
                    <Card className="bg-card border-border">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div>
                          <span className="text-primary font-bold text-sm">Step {step.step}</span>
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner <span className="gradient-text">With Us?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What makes Apna Growth Media the right choice for your business
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedCard key={index} index={index}>
                    <Card className="bg-card border-border h-full text-center hover:border-primary/50 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <motion.div
                          className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-secondary transition-all duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </motion.div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Success-Driven <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Flexible plans designed for local business growth. Month-to-month commitment—no long-term contracts.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <AnimatedCard key={index} index={index}>
                  <Card className={`bg-card border-border h-full hover:border-primary/50 transition-all duration-300 ${index === 1 ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''}`}>
                    <CardContent className="p-6">
                      {index === 1 && (
                        <div className="text-center mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                            Popular Choice
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-1 text-center">{tier.name}</h3>
                      <p className="text-muted-foreground text-sm text-center mb-6">{tier.audience}</p>
                      
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant={index === 1 ? "glow" : "outline"} 
                        className="w-full"
                        asChild
                      >
                        <a href="/packages">View Details</a>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>

            <AnimatedSection className="text-center mt-8">
              <p className="text-muted-foreground text-sm">
                <Shield className="w-4 h-4 inline-block mr-1 text-primary" />
                Month-to-month commitment. Cancel anytime. No hidden fees.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our services
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-secondary/20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to <span className="gradient-text">Dominate</span> Your Local Market?
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Join hundreds of local businesses who transformed their digital presence with us.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                  <DialogTrigger asChild>
                    <Button variant="glow" size="lg" className="text-lg px-8 py-6 h-auto">
                      Get Started Today
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center gradient-text">
                        Let's Grow Together
                      </DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4 mt-4">
                      <Input placeholder="Your Name" className="bg-background border-border" />
                      <Input placeholder="Business Name" className="bg-background border-border" />
                      <Input placeholder="Phone Number" className="bg-background border-border" />
                      <Input placeholder="Email Address" className="bg-background border-border" />
                      <Textarea placeholder="Tell us about your business..." className="bg-background border-border min-h-[100px]" />
                      <Button variant="glow" className="w-full">
                        Request Free Consultation
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto border-primary/30 hover:border-primary/60"
                  asChild
                >
                  <a href="tel:+919289040548" className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Call Now
                  </a>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ServicesPage;
