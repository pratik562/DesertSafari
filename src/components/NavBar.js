"use client";

import { logo1, logo2 } from "@/assests";
import { navLinks } from "@/utils/dummyData";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".nav-link",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" }
    );
  }, []);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <header
      ref={navRef}
      className={`padding-x absolute z-10 w-full py-3 bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-md ${
        isOpen && "h-[300]"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="/">
          <Image
            src={logo1}
            alt="Logo"
            width={130}
            height={35}
            className="logo"
          />
        </a>

        <ul className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((item) => (
            <li key={item?.label} className="nav-link">
              <a
                href={item.href}
                className="text-lg text-primary-text hover:text-primary transition"
              >
                {item?.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          alt="Menu"
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon style={{ height: 30, width: 30, color: "#D6C69B" }} />{" "}
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              ref={menuRef}
              className="fixed top-0 right-0 h-full w-72 bg-primary-bg shadow-lg flex flex-col py-6 px-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-2xl"
                aria-label="Close Menu"
              >
                &times;
              </button>

              <ul className="flex flex-col gap-6 mt-8">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-secondary text-lg font-medium hover:text-primary transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
