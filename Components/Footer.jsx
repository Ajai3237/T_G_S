import React from 'react'
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer className="bg-[#1a1a1a] text-gray-300 py-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
                    {/* Column 1 */}
                    <div>

                        <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                        <div className="flex justify-center md:justify-start gap-3">
                            <a
                                href="https://www.facebook.com/TraitsGlobalSolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DA9E27] text-white hover:bg-yellow-500"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/traitsglobalsolutions/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DA9E27] text-white hover:bg-yellow-500"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DA9E27] text-white hover:bg-yellow-500"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Site Map</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                <Link href="/" className="flex items-center gap-2">
                                    Home
                                </Link>
                            </li>

                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                <Link href="/About" className="flex items-center gap-2">
                                    About
                                </Link>
                            </li>

                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                <Link href="/Services" className="flex items-center gap-2">
                                    Services
                                </Link>
                            </li>

                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                <Link href="/Career" className="flex items-center gap-2">
                                    Career
                                </Link>
                            </li>

                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                <Link href="/Contact" className="flex items-center gap-2">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                Web Design
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                Web Development
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                Product Management
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                Marketing
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 cursor-pointer">
                                Graphic Design
                            </li>
                        </ul>
                    </div>




                    {/* Column 3 */}
                    <div>
                        <p className="mb-4">
                             Traits Global Solutions
                            2/1149/1100,Door No.2211,
                            HiLITE Business Park,Phase2, 2nd floor, Poovangal,Pantheeramkavu
                            Calicut, Kerala - 673014 
                        </p>
                    </div>


                </div>


                {/* Bottom Bar */}
                <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 text-sm text-gray-400">
                    <p>
                        © 2025 Created By:{" "}
                        <span className="text-white font-medium">Traits Global Solutions.</span>
                    </p>
                    <div className="flex gap-4 mt-3 md:mt-0">
                        <a href="#" className="hover:text-yellow-400">Terms Of Use</a>
                        <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer