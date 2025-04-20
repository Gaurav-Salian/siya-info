
import { Facebook, Instagram, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy pt-16 pb-8 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-pink"></div>
      <div className="absolute inset-0 tech-grid-bg bg-tech-grid opacity-5 z-0"></div>
      <div className="absolute left-1/4 top-1/2 w-64 h-64 rounded-full bg-tech-purple/5 filter blur-[80px]"></div>
      <div className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-tech-blue/5 filter blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/1cb97fa6-5b40-4d79-800a-0c5cbcab759f.png" 
                alt="Siya Jewels Infotech Logo" 
                className="h-10 w-10"
              />
              <div className="ml-2">
                <h2 className="text-white text-lg font-bold">
                  SIYA <span className="text-tech-purple">JEWELS</span> <br />
                  <span className="text-xs font-light tracking-wider">INFOTECH</span>
                </h2>
              </div>
            </div>
            
            <p className="text-white/60 mb-6">
              A next generation technology company delivering AI-driven solutions and transforming business ideas into digital realities.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-tech-purple/20 flex items-center justify-center transition-colors border border-white/10">
                <Facebook size={18} className="text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-tech-purple/20 flex items-center justify-center transition-colors border border-white/10">
                <Instagram size={18} className="text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-tech-purple/20 flex items-center justify-center transition-colors border border-white/10">
                <Linkedin size={18} className="text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-tech-purple/20 flex items-center justify-center transition-colors border border-white/10">
                <Twitter size={18} className="text-white/80" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-white/60 hover:text-tech-purple transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-tech-purple transition-colors">About Us</a>
              </li>
              <li>
                <a href="#solutions" className="text-white/60 hover:text-tech-purple transition-colors">Solutions</a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-tech-purple transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-tech-purple transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/60 hover:text-tech-purple transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-tech-purple transition-colors">Mobile App Development</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-tech-purple transition-colors">AI Automation</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-tech-purple transition-colors">Jewelry CAD Design</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-tech-purple transition-colors">Billing Software</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="text-tech-purple mr-3" />
                <a href="tel:8652429808" className="text-white/60 hover:text-tech-purple transition-colors">+91 8652429808</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-tech-purple mr-3" />
                <a href="mailto:info@siyajewelsinfotech.com" className="text-white/60 hover:text-tech-purple transition-colors">info@siyajewelsinfotech.com</a>
              </li>
            </ul>
            
            {/* Contact form minimal */}
            <div className="mt-6 bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-sm font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/10 rounded-l-md px-3 py-2 flex-1 text-sm focus:outline-none focus:border-tech-purple/50"
                />
                <button className="bg-tech-purple hover:bg-tech-purple/80 text-white rounded-r-md px-3 text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Siya Jewels Infotech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-tech-purple text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-tech-purple text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-tech-purple text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
