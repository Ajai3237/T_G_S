
import React from 'react'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// --
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faShieldAlt, faThLarge, faClipboardList, faWindowRestore, faGlobe, faCloud } from '@fortawesome/free-solid-svg-icons'
// --
import Image from "next/image";
// --


function Homepage() {
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

  // -------------------------------------home about--------------------------------------------------


  const [openModal, setOpenModal] = useState(null);
  const [animate, setAnimate] = useState(false);

  const services = [
    {
      id: 1,
      icon: faHeadset,
      title: "IT Solutions Staffing & Support",
      description:
        "We provide complete IT staffing and support solutions, ensuring your business runs smoothly with expert assistance.",
    },
    {
      id: 2,
      icon: faShieldAlt,
      title: "Strong Security",
      description:
        "Advanced cybersecurity measures to protect your digital assets and sensitive data from modern threats.",
    },
    {
      id: 3,
      icon: faThLarge,
      title: "Web Based Applications Development",
      description:
        "Custom web applications tailored to your business needs, with a focus on performance and scalability.",
    },
    {
      id: 4,
      icon: faClipboardList,
      title: "Infrastructure Solution & Support",
      description:
        "Complete infrastructure setup, monitoring, and support to keep your IT environment reliable and secure.",
    },
    {
      id: 5,
      icon: faWindowRestore,
      title: "Website Development",
      description:
        "Professional website design and development to enhance your brand presence and engage your customers.",
    },
    {
      id: 6,
      icon: faGlobe,
      title: "Website Hosting",
      description:
        "Reliable and secure web hosting solutions with 24/7 uptime monitoring and customer support.",
    },
    {
      id: 7,
      icon: faCloud,
      title: "Datacentre Solutions",
      description:
        "End-to-end datacentre management including cloud migration, server setup, and data security.",
    }, {
      id: 8,
      icon: faHeadset,
      title: "IT Solutions Staffing & Support",
      description:
        "We provide complete IT staffing and support solutions, ensuring your business runs smoothly with expert assistance.",
    }
  ];

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
  const cards = [
    { img: "/Assets/Airtel-Emblem.png" },
    { img: "/Assets/images__1_-removebg-preview.png" },
    { img: "/Assets/images__2_-removebg-preview.png" },
    { img: "/Assets/images-removebg-preview.png" },
    { img: "/Assets/download-removebg-preview.png" },
  ];

  // graph 

  const skills = [
    { value: 100, img: "/Assets/node_js-5dc52d652505be912bd2f11ab10af482605cbf9bbd5d9ab4178a64490f69f929.png" },
    { value: 90, img: "/Assets/css-CfW5UZaa.png" },
    { value: 75, img: "/Assets/images (3).png" },
    { value: 70, img: "/Assets/python.png" },
    { value: 75, img: "/Assets/images__4_-removebg-preview.png" },
  ];



  return (
    <>
      {/* Home */}

      <div style={{ width: "100%", height: "820px", position: "relative", overflow: "hidden", }}>
        <video src="/Assets/tgs_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: -1, }} />

        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", }}></div>

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

      {/* -----------------------------------------Home About------------------------------------------------------------------------- */}

      {/* GET TO KNOW US */}
      <div style={{ padding: "60px 20px", backgroundColor: "#F3F1EE" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
            GET TO
            <span style={{ color: "#FFAA01" }}> KNOW</span>  US
            <div className="mt-2 w-20 h-[2px] bg-gray-300 mx-auto"></div>
          </h2>

        </div>

        {/* icons */}
        <div style={{ padding: "60px 20px", backgroundColor: "#F3F1EE" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", textAlign: "center", paddingTop: "20px", }}
            >
              {services.map((service) => (
                <div key={service.id}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", }}
                  onClick={() => openPopup(service)}>
                  <FontAwesomeIcon className="service-icon" icon={service.icon}
                    style={{ width: 55, height: 55, color: "#FFAA01", transition: "transform 0.3s ease" }} />
                  <div style={{ fontSize: 13, marginTop: 10, fontFamily: "'Roboto', sans-serif", letterSpacing: "2px", }} >
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Modal Popup with Animation ---- */}
          {openModal && (
            <div style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center",
              alignItems: "center", zIndex: 9999, background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
              onClick={closePopup}
            >
              <div style={{
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
                <button onClick={closePopup} style={{
                  marginTop: "20px", background: "#FFAA01", border: "none", padding: "10px 20px", color: "#fff", borderRadius: "8px",
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



      {/* Service */}
      <div style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: "600", fontFamily: "'Roboto', sans-serif", color: "#333", letterSpacing: '2px' }}>
            "Mobility Services & <br /> Application Integration"
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 mt-10">
            {/* Left Content */}
            <div className="flex-1 p-3 rounded-lg">
              <p className="text-[13px] leading-7 font-roboto text-[#313131] tracking-wider uppercase">
                TGS has the unique expertise in mobile development for multiple technologies to create powerful native and mobile web apps for popular mobile platforms including Android, iPhone, iPad and Windows Mobile Phone. Our expertise includes designing and building of real-time apps, mobile web utility products
                that go well together with your business needs allowing instant messaging, e-mailing and mobile accessibility to vital business operational areas. Sometimes different applications need to work in unison with the business flow to meet compliance or data needs. We develop middleware to enable integration of systems and applications across the enterprise apart from facilitating flexible customized applications and business process integration (BPI) solutions to synchronize your databases to avoid data inefficiencies, multiple occurrences of same process or less straightforward business processes resulting in higher costs.
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
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '20px' }} className="title">ASP.NET</span>
                    <i className="fa-solid fa-angle-down arrow"></i>
                  </label>
                  <div className="content">
                    <p>The exceptional problem-solving skills of our .NET programmers allow us to tackle all kinds of customer business challenges. Over the last 10 years our team is dedicated in building high-performing, scalable, high-volume, concurrent, low-latency business applications using Microsoft.
                      Net platform for various clients. We can design, evaluate, and compare different approaches to the problem that has yet to be solved effectively.</p>
                  </div>
                </div>

                {/* Android Bar */}
                <div className="accordion">
                  <input type="checkbox" id="bar2" hidden />
                  <label htmlFor="bar2" className="accordion-label">
                    <span style={{ color: '#FFAA01', fontSize: '23px' }} className="num">02</span>
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '20px' }} className="title">Android</span>
                    <i className="fa-solid fa-angle-down arrow"></i>
                  </label>
                  <div className="content">
                    <p>Building for Android presents a unique set of challenges because of the fragmented device market. Traits expert Android app development team leverages the best of what the Android OS has to offer to make it device adaptive. Our developers have expertise in the mobile application development space,
                      Android Software Development Kit (SDK), OpenGL, Android Graphics APIs, Locationâ€“based Service APIs, Android Security Architecture and other technologies required to build best in class Android apps. Development of native Android apps for smart phones and tablets, and testing the same on multiple devices are some of the areas we specialize in</p>
                  </div>
                </div>

                {/* Java Bar */}
                <div className="accordion">
                  <input type="checkbox" id="bar3" hidden />
                  <label htmlFor="bar3" className="accordion-label">
                    <span style={{ color: '#FFAA01', fontSize: '23px' }} className="num">03</span>
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '20px' }} className="title">Java</span>
                    <i className="fa-solid fa-angle-down arrow"></i>
                  </label>
                  <div className="content">
                    <p>We provides design and development services designed to deliver software that efficiently utilizes the services available from Java application servers and the J2EE framework. Our Java development solutions include Development of web-oriented J2EE-based solutions, Development of Java-based Software Products, Migration of Customer's Software Solutions to Java/J2EE Platform,
                      Consulting Services on Java-based Software Development, and J2ME-based Solution Development.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* parallax */}
      <div className="parallax">
        <div style={{ maxWidth: "1190px", margin: "0 auto" }} className="parallax-content flex-1 p-7">
          {/* Heading from left */}
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Mission & Vision
          </motion.h2>

          {/* Paragraph from right */}
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white leading-relaxed"
          >
            Traits Global Solutions is a Software company Based out in HiLITE Business Park, Calicut - Kerala. Traits engages in developing and deploying Web applications, ERP solutions, CRMs, Workflow automation
            solutions, Website development & Hosting, Email-services etc. We help clients manage change and transform their businesses through high-quality, cost-effective business information solutions. Our
            capability to evolve and be flexible to a dynamic business world will provide us an identity in the mission. We are dedicated to provide comprehensive, web-enabled, end-to-end information technology and
            business services to augment our client&apos;s businesses.
          </motion.p>
        </div>
      </div>

      {/* -----------------------------------------------Home services----------------------------------------------------------------------------------- */}

      {/* WHAT WE DO */}
      <div style={{ padding: "60px 20px", backgroundColor: "#F3F1EE" }}>


        <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: '5px' }}>
          <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
            WHAT
            <span style={{ color: "#FFAA01" }}> WE</span>  DO
          </h2>
          <p style={{
            fontSize: "13px",
            fontFamily: "'Roboto', sans-serif",
            color: "#313131",
            textAlign: "center",
            marginTop: '40px',
            letterSpacing: "1px",
            textTransform: "uppercase",
            lineHeight: "1.8",
          }}>
            Traits Global solutions Providing software and application development, web designing, hosting and IT support Services. We are one of the trusted business advisors, assuring peace of mind through cultivated expertise, extensive resources, and uncompromising services.
            We specialize in computer support and IT networking for the start-up and established business.also we are providing solutions as per the customer requirement.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-16 mt-10">

            {/* Card 1 - Slide from Left */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-auto"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg font-bold text-gray-800 font-roboto pb-1">WEB APPLICATION</h3>
              <p className="text-sm text-gray-600 font-roboto pb-9">
                We are competent in Web Development of custom designed solutions, Full-Service Web Site development, Web-enabled Databases development and Applications, Web Application development, Business to Consumer Web Sites, E-Business and E-Commerce-enabled Web Sites development,
                Simple “Static” Sites or Complex Interactive Sites developmen
              </p>
            </motion.div>

            {/* Card 2 - Slide from Right */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-auto"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg font-bold text-gray-800 font-roboto pb-2">ERP SOLUTION</h3>
              <p className="text-sm text-gray-600 font-roboto">
                Based on our long-standing experience and niche expertise in ERP solutions development, we can be your strategic partner to develop performance-based products and solutions that really work for you, to help make a significant difference to your bottom line. We assemble pre-built
                components to enterprise solutions to collaborate customer/supplier Extranets, CRM, and employee intranet requirements or supply chain management solutions having intelligent modules to execute supply chain management globally
              </p>
            </motion.div>

            {/* Card 3 - Slide from Bottom */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-auto"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg font-bold text-gray-800 font-roboto pb-2">INFRASTRUCTURE</h3>
              <p className="text-sm text-gray-600 font-roboto pb-9">
                Website infrastructure refers to the underlying technology and architecture that supports the functioning of a website. It includes the hardware, software, network and server components that work together to deliver the website's content and provide a smooth user experience.
              </p>
            </motion.div>

            {/* Card 4 - Slide from Top */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-auto"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg font-bold text-gray-800 font-roboto pb-2">OUTSOURCING SERVICES</h3>
              <p className="text-sm text-gray-600 font-roboto">
                We provide cost-effective offshore outsourcing support to companies across globe. We gives both onsite and offshore assistance to IT projects of clients in a highly professional manner. Onsite projects involve a dedicated team from TGS to execute / implement the project from/at the
                client location during the entire project period. Offshore projects involve execution of the project at Traits’s development center in India
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* -------------------------------------------Home client------------------------------------------------------------------- */}

      <div style={{ padding: "60px 20px", backgroundColor: "#EAEAEA" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: '5px' }}>
          <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
            MEET
            <span style={{ color: "#FFAA01" }}> OUR</span>  CLIENTS
          </h2>
        </div>


        {/* Grid Layout with Manual Buttons */}
        <div className="relative mt-20 pb-2">
          {/* Left Button */}
          <motion.button
            onClick={() => document.getElementById("logoScroll").scrollBy({ left: -300, behavior: "smooth" })}
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(0,0,0,0.4)",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
              color: "white",
            }}
          >
            <ChevronLeft size={28} />
          </motion.button>


          {/* Scrollable Row */}
          <div
            id="logoScroll"
            className="flex space-x-7 overflow-x-auto scrollbar-hide scroll-smooth px-12 pb-5"
            style={{ scrollBehavior: "smooth" }}
          >
            {[
              "/Assets/bennys-organo-removebg-preview.png",
              "/Assets/client-1-removebg-preview.png",
              "/Assets/client-2-removebg-preview.png",
              "/Assets/client-4-removebg-preview.png",
              "/Assets/client-9-removebg-preview.png",
              "/Assets/Fams-removebg-preview.png",
              "/Assets/Fazza-removebg-preview.png",
              "/Assets/client-8-removebg-preview.png",
              "/Assets/client-10-removebg-preview.png",
            ].map((src, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-xl p-4 w-40 h-28 flex items-center justify-center flex-shrink-0"
              >
                <img src={src} alt={`Partner ${index + 1}`} className="max-h-16 object-contain" />
              </div>
            ))}
          </div>


          {/* Right Button */}
          <motion.button
            onClick={() => document.getElementById("logoScroll").scrollBy({ left: 300, behavior: "smooth" })}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(0,0,0,0.4)",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
              color: "white",
            }}
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: '40px', backgroundColor: 'EAEAEA' }}>

          <p style={{
            fontSize: "13px",
            fontFamily: "'Roboto', sans-serif",
            color: "#313131",
            textAlign: "center",
            marginTop: '40px',
            letterSpacing: "1px",
            textTransform: "uppercase",
            lineHeight: "1.8",
          }}>
            A true partnership is a two-way street — ideas and information flow openly and regularly, based on a foundation of mutual trust and respect for one another’s expertise —
            and our clients embrace this philosophy. The best and most productive relationships are synergistic and goal-oriented, and a long-term relationship has the value add of
            deep-rooted industry and company knowledge and relationships. Our client list speaks for itself. Since our earliest days, we’ve represented everything from start-ups to
            Fortune many companies with that same partnership approach and dedication at the core of every engagement. Every day, since 2016, we’ve been devoting our hearts and minds to our clients, achieving great successes and building lasting relationships.
          </p>
        </div>
      </div>



      {/* Parallax2 partner */}

      <div className="parallax2">
        <div style={{ maxWidth: "1190px", margin: "0 auto" }} className="parallax-content2 flex-1 p-7">

          <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "10px" }}>
            {/* Heading */}
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, }}
              style={{
                fontSize: "29px",
                fontWeight: "bold",
                fontFamily: "'Roboto', sans-serif",
                color: "#FFF",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              TECHNOLOGY
              <span style={{ color: "#FFAA01" }}> PARTNER</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              style={{
                fontSize: "13px",
                fontFamily: "'Roboto', sans-serif",
                color: "#FFF",
                textAlign: "center",
                letterSpacing: "1px",
                textTransform: "uppercase",
                lineHeight: "1.8",
                paddingBottom: "60px",
              }}
            >
              A technology partner, also known as an integration partner, is a company that connects its software platform or technology with another company's platform to provide extra
              value and a more seamless experience for their mutual customers
            </motion.p>

            {/* Cards */}
            <div
              style={{
                display: "flex",
                justifyContent: "center", // center cards
                flexWrap: "wrap",
                marginBottom: "50px",
                gap: "20px",
              }}
            >
              {cards.map((card, i) => (
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
                  {/* Card Image */}
                  <motion.img
                    src={card.img}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      margin: "0 auto 15px auto",
                    }}
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

      <div style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: "600", fontFamily: "'Roboto', sans-serif", color: "#333", letterSpacing: '2px' }}>
            "Web Applications"
          </h2>

          <div className="flex flex-col lg:flex-row gap-9 mt-10">
            {/* Left Content */}
            <div className="flex-1 p-3 rounded-lg">
              <p className="text-[13px] leading-7 font-roboto text-[#313131] tracking-wider uppercase">
                TGS has the unique expertise in mobile development for multiple technologies to create powerful native and mobile web apps for popular mobile platforms including Android, iPhone, iPad and Windows Mobile Phone. Our expertise includes designing and building of real-time apps, mobile web utility products
                that go well together with your business needs allowing instant messaging, e-mailing and mobile accessibility to vital business operational areas. Sometimes different applications need to work in unison with the business flow to meet compliance or data needs. We develop middleware to enable integration of systems and applications across the enterprise apart from facilitating flexible customized applications and business process integration (BPI) solutions to synchronize your databases to avoid data inefficiencies, multiple occurrences of same process or less straightforward business processes resulting in higher costs.
              </p>
            </div>

            {/* Right Content */}

            <div className="flex-1 p-5 rounded-lg">
              <div className="flex flex-col gap-4">
                <img src="/Assets/generated-image__9_-removebg-preview.png" alt="" />



              </div>
            </div>
          </div>
        </div>



        {/* Graph Representation */}

        <div className="w-full max-w-2xl mx-auto space-y-6 mt-11">

          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-4">
              {/* Left side image */}
              <Image src={skill.img} alt='' width={40} height={40} />

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

      {/* ------------------------------------------Home contact---------------------------------------------------- */}

      <div
        style={{
          backgroundImage: "url('/Assets/pexels-armin-rimoldi-5553657.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", width: "100%",
          position: "relative",
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
            style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#FFFF", marginBottom: "20px", }} >
            CONTACT US
            <span style={{ color: "#FFAA01" }}> FOR ANY</span> ENQUIRIES
          </h2>

          <p
            style={{
              fontSize: "13px", fontFamily: "'Roboto', sans-serif", color: "#FFFF", letterSpacing: "1px", textTransform: "uppercase", lineHeight: "1.8",
              margin: 0,
            }}>
            As a matter of fact the unification of the coherent software provides a strict control over the accomplishment of intended estimation
          </p>

          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="flex flex-col lg:flex-row gap-9 mt-10">
              {/* Left Content */}
              <div className="flex-1 p-3 rounded-lg">
                <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                  <h2
                    style={{ display: "flex", alignItems: "center", gap: "15px", fontFamily: "'Roboto', sans-serif", fontSize: "16px", color: "#FFFF", }}>
                    <i className="fa-solid fa-envelope" style={{ color: "#DA9E27" }}></i>
                    info@traitsglobal.com
                  </h2>

                  <h2
                    style={{
                      display: "flex", alignItems: "center", gap: "15px", fontFamily: "'Roboto', sans-serif", fontSize: "16px",
                      color: "#FFFF",
                    }} >
                    <i className="fa-solid fa-phone" style={{ color: "#DA9E27" }}></i>
                    +91 9745 06 7890 | +44 7526 06 5673 (UK)
                  </h2>

                  <h2
                    style={{
                      display: "flex", alignItems: "center", gap: "15px", fontFamily: "'Roboto', sans-serif", fontSize: "16px",
                      color: "#FFFF",
                    }} >
                    <i className="fa-solid fa-location-dot" style={{ color: "#DA9E27" }}></i>
                    India | United Arab Emirates | Manchester (UK)
                  </h2>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 p-5 rounded-lg">
                <div className="bg-white/20 rounded-xl p-6 flex flex-col space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-white/70 outline-none" />
                    <input type="text" placeholder="Subject" className="w-full p-3 rounded-lg bg-white/70 outline-none" />
                  </div>

                  <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white/70 outline-none" />

                  <textarea placeholder="Message" rows={5} className="w-full p-3 rounded-lg bg-white/70 outline-none resize-none"></textarea>

                  <button className="w-fit px-6 py-2 rounded-full bg-orange-400 text-white font-semibold hover:scale-105 transition">
                    Send Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Homepage