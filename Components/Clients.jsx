import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import { createContext } from 'react'; // ✅ CORRECT

function Clients() {
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
        {  value: 100, img: "/Assets/node_js-5dc52d652505be912bd2f11ab10af482605cbf9bbd5d9ab4178a64490f69f929.png" },
        {  value: 90, img: "/Assets/css-CfW5UZaa.png" },
        {  value: 75, img: "/Assets/images (3).png" },
        {  value: 70, img: "/Assets/python.png" },
        {  value: 75, img: "/Assets/images__4_-removebg-preview.png" },
    ];
    return (
        <>
            <div style={{ padding: "60px 20px", backgroundColor: "#EAEAEA" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: '5px' }}>
                    <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
                        MEET
                        <span style={{ color: "#FFAA01" }}> OUR</span>  CLIENTS
                    </h2>
                </div>


                {/* Grid Layout */}
                <div className="relative flex overflow-x-hidden mt-20 pb-2">
                    {/* First row */}
                    <div className="flex space-x-7 animate-marquee">
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
                                className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-xl p-4 w-40 h-28 flex items-center justify-center"
                            >
                                <img src={src} alt={`Partner ${index + 1}`} className="max-h-16 object-contain" />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate row for seamless loop */}
                    <div className="absolute top-0 flex space-x-7 animate-marquee2">
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
                                className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-xl p-4 w-40 h-28 flex items-center justify-center "
                            >
                                <img src={src} alt={`Partner ${index + 1}`} className="max-h-16 object-contain" />
                            </div>
                        ))}
                    </div>
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
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            marginBottom: "50px",
                            gap: "20px",
                        }}
                        >
                            {cards.map((card, i) => (
                                <motion.div className='backdrop-blur-md bg-white/20 border border-white/30 shadow-lg'
                                    key={i} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={cardVariants} whileHover={{ scale: 1.05 }}
                                    style={{
                                        borderRadius: "10px",
                                        padding: "20px",
                                        width: "200px",
                                        textAlign: "center",
                                    }}
                                >
                                    {/* Card Image */}
                                    <motion.img src={card.img}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "contain",
                                            margin: "0 auto 15px auto",
                                        }}
                                        initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: false }}
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
                            <Image src={skill.img} alt=''  width={40} height={40} />

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


        </>
    )
}

export default Clients