import { Linkedin, Github, Twitter, Send, Heart, Code, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/20 text-white px-6 py-8 shadow-2xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      
      {/* Floating particles */}
      <div className="absolute top-4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-6 right-16 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-8 right-32 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-8 left-32 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '3s'}}></div>

      <div className="relative z-10">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/aadil-siddiqui-88a014294/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/15"
            >
              <Linkedin size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://github.com/xoaadil"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-gray-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/15"
            >
              <Github size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://x.com/aaadil2004"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-sky-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/15"
            >
              <Twitter size={20} className="text-sky-400 group-hover:text-sky-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-sky-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80 mb-2">
              ❓ Have any questions? Ask me on Telegram:
            </p>
            <a
              href="https://t.me/Sherrrr1111"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>@Aadil</span>
              <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>by Aadil</span>
            <Code size={16} className="text-purple-400 ml-2" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Coffee size={16} className="text-amber-400" />
              <span>Fueled by coffee & curiosity</span>
            </div>
            <div className="text-xs text-white/50">
              © 2025 BCA Study Platform
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}