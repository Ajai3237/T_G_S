"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import GlobalApi from "../_uitils/GlobalApi";
import { toast, ToastContainer } from "react-toastify";

// Dynamic EmailJS import
const emailjs = dynamic(() => import("emailjs-com"), { ssr: false });

function Contactpage() {
  const [ContactData, setContactData] = useState([]);
  const [activeLocation, setActiveLocation] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const form = useRef();

  const getContactDataList = () => {
    GlobalApi.getContactData()
      .then((res) => setContactData(res.data.data || []))
      .catch((err) => console.error("Error fetching category:", err));
  };

  useEffect(() => {
    getContactDataList();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_qsv9qev",
      "template_7mh4jy2",
      form.current,
      "p6Jd-prST7yEl-rIx"
    ).then(
      () => { toast.success("Message sent successfully!"); e.target.reset(); },
      () => toast.error("Failed to send")
    );
  };

  return (
    <>
      {/* Hero Section */}
      {ContactData[2] && (
        <div className="relative w-full h-[550px] sm:h-[500px] md:h-[640px] overflow-hidden">
          <Image
            src={ContactData[2]?.contact_Image?.[0]?.url || ""}
            alt="Contact Banner"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-snug"
            >
              Contact <span className="text-[#FFAA01]">Us</span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed"
            >
              {ContactData[2]?.contact_descriptionText}
            </motion.p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      {ContactData[3] && (
        <section className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-[25px] font-bold text-[#333]">
                CONTACT US <span className="text-[#FFAA01]">FOR ANY</span> ENQUIRIES
              </h2>
              <div className="mt-2 w-20 h-[2px] bg-gray-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left side newsletter */}
              {ContactData[3].contact_Image?.[0]?.url && (
                <div
                  className="bg-cover bg-center rounded-3xl p-8 shadow-2xl relative text-white"
                  style={{
                    backgroundImage: `url(${ContactData[3].contact_Image[0].url})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">FOR LATEST NEWS</h3>
                    <p className="mb-6 text-sm leading-6">
                      {ContactData[3].contact_descriptionText}
                    </p>
                    <div className="flex flex-col space-y-4">
                      <input
                        type="email"
                        placeholder="EMAIL"
                        className="px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none"
                      />
                      <button className="px-6 py-3 rounded-full bg-black text-white font-semibold tracking-[3px] hover:bg-gray-900 transition">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Right (Form) */}
              <div className="flex-1 p-5 rounded-lg">
                <div className="bg-white/20 rounded-xl p-6 flex flex-col space-y-4">
                  <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFAA01]"
                        required
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFAA01]"
                        required
                      />
                    </div>
                    <input
                      type="email"
                      name="reply_to"
                      placeholder="Email"
                      className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFAA01]"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="5"
                      className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFAA01] resize-none"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-[#FFAA01] text-white font-semibold hover:bg-yellow-600 transition"
                    >
                      Send Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Cards */}
      {ContactData[1] && (
        <section
          className="relative bg-fixed bg-center bg-cover py-16"
          style={{
            backgroundImage: `url(${ContactData[1]?.contact_Image?.[0]?.url || ""})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Mail, text: ContactData[1].contact_mail },
              { icon: Phone, text: `+91 ${ContactData[1].contact_number}` },
              { icon: MapPin, text: ContactData[1].contact_descriptionText },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-[#FFAA01] rounded-4xl p-8 text-center shadow-2xl hover:scale-105 transition"
              >
                <item.icon className="mx-auto text-white w-10 h-10 mb-4" />
                <p className="text-white font-semibold tracking-[2px]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Map Section (Lazy Loaded) */}
      {ContactData[0]?.contact_json && (
        <section className="w-full bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6 mt-[-11px]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
                Where <span className="text-[#FFAA01]">We</span> Are
              </h2>
              {ContactData[0].contact_json.map((loc, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => { setActiveLocation(idx); setShowMap(true); }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer flex items-start gap-4 p-5 rounded-xl transition shadow-md ${
                    activeLocation === idx
                      ? "bg-[#FFAA01] text-white shadow-[0_0_25px_rgba(255,170,1,0.6)]"
                      : "bg-white hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <MapPin
                    className={`mt-1 ${
                      activeLocation === idx ? "text-white" : "text-[#FFAA01]"
                    }`}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{loc.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="md:col-span-2 relative">
              {showMap && (
                <motion.div
                  key={activeLocation}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-2xl shadow-xl border border-gray-200"
                >
                  <iframe
                    src={ContactData[0].contact_json[activeLocation].mapUrl}
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </motion.div>
              )}

              {showMap && (
                <motion.a
                  href={ContactData[0].contact_json[activeLocation].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-[#FFAA01] text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Open in Google Maps
                </motion.a>
              )}
            </div>
          </div>
        </section>
      )}

      <ToastContainer />
    </>
  );
}

export default Contactpage;
