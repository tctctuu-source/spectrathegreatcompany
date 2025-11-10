import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co/8L7gGDQd/untitled-0-5.png"
                alt="Spectra Logo"
                className="w-8 md:w-10 h-8 md:h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gray-900">Spectra</span>
                <span className="text-xs text-gray-600 -mt-0.5">The Great Company</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Transforming education through innovative learning experiences that inspire and engage.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/activities" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Activities</Link></li>
              <li><Link to="/courses" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/learning-app" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Learning App</Link></li>
              <li><Link to="/contact" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/admin" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Learning Areas</h3>
            <ul className="space-y-2">
              <li><span className="text-xs md:text-sm text-muted-foreground">Web Development</span></li>
              <li><span className="text-xs md:text-sm text-muted-foreground">Data Science</span></li>
              <li><span className="text-xs md:text-sm text-muted-foreground">Digital Marketing</span></li>
              <li><span className="text-xs md:text-sm text-muted-foreground">Design & Arts</span></li>
              <li><span className="text-xs md:text-sm text-muted-foreground">Business Skills</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Contact Info</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-muted-foreground break-all">spectrathegreatcompany@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm text-muted-foreground">+91 7619396441</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-muted-foreground">Manglore<br />Jyothi Circle</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            © 2024 Spectra Platform. All rights reserved. | Transforming Education Through Innovation
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="mx-1">|</span>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;