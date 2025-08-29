import { Linkedin, Github, Twitter, Send, Heart, Code, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-gray-800/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute top-8 left-16 w-3 h-3 bg-blue-500/40 rounded-full animate-bounce shadow-lg"></div>
      <div className="absolute bottom-10 right-20 w-4 h-4 bg-gray-400/30 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
      <div className="absolute top-12 right-32 w-2 h-2 bg-blue-600/50 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
      <div className="absolute bottom-12 left-32 w-3 h-3 bg-blue-500/35 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>

      <div className="relative z-10">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/aadil-siddiqui-88a014294/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-white/60 backdrop-blur-xl hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-200 hover:border-blue-300"
            >
              <Linkedin size={24} className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
            <a
              href="https://github.com/xoaadil"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-white/60 backdrop-blur-xl hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-gray-500/20 border border-gray-200 hover:border-gray-400"
            >
              <Github size={24} className="text-gray-800 group-hover:text-black transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
            <a
              href="https://x.com/aaadil2004"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-white/60 backdrop-blur-xl hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-200 hover:border-blue-300"
            >
              <Twitter size={24} className="text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-lg text-gray-600 mb-4 font-medium">
              ❓ Have any questions? Ask me on Telegram:
            </p>
            <a
              href="https://t.me/Sherrrr1111"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 text-lg">@Aadil</span>
              <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600">
          <div className="flex items-center gap-3 text-lg">
            <span>Made with</span>
            <Heart size={20} className="text-red-500 animate-pulse" />
            <span className="text-gray-800 font-bold">by Aadil</span>
            <Code size={20} className="text-blue-600 ml-2" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3 text-lg">
              <Coffee size={20} className="text-blue-600" />
              <span className="font-medium">Fueled by coffee & curiosity</span>
            </div>
            <div className="text-sm text-gray-500 font-medium bg-gray-100/50 px-4 py-2 rounded-xl border border-gray-200">
              © 2025 BCA Study Platform
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}