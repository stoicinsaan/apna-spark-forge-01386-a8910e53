import { Check, Sparkles, Zap, Crown, Building, ArrowRight, Shield, Clock, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PackagesPage = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹5,000",
      period: "/month",
      icon: Zap,
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Basic Website Design",
        "Social Media Setup (2 Platforms)",
        "12 Posts/Reels per Month",
        "Basic SEO Setup",
        "Monthly Performance Report",
        "Email Support",
      ],
    },
    {
      name: "Growth",
      price: "₹15,000",
      period: "/month",
      icon: Crown,
      description: "For growing businesses ready to scale their online presence",
      popular: true,
      features: [
        "Professional Website + E-commerce",
        "Social Media Management (4 Platforms)",
        "15 Posts/Reels + 10 Videos per Month",
        "SEO + Google Ads",
        "Content Writing + Graphics",
        "Email & WhatsApp Marketing",
        "Weekly Analytics & Reports",
        "Priority Support",
      ],
    },
    {
      name: "Business Pro",
      price: "₹30,000",
      period: "/month",
      icon: Building,
      description: "Enterprise solution for maximum growth and visibility",
      features: [
        "Custom Website + Full Branding",
        "Complete Social Media Suite",
        "30 Posts/Reels + 7 Professional Videos",
        "Full SEO + Multi-platform Ads",
        "Video Shoots (Property/Business)",
        "Influencer Collaboration",
        "CRO + A/B Testing",
        "Dedicated Account Manager",
        "24/7 Premium Support",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "7-Day Free Trial",
      description: "Try any package risk-free for 7 days"
    },
    {
      icon: Clock,
      title: "No Long Contracts",
      description: "Cancel anytime, no questions asked"
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Personal account manager for all plans"
    }
  ];

  const faqs = [
    {
      question: "What happens after the 7-day free trial?",
      answer: "After your trial ends, you'll be billed for your chosen package. You can cancel anytime during the trial with no charges."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes! You can change your plan at any time. Changes take effect from your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and bank transfers."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Absolutely! Contact us for a custom package tailored to your specific business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">7-Day Free Trial Included</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Growth Packages
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Flexible plans designed to fit your business needs. Start with a free trial and scale as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-8 bg-muted/30 border-y border-border/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative group ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                >
                  {/* Glowing border for popular */}
                  {pkg.popular && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-[-2px] bg-gradient-conic from-primary via-secondary to-primary opacity-60 blur-sm animate-spin-slow"></div>
                    </div>
                  )}
                  
                  <div className={`relative bg-card border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl ${
                    pkg.popular
                      ? "border-primary/50 shadow-[0_0_40px_rgba(0,168,255,0.2)] z-10"
                      : "border-border hover:border-primary/50"
                  }`}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <pkg.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{pkg.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                        <span className="text-muted-foreground">{pkg.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={pkg.popular ? "glow" : "outline"}
                      size="lg"
                      className="w-full group/btn"
                      asChild
                    >
                      <a href="/#contact" className="flex items-center justify-center gap-2">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare Plans */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Compare Plans
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See what's included in each package
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Features</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 text-primary font-semibold">Growth</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Business Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Website Design", starter: "Basic", growth: "Professional", pro: "Custom" },
                    { feature: "Social Platforms", starter: "2", growth: "4", pro: "All" },
                    { feature: "Monthly Posts", starter: "12", growth: "25", pro: "37" },
                    { feature: "Video Content", starter: "—", growth: "10/month", pro: "7 Pro Videos" },
                    { feature: "SEO", starter: "Basic", growth: "Advanced", pro: "Full Suite" },
                    { feature: "Paid Ads", starter: "—", growth: "Google Ads", pro: "Multi-platform" },
                    { feature: "Analytics Reports", starter: "Monthly", growth: "Weekly", pro: "Real-time" },
                    { feature: "Support", starter: "Email", growth: "Priority", pro: "24/7 Premium" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4 text-foreground font-medium">{row.feature}</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">{row.starter}</td>
                      <td className="text-center py-4 px-4 text-primary font-medium">{row.growth}</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Not Sure Which Package?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your goals and find the perfect plan for your business.
              </p>
              <Button 
                variant="glow" 
                size="lg" 
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="/#contact">Get Free Consultation</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PackagesPage;
