import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, Package, BookOpen, Users, Phone, Wrench, Calculator, Search, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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

    if (isPageLink) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative pb-1 ${
            isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-glow' : ''
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative pb-1 ${
          isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-glow' : ''
        }`}
        onClick={(e) => handleSmoothScroll(e, item.href)}
      >
        {item.name}
      </a>
    );
  };

  // --- Helper for Mobile Nav (links inside the Sheet) ---
  const renderMobileNavItem = (item: { name: string, href: string, icon: any }) => {
    const isPageLink = item.href === '/blog' || item.href === '/about' || item.href === '/packages' || item.href === '/' || item.href === '/services';
    const isActive = isPageLink 
      ? (item.href === '/' ? location.pathname === '/' && !location.hash : location.pathname === item.href)
      : location.pathname === '/' && location.hash === item.href.split('#')[1];
    const Icon = item.icon;

    if (isPageLink) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 font-medium py-3 text-base border-b border-border/30 ${
            isActive ? 'text-primary' : ''
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Icon className="w-4 h-4 flex-shrink-0" />
          <span>{item.name}</span>
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={`flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 font-medium py-3 text-base border-b border-border/30 ${
          isActive ? 'text-primary' : ''
        }`}
        onClick={(e) => handleSmoothScroll(e, item.href)}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span>{item.name}</span>
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
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
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map(renderNavItem)}
              
              {/* Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-1 text-foreground hover:text-primary transition-all duration-300 font-medium relative pb-1 outline-none ${
                  location.pathname === '/roi-calculator' || location.pathname === '/site-audit' 
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-glow' 
                    : ''
                }`}>
                  <Wrench className="w-4 h-4" />
                  Tools
                  <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-background/95 backdrop-blur-lg border-border/50 shadow-lg shadow-primary/10"
                  align="center"
                >
                  {toolsItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link 
                        to={item.href} 
                        className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
                  <nav className="flex flex-col flex-1 overflow-y-auto">
                    {navItems.map(renderMobileNavItem)}
                    
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
