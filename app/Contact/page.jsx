"use client";

import React from 'react'
import { motion } from "framer-motion";

import { Mail, Phone, MapPin } from "lucide-react";

function Contactpage() {
  return (
    <>
      {/*  Section */}
      <div
        className="relative w-full h-[640px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/Assets/4218ffd77125517d2f2600745397424e.jpg')",
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
            Contact <span className="text-[#FFAA01]">Us</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg text-gray-200 max-w-3xl font-['Roboto'] leading-[30px] tracking-[1.5px]"
          >
            As a matter of fact the unification of the coherent software provides a strict control over The
            Accomplishment of Intended Estimation
          </motion.p>
        </div>
      </div>



      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="" style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center"  }}>
              CONTACT US <span className="text-yellow-500">FOR ANY</span> ENQUIRIES
            </h2>
            <div className="mt-2 w-20 h-[2px] bg-gray-300 mx-auto"></div>
          </div>

          {/* Main  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left  */}
            <div className="bg-[url('/Assets/d5baa6570dccb29b40847af7f90d325b.jpg')] bg-cover bg-center rounded-3xl p-8  shadow-2xl relative text-white">
              <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">FOR LATEST NEWS</h3>
                <p className="mb-6 text-sm leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Email Input */}
                <div className="flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70 
                      backdrop-blur-md border border-white/30 focus:outline-none"
                  />

                  <button className="px-6 py-3 rounded-full bg-black text-white font-semibold tracking-[3px] hover:bg-gray-900 transition">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>

            {/* Right  */}
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="name"
                  className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="subject"
                  className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <input
                type="email"
                placeholder="email"
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                placeholder="message"
                rows="5"
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* parallax */}

      <section
        className="relative bg-fixed bg-center bg-cover py-16"
        style={{
          backgroundImage: "url('/Assets/3866d14b277f78bee62ca262b685d6fa.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border border-[#FFAA01] rounded-4xl p-8 text-center shadow-2xl hover:scale-105 transition"
          >
            <Mail className="mx-auto text-white w-10 h-10 mb-4" />
            <p className="text-white font-semibold font-['Roboto'] tracking-[2px]">Info@Traitsglobal.Com</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-sm border border-[#FFAA01] rounded-4xl p-8 text-center shadow-2xl hover:scale-105 transition"
          >
            <Phone className="mx-auto text-white w-10 h-10 mb-4" />
            <p className="text-white font-semibold font-['Roboto'] tracking-[2px]">
              +91 97450 67890
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm border border-[#FFAA01] rounded-4xl p-8 text-center shadow-2xl hover:scale-105 transition"
          >
            <MapPin className="mx-auto text-white w-10 h-10 mb-4" />
            <p className="text-white font-semibold font-['Roboto'] tracking-[2px]">
              2/1149/1100, Door No.2211, <br />
              HiLITE Business Park, Phase 2
            </p>
          </motion.div>

        </div>
      </section>


      {/* map */}

      <section className="p-35 h-[700px] relative">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.5924918481962!2d75.83276443851479!3d11.247798597232785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c73aa37711c2009%3A0xa7bfd72913c8a998!2sTraits%20Global%20Solutions%20(TGS)!5e0!3m2!1sen!2sus!4v1758101657878!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Overlay to make it clickable */}
        <a
          href="https://www.google.com/maps/place/Oxford+St/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        ></a>
      </section>

    

    </>
  )
}

export default Contactpage;
