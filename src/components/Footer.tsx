import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import lyfevineLogoIcon from "@/assets/lyfevine-logo.png";
import lyfevineText from "@/assets/lyfevine-text.png";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white relative">
      {/* Enhanced transition with branding */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-navy/40 to-brand-navy/60"></div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
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
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted marketplace for finding verified wellness professionals who align with your goals and lifestyle.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-semibold">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-semibold">t</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-semibold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">Browse Pros</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">Wellness Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="font-semibold text-lg mb-6">For Professionals</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">Join as a Pro</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">Pro Dashboard</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">Resources</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-green-light transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-white/80 mb-4">Get wellness tips and platform updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-brand-green hover:bg-brand-green-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Lyfevine. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-brand-green-light transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-brand-green-light transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-brand-green-light transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;