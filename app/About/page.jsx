"use client";

import React, { useEffect, useState, useMemo } from "react";
import { FaHeadset, FaShieldAlt, FaTh, FaUserCog, FaLaptopCode, FaGlobe } from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import GlobalApi from "../_uitils/GlobalApi";
import { Inter } from "next/font/google";

// ✅ Optimize font loading
const inter = Inter({ subsets: ["latin"], display: "swap" });

function Aboutpage() {
  const [aboutData, setAboutData] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    GlobalApi.getCategory()
      .then((res) => setAboutData(res.data.data))
      .catch((err) => console.error("Error fetching category:", err));
  }, []);

  const features = useMemo(() => [
    {
      icon: <FaHeadset className="text-yellow-500 text-3xl" />,
      title: aboutData[3]?.About_TitlesText || "Default title",
      description: aboutData[3]?.About_descriptionText || "Default description",
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 text-3xl" />,
      title: aboutData[4]?.About_TitlesText || "Default title",
      description: aboutData[4]?.About_descriptionText || "Default description",
    },
    {
      icon: <FaTh className="text-yellow-500 text-3xl" />,
      title: aboutData[5]?.About_TitlesText || "Default title",
      description: aboutData[5]?.About_descriptionText || "Default description",
    },
    {
      icon: <FaUserCog className="text-yellow-500 text-3xl" />,
      title: aboutData[6]?.About_TitlesText || "Default title",
      description: aboutData[6]?.About_descriptionText || "Default description",
    },
    {
      icon: <FaLaptopCode className="text-yellow-500 text-3xl" />,
      title: aboutData[7]?.About_TitlesText || "Default title",
      description: aboutData[7]?.About_descriptionText || "Default description",
    },
    {
      icon: <FaGlobe className="text-yellow-500 text-3xl" />,
      title: aboutData[11]?.About_TitlesText || "Default title",
      description: aboutData[11]?.About_descriptionText || "Default description",
    },
  ], [aboutData]);

  useEffect(() => {
    if (!selectedFeature && features[0]?.title !== "Default title") {
      setSelectedFeature(features[0]);
    }
  }, [features, selectedFeature]);

  const visionItems = useMemo(() => {
    const visionData = aboutData.find(item => item.About_TitlesText?.toLowerCase() === "vision");
    return visionData?.About_json?.vision?.map(v => v.text) || [];
  }, [aboutData]);

  const missionItems = useMemo(() => {
    const missionData = aboutData.find(item => item.About_TitlesText?.toLowerCase() === "mission");
    return missionData?.About_json?.mission?.map(m => m.text) || [];
  }, [aboutData]);

  return (
    <div className={inter.className}>

      {/* Hero Section */}
      <div className="relative w-full h-[640px] overflow-hidden">
        <Image
          src={aboutData[10]?.image?.[0]?.url || "/fallback.jpg"}
          alt={aboutData[10]?.image?.[0]?.name || "About Us Banner"}
          fill
          // priority // ✅ hero image
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 pt-20">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-snug">
            About <span className="text-[#d48806]">Us</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed tracking-wide">
            {aboutData[1]?.About_descriptionText || "Fallback description text"}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section aria-labelledby="who-we-are" className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
        <h2 id="who-we-are" className="text-2xl font-bold text-gray-800 mb-8">
          WHO WE ARE <span className="text-[#FFAA01]">AND</span> WHAT WE STAND FOR
        </h2>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[40%_60%] gap-6">
          {/* Features List */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedFeature(feature)}
                  className={`flex items-center justify-between cursor-pointer p-3 rounded-xl transition-all duration-300 ${selectedFeature?.title === feature.title ? "bg-yellow-100 border-l-4 border-yellow-600" : "hover:bg-gray-200"}`}
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <span className="font-semibold text-gray-700 text-sm md:text-base">
                      {feature.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Feature */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
            {selectedFeature && (
              <>
                <div className="flex items-center gap-4 mb-4">
                  {selectedFeature.icon}
                  <h2 className="text-xl font-bold text-gray-800">{selectedFeature.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{selectedFeature.description}</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section aria-labelledby="vision-mission" className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 id="vision-mission" className="text-2xl md:text-4xl font-bold text-gray-800">
            VISION <span className="text-[#FFAA01]">AND</span> MISSION
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[{ title: "VISION", items: visionItems }, { title: "MISSION", items: missionItems }].map((section, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#FFAA01] w-6 h-6 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About Bottom Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] items-stretch">
          <div className="overflow-hidden shadow-lg rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
            <Image
              src={aboutData[0]?.image?.[0]?.url || "/fallback.jpg"}
              alt={aboutData[0]?.image?.[0]?.name || "Business Meeting"}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy" // ✅ lazy-load non-hero
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow-lg p-6 md:p-10 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {aboutData[2]?.About_descriptionText || "Fallback description text"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutpage;
