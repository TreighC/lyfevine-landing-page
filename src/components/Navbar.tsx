import { Button } from "@/components/ui/button";
import lyfevineLogoIcon from "@/assets/lyfevine-logo.png";
import lyfevineText from "@/assets/lyfevine-text.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-white/90 via-white/80 to-white/70 border-b border-white/50 shadow-2xl shadow-black/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-white/10 before:to-white/20 after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-black/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={lyfevineLogoIcon} 
              alt="Lyfevine Logo" 
              className="h-10 w-10 rounded-full"
            />
            <img 
              src={lyfevineText} 
              alt="Lyfevine" 
              className="h-7"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#browse" className="text-gray-800 hover:text-gray-900 font-semibold cta-text transition-all duration-300 hover:scale-105 relative group">
              <span className="relative z-10">Browse</span>
              <div className="absolute -inset-2 bg-gray-800/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#services" className="text-gray-800 hover:text-gray-900 font-semibold cta-text transition-all duration-300 hover:scale-105 relative group">
              <span className="relative z-10">Services</span>
              <div className="absolute -inset-2 bg-gray-800/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#about" className="text-gray-800 hover:text-gray-900 font-semibold cta-text transition-all duration-300 hover:scale-105 relative group">
              <span className="relative z-10">About</span>
              <div className="absolute -inset-2 bg-gray-800/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#contact" className="text-gray-800 hover:text-gray-900 font-semibold cta-text transition-all duration-300 hover:scale-105 relative group">
              <span className="relative z-10">Contact</span>
              <div className="absolute -inset-2 bg-gray-800/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex text-gray-800 hover:text-gray-900 bg-gray-800/10 border border-gray-800/20 hover:bg-gray-800/20 transition-all duration-300 hover:scale-105 cta-text font-semibold"
            >
              Sign In
            </Button>
            <Button className="bg-brand-green hover:bg-brand-green-dark text-white shadow-glow transition-all duration-300 hover:scale-105 border border-brand-green/20 cta-text">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;