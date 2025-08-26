import React from 'react'
import { motion } from "framer-motion";



function Services() {
    
    return (
        <>
        
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

        </>
    )
}

export default Services