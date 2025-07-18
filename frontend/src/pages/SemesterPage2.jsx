import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Semesters() {
  const Navigate = useNavigate();
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // YOUR ORIGINAL LOGIC - UNCHANGED
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/semesters`)
      .then((res) => {
        if (res.data && res.data.semesters) {
          setSemesters(res.data.semesters);
        } else {
          setError("No semesters data found");
        }
      })
      .catch((err) => {
        console.error("Error fetching semesters", err);
        setError("Failed to load semesters");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const gradientColors = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500", 
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
    "from-cyan-500 to-blue-500",
    "from-teal-500 to-green-500"
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-300 border-t-purple-600 mx-auto"></div>
            <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 mx-auto"></div>
          </div>
          <p className="mt-6 text-white font-medium animate-pulse">Loading semesters...</p>
          <div className="mt-2 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-red-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="relative mb-6">
            <div className="text-red-400 text-7xl animate-bounce">⚠️</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
          <p className="text-red-300 text-lg mb-6 bg-red-800/30 p-4 rounded-lg border border-red-500/30 backdrop-blur-sm">{error}</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-2xl">📚</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Semester
          </h1>
        </div>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
          Select a semester to explore subjects, notes, and study materials
        </p>
        <div className="mt-8 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </div>

      {/* Semesters Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {semesters.map((sem, index) => (
          <div
            key={sem._id}
            onClick={() => Navigate(`/semester/${sem._id}`)}
            className="group relative cursor-pointer"
          >
            {/* Card Background with Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
            
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/25">
              
              {/* Semester Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} text-white font-bold rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {index + 1}
                </div>
                <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 transform group-hover:translate-x-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Semester Name */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {sem.name}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore subjects, notes & study materials with comprehensive resources
              </p>

              {/* Interactive Elements */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-gray-400 text-sm">Multiple resources available</span>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${gradientColors[index % gradientColors.length]} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors duration-300 font-medium">
                  Click to explore
                </span>
              </div>

              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Link */}
      <div className="relative z-10 mt-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 font-medium text-lg group">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}