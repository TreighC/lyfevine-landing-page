import { Button } from "@/components/ui/button";
import lyfevineLogoIcon from "@/assets/lyfevine-logo.png";
import lyfevineText from "@/assets/lyfevine-text.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/30 shadow-xl shadow-black/15 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/8 before:via-white/4 before:to-white/8 after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-white/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Unified single logo matching page green shades */}
          <div className="flex items-center gap-3 -ml-6" style={{
            filter: 'contrast(1.15) brightness(1.05) drop-shadow(0 1px 2px rgba(0,0,0,0.4)) hue-rotate(-15deg) saturate(1.05)',
            imageRendering: 'crisp-edges'
          }}>
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

          {/* Navigation Links - Increased spacing */}
          <div className="hidden md:flex items-center gap-12">
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

          {/* Auth Buttons - Shifted further right with better spacing */}
          <div className="flex items-center gap-4 -mr-6">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex text-gray-800 hover:text-gray-900 bg-gray-800/5 border border-gray-800/15 hover:bg-gray-800/15 transition-all duration-300 hover:scale-105 cta-text font-semibold px-6"
            >
              Sign In
            </Button>
            <Button className="bg-brand-green hover:bg-brand-green-dark text-white shadow-glow transition-all duration-300 hover:scale-105 border border-brand-green/20 cta-text px-6">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;