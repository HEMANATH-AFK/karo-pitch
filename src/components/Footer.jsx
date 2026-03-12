import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/karo_startup_/", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/karo-startup", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://x.com/karo_startup", label: "Twitter" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@karostartup", label: "YouTube" },
  ];

  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Apply", href: "#apply" },
    { name: "Startups", href: "#startups" },
    { name: "Investors", href: "#investors" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                <span className="text-white font-black text-xl">K</span>
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">
                Karo <span className="text-blue-600">Pitch</span>
              </span>
            </div>
            <p className="max-w-md text-slate-500 text-lg leading-relaxed mb-10 font-medium">
              Empowering Bharat's founders by bridging the gap between innovative ideas and institutional capital. Join the movement redefining the Indian startup ecosystem.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -5, backgroundColor: "#2563eb", color: "#ffffff", borderColor: "#2563eb" }}
                  className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-sm"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-[0.2em] text-xs">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-blue-600 transition-colors font-bold text-sm uppercase tracking-wider group flex items-center gap-2">
                    <span className="w-0 h-[2px] bg-blue-600 group-hover:w-4 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-[0.2em] text-xs">Headquarters</h4>
            <ul className="space-y-6 text-slate-500 font-medium">
              <li className="flex flex-col">
                <span className="text-slate-900 font-bold text-sm mb-1 uppercase tracking-tighter">Email Us</span>
                <a href="mailto:info@karostartup.com" className="hover:text-blue-600 transition-colors">info@karostartup.com</a>
              </li>
              <li className="flex flex-col">
                 <span className="text-slate-900 font-bold text-sm mb-1 uppercase tracking-tighter">Location</span>
                 <span>DLF Cyber City, Tower B <br />Gurugram, HR - 122002</span>
              </li>
              <li className="pt-4">
                <span className="px-5 py-2.5 bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] rounded-lg border border-blue-100">
                   #KaroStartup
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Karo Pitch. An initiative by KaroStartup.
          </p>
          <div className="flex gap-10 text-xs font-black text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
