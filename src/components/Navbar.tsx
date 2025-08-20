import { Button } from "@/components/ui/button";
import lyfevineLogoIcon from "@/assets/lyfevine-logo.png";
import lyfevineText from "@/assets/lyfevine-text.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 z-50">
            <img 
              src={lyfevineLogoIcon} 
              alt="Lyfevine Logo" 
              className="h-12 w-12 rounded-full shadow-medium"
            />
            <img 
              src={lyfevineText} 
              alt="Lyfevine" 
              className="h-8"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#browse" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              Browse
            </a>
            <a href="#services" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              Services
            </a>
            <a href="#about" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#contact" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex text-white/90 hover:text-white glass-card border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Sign In
            </Button>
            <Button className="bg-brand-green hover:bg-brand-green-dark text-white shadow-glow transition-all duration-300 hover:scale-105">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;