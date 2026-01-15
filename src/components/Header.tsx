import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, Package, BookOpen, Users, Phone, Wrench, Calculator, Search, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // This will control the Sheet
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Packages", href: "/packages", icon: Package },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "About Us", href: "/about", icon: Users },
    { name: "Contact", href: "/#contact", icon: Phone },
  ];

  const toolsItems = [
    { name: "ROI Calculator", href: "/roi-calculator", icon: Calculator },
    { name: "Site Audit", href: "/site-audit", icon: Search },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // We still want to close the menu on click
    setIsMobileMenuOpen(false); 

    if (location.pathname === '/') {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If on /blog, let the link navigate normally
  };

  // --- Helper for Desktop Nav ---
  const renderNavItem = (item: { name: string, href: string, icon: any }) => {
    const isPageLink = item.href === '/blog' || item.href === '/about' || item.href === '/packages' || item.href === '/' || item.href === '/services';
    const isActive = isPageLink 
      ? (item.href === '/' ? location.pathname === '/' && !location.hash : location.pathname === item.href)
      : location.pathname === '/' && location.hash === item.href.split('#')[1];

    const linkClasses = `relative px-4 py-2 text-foreground font-medium rounded-lg
      transition-colors duration-200 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
      hover:text-primary
      active:scale-[0.98]
      ${isActive ? 'text-primary' : ''}`;

    const content = (
      <>
        {/* Sliding background indicator */}
        {isActive && (
          <motion.div
            layoutId="navIndicator"
            className="absolute inset-0 bg-primary/10 rounded-lg"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
        {/* Sliding underline */}
        {isActive && (
          <motion.div
            layoutId="navUnderline"
            className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
        <span className="relative z-10">{item.name}</span>
      </>
    );

    if (isPageLink) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={linkClasses}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={linkClasses}
        onClick={(e) => handleSmoothScroll(e, item.href)}
      >
        {content}
      </a>
    );
  };

  // --- Helper for Mobile Nav (links inside the Sheet) ---
  const renderMobileNavItem = (item: { name: string, href: string, icon: any }, index: number) => {
    const isPageLink = item.href === '/blog' || item.href === '/about' || item.href === '/packages' || item.href === '/' || item.href === '/services';
    const isActive = isPageLink 
      ? (item.href === '/' ? location.pathname === '/' && !location.hash : location.pathname === item.href)
      : location.pathname === '/' && location.hash === item.href.split('#')[1];
    const Icon = item.icon;

    const mobileClasses = `flex items-center gap-3 text-foreground font-medium py-4 px-3 text-base rounded-lg
      transition-all duration-200 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
      hover:text-primary hover:bg-primary/10
      active:scale-[0.98] active:bg-primary/20
      ${isActive ? 'text-primary bg-primary/5' : ''}`;

    if (isPageLink) {
      return (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05, duration: 0.2 }}
        >
          <Link
            to={item.href}
            className={mobileClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span>{item.name}</span>
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05, duration: 0.2 }}
      >
        <a
          href={item.href}
          className={mobileClasses}
          onClick={(e) => handleSmoothScroll(e, item.href)}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
          <span>{item.name}</span>
        </a>
      </motion.div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-black/10" 
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-xl md:text-2xl font-bold gradient-text" onClick={(e) => handleSmoothScroll(e, '/#home')}>
              Apna Growth Media
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <motion.div className="flex items-center gap-1" layout>
              {navItems.map(renderNavItem)}
              
              {/* Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-1.5 px-4 py-2 text-foreground font-medium rounded-lg
                  transition-all duration-200 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-none
                  hover:text-primary hover:bg-primary/10
                  active:scale-[0.98] active:bg-primary/20
                  ${location.pathname === '/roi-calculator' || location.pathname === '/site-audit' 
                    ? 'text-primary bg-primary/5' 
                    : ''
                  }`}>
                  <Wrench className="w-4 h-4" />
                  Tools
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-background/95 backdrop-blur-lg border-border/50 shadow-lg shadow-primary/10 p-1"
                  align="center"
                >
                  {toolsItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="rounded-md px-3 py-2.5 cursor-pointer">
                      <Link 
                        to={item.href} 
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Button variant="glow" size="lg" asChild>
              <a href="#contact">Get Free Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button & Sheet */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/10">
                  <div className="relative flex flex-col justify-center items-center w-6 h-6">
                    <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                    <div className={`w-5 h-0.5 bg-foreground my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                  </div>
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] sm:w-[350px] bg-gradient-to-b from-background via-background to-background/95 backdrop-blur-xl border-l border-primary/20 p-0"
              >
                <div className="flex flex-col h-full p-6">
                  {/* Logo inside menu */}
                  <div className="flex items-center justify-start mb-6 pt-2">
                    <Link 
                      to="/" 
                      className="text-xl font-bold gradient-text" 
                      onClick={(e) => handleSmoothScroll(e, '/#home')}
                    >
                      Apna Growth Media
                    </Link>
                  </div>
                  
                  {/* Nav items inside menu */}
                  <nav className="flex flex-col flex-1 overflow-y-auto space-y-1">
                    {navItems.map((item, index) => renderMobileNavItem(item, index))}
                    
                    {/* Tools Section */}
                    <div className="py-3 border-b border-border/30">
                      <p className="flex items-center gap-2 text-primary font-semibold text-base mb-2">
                        <Wrench className="w-4 h-4" />
                        Tools
                      </p>
                      {toolsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 font-medium py-2 pl-6 text-sm ${
                            location.pathname === item.href ? 'text-primary' : ''
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    
                    {/* CTA Section */}
                    <div className="mt-auto pt-6 border-t border-border/30">
                      <p className="text-xs text-center text-muted-foreground mb-3">
                        Ready to grow your business?
                      </p>
                      <Button 
                        variant="glow" 
                        size="default" 
                        className="w-full transition-transform hover:scale-105" 
                        asChild
                      >
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                          Get Free Consultation
                        </a>
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>

        {/* --- OLD MOBILE MENU (THE "BLACK SQUARE") IS NOW REMOVED --- */}

      </div>
    </header>
  );
};

export default Header;
