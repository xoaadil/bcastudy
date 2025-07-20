import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  ArrowLeft,
  ExternalLink,
  Code,
  BookOpen,
  Lightbulb,
  Zap,
} from "lucide-react";

export default function Coding() {
  const [coding, setCoding] = useState([]);

  useEffect(() => {
    const fetchCoding = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/coding/`);
        setCoding(res.data.coding);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCoding();
  }, []);

  const gradientColors = [
    "from-violet-500 to-purple-600",
    "from-blue-500 to-cyan-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-red-600",
    "from-indigo-500 to-purple-600",
    "from-pink-500 to-rose-600",
    "from-cyan-500 to-blue-600",
    "from-green-500 to-emerald-600",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-2xl">🌟</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Master Programming & Development
          </h1>
        </div>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
          Build real-world skills with hands-on coding practice.
        </p>
        <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
      </div>

      {/* Advice Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {coding.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer"
          >
            <div key={index} className="group relative cursor-pointer">
              {/* Card Background with Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  gradientColors[index % gradientColors.length]
                } rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25">
                {/* Card Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>

                {/* Interactive Elements */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                        gradientColors[index % gradientColors.length]
                      } animate-pulse`}
                    ></div>

                    <span className="text-gray-400 text-sm group-hover:text-blue-300 transition-colors duration-300">
                      Click here for resources
                    </span>
                  </div>
                  <div className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>{" "}
          </a>
        ))}
      </div>

      {/* Back to Home Link */}
      <div className="relative z-10 mt-16 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors duration-300 font-medium text-lg group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
