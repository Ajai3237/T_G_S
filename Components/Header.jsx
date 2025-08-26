"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Variants for parent ul to stagger children
    const listVariants = {
        open: { transition: { staggerChildren: 0.15 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    };

    // Variants for each li
    const itemVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: 50, opacity: 0 },
    };

    return (
        <header className="w-full z-50 bg-transparent absolute left-0 -top-23">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <img
                        src="/Assets/logo.png"
                        alt="Logo"
                        className="w-[300px] h-auto"
                    />
                </div>




                <div className="relative">
                    
                    {/* Hamburger button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white z-50 relative p-2 transition-transform duration-200 hover:scale-110"
                    >
                        {isOpen ? <X size={36} /> : <Menu size={36} />}
                    </button>


                    {/* Menu Overlay */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="fixed top-40 right-0 h-100 w-35 bg-black/40 text-white flex items-center justify-center z-40 rounded-4xl"
                            >
                                <motion.ul
                                    variants={listVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="flex flex-col space-y-6 text-center text-xl font-medium"
                                >
                                    <motion.li variants={itemVariants} className="cursor-pointer hover:text-yellow-400">
                                        <Link href="/">Home</Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="cursor-pointer hover:text-yellow-400">
                                        <Link href="/about">About</Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="cursor-pointer hover:text-yellow-400">
                                        <Link href="/services">Services</Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="cursor-pointer hover:text-yellow-400">
                                        <Link href="/client">Client</Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="cursor-pointer hover:text-yellow-400">
                                        <Link href="/solutions">Solutions</Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="cursor-pointer hover:text-yellow-400">
                                        <Link href="/industries">Industries</Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="cursor-pointer hover:text-yellow-400">
                                        <Link href="/contact">Contact Us</Link>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>



            </div>
        </header>
    )
}

export default Header
