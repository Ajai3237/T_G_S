import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faShieldAlt, faThLarge, faClipboardList, faWindowRestore, faGlobe, faCloud } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";

function About() {
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
        },{
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
    return (
        <>
            {/* GET TO KNOW US */}
            <div style={{ padding: "60px 20px", backgroundColor: "#F3F1EE" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
                        GET TO
                        <span style={{ color: "#FFAA01" }}> KNOW</span>  US
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


        </>
    )
}

export default About