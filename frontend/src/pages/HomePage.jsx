import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center py-10 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-2xl">🎓</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Smart Learning for BCA Success
            </h1>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access curated study materials, coding resources, and expert advice
            — all ad-free and completely free. Your self-study journey starts
            here.
          </p>

          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Notes/PYQs/Videos Card */}
          <div
            className="group relative cursor-pointer"
            onClick={() => navigate("/semesters")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/25">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">📚</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                Study Materials
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Access comprehensive notes, previous year questions, and video
                lectures for all subjects.
              </p>

              <div className="flex items-center gap-2 text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                <span className="text-sm font-medium">Browse Materials</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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

              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </div>

          {/* Advice Card */}
          <div
            className="group relative cursor-pointer"
            onClick={() => navigate("/advice")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-yellow-500/25">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">🌟</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                Life Advice
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Learn from experiences and mistakes to make better life
                decisions and grow personally.
              </p>

              <div className="flex items-center gap-2 text-yellow-400 group-hover:text-orange-400 transition-colors duration-300">
                <span className="text-sm font-medium">Get Advice</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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

              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </div>

          {/* Coding Card */}
          <div
            className="group relative cursor-pointer"
            onClick={() => navigate("/coding")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">💻</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                Coding
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Master programming languages, algorithms, and development skills
                with hands-on practice.
              </p>

              <div className="flex items-center gap-2 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                <span className="text-sm font-medium">Start Coding</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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

              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Ad-Free Experience
              </h3>
              <p className="text-gray-300 text-sm">
                Focus on learning without distractions. Pure content, no ads.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Completely Free
              </h3>
              <p className="text-gray-300 text-sm">
                All resources available at no cost. Education should be
                accessible.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Curated Content
              </h3>
              <p className="text-gray-300 text-sm">
                Handpicked resources designed specifically for BCA students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
