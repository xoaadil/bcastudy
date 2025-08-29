import { BookOpen, Star, Code, Rocket, Gem, Target, ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // Navigation handler for demo purposes

  const navigate =useNavigate();
  
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-4 relative overflow-hidden">
      {/* Animated Background Pattern */}
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

      {/* Floating Orbs - Minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s", animationDuration: '10s' }}
        ></div>
      </div>

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-8 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:rotate-12">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-black bg-clip-text text-transparent">
              Smart Learning Hub
            </h1>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Your premium destination for BCA success. Access curated study materials, 
            expert coding resources, and personalized guidance — completely ad-free and always free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate("/semesters")}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white font-semibold shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                Explore Materials
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => navigate("/coding")}
              className="group relative px-10 py-5 bg-white border-2 border-gray-200 hover:border-blue-300 rounded-2xl text-gray-800 font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                <Play className="w-5 h-5 text-blue-600" />
                Start Coding Journey
              </span>
            </button>
          </div>

          <div className="mt-16 w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>

        {/* Navigation Cards */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Study Materials Card */}
          <div
            className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            onClick={() => navigate("/semesters")}
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"></div>
            
            <div className="relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-xl hover:shadow-2xl group-hover:shadow-blue-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6">
                <BookOpen className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                Study Materials
              </h3>

              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Comprehensive notes, previous year questions, and curated video lectures 
                for all BCA subjects and semesters.
              </p>

              <div className="flex items-center gap-3 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                <span className="font-semibold text-lg">Browse Collection</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Advice Card */}
          <div
            className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            onClick={() => navigate("/advice")}
            style={{ transform: `translateY(${scrollY * 0.015}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-blue-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"></div>
            
            <div className="relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-gray-400 transition-all duration-500 shadow-xl hover:shadow-2xl group-hover:shadow-gray-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6">
                <Star className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                Expert Guidance
              </h3>

              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Learn from real experiences and proven strategies to make smarter 
                decisions throughout your academic journey.
              </p>

              <div className="flex items-center gap-3 text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                <span className="font-semibold text-lg">Get Insights</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Coding Card */}
          <div
            className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            onClick={() => navigate("/coding")}
            style={{ transform: `translateY(${scrollY * 0.025}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"></div>
            
            <div className="relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-black/30 transition-all duration-500 shadow-xl hover:shadow-2xl group-hover:shadow-black/20">
              <div className="w-24 h-24 bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6">
                <Code className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-black transition-colors duration-300">
                Programming
              </h3>

              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Master programming languages, algorithms, and development skills 
                with hands-on practice and real-world projects.
              </p>

              <div className="flex items-center gap-3 text-black group-hover:text-blue-600 transition-colors duration-300">
                <span className="font-semibold text-lg">Start Learning</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Platform?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="group bg-white rounded-3xl p-10 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:bg-blue-50/50 transform hover:-translate-y-3 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                Ad-Free Experience
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Focus purely on learning without any distractions. Clean interface, 
                premium content experience.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-10 border border-gray-200 hover:border-gray-400 transition-all duration-500 hover:bg-gray-50/50 transform hover:-translate-y-3 shadow-lg hover:shadow-2xl hover:shadow-gray-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-black rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                <Gem className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                Completely Free
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                All premium resources available at zero cost. Quality education 
                should be accessible to everyone.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-10 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:bg-blue-50/30 transform hover:-translate-y-3 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-black rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                Curated Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Handpicked, high-quality resources specifically designed and 
                organized for BCA curriculum success.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-white backdrop-blur-xl rounded-3xl p-16 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Excel in Your BCA Journey?
            </h3>
            <p className="text-gray-600 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their academic performance 
              with our comprehensive learning ecosystem.
            </p>
            <button
              onClick={() => navigate("/semesters")}
              className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-black rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
            >
              <span className="relative z-10 flex items-center gap-4">
                Get Started Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Minimalist Accent Elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500/30 rounded-full shadow-lg"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-gray-400/20 rounded-full shadow-lg"></div>
      <div className="absolute top-1/2 right-32 w-2 h-2 bg-blue-600/40 rounded-full shadow-lg"></div>
    </div>
  );
}