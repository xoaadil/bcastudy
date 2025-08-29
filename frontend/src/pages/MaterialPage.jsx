import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BookOpen, ArrowLeft, Home, FileText, Video, PenTool, Hash, GraduationCap, Target, Coffee, ArrowRight, AlertCircle } from "lucide-react";

function MaterialPage() {
  const { id } = useParams();
  const [materials, setMaterials] = useState([]);
  const [subject, setSubject] = useState(null);
  const [semester, setSemester] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // YOUR ORIGINAL LOGIC - UNCHANGED
  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URL}/api/materials/${id}`
        );
        setMaterials(res.data.Materail); // or res.data.materials if it's a typo
      } catch (err) {
        console.error(err);
        setError("Failed to load materials");
      }
    };

     const fetchSubject = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/subjects/single/${id}`);
        setSubject(res.data.subject);
        setSemester(res.data.semester);
      } catch (err) {
        console.error(err);
        setError("Failed to load subject details");
      } finally {
        setLoading(false);
      }
    };

    fetchMaterial();
    fetchSubject();

    // Trigger animations
    setTimeout(() => setIsVisible(true), 100);
  }, [id]);

  console.log(semester);

  const syllabusLinks = {
    "Semester 1":
      "https://drive.google.com/file/d/1BWg1IJyuz4idRKjDeo9kXUwfuy5lCNqg/view?usp=sharing",
    "Semester 2":
      "https://drive.google.com/file/d/1uJHJLeSwu5V-n1IoJDHeAvoRB-69TigY/view?usp=sharing",
    "Semester 3":
      "https://drive.google.com/file/d/14Qa7eUcve-8iTbM33eNIfXSUs-6IOSmu/view?usp=sharing",
    "Semester 4":
      "https://drive.google.com/file/d/1puR9_D2Juf0h9WI7B34td7tjCHHU_2Vf/view?usp=sharing",
    "Semester 5":
      "https://drive.google.com/file/d/1uFIEQxgBx24MfaEaaNvRzzxpaWjozZ7V/view?usp=sharing",
    "Semester 6":
      "https://drive.google.com/file/d/1BvSfJehJ7j9t0XNyxtNa-kZ5ntJyqi4Y/view?usp=sharing",
  };

  const syllabusLink = semester?.name ? syllabusLinks[semester.name] : null;

  const unitWiseMaterial = {};
  let sixInOne = null;
  let pyq = null;

  // Roman numeral to number mapping
  const romanToNumber = {
    I: "1",
    II: "2",
    III: "3",
    IV: "4",
    V: "5",
    VI: "6",
    VII: "7",
    VIII: "8",
    IX: "9",
    X: "10",
  };

  materials.forEach((item) => {
    if (item.category === "6in1") {
      sixInOne = item;
      return;
    }

    if (item.category === "pyq") {
      pyq = item;
      return;
    }

    // Look for UNIT-I, UNIT-II, etc. pattern
    const match = item.title.match(/UNIT[-\s]*([IVX]+)/i);
    let unit = "Other";

    if (match) {
      const romanNumeral = match[1].toUpperCase();
      const arabicNumber = romanToNumber[romanNumeral];
      unit = arabicNumber ? `Unit ${arabicNumber}` : "Other";
    }

    if (!unitWiseMaterial[unit]) {
      unitWiseMaterial[unit] = { typed: null, handwritten: null, video: null };
    }

    if (item.category === "notes") {
      if (item.subtype === "typed") {
        unitWiseMaterial[unit].typed = item;
      } else if (item.subtype === "handwritten") {
        unitWiseMaterial[unit].handwritten = item;
      }
    } else if (item.category === "video") {
      unitWiseMaterial[unit].video = item;
    }
  });

  const unitGradients = [
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
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl flex items-center justify-center shadow-2xl mx-auto animate-pulse">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-xl animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-600 font-medium mb-6">Loading materials...</p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-green-700 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
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
            <linearGradient id="materialBlueWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z" fill="url(#materialBlueWave)">
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-green-500/30 transition-all duration-500 group-hover:rotate-12">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-900 to-black bg-clip-text text-transparent">
                {subject ? subject.name : "Study Materials"}
              </h1>
              {subject && (
                <div className="flex items-center gap-3 mt-2">
                  {subject.code && (
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg">
                      <Hash className="w-3 h-3 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{subject.code}</span>
                    </div>
                  )}
                  {subject.short && (
                    <div className="bg-green-100 px-3 py-1 rounded-lg border border-green-200">
                      <span className="text-sm font-medium text-green-700">{subject.short}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Access comprehensive study materials, notes, and resources organized by units 
            for effective learning and exam preparation.
          </p>

          <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>
        </div>

        {/* Unit-wise Materials Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {Object.entries(unitWiseMaterial).map(([unit, data], index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${unitGradients[index % unitGradients.length]}/10 rounded-2xl lg:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-6 border border-gray-200 hover:border-green-300 transition-all duration-500 shadow-xl hover:shadow-2xl group-hover:shadow-green-500/20 h-full">
                
                {/* Unit Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${unitGradients[index % unitGradients.length]} text-white font-bold rounded-2xl flex items-center justify-center text-lg lg:text-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6 flex-shrink-0`}>
                    {unit.match(/\d+/)?.[0] || "?"}
                  </div>
                  <div className="text-green-600 group-hover:text-green-700 transition-colors duration-300">
                    <Target className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>

                {/* Unit Name */}
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 group-hover:text-green-700 transition-colors duration-300">
                  {unit}
                </h3>

                {/* Material Types */}
                <div className="space-y-3 mb-4">
                  {/* Typed Notes */}
                  {data.typed ? (
                    <a
                      href={data.typed.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <PenTool className="w-4 h-4 flex-shrink-0" />
                      <span>Typed Notes</span>
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 w-full px-4 py-3 bg-gray-100 text-gray-500 font-medium rounded-xl border border-gray-200">
                      <PenTool className="w-4 h-4 flex-shrink-0 opacity-50" />
                      <span>Typed Notes</span>
                      <span className="ml-auto text-xs">(Soon)</span>
                    </div>
                  )}

                  {/* Handwritten Notes */}
                  {data.handwritten ? (
                    <a
                      href={data.handwritten.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded-xl shadow-md hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <BookOpen className="w-4 h-4 flex-shrink-0" />
                      <span>Handwritten</span>
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 w-full px-4 py-3 bg-gray-100 text-gray-500 font-medium rounded-xl border border-gray-200">
                      <BookOpen className="w-4 h-4 flex-shrink-0 opacity-50" />
                      <span>Handwritten</span>
                      <span className="ml-auto text-xs">(Soon)</span>
                    </div>
                  )}

                  {/* Video Playlist */}
                  {data.video ? (
                    <a
                      href={data.video.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Video className="w-4 h-4 flex-shrink-0" />
                      <span>Video Playlist</span>
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 w-full px-4 py-3 bg-gray-100 text-gray-500 font-medium rounded-xl border border-gray-200">
                      <Video className="w-4 h-4 flex-shrink-0 opacity-50" />
                      <span>Video Playlist</span>
                      <span className="ml-auto text-xs">(Soon)</span>
                    </div>
                  )}
                </div>

                {/* Progress Indicator */}
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                  <div 
                    className={`h-2 bg-gradient-to-r ${unitGradients[index % unitGradients.length]} rounded-full transition-all duration-500`}
                    style={{ 
                      width: `${[data.typed, data.handwritten, data.video].filter(Boolean).length * 33.33}%` 
                    }}
                  ></div>
                </div>

                {/* Features Icons */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg border border-green-200">
                    <Target className="w-3 h-3 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-green-700 font-medium">Curated</span>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg border border-blue-200">
                    <BookOpen className="w-3 h-3 text-blue-600 flex-shrink-0" />
                    <span className="text-xs text-blue-700 font-medium">Complete</span>
                  </div>
                  <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-lg border border-purple-200">
                    <Coffee className="w-3 h-3 text-purple-600 flex-shrink-0" />
                    <span className="text-xs text-purple-700 font-medium">Fresh</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-2 h-2 lg:w-3 lg:h-3 bg-gray-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Resources Section */}
        <div className={`mb-12 lg:mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-white backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-2xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Extra Resources</h2>
              <p className="text-gray-600">Additional materials to boost your preparation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* 6-in-1 Notes */}
              {sixInOne ? (
                <a
                  href={sixInOne.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">6-in-1 Notes</h3>
                    <p className="text-emerald-100 text-sm">Complete Package</p>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </a>
              ) : (
                <div className="bg-gray-100 text-gray-500 p-6 rounded-2xl border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">6-in-1 Notes</h3>
                  <p className="text-gray-400 text-sm">(Coming Soon)</p>
                </div>
              )}

              {/* Previous Year Questions */}
              {pyq ? (
                <a
                  href={pyq.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Previous Year Questions</h3>
                    <p className="text-amber-100 text-sm">Practice Papers</p>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </a>
              ) : (
                <div className="bg-gray-100 text-gray-500 p-6 rounded-2xl border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Previous Year Questions</h3>
                  <p className="text-gray-400 text-sm">(Coming Soon)</p>
                </div>
              )}

              {/* Syllabus */}
              {syllabusLink ? (
                <a
                  href={syllabusLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Syllabus</h3>
                    <p className="text-purple-100 text-sm">Course Outline</p>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </a>
              ) : (
                <div className="bg-gray-100 text-gray-500 p-6 rounded-2xl border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Syllabus</h3>
                  <p className="text-gray-400 text-sm">(Not Available)</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-white backdrop-blur-xl rounded-3xl p-12 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need to go back?
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Return to explore other subjects or visit the main dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.history.back()}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-green-500/40"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Subjects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <div className="absolute top-20 right-20 w-3 h-3 bg-green-500/30 rounded-full shadow-lg"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-gray-400/20 rounded-full shadow-lg"></div>
      <div className="absolute top-1/2 right-32 w-2 h-2 bg-green-600/40 rounded-full shadow-lg"></div>
    </div>
  );
}

export default MaterialPage;