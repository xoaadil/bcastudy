import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MaterialPage() {
  const { id } = useParams();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URL}/api/materials/${id}`
        );
        setMaterials(res.data.Materail); // or res.data.materials if it's a typo
      } catch (err) {
        console.error(err);
      }
    };
    fetchMaterial();
  }, [id]);

  const unitWiseMaterial = {};
  let sixInOne = null;
  let pyq = null;

  materials.forEach((item) => {
    if (item.category === "6in1") {
      sixInOne = item;
      return;
    }

    if (item.category === "pyq") {
      pyq = item;
      return;
    }

    const match = item.title.match(/Unit\s*(\d+)/i);
    const unit = match ? `Unit ${match[1]}` : "Other";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative px-4 py-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-xl">
            <span className="text-lg">📚</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Study Materials
          </h1>
          <p className="text-purple-200 text-base">
            Explore comprehensive resources for your studies
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Unit-wise Material - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
          {Object.entries(unitWiseMaterial).map(([unit, data], index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">
                    {unit.match(/\d+/)?.[0] || "?"}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">{unit}</h2>
              </div>
              
              <div className="space-y-2">
                {/* Typed Notes */}
                <div className="w-full">
                  {data.typed ? (
                    <a
                      href={data.typed.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full px-3 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      <span className="mr-2">🖋️</span>
                      Typed Notes
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full px-3 py-2.5 bg-gray-700/50 text-gray-400 font-medium rounded-lg border border-gray-600/50 text-sm">
                      <span className="mr-2 opacity-50">🖋️</span>
                      Typed Notes
                      <span className="ml-1 text-xs">(Soon)</span>
                    </div>
                  )}
                </div>

                {/* Handwritten Notes */}
                <div className="w-full">
                  {data.handwritten ? (
                    <a
                      href={data.handwritten.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full px-3 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded-lg shadow-md hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      <span className="mr-2">✍️</span>
                      Handwritten
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full px-3 py-2.5 bg-gray-700/50 text-gray-400 font-medium rounded-lg border border-gray-600/50 text-sm">
                      <span className="mr-2 opacity-50">✍️</span>
                      Handwritten
                      <span className="ml-1 text-xs">(Soon)</span>
                    </div>
                  )}
                </div>

                {/* Video Playlist */}
                <div className="w-full">
                  {data.video ? (
                    <a
                      href={data.video.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full px-3 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      <span className="mr-2">▶️</span>
                      Video Playlist
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full px-3 py-2.5 bg-gray-700/50 text-gray-400 font-medium rounded-lg border border-gray-600/50 text-sm">
                      <span className="mr-2 opacity-50">▶️</span>
                      Video Playlist
                      <span className="ml-1 text-xs">(Soon)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extras Section */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur-lg border border-emerald-500/30 rounded-xl p-6 shadow-xl">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-lg">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Extra Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 6-in-1 Notes */}
            <div className="w-full">
              {sixInOne ? (
                <a
                  href={sixInOne.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center w-full px-4 py-5 bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-2xl mb-1">📘</span>
                  <span className="text-base">6-in-1 Notes</span>
                  <span className="text-xs opacity-90 mt-1">Complete Package</span>
                </a>
              ) : (
                <div className="flex flex-col items-center justify-center w-full px-4 py-5 bg-gray-700/50 text-gray-400 font-medium rounded-lg border border-gray-600/50">
                  <span className="text-2xl mb-1 opacity-50">📘</span>
                  <span className="text-base">6-in-1 Notes</span>
                  <span className="text-xs mt-1">(Coming Soon)</span>
                </div>
              )}
            </div>

            {/* PYQs */}
            <div className="w-full">
              {pyq ? (
                <a
                  href={pyq.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center w-full px-4 py-5 bg-gradient-to-br from-amber-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-2xl mb-1">📝</span>
                  <span className="text-base">Previous Year Questions</span>
                  <span className="text-xs opacity-90 mt-1">Practice Papers</span>
                </a>
              ) : (
                <div className="flex flex-col items-center justify-center w-full px-4 py-5 bg-gray-700/50 text-gray-400 font-medium rounded-lg border border-gray-600/50">
                  <span className="text-2xl mb-1 opacity-50">📝</span>
                  <span className="text-base">Previous Year Questions</span>
                  <span className="text-xs mt-1">(Coming Soon)</span>
                </div>
              )}
            </div>

            {/* Syllabus */}
            <div className="w-full">
              <a
                href="https://drive.google.com/your-syllabus-folder-link"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center w-full px-4 py-5 bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl mb-1">📄</span>
                <span className="text-base">Syllabus</span>
                <span className="text-xs opacity-90 mt-1">Course Outline</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialPage;