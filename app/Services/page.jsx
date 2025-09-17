'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

import { CheckCircle } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Application",
    description: `We are competent in web development of custom designed solutions, full-service web site development,
    web-enabled databases development and applications, web application development, business to consumer web sites,
    e-business and e-commerce-enabled web sites development, simple "static" sites or complex interactive sites development.`,
    points: [
      "Custom & Responsive Designs",
      "Fast & Scalable Solutions",
      "User-Friendly Experience",
    ],
    image: "/Assets/2967e15bc267bf500383a184ec595d14.jpg",
    icon: "🌐",
  },
  {
    id: "erp",
    title: "ERP Solutions",
    description: `Based on our long-standing experience and niche expertise in ERP solutions development, we can be your strategic partner to develop performance-based
     products and solutions that really work for you, to help make a significant difference to your bottom line. We assemble pre-built components to enterprise solutions to collaborate customer/supplier Extranets, CRM, and employee intranet requirements or supply chain management solutions having intelligent modules to execute supply chain management globally.`,
    points: ["Process Automation", "Data-Driven Insights", "Seamless Integration"],
    image: "/Assets/98952fac38ca237ec5dce91a4fa8df4b.jpg",
    icon: "📊",
  },
  {
    id: "infra",
    title: "Infrastructure",
    description: `Website infrastructure refers to the underlying technology and architecture that supports the functioning of a website. It includes the hardware, software, network and server components that work together to deliver the website's content and provide a smooth user experience.`,
    points: ["Cloud Integration", "Secure Infrastructure", "High Availability"],
    image: "/Assets/9a1c36220a6e9036e0a200c2b851ca11.jpg",
    icon: "🖥️",
  },
  {
    id: "outsourcing",
    title: "Outsourcing Services",
    description: `We provide cost-effective offshore outsourcing support to companies across globe. We gives both onsite and offshore assistance to IT projects of clients in a highly professional manner. Onsite projects involve a dedicated team from TGS to execute / implement the project from/at the client location during the entire project period. Offshore projects involve execution of the project at Traits’s development center in India.`,
    points: ["Cost-Effective Solutions", "Expert Support", "Dedicated Teams"],
    image: "/Assets/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
    icon: "🤝",
  },
];



const Approach = [
  "Tailored solutions for your specific business needs",
  "Collaborative process with regular updates",
  "Focus on delivering measurable results",
  "Ongoing support and maintenance",
];

const Difference = [
  "Team of certified experts with industry experience",
  "Proven track record of successful projects",
  "Cutting-edge technologies and methodologies",
  "Transparent pricing with no hidden costs",
];

function Servicespage() {
  const [active, setActive] = useState("web");
  const activeService = services.find((s) => s.id === active);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[640px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/Assets/pexels-polina-kovaleva-5827854.jpg')", backgroundPosition: "center bottom -50px"
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
            Services
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg text-gray-200 max-w-3xl font-['Roboto'] leading-[30px] tracking-[1.5px]"
          >
            Traits Global solutions Providing software and application development, web designing, hosting and IT support Services.
            We are one of the trusted business advisors, assuring peace of mind through cultivated expertise, extensive resources,
            and uncompromising services. We specialize in computer support and IT networking for the start-up and established
            business. Also we are providing solutions as per the customer requirement.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="" style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center"  , marginBottom:'50px'}}>
            WHAT <span className="text-yellow-500">WE OFFER</span>
            <div className="mt-2 w-20 h-[2px] bg-gray-300 mx-auto"></div>
          </h2>
          

          
          <div className="flex justify-center mb-20">
            <div className="relative flex bg-gray-100 rounded-full p-2 gap-2">
              {services.map((service) => {
                const isActive = active === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActive(service.id)}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors duration-300
                      ${isActive ? "text-black" : "text-gray-700 hover:text-yellow-500"}`}
                  >
                    {/* Sliding background */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-md"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                    <span className="relative z-10 text-yellow-500">{service.icon}</span>
                    <span className="relative z-10">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {activeService.title}
              </h3>
              <p className="text-gray-600 mb-6">{activeService.description}</p>
              <ul className="space-y-3">
                {activeService.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-800">
                    ✅ {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
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
                height={400}   // ✅ fixed height
                className="w-[650px] h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>



      {/* why chooes our services */}
      <section className="bg-gray-100 py-15 pb-30 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            why choose <span className="text-[#FFAA01]">our</span> services
          </h2>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[{ title: "OUR APPROACH", items: Approach }, { title: "Our DifferenceSION OUR DIFFERENCE", items: Difference }].map((section, idx) => (
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
    </>
  );
}

export default Servicespage;
