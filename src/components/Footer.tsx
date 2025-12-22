import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/apnagrowthmedia/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@ApnaGrowthMedia", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/919877830757", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">Apna Growth Media</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              We help businesses grow online with data-driven marketing, creative videos, and result-oriented strategies.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a href="mailto:apnagrowthmedia@gmail.com" className="hover:text-primary transition-colors">
                  apnagrowthmedia@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Call:</span>{" "}
                <a href="tel:9877830757" className="hover:text-primary transition-colors">98778 30757</a>{" / "}
                <a href="tel:8218697384" className="hover:text-primary transition-colors">82186 97384</a>
              </p>
              <p className="text-muted-foreground"><span className="font-semibold text-foreground">Locations:</span></p>
              <p className="text-muted-foreground pl-2">• Bijnor, Uttar Pradesh</p>
              <p className="text-muted-foreground pl-2">• Ludhiana, Punjab</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="glow" className="mt-4" asChild>
                <a href="#contact">Book Free Consultation</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "Packages", href: "/packages" },
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/#contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Social Media Marketing", "SEO Optimization", "Google & Meta Ads", "Website Design", "Video Production & Photography", "Email & WhatsApp Marketing"].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4">Legal & Connect</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Refund & 7-Day Trial Policy
                </a>
              </li>
            </ul>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <social.icon className="w-5 h-5 text-primary hover:text-primary-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Apna Growth Media. All Rights Reserved. Designed & Managed by Apna Growth Media.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
