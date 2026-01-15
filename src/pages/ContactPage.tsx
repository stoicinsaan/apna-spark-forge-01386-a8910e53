import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98778 30757", "+91 82186 97384"],
      action: "tel:9877830757",
      actionText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["apnagrowthmedia@gmail.com"],
      action: "mailto:apnagrowthmedia@gmail.com",
      actionText: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Quick responses", "24/7 available"],
      action: "https://wa.me/919877830757",
      actionText: "Chat Now",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 10 AM - 7 PM", "Sunday: Closed"],
      action: null,
      actionText: null,
    },
  ];

  const locations = [
    {
      city: "Bijnor",
      state: "Uttar Pradesh",
      country: "India",
      type: "Head Office",
    },
    {
      city: "Ludhiana",
      state: "Punjab",
      country: "India",
      type: "Branch Office",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's <span className="gradient-text">Grow Together</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your digital presence? We're here to help. 
                Reach out and let's discuss how we can take your business to the next level.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                  {method.action && (
                    <a
                      href={method.action}
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 hover:underline"
                    >
                      {method.actionText} →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
              <p className="text-muted-foreground">
                Serving clients across India with offices in two strategic locations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative bg-card border border-border rounded-xl p-8 overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                    {location.type}
                  </span>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold">{location.city}</h3>
                      <p className="text-muted-foreground">
                        {location.state}, {location.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        {/* FAQ CTA Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Check out our services page for detailed information about what we offer, 
                or reach out directly – we're always happy to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  View Our Services
                </a>
                <a
                  href="/packages"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
                >
                  See Pricing Packages
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;