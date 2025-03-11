"use client";

import React from "react";
import { footerLinks, socialMedia } from "@/utils/dummyData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { logo1 } from "@/assests";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className=" text-secondary-text bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4 text-center md:text-left">
          <a href="/">
            <Image
              src={logo1}
              width={180}
              height={80}
              alt="footer Logo"
              className="mx-auto md:mx-0"
            />
          </a>
          <p className="text-secondary-text text-sm">Powering a Sustainable Future</p>
        </div>

        {/* Navigation Links */}
        {footerLinks.map((section) => (
          <div key={section.title} className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary-text mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.id} className="cursor-pointer">
                  <a
                    href={link.link}
                    target={
                      link.link.startsWith("http") ||
                      link.link.startsWith("mailto:") ||
                      link.link.startsWith("tel:")
                        ? "_blank"
                        : "_self"
                    }
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (
                        link.link.startsWith("mailto:") ||
                        link.link.startsWith("tel:") ||
                        link.link.startsWith("http")
                      ) {
                        return; // Let browser handle these links
                      }
                      e.preventDefault();

                      if (link.link === "/terms") {
                        router.push("/terms");
                      } else {
                        document.getElementById(link.link)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="text-secondary-text hover:text-primary-text transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media Icons */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-primary-text mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-secondary pt-6">
        &copy; {new Date().getFullYear()} All rights reserved by
        <a
          href="https://www.opulotech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline ml-1"
        >
          OpuloTech
        </a>
        . Developed by
        <a
          href="https://www.opulotech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline ml-1"
        >
          OpuloTech
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
