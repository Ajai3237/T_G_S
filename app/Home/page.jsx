
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// --
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faShieldAlt, faThLarge, faClipboardList, faWindowRestore, faGlobe, faCloud } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faHeadset,
  faShieldAlt,
  faThLarge,
  faClipboardList,
  faWindowRestore,
  faGlobe,
  faCloud,
};
// --
import Image from "next/image";
import GlobalApi from "../_uitils/GlobalApi";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';

function Homepage() {


  const [HomeData, setHomeData] = useState([]);
  const [index, setIndex] = useState(0);

  const getHomeDataList = () => {
    GlobalApi.getHomeData()
      .then(res => {
        console.log(res.data.data);
        setHomeData(res.data.data);
      })
      .catch(err => {
        console.error("Error fetching category:", err);
      });
  };


  useEffect(() => {
    getHomeDataList();
  }, []);

  useEffect(() => {
    if (HomeData.length === 0 || !HomeData[8]?.home_json) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HomeData[8].home_json.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [HomeData]);

  // current item
  const current = HomeData[8]?.home_json[index];




  // -------------------------------------home about--------------------------------------------------


  const [openModal, setOpenModal] = useState(null);
  const [animate, setAnimate] = useState(false);


  const openPopup = (service) => {
    setOpenModal(service);
    setTimeout(() => setAnimate(true), 10); // trigger animation
  };

  const closePopup = () => {
    setAnimate(false);
    setTimeout(() => setOpenModal(null), 300); // wait for animation before closing
  };

  // ------------------------Home clients-------------------------------
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // emailjs

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1️⃣ Send Admin Notification
    emailjs.sendForm(
      "service_qsv9qev",     // Your EmailJS service ID
      "template_npa64mq",    // Admin template ID
      form.current,
      "p6Jd-prST7yEl-rIx"    // Your public key
    )
      .then(
        (result) => {
          console.log("Admin email sent:", result.text);
        },
        (error) => {
          console.log("Admin email error:", error.text);
        }
      );

    // 2️⃣ Send Auto-Reply to Client
    emailjs.sendForm(
      "service_qsv9qev",       // Same service ID
      "template_7mh4jy2",    // Your auto-reply template ID
      form.current,
      "p6Jd-prST7yEl-rIx"      // Same public key
    )
      .then(
        (result) => {
          console.log("Auto-reply sent to client:", result.text);
          toast.success("Message sent successfully!");
          e.target.reset(); // Clear the form
        },
        (error) => {
          console.log("Auto-reply error:", error.text);
          toast.error("Failed to send.");
        }
      );
  };



  return (
    <>



      {/* Home */}
      {HomeData[8] && (
        <div className="relative w-screen h-screen overflow-hidden">
          {/* Background Video */}
          <video
            src={HomeData[8].home_media[0].url}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/fallback.jpg"   // lightweight image shown before video loads
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 aspect-video"
            aria-hidden="true"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Centered text */}
          <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
            {current && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Main Heading */}
                <h1
                  className="font-bold text-white drop-shadow-md mt-20 sm:mt-28 
            text-3xl sm:text-4xl md:text-5xl lg:text-[55px] text-balance"
                >
                  <span className="text-white">{current.title1}</span>{" "}
                  <span className="text-[#FFAA01]">{current.title2}</span>
                </h1>

                {/* Subtitle */}
                <p
                  className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg 
            max-w-md sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed"
                >
                  {current.subtitle1}
                </p>

                {/* Button */}
                <div className="mt-8">
                  <motion.a
                    aria-label="Learn more about my work"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="inline-block bg-[#FFAA01]/80 text-white px-6 py-2 
              rounded-full font-bold cursor-pointer shadow-md hover:bg-[#ffaa01]"
                  >
                    LEARN MORE
                  </motion.a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------Home About------------------------------------------------------------------------------ */}

      {/* GET TO KNOW US */}
      {HomeData[7] && (
        <div className="py-16 px-5 bg-[#F3F1EE]">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 className="text-2xl font-bold text-center text-[#333]">
              GET TO <span className="text-[#FFAA01]">KNOW</span> US
            </h2>
            <div className="mt-2 w-20 h-[2px] bg-gray-300 mx-auto"></div>

          </div>

          {/* icons */}
          <div style={{ padding: "60px 20px", backgroundColor: "#F3F1EE" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "30px",
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                {HomeData[7].home_json.map((service) => (
                  <div
                    key={service.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Learn more about ${service.title}`}
                    onClick={() => openPopup(service)}
                    onKeyDown={(e) => e.key === "Enter" && openPopup(service)}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <FontAwesomeIcon
                      className="service-icon"
                      icon={iconMap[service.icon]} // map string -> icon
                      style={{
                        width: 55,
                        height: 55,
                        color: "#FFAA01",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <div
                      style={{
                        fontSize: 13,
                        marginTop: 10,
                        fontFamily: "'Roboto', sans-serif",
                        letterSpacing: "2px",
                      }}
                    >
                      {service.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ---- Modal Popup with Animation ---- */}
            {openModal && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 9999,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                }}
                onClick={closePopup}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "30px",
                    borderRadius: "12px",
                    maxWidth: "500px",
                    width: "90%",
                    textAlign: "center",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    position: "relative",
                    transform: animate ? "scale(1)" : "scale(0.7)",
                    opacity: animate ? 1 : 0,
                    transition: "all 0.3s ease-in-out",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 style={{ marginBottom: "15px" }}>{openModal.title}</h2>
                  <p style={{ fontSize: "15px", color: "#555" }}>
                    {openModal.description}
                  </p>
                  <button
                    onClick={closePopup}
                    style={{
                      marginTop: "20px",
                      background: "#FFAA01",
                      border: "none",
                      padding: "10px 20px",
                      color: "#fff",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}


      {/* Service */}
      {HomeData[0] && (
        <div className="py-16 px-5 bg-[#f9f9f9]">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "650", color: "#333", letterSpacing: '2px' }}>
              {HomeData[0]?.home_titleText}
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              {/* Left Content */}
              <div className="flex-1 p-3 rounded-lg">
                <p className="text-[14px] leading-7 font-roboto text-[#313131] tracking-wider ">
                  {HomeData[0]?.home_description}
                </p>
              </div>

              {/* Right Content */}

              <div className="flex-1 p-5 rounded-lg">
                <div className="flex flex-col gap-4">

                  {/* ASP.NET Bar */}
                  <div className="accordion">
                    <input type="checkbox" id="bar1" hidden />
                    <label htmlFor="bar1" className="accordion-label">
                      <span style={{ color: '#FFAA01', fontSize: '23px' }} className="num">01</span>
                      <span style={{ fontSize: '20px' }} className="title">{HomeData[0].home_json[0].title1}</span>
                      <i className="fa-solid fa-angle-down arrow"></i>
                    </label>
                    <div className="content">
                      <p>{HomeData[0].home_json[0].content1}</p>
                    </div>
                  </div>

                  {/* Android Bar */}
                  <div className="accordion">
                    <input type="checkbox" id="bar2" hidden />
                    <label htmlFor="bar2" className="accordion-label">
                      <span style={{ color: '#FFAA01', fontSize: '23px' }} className="num">02</span>
                      <span style={{ fontSize: '20px' }} className="title">{HomeData[0].home_json[1].title2}</span>
                      <i className="fa-solid fa-angle-down arrow"></i>
                    </label>
                    <div className="content">
                      <p>{HomeData[0].home_json[1].content2}</p>
                    </div>
                  </div>

                  {/* Java Bar */}
                  <div className="accordion">
                    <input type="checkbox" id="bar3" hidden />
                    <label htmlFor="bar3" className="accordion-label">
                      <span style={{ color: '#FFAA01', fontSize: '23px' }} className="num">03</span>
                      <span style={{ fontSize: '20px' }} className="title">{HomeData[0].home_json[2].title3}</span>
                      <i className="fa-solid fa-angle-down arrow"></i>
                    </label>
                    <div className="content">
                      <p>{HomeData[0].home_json[2].content3}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* parallax */}
      {HomeData[1] && (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${HomeData[1].home_media[0].url})`,
            minHeight: "392px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            color: "white",
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            loading:"lazy"
          }}
        >
          <div style={{ maxWidth: "1190px", margin: "0 auto", }}
            className="parallax-content flex-1 p-7"
          >
            {/* Heading from left */}
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                fontSize: "1.875rem", // text-3xl
                fontWeight: "bold",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              {HomeData[1].home_titleText}
            </motion.h2>

            {/* Paragraph from right */}
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                color: "white",
                lineHeight: "1.625rem", // leading-relaxed
              }}
            >
              {HomeData[3].home_description}
            </motion.p>
          </div>
        </div>
      )}

      {/* -----------------------------------------------Home services----------------------------------------------------------------------------------- */}

      {/* WHAT WE DO */}
      {HomeData[2] && (
        <div style={{ padding: "60px 20px", backgroundColor: "#F3F1EE" }}>


          <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: '5px' }}>
            <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
              WHAT
              <span style={{ color: "#FFAA01" }}> WE</span>  DO
            </h2>
            <p style={{
              fontSize: "14px",

              color: "#313131",
              textAlign: "center",
              marginTop: '40px',
              letterSpacing: "1px",

              lineHeight: "1.8",
            }}>
              {HomeData[2].home_description}
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-16 mt-10">

              {/* Card 1 */}
              <motion.div
                className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <h3 className="text-lg font-bold text-gray-800  pb-1">{HomeData[2].home_json[0].title}</h3>
                <p className="text-sm text-gray-600 font-roboto pb-9">
                  {HomeData[2].home_json[0].content}
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <h3 className="text-lg font-bold text-gray-800 pb-2">{HomeData[2].home_json[1].title}</h3>
                <p className="text-sm text-gray-600 ">
                  {HomeData[2].home_json[1].content}
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <h3 className="text-lg font-bold text-gray-800  pb-2">{HomeData[2].home_json[2].title}</h3>
                <p className="text-sm text-gray-600 pb-9">
                  {HomeData[2].home_json[2].content}
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false }}
              >
                <h3 className="text-lg font-bold text-gray-800  pb-2">{HomeData[2].home_json[3].title}</h3>
                <p className="text-sm text-gray-600 ">
                  {HomeData[2].home_json[3].content}
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      )}

      {/* -------------------------------------------Home client------------------------------------------------------------------- */}
      {HomeData[3] && (
        <section className="py-16 bg-[#EAEAEA]">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#333]">
              {HomeData[3].home_titleText.split(" ")[0]}{" "}
              <span className="text-[#FFAA01]">
                {HomeData[3].home_titleText.split(" ")[1]}
              </span>{" "}
              {HomeData[3].home_titleText.split(" ").slice(2).join(" ")}
            </h2>

          </div>

          {/* Scrollable Logos */}
          <div className="relative mt-12">
            {/* Scroll Buttons */}
            <button
              onClick={() => document.getElementById("logoScroll").scrollBy({ left: -300, behavior: "smooth" })}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 text-white p-2 rounded-full"
              aria-label="scroll left"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => document.getElementById("logoScroll").scrollBy({ left: 300, behavior: "smooth" })}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 text-white p-2 rounded-full"
              aria-label="scroll right"
            >
              <ChevronRight size={28} />
            </button>

            <div
              id="logoScroll"
              className="flex gap-7 overflow-x-auto scroll-smooth px-12 pb-5 scrollbar-hide"
            >
              {HomeData[3].home_json.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-28 flex items-center justify-center rounded-xl bg-white/20 border border-white/30 shadow-lg"
                >
                  <img
                    src={item.imageUrl}
                    alt={`Partner ${index + 1}`}
                    className="max-h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="max-w-[1200px] mx-auto mt-10 text-center">
            <p className="text-sm text-[#313131] leading-7 tracking-wide">
              {HomeData[3].home_description}
            </p>
          </div>
        </section>
      )}

      {/* Parallax2 partner */}
      {HomeData[4] && (
        <div
          className="parallax2"
          style={{
            backgroundImage: ` url(${HomeData[4].home_media[0].url})`,
            minHeight: "392px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            color: "white",
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            loading:"lazy"
          }}
        >
          <div style={{ maxWidth: "1190px", margin: "0 auto" }} className="parallax-content2 flex-1 p-7">
            <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "10px" }}>
              {/* Heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                style={{
                  fontSize: "29px",
                  fontWeight: "bold",
                  color: "#FFF",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                TECHNOLOGY
                <span style={{ color: "#FFAA01" }}> PARTNER</span>
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                style={{
                  fontSize: "14px",
                  color: "#FFF",
                  textAlign: "center",
                  letterSpacing: "1px",
                  lineHeight: "1.8",
                  paddingBottom: "60px",
                }}
              >
                {HomeData[4].home_description}
              </motion.p>

              {/* Cards */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginBottom: "50px",
                  gap: "20px",
                }}
              >
                {HomeData[4].home_json.map((card, i) => (
                  <motion.div
                    className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg"
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      borderRadius: "10px",
                      padding: "20px",
                      width: "200px",
                      textAlign: "center",
                    }}
                  >
                    <motion.img
                      src={card.imageUrl}
                      
                      alt={`${card.title || "Technology Partner"} logo`}   // ✅ add alt
                      style={{ width: "100px", height: "100px", objectFit: "contain", margin: "0 auto 15px auto", loading:"lazy" }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: false }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>


      )}

      {/* web Apppication */}
      {HomeData[5] && (
        <div style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "34px", fontWeight: "600", color: "#333", letterSpacing: '2px' }}>
              {HomeData[5].home_titleText}
            </h2>

            <div className="flex flex-col lg:flex-row gap-9 mt-10">
              {/* Left Content */}
              <div className="flex-1 p-3 rounded-lg">
                <p className="text-[14px] leading-7  text-[#313131] tracking-wider ">
                  {HomeData[5].home_description}
                </p>
              </div>

              {/* Right Content */}

              <div className="flex-1 p-5 rounded-lg">
                <div className="flex flex-col gap-4">
                  <img src={`${HomeData[5].home_media[0].url}`} alt="Web Application Demo" />

                </div>
              </div>
            </div>
          </div>



          {/* Graph Representation */}

          <div className="w-full max-w-2xl mx-auto space-y-6 mt-11">

            {HomeData[5].home_json.map((skill, i) => (
              <div key={i} className="flex items-center gap-4">
                {/* Left side image */}
                <Image
                  src={skill.img}
                  alt={`${skill.name || "skill"} logo`}  // ✅ alt added
                  width={40}
                  height={40}
                  loading="lazy"
                />

                {/* Progress bar */}
                <div className="flex-1 relative">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-yellow-400 h-4 rounded-full transition-all duration-700"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>

                  {/* Percentage (top-right) */}
                  <span className="absolute right-2 top-[-22px] text-sm font-bold text-gray-700">
                    {skill.value}%
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      )}
      {/* ------------------------------------------Home contact---------------------------------------------------- */}
      {HomeData[6] && (
        <div
          style={{
            backgroundImage: `url(${HomeData[6].home_media[0].url})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", width: "100%",
            position: "relative",loading:"lazy"
          }} >
          {/* Overlay */}
          <div
            style={{ backgroundColor: "rgba(87, 58, 22, 0.3)", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }} />


          <div
            style={{
              position: "relative", zIndex: 2, textAlign: "center", width: "100%", maxWidth: "1200px", margin: "0 auto",
              padding: "60px 20px",
            }} >
            <h2
              style={{ fontSize: "25px", fontWeight: "bold", color: "#FFFF", marginBottom: "20px", }} >
              CONTACT US
              <span style={{ color: "#FFAA01" }}> FOR ANY</span> ENQUIRIES
            </h2>

            <p
              style={{
                fontSize: "14px", color: "#FFFF", letterSpacing: "1px", lineHeight: "1.8",
                margin: 0,
              }}>
              {HomeData[6].home_description}
            </p>

            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div className="flex flex-col lg:flex-row gap-9 mt-10">
                {/* Left Content */}
                <div className="flex-1 p-3 rounded-lg">
                  <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <h2
                      style={{ display: "flex", alignItems: "center", gap: "15px", fontSize: "16px", color: "#FFFF", }}>
                      <i className="fa-solid fa-envelope" style={{ color: "#DA9E27" }}></i>
                      {HomeData[6].home_json.email}
                    </h2>

                    <h2
                      style={{
                        display: "flex", alignItems: "center", gap: "15px", fontSize: "16px",
                        color: "#FFFF",
                      }} >
                      <i className="fa-solid fa-phone" style={{ color: "#DA9E27" }}></i>
                      {HomeData[6].home_json.phone}
                    </h2>

                    <h2
                      style={{
                        display: "flex", alignItems: "center", gap: "15px", fontSize: "16px",
                        color: "#FFFF",
                      }} >
                      <i className="fa-solid fa-location-dot" style={{ color: "#DA9E27" }}></i>
                      {HomeData[6].home_json.locations}
                    </h2>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 p-5 rounded-lg">
                  <div className="bg-white/20 rounded-xl p-6 flex flex-col space-y-4">
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="from_name"           // Matches template variable in EmailJS
                          placeholder="Name"
                          className="w-full p-3 rounded-lg bg-white/70 outline-none"
                          required
                        />
                        <input
                          type="text"
                          name="subject"             // Matches template variable in EmailJS
                          placeholder="Subject"
                          className="w-full p-3 rounded-lg bg-white/70 outline-none"
                          required
                        />
                      </div>

                      <input
                        type="email"
                        name="reply_to"             // Matches template variable in EmailJS
                        placeholder="Email"
                        className="w-full p-3 rounded-lg bg-white/70 outline-none"
                        required
                      />

                      <textarea
                        name="message"             // Matches template variable in EmailJS
                        placeholder="Message"
                        rows={5}
                        className="w-full p-3 rounded-lg bg-white/70 outline-none resize-none"
                        required
                      ></textarea>

                      <button
                        type="submit"
                        className="w-fit px-6 py-2 rounded-full bg-orange-400 text-white font-semibold hover:scale-105 transition flex"
                      >
                        Send Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />

    </>
  )
}

export default Homepage