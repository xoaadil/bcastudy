import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import Footer from "./Footer";

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Animated Background Pattern - matching HomePage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-gray-100/30 animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="blueWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z" fill="url(#blueWave)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -10,0; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s", animationDuration: '10s' }}
        ></div>
      </div>

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400/60 rounded-full animate-bounce`}
            style={{
              top: `${15 + (i * 12)}%`,
              left: `${8 + (i * 14)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 2)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Modern Header */}
      <div
        className="w-full px-6 py-4 fixed top-0 left-0 z-50 cursor-pointer transition-all duration-500 group"
        onClick={() => navigate("/")}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-gray-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        <div className="relative flex items-center gap-4 max-w-7xl mx-auto">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-black bg-clip-text text-transparent">
              BCA STUDY
            </span>
            <span className="text-xs text-gray-500 font-medium -mt-0.5">
              Your Learning Companion
            </span>
          </div>
        </div>
        
        {/* Modern accent line with gradient */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      {/* Page content */}
      <main className="flex-grow relative pt-[86px]">
        <div className="relative z-10 min-h-full">
          <div className="w-full">
            <div className="bg-white/60 backdrop-blur-xl shadow-2xl min-h-[calc(100vh-180px)] rounded-t-3xl mx-4 mt-4 border border-gray-200/50 hover:shadow-blue-500/10 transition-all duration-500">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10 mt-auto">
        <div className="bg-white/60 backdrop-blur-xl border-t border-gray-200/50 mx-4 rounded-b-3xl shadow-2xl">
          <Footer />
        </div>
      </div>

      {/* Enhanced decorative elements matching HomePage */}
      <div className="absolute top-24 right-10 w-3 h-3 bg-blue-500/30 rounded-full shadow-lg"></div>
      <div className="absolute bottom-32 left-10 w-4 h-4 bg-gray-400/20 rounded-full shadow-lg"></div>
      <div className="absolute top-1/2 right-32 w-2 h-2 bg-blue-600/40 rounded-full shadow-lg"></div>
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-blue-500/30 rounded-full animate-pulse shadow-lg"></div>
    </div>
  );
}