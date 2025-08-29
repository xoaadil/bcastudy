import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChevronRight, BookOpen, ArrowLeft, GraduationCap, Hash, Home, Coffee, Target, ArrowRight, AlertCircle } from "lucide-react";

function SemesterSubjects() {
  const { id } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // YOUR ORIGINAL LOGIC - UNCHANGED
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/subjects/${id}`)
      .then((res) => {
        // Sort subjects by code number (101, 102, 103, etc.)
        const sortedSubjects = res.data.subjects.sort((a, b) => {
          // Extract number from code (e.g., "BCA-101" -> 101)
          const getCodeNumber = (code) => {
            if (!code) return 0;
            const match = code.match(/(\d+)$/);
            return match ? parseInt(match[1]) : 0;
          };
          
          return getCodeNumber(a.code) - getCodeNumber(b.code);
        });
        
        setSubjects(sortedSubjects);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load subjects");
      })
      .finally(() => {
        setLoading(false);
      });

    // Trigger animations
    setTimeout(() => setIsVisible(true), 100);
  }, [id]);

  const gradientColors = [
    "from-pink-600 to-purple-800",
    "from-blue-600 to-cyan-800", 
    "from-green-600 to-emerald-800",
    "from-orange-600 to-red-800",
    "from-purple-600 to-indigo-800",
    "from-teal-600 to-blue-800",
    "from-rose-600 to-pink-800",
    "from-indigo-600 to-purple-800"
  ];

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-10 px-4 relative overflow-hidden">
        {/* Same background as Semester page */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-gray-100/30 animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s", animationDuration: '10s' }}
          ></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl flex items-center justify-center shadow-2xl mx-auto animate-pulse">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-xl animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-600 font-medium mb-6">Loading subjects...</p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-purple-700 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-10 px-4 relative overflow-hidden">
        {/* Same background as Semester page */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-red-50/50 via-transparent to-gray-100/30"></div>
        </div>

        <div className="relative z-10 text-center max-w-md mx-auto">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 text-lg mb-8 bg-red-50 p-6 rounded-2xl border border-red-200">{error}</p>
          <Link to="/" className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40">
            <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-4 relative overflow-hidden">
      {/* Same Animated Background as Semesters */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-gray-100/30 animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="subjectBlueWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z" fill="url(#subjectBlueWave)">
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

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-8 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 group-hover:rotate-12">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-black bg-clip-text text-transparent">
              Choose Your Subject
            </h1>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Select a subject to explore comprehensive notes, study materials, and expert resources 
            designed for your academic excellence.
          </p>

          <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {subjects.map((sub, index) => (
            <div
              key={sub._id}
              onClick={() => navigate(`/material/${sub._id}`)}
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]}/10 rounded-2xl lg:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-6 border border-gray-200 hover:border-purple-300 transition-all duration-500 shadow-xl hover:shadow-2xl group-hover:shadow-purple-500/20 h-full">
                
                {/* Subject Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} text-white font-bold rounded-2xl flex items-center justify-center text-lg lg:text-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6 flex-shrink-0`}>
                      <BookOpen className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    {/* Subject Code Badge */}
                    {sub.code && (
                      <div className="bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-1">
                          <Hash className="w-3 h-3 text-gray-500 flex-shrink-0" />
                          <span className="text-xs font-bold text-gray-700 break-words">{sub.code}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300 transform group-hover:translate-x-1 lg:group-hover:translate-x-2">
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>

                {/* Subject Name */}
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2 break-words">
                  {sub.name}
                </h3>
                
                {/* Subject Short Form */}
                {sub.short && (
                  <div className="mb-3">
                    <span className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full text-sm font-medium text-purple-800 border border-purple-200">
                      {sub.short}
                    </span>
                  </div>
                )}
                
                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base line-clamp-2 break-words">
                  Explore comprehensive study materials, notes & expert resources for academic success.
                </p>

                {/* Features Icons - More Compact */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-lg border border-purple-200">
                    <Target className="w-3 h-3 text-purple-600 flex-shrink-0" />
                    <span className="text-xs text-purple-700 font-medium">Expert</span>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg border border-blue-200">
                    <BookOpen className="w-3 h-3 text-blue-600 flex-shrink-0" />
                    <span className="text-xs text-blue-700 font-medium">Notes</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg border border-green-200">
                    <Coffee className="w-3 h-3 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-green-700 font-medium">Fresh</span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center gap-2 text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                  <span className="font-semibold text-sm lg:text-base truncate">Explore Subject</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-4 h-4 lg:w-6 lg:h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-2 h-2 lg:w-3 lg:h-3 bg-gray-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-white backdrop-blur-xl rounded-3xl p-12 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need to go back?
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Return to explore other semesters or visit the main dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate(-1)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-purple-500/40"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Semesters
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <Link 
                to="/"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-gray-500/40"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist Accent Elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-500/30 rounded-full shadow-lg"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-gray-400/20 rounded-full shadow-lg"></div>
      <div className="absolute top-1/2 right-32 w-2 h-2 bg-purple-600/40 rounded-full shadow-lg"></div>
    </div>
  );
}

export default SemesterSubjects;