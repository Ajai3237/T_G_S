'use client';
import React, { useState } from "react";
import {
  FaHeadset,
  FaShieldAlt,
  FaTh,
  FaUserCog,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <FaHeadset className="text-yellow-500 text-3xl" />,
    title: "IT Solutions Staffing & Support",
    description:
      "We provide end-to-end IT solutions tailored to your business needs, helping you stay ahead in a fast-paced digital world. Our expert team specializes in delivering innovative technology strategies, seamless system integration, and round-the-clock support to ensure your operations run smoothly.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-500 text-3xl" />,
    title: "Strong Security",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    icon: <FaTh className="text-yellow-500 text-3xl" />,
    title: "Web Based Applications Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    icon: <FaUserCog className="text-yellow-500 text-3xl" />,
    title: "Infrastructure Solution & Support",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section",
  },
  {
    icon: <FaLaptopCode className="text-yellow-500 text-3xl" />,
    title: "Website Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    icon: <FaGlobe className="text-yellow-500 text-3xl" />,
    title: "Website Hosting",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const visionItems = [
  "Deliver innovative IT solutions and staffing services to fuel business growth and transformation.",
  "Build long-term relationships by consistently exceeding client expectations.",
  "Stay ahead of trends through research, innovation, and adaptability.",
  "Empower businesses with scalable, future-ready technology.",
];

const missionItems = [
  "Provide cost-effective IT solutions that deliver measurable value.",
  "Maintain strong ethical standards in every engagement.",
  "Ensure round-the-clock technical support and service delivery.",
  "Foster innovation and teamwork to exceed client goals.",
];

function Aboutpage() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <>
      {/*  Section */}
      <div
        className="relative w-full h-[640px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/Assets/pexels-vojtech-okenka-127162-392018.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="text-white font-bold text-[55px] font-['Open Sans']"
          >
            About <span className="text-[#FFAA01]">Us</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg text-gray-200 max-w-3xl font-['Roboto'] leading-[30px] tracking-[1.5px]"
          >
            We trust you will find our services useful to your business and we
            are keen to engage with you on challenging assignments that
            contribute to your growth. Our journey started over seven years ago,
            offering basic IT services to SMEs in Kerala.
          </motion.p>
        </div>
      </div>


      {/* Features Section */}
      <section className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">

        <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center"  , marginBottom:'50px'}}>
          WHO WE ARE
          <span style={{ color: "#FFAA01" }}> AND</span>  WHAT WE STAND FOR
        </h2>



        {/* Responsive Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[40%_60%] gap-6">
          {/* Features List (Left) */}
          <motion.div
            className="bg-gray-100 rounded-2xl p-6 shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  onClick={() => setSelectedFeature(feature)}
                  className={`flex items-center justify-between cursor-pointer p-3 rounded-xl transition-all duration-300 ${selectedFeature.title === feature.title
                    ? "bg-yellow-100 border-l-4 border-yellow-500"
                    : "hover:bg-gray-200"
                    }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <span className="font-semibold text-gray-700 text-sm md:text-base font-['Roboto']">
                      {feature.title}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Selected Feature (Right) */}
          <motion.div
            className="bg-gray-100 rounded-2xl p-6 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {selectedFeature.icon}
              <h2 className="text-xl font-bold font-['Roboto'] text-gray-800">
                {selectedFeature.title}
              </h2>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedFeature.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 font-['Roboto'] leading-relaxed"
              >
                {selectedFeature.description}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>


      {/* Vision & Mission */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            VISION <span className="text-[#FFAA01]">AND</span> MISSION
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[{ title: "VISION", items: visionItems }, { title: "MISSION", items: missionItems }].map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-[#FFAA01] w-6 h-6 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Bottom Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] items-stretch">
          <motion.div
            className="overflow-hidden shadow-lg rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/Assets/upscalemedia-transformed (2).jpeg"
              alt="Business Meeting"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 md:p-10 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We trust you will find our services useful to your business and we
              are keen to engage with you on challenging and interesting
              assignments that contribute to your growth. Our journey started
              over seven years ago, as a humble firm offering basic IT services
              to SMEs in Kerala. Today, we provide full-service software
              development, hosting, IT security, automation, and connectivity
              services through our sister concern, Ridhitech India (P) Ltd.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Aboutpage;
