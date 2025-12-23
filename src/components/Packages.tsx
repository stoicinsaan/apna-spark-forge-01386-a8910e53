import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹5,000",
      period: "/month",
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

  return (
    <section id="packages" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Growth Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Flexible plans designed to fit your business needs
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">7-Day Free Trial included with all packages</span>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b from-card to-card/80 border rounded-2xl p-6 lg:p-8 animate-fade-in-up ${
                pkg.popular
                  ? "border-primary shadow-[0_0_50px_rgba(0,168,255,0.3)] md:scale-105"
                  : "border-border/50 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,168,255,0.15)]"
              } transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-1 justify-center md:justify-start">
                  <span className="text-3xl lg:text-4xl font-bold text-primary/70 line-through">{pkg.price}</span>
                  <span className="text-muted-foreground/70 line-through">{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "hero" : "outlineGlow"}
                size="lg"
                className="w-full"
                asChild
              >
                <a 
                  href={`https://wa.me/919877830757?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.name} plan. Please share more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Choose Plan & Try 7 Days Free
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Trial Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Not sure which package? <a href="#contact" className="text-primary hover:underline">Get a free consultation</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
