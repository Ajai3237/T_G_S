import React from 'react'

function Contact() {
    return (
        <>
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

                                    <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white/70 outline-none" x />

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

export default Contact
