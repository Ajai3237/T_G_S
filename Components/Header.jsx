"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import GlobalApi from "@/app/_uitils/GlobalApi";


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);


    const [HeaderData, setHeaderData] = useState([]);

    const getHeaderDataList = () => {
        GlobalApi.getHeaderData()
            .then(res => {
                console.log(res.data.data);
                setHeaderData(res.data.data);
            })
            .catch(err => {
                console.error("Error fetching category:", err);
            });
    };

    useEffect(() => {
        getHeaderDataList();
    }, []);


    // Track scroll position and direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }

            setLastScrollY(currentScrollY);
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

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
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-15 lg:py-6">

                {/* Logo */}
                {HeaderData[0] && (
                    <div className="flex-shrink-0">
                        <img
                            src={HeaderData[0].herader_image?.[0]?.url || "/fallback.webp"}
                            alt="Logo"
                            width={300}      // intrinsic width
                            height={80}

                            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto "
                        />
                    </div>
                )}

                <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-white z-50 relative p-2 transition-transform duration-200 hover:scale-110 focus:outline-none  rounded"
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
                    <AnimatePresence>
                        {isOpen && (
                            <>
                                {/* Backdrop */}
                                <motion.div
                                    key="backdrop"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                    className="fixed inset-0 z-30 bg-black/40"
                                    onClick={() => setIsOpen(false)}
                                />

                                {/* Sliding Menu */}
                                <motion.nav
                                    key="menu"
                                    initial={{ x: "100%" }}
                                    animate={{
                                        x: isScrollingDown ? "100%" : 0,
                                        opacity: isScrollingDown ? 0 : 1,
                                    }}
                                    exit={{ x: "100%" }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="fixed right-0 z-40 w-56 sm:w-50 md:w-72 lg:w-80 bg-black/70 text-white backdrop-blur-md rounded-l-3xl p-4 sm:p-5 md:p-6 lg:p-8"
                                    style={{ top: `${scrollY + 120}px` }}
                                >
                                    <motion.ul
                                        variants={listVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        className="flex flex-col space-y-6 text-center text-lg md:text-xl font-medium"
                                    >
                                        {[
                                            { href: "/", label: "Home" },
                                            { href: "/About", label: "About" },
                                            { href: "/Services", label: "Services" },
                                            { href: "/Career", label: "Career" },
                                            { href: "/Contact", label: "Contact Us" },
                                        ].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                variants={itemVariants}
                                                className="cursor-pointer hover:text-yellow-400"
                                            >
                                                <Link href={item.href} onClick={() => setIsOpen(false)}>
                                                    {item.label}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.nav>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    )
}

export default Header