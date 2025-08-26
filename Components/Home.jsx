"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Home() {
  const headlines = [
    {
      title1: "IT Solutions Staffing",
      title2: "& Support",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    },
    {
      title1: "Strong ",
      title2: "Security",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    },
    {
      title1: "Web Based Applications ",
      title2: "Development",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    },
    {
      title1: "Infrastructure Solution ",
      title2: "& Support",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    },
    {
      title1: "Website ",
      title2: "Development",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    },
    {
      title1: "Datacentre ",
      title2: "Solutions",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    }
    ,
    {
      title1: "Digital ",
      title2: "Marketing",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    },
    {
      title1: "SEO & ",
      title2: "SEM",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    },
    {
      title1: "Content ",
      title2: "Management",
      subtitle1:
        "We build modern, responsive, and high-performing websites tailored to your business needs. Our development process ensures that your site is not only visually appealing but also fast, secure, and user-friendly across all devices.",
    }
  ];

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [headlines.length]);

  const current = headlines[index];

  // Handlers for arrows
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + headlines.length) % headlines.length);
  };
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % headlines.length);
  };

  return (
    <div
      style={{
        width: "100%", height: "750px", position: "relative", backgroundImage: "url('/Assets/pexels-jakubzerdzicki-16071270.jpg')", backgroundSize: "cover",
        backgroundPosition: "center", overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", }}></div>

      {/* Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ x: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(0,0,0,0.4)", border: "none", borderRadius: "50%",
          padding: "10px", cursor: "pointer", color: "white"
        }}>
        <ChevronLeft size={28} />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={nextSlide}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(0,0,0,0.4)", border: "none", borderRadius: "50%",
          padding: "10px", cursor: "pointer", color: "white",
        }}
      >
        <ChevronRight size={28} />
      </motion.button>



      {/* Centered text */}
      <div
        style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center", }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <h1
              style={{
                fontSize: "55px", fontWeight: "bolder", fontFamily: "'Open Sans', sans-serif", color: "white", textAlign: "center", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                marginTop: "110px",
              }} >
              <span style={{ color: "white" }}>{current.title1}</span>{" "}
              <span style={{ color: "#FFAA01" }}>{current.title2}</span>
            </h1>

            {/* Subtitle */}
            <div
              style={{ textAlign: "center", lineHeight: "22px", color: "rgba(255, 255, 255, 0.65)", maxWidth: "600px", margin: "0 auto", }}>
              <span
                style={{ fontSize: "16px", fontFamily: "'Roboto', sans-serif", }}>
                {current.subtitle1}
              </span>
            </div>

            {/* Button */}
            <div style={{ marginTop: "40px" }}>
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  backgroundColor: "rgba(255, 170, 1, 0.7)", color: "white", padding: "10px 20px", borderRadius: "20px", textDecoration: "none", fontWeight: "bold",
                  textAlign: "center", cursor: "pointer",
                }} >
                LEARN MORE
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Home;
