import React from 'react';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import logo from "../../dist/assets/logo.svg"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-1 mb-4">
              
              <div className="p-2 bg-gradient-to-br rounded-lg">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
              </div>
              <span className="text-xl font-bold">Verity • Command and Control </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Transforming security operations with proof-first accountability, 
              real-time verification, and comprehensive guard welfare solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors duration-300">Guard App</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors duration-300">HQ Command</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors duration-300">Security & Compliance</a></li>
              <li><a href="#vision" className="text-slate-400 hover:text-white transition-colors duration-300">Roadmap</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="text-slate-400 text-sm">contact@mfi.company</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="text-slate-400 text-sm">+(632) 8364-4365</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span className="text-slate-400 text-sm">Manila, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-400 mb-4 md:mb-0">
<span>© 2025 Verity is a product of {" "}
  <a href="https://mfi.company/" target="_blank" rel="noopener noreferrer" className="text-cyan-400">
     MFI
  </a>. All rights reserved.
</span>

              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Security</a>
            </div>
            
            {/* Compliance Badges */}
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <span className="bg-slate-800 px-2 py-1 rounded">ISO 27001</span>
              <span className="bg-slate-800 px-2 py-1 rounded">SOC 2</span>
              <span className="bg-slate-800 px-2 py-1 rounded">BSP Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;