import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { AnimatedSection } from "./animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/meopbzzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: (
        <a href="mailto:apnagrowthmedia@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          apnagrowthmedia@gmail.com
        </a>
      ),
    },
    {
      icon: Phone,
      title: "Call Now",
      content: (
        <>
          <a href="tel:9877830757" className="text-muted-foreground hover:text-primary transition-colors block">
            98778 30757
          </a>
          <a href="tel:8218697384" className="text-muted-foreground hover:text-primary transition-colors block">
            82186 97384
          </a>
        </>
      ),
    },
    {
      icon: MapPin,
      title: "Our Locations",
      content: (
        <>
          <p className="text-muted-foreground">Bijnor, Uttar Pradesh</p>
          <p className="text-muted-foreground">Ludhiana, Punjab</p>
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
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
            Ready to <span className="gradient-text">Grow Your Business</span>?
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start your 7-day free trial today. No credit card required.
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-card border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-semibold text-lg mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {[
                  "7-Day Free Trial - Risk-free",
                  "50+ Successful Projects",
                  "Dedicated Account Manager",
                  "24/7 Support Available",
                  "Money-Back Guarantee",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  >
                    ✅ {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <motion.div
              className="bg-card border border-border rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { placeholder: "Your Name *", key: "name", type: "text" },
                  { placeholder: "Your Email *", key: "email", type: "email" },
                  { placeholder: "Your Phone *", key: "phone", type: "tel" },
                  { placeholder: "Service Interested In", key: "service", type: "text" },
                ].map((field, index) => (
                  <motion.div
                    key={field.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      required={field.placeholder.includes("*")}
                      className="bg-background transition-all duration-300 focus:scale-[1.02]"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="bg-background resize-none transition-all duration-300 focus:scale-[1.01]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Start Your Free Trial"}
                  </Button>
                </motion.div>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Terms & Conditions
                </p>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
