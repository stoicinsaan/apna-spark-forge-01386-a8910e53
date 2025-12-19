import { Users, Target, Heart, Rocket, Award, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  const values = [
    {
      icon: Target,
      title: "Result-Driven",
      description: "We focus on measurable outcomes that directly impact your business growth."
    },
    {
      icon: Heart,
      title: "Client-First",
      description: "Your success is our priority. We treat your business like our own."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We stay ahead of trends to give you cutting-edge marketing strategies."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver nothing but the highest quality work in everything we do."
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Client Satisfaction" }
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-float">
                <Users className="w-10 h-10 text-primary" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                About Us
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We're a passionate team dedicated to helping businesses thrive in the digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Glowing border animation */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-[-2px] bg-gradient-conic from-primary via-secondary to-primary opacity-50 blur-sm animate-spin-slow"></div>
                </div>
                
                <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border/50 z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
                    Our Story
                  </h2>
                  
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      We started <span className="text-primary font-semibold">ApnaGrowthAgency</span> with one simple goal — to help small and growing businesses succeed online without wasting money on guesswork.
                    </p>
                    <p>
                      We understand the struggles of managing social media, running ads, and building a strong brand presence — that's why we handle it all for you.
                    </p>
                    <p>
                      No big promises, just real results you can see in <span className="text-primary font-semibold">7 days</span> with our free trial.
                    </p>
                    <p className="text-xl font-semibold text-foreground text-center pt-4">
                      "Your growth is our mission — because when you grow, we grow too."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {item.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                Why Choose Us?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "7-Day Free Trial - No Risk",
                  "Dedicated Account Manager",
                  "Transparent Reporting",
                  "24/7 Customer Support",
                  "Affordable Pricing",
                  "Proven Track Record"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your 7-day free trial today and see the difference we can make.
              </p>
              <a 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
