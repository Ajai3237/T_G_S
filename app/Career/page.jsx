"use client";

import React from 'react'
import { motion } from "framer-motion";

function Careerpage() {

    const jobRoles = [
        "WEB SITE DEVELOPER",
        "APP DEVELOPER",
        "APP DEVELOPER",
        "WEB SITE DEVELOPER",
    ];

    // Animation cards
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
            <div
                className="relative w-full h-[640px] bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('/Assets/6ecf84a53bbc285f800572554fd7fc56.jpg')",
                }}
            >
                {/* Glass  */}
                <div className="absolute inset-0 bg-black/30 "></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                        className="text-white font-bold text-[55px] font-['Open Sans']"
                    >
                        Build Your <span className="text-[#FFAA01]">Career</span> With Us
                    </motion.h1>

                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-6 text-lg text-gray-200 max-w-3xl font-['Roboto'] leading-[30px] tracking-[1.5px]"
                    >
                        Join a passionate team shaping the future of web and software
                        development. At <span className="text-[#FFAA01]">Traits Global</span>,
                        we value innovation, creativity, and growth. Explore opportunities
                        to learn, collaborate, and make an impact.
                    </motion.p>
                </div>
            </div>

            <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12 font-['Roboto'] ">
                {/* Heading Section */}
                <div className="text-center max-w-2xl mb-10">
                    <h2 className="" style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center"  , marginBottom:'50px'}}>
                        JOIN <span className="text-[#FFAA01]">OUR</span> TEAM
                        <div className="mt-2 w-20 h-[2px] bg-gray-300 mx-auto"></div>
                    </h2>
                    <p className="text-gray-500 tracking-widest text-sm md:text-base">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
                        Tempor Incididunt Ut Labore Et Dolore Ma
                    </p>
                </div>


                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-6xl mt-5">
                    {/* Left */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
                        {jobRoles.map((role, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={index}
                            >
                                <h3 className="font-bold text-lg mb-4">{role}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#FFAA01] text-white text-sm px-4 py-2 rounded-full hover:bg-[#e9a00e] transition"
                                >
                                    APPLY NOW
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right:  */}
                    <motion.div
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
                        <input
                            type="text"
                            placeholder="NAME"
                            className="w-full bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#FFAA01]"
                        />
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="w-full bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#FFAA01]"
                        />
                        <input
                            type="text"
                            placeholder="POST NAME"
                            className="w-full bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#FFAA01]"
                        />
                        <textarea
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
                    </motion.div>
                </div>
            </div>


            <section className=" text-white px-6 md:px-12 lg:px-24 py-15 relative w-full rounded-tl-4xl rounded-tr-4xl bg-cover bg-center overflow-hidden font-['Roboto']  "
                style={{
                    backgroundImage:
                        "url('/Assets/e4814d371a98d6020764d065cbdc57e5.jpg')",
                }}>
                <div className="absolute inset-0 bg-black/50 "></div>

                <div className=" relative flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                            <span className="text-yellow-400">BUILD YOUR</span> CAREER WITH US
                        </h2>
                        <p className="mt-4 text-lg md:text-xl font-medium">
                            BE PART OF A PASSIONATE TEAM SHAPING THE FUTURE OF THE WEB. AT TGS, WE DON’T JUST BUILD WEBSITES WE CREATE DIGITAL EXPERIENCES THAT MAKE AN IMPACT.
                        </p>

                    </div>


                    
                    <div className="relative flex-1 hidden lg:flex justify-center">

                        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md mx-auto lg:mx-0">
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA.
                        </p>

                    </div>
                </div>


                {/* Cards  */}
                <div className=" relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {[
                        { title: "GROWTH OPPORTUNITIES", desc: "WORK ON CHALLENGING PROJECTS THAT HELP YOU LEARN, GROW, AND ADVANCE IN YOUR CAREER." },
                        { title: "CREATIVE ENVIRONMENT", desc: "WORK ON CHALLENGING PROJECTS THAT HELP YOU LEARN, GROW, AND ADVANCE IN YOUR CAREER." },
                        { title: "WORK-LIFE BALANCE", desc: "WORK ON CHALLENGING PROJECTS THAT HELP YOU LEARN, GROW, AND ADVANCE IN YOUR CAREER." },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="border border-yellow-400 rounded-4xl p-6 text-center hover:bg-yellow-400/10 transition"
                        >
                            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>




        </>
    )
}

export default Careerpage
