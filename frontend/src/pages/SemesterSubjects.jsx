import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChevronRight, BookOpen, ArrowLeft, GraduationCap } from "lucide-react";

function SemesterSubjects() {
  const { id } = useParams();
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/subjects/${id}`)
      .then((res) => setSubjects(res.data.subjects))
      .catch((err) => console.log(err));
  }, [id]);

  const colorVariants = [
    "from-pink-500 to-purple-600",
    "from-blue-500 to-cyan-600", 
    "from-green-500 to-emerald-600",
    "from-orange-500 to-red-600",
    "from-purple-500 to-indigo-600",
    "from-teal-500 to-blue-600",
    "from-rose-500 to-pink-600",
    "from-indigo-500 to-purple-600"
  ];

  const iconVariants = [
    "bg-pink-500/20 text-pink-300",
    "bg-blue-500/20 text-blue-300",
    "bg-green-500/20 text-green-300",
    "bg-orange-500/20 text-orange-300",
    "bg-purple-500/20 text-purple-300",
    "bg-teal-500/20 text-teal-300",
    "bg-rose-500/20 text-rose-300",
    "bg-indigo-500/20 text-indigo-300"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Subject
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Select a subject to explore notes, materials, and comprehensive study resources
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {subjects.map((sub, index) => (
            <div
              key={sub._id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => navigate(`/material/${sub._id}`)}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorVariants[index % colorVariants.length]} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                
                {/* Subject Icon */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconVariants[index % iconVariants.length]} group-hover:scale-110 transition-transform duration-300`}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Subject Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {sub.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  Explore comprehensive study materials and resources
                </p>

                {/* Resource indicators */}
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-400 ml-2">Multiple resources available</span>
                </div>

                {/* Progress bar */}
                <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 bg-gradient-to-r ${colorVariants[index % colorVariants.length]} rounded-full transition-all duration-500 group-hover:w-full`}
                    style={{ width: `${Math.floor(Math.random() * 60) + 40}%` }}
                  ></div>
                </div>
                
                {/* Click to explore */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    Click to explore
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default SemesterSubjects;