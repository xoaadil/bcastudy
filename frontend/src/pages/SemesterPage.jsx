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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 mx-auto"></div>
            <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 mx-auto"></div>
          </div>
          <p className="mt-6 text-gray-700 font-medium animate-pulse">Loading semesters...</p>
          <div className="mt-2 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="relative mb-6">
            <div className="text-red-500 text-7xl animate-bounce">⚠️</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-red-600 text-lg mb-6 bg-red-50 p-4 rounded-lg border border-red-200">{error}</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
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
    <div className="w-full min-h-screen bg-gradient-to-br from-violet-100 via-indigo-100 to-blue-200 px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-xl">📚</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pl-[-4]">
            Choose Your Semester
          </h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Select a semester to explore subjects, notes, and study materials
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
      </div>

      {/* Semesters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {semesters.map((sem, index) => (
          <button
            key={sem._id}
            onClick={() => Navigate(`/semester/${sem._id}`)}
            className="group relative p-6 text-left rounded-2xl bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/60 backdrop-blur-sm border border-blue-200/30 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {index + 1}
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div className="text-indigo-500 group-hover:text-purple-500 transition-colors duration-300 transform group-hover:translate-x-1">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                {sem.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Explore subjects, notes & study materials
              </p>

              {/* Progress indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-indigo-500 transition-colors duration-300">
                  Click to explore
                </span>
              </div>
            </div>

            {/* Hover border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 transition-colors duration-300"></div>
          </button>
        ))}
      </div>

     
    </div>
  );
}