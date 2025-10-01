"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GlobalApi from "../_uitils/GlobalApi";
import { CheckCircle } from "lucide-react";

function Servicespage() {
  const [ServiceData, setServiceData] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    GlobalApi.getServiceData()
      .then((res) => {
        const data = res.data.data;
        console.log(data);

        setServiceData(data);

        // Ensure service_json is an array
        const services = Array.isArray(data[3]?.service_json) ? data[3].service_json : [];

        // Set the first item as default active
        if (services.length > 0) {
          setActive(services[3].id);
        }
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const servicesFromStrapi = Array.isArray(ServiceData[3]?.service_json)
    ? ServiceData[3].service_json
    : [];

  const activeService = servicesFromStrapi.find((s) => s.id === active) || servicesFromStrapi[0] || {};



  const Approach = useMemo(() => {
    const ApproachData = ServiceData.find(
      (item) =>
        item.service_TitleText?.toLowerCase() === "our approach".toLowerCase()
    );
    return ApproachData?.service_json?.approach?.map((v) => v.text) || [];
  }, [ServiceData]);

  const Difference = useMemo(() => {
    const DifferenceData = ServiceData.find(
      (item) =>
        item.service_TitleText?.toLowerCase() === "our difference".toLowerCase()
    );
    return DifferenceData?.service_json?.difference?.map((m) => m.text) || [];
  }, [ServiceData]);

  return (
    <>
      {/* ✅ Hero Section with next/image (LCP optimization) */}
      {ServiceData[2] && (
        <div className="relative w-full h-[550px] sm:h-[500px] md:h-[640px] overflow-hidden">
          <Image
            src={ServiceData[2].service_image?.[0]?.url || "/fallback.webp"}
            alt={ServiceData[2].service_TitleText || "Services"}
             sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
            fill
            priority
            fetchPriority="high"
            className="object-cover  w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-snug"
            >
              {ServiceData[2].service_TitleText || "Services"}
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed"
            >
              {ServiceData[2].service_Description_text ||
                "Description not available."}
            </motion.p>
          </div>
        </div>
      )}

      {/* Services Section */}
      {ServiceData[3] && (
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
              WHAT <span className="text-[#FFAA01]">WE</span> OFFER
              <div className="mt-2 w-20 h-[2px] bg-gray-300 mx-auto"></div>
            </h2>

            {/* Service Tabs */}
            <div className="flex justify-center mb-12">
              <div className="relative grid grid-cols-2 gap-3 sm:flex sm:bg-gray-100 rounded-full p-1 sm:p-2">
                {servicesFromStrapi.map((service) => {
                  const isActive = active === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActive(service.id)}
                      className={`relative px-4 py-2 sm:px-5 sm:py-3 rounded-full font-medium transition-colors ${isActive
                          ? "text-black bg-white shadow-md"
                          : "text-gray-700 hover:text-yellow-500"
                        }`}
                    >
                      <span className="text-yellow-500 text-lg sm:text-xl">
                        {service.icon}
                      </span>{" "}
                      {service.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Service Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {activeService.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {activeService.description}
                </p>
                <ul className="space-y-3">
                  {activeService.points?.map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      ✅ {point}
                    </li>
                  ))}
                </ul>
              </div>

              {activeService.image && (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    width={550}
                    height={400}
                    loading="eager"
                    className="w-[650px] h-[400px] object-cover"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 uppercase">
            why choose <span className="text-[#FFAA01]">our</span> services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[{ title: "OUR APPROACH", items: Approach },
          { title: "OUR DIFFERENCE", items: Difference }].map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
                {section.title}
              </h3>
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
                    <CheckCircle className="text-[#FFAA01] w-6 h-6" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Servicespage;
