"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head"; // ✅ For meta tags
import GlobalApi from "../_uitils/GlobalApi";

function Careerpage() {
  const [CareerData, setCareerData] = useState([]);

  const getCareerDataList = () => {
    GlobalApi.getCareerData()
      .then((res) => {
        setCareerData(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching category:", err);
      });
  };

  useEffect(() => {
    getCareerDataList();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    }),
  };

  return (
    <>
      {/* ✅ SEO Meta */}
      <Head>
        <title>Build Your Career With Us | Company Name</title>
        <meta
          name="description"
          content="Explore exciting job opportunities and grow your career with our team. Apply now to join a company that values talent and innovation."
        />
      </Head>

      <main>
        {CareerData[0] && (
          <section
            className="relative w-full h-[550px] sm:h-[500px] md:h-[640px] bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: CareerData[1]?.career_image?.[0]?.url
                ? `url(${CareerData[1].career_image[0].url})`
                : "",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative mt-12 z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 pb-20">
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="text-white font-bold 
                text-2xl sm:text-2xl md:text-5xl lg:text-[55px] 
                leading-snug"
              >
                Build Your <span className="text-[#FFAA01]">Career</span> With Us
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 sm:mt-6 text-sm sm:text-sm md:text-lg lg:text-lg 
                text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl 
                leading-relaxed tracking-[1px]"
              >
                {CareerData[0].career_descriptionText}
              </motion.p>
            </div>
          </section>
        )}

        {CareerData[0] && (
          <section className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
            {/* Heading Section */}
            <header className="text-center max-w-2xl mb-10">
              <h2 className="text-[25px] font-bold text-[#333] mb-4">
                JOIN <span className="text-[#FFAA01]">OUR</span> TEAM
              </h2>
              <div className="mt-2 w-20 h-[2px] bg-gray-300 mx-auto"></div>
              <p className="text-gray-500 text-sm md:text-base">
                {CareerData[0].career_descriptionText}
              </p>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-6xl mt-5">
              {/* Jobs List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
                {CareerData[0].career_json.map((job, index) => (
                  <motion.article
                    key={index}
                    className="bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index}
                  >
                    <h3 className="font-bold text-lg mb-4">{job.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {job.description}
                    </p>

                    <motion.a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CareerData[0].career_mail}&su=Job%20Application&body=Hello,%20I%20want%20to%20apply.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FFAA01] text-white text-sm px-4 py-2 rounded-full hover:bg-[#e9a00e] transition inline-flex items-center justify-center"
                      aria-label={`Apply for ${job.title}`}
                    >
                      APPLY NOW
                    </motion.a>
                  </motion.article>
                ))}
              </div>

              {/* Application Form */}
              <motion.aside
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                  className="bg-gray-800 text-white py-2 rounded-full text-sm hover:bg-gray-700"
                >
                  JOIN OUR TEAM
                </motion.button>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#FFAA01]"
                />

                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#FFAA01]"
                />

                <label className="sr-only" htmlFor="post">
                  Post Name
                </label>
                <input
                  id="post"
                  type="text"
                  placeholder="POST NAME"
                  className="w-full bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#FFAA01]"
                />

                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="MESSAGE..."
                  rows="4"
                  className="w-full bg-gray-100 px-4 py-2 rounded-2xl outline-none focus:ring-2 focus:ring-[#FFAA01]"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FFAA01] text-white py-2 rounded-full hover:bg-[#e9a00e] transition"
                >
                  SEND APPLICATION
                </motion.button>
              </motion.aside>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default Careerpage;
