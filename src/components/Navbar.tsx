import { Button } from "@/components/ui/button";
import lyfevineLogoIcon from "@/assets/lyfevine-logo.png";
import lyfevineText from "@/assets/lyfevine-text.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={lyfevineLogoIcon} 
              alt="Lyfevine Logo" 
              className="h-10 w-10"
            />
            <img 
              src={lyfevineText} 
              alt="Lyfevine" 
              className="h-8"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-foreground hover:text-brand-green transition-colors">
              How It Works
            </a>
            <a href="#services" className="text-foreground hover:text-brand-green transition-colors">
              Services
            </a>
            <a href="#why-lyfevine" className="text-foreground hover:text-brand-green transition-colors">
              Why Lyfevine
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button variant="default">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;