"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const authors = [
  {
    name: "Doniyor Musayev",
    bio: "Full Stack Developer focused on ...",
    github: "https://github.com/MusayevDoniyor",
    linkedin: "https://www.linkedin.com/in/doniyor-musayev/",
    image: "/images/Doniyor.png",
  },
  {
    name: "Husanjon Ismoilov",
    bio: "Front End Developer focused on ...",
    github: "https://github.com/12Husanjon21",
    linkedin: "https://www.linkedin.com/in/husanjon-ismoilov-937260320/",
    image: "/images/Husanjon.png",
  },
  {
    name: "Azizbek G'ayratov",
    bio: "Front end Developer with high experience",
    github: "https://github.com/AzizbekGayratov",
    linkedin: "https://t.me/z1zbe",
    image: "/images/Azizbe.png",
  },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sahifa yuklanayotganda saqlangan theme holatini o'qing
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const htmlElement = document.documentElement;
    if (savedTheme) {
      htmlElement.setAttribute("data-theme", savedTheme);
      setIsDarkMode(savedTheme === "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
  }, []);

  const switchTheme = () => {
    const htmlElement = document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Theme-ni localStorage-ga saqlang
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content p-4">
      <div className="max-w-6xl mx-auto">
        {/* Toggle Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={switchTheme}
            className="btn btn-primary btn-md flex items-center gap-2"
          >
            {isDarkMode ? (
              <FaSun className="text-white" size={20} />
            ) : (
              <FaMoon size={20} />
            )}
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-4">
          Our Blog Authors
        </h1>
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {authors.map((author, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <figure className="relative w-full h-72 overflow-hidden rounded-t-lg">
                  <Image
                    src={author.image}
                    alt={`Picture of ${author.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title text-center justify-center">
                    {author.name}
                  </h2>
                  <p className="text-center">{author.bio}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={author.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="hover:text-gray-400 text-2xl">
                        <FaGithub />
                      </button>
                    </a>
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-blue-500 hover:text-blue-700 text-2xl">
                        <FaLinkedin />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
