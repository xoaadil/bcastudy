import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div
        className="w-full px-8 py-5 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg fixed top-0 left-0 z-50 cursor-pointer transition-all duration-300 hover:bg-white/15 group"
        onClick={() => navigate("/")}
      >
        <div className="flex items-center gap-4 max-w-7xl mx-auto">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
            <span className="text-2xl">📘</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white tracking-wide drop-shadow-lg">
              BCA STUDY
            </span>
            <span className="text-sm text-purple-200 font-medium -mt-1">
              Your Learning Companion
            </span>
          </div>
        </div>
        
        {/* Modern accent line with gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>

      {/* Page content */}
      <main className="flex-grow relative pt-[88px]">
        {/* Content with glass morphism container */}
        <div className="relative z-10 min-h-full">
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl min-h-[calc(100vh-200px)]">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Footer with glass morphism */}
      <div className="relative z-10 mt-auto">
        <div className="bg-black/20 backdrop-blur-lg border-t border-white/10">
          <Footer />
        </div>
      </div>
    </div>
  );
}