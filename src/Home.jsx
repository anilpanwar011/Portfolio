import React from "react";
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaInstagram, FaPhoneAlt, FaFax, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";



export default function Portfolio() {
  const [formMsg, setFormMsg] = useState("");


  const projects = [
    {
      title: "E-Commerce Admin",
      desc: "Admin dashboard for furniture store",
      img: "https://cdn.cssauthor.com/wp-content/uploads/2023/06/Shoppy-eCommerce-Admin-Panel-Template.jpg",
      live: "https://admin-panel-chi-gray.vercel.app/",
      code: "https://github.com/anilpanwar011/Admin-Panel",
    },
    {
      title: "Limeroad Ecommerce",
      desc: "E-commerce website",
      img: "https://www.dsim.in/blog/wp-content/uploads/2016/02/limeroad-main-page.png",
      live: "https://limeroad-bice.vercel.app/",
      code: "https://github.com/anilpanwar011/Limeroad",
    },
    {
      title: "Jewellery Ecommerce",
      desc: "jewellery website",
      img: "https://images.squarespace-cdn.com/content/v1/5308aaf6e4b0dd985a42ed12/1512335718473-12LCIAGJ0RY1UMBOH6NK/ke17ZwdGBToddI8pDm48kBmFz8f_O2wfqq6005soh2l7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud0qJKMvvtzAukIszeAY71Lt1J_7Yhsqdxawz9sEs_YeBN31WQ6pCREY4EtWZ_FQ_g/debeers_jewellery_website.jpg",
      live: "https://jewellery-websites.vercel.app/",
      code: "https://github.com/anilpanwar011/jewellery-websites",
    },
    {
      title: "Blinkit Website",
      desc: "Grocery delivery app clone",
      img: "https://thebusinessrule.com/wp-content/uploads/2023/04/Blinkit-categories-1024x511.png",
      live: "#",
      code: "https://github.com/anilpanwar011/Blinkit-clone",
    },
    {
      title: "Movie App",
      desc: "Movie browsing application",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqj24g8FmNGOnjR3ZWQmAqZE4hKuEDPmR1Q&s",
      live: "https://movie-app-l3yi-n551dqjsv-anilpanwar011s-projects.vercel.app/",
      code: "https://github.com/anilpanwar011/Movie-App",
    },
    {
      title: "Landing Page Kit",
      desc: "High-performance landing pages",
      img: "https://shoppingthoughts.com/wp-content/uploads/2020/05/CouchTuner-Free-Website-to-Watch-Web-Series-and-TV-Shows-Online-in-Full-HD.jpg",
      live: "#",
      code: "https://github.com/anilpanwar011",
    }
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { name: "HTML/CSS", percent: 100, color: "bg-yellow-400" },
    { name: "JavaScript", percent: 95, color: "bg-yellow-400" },
    { name: "React / Next", percent: 90, color: "bg-blue-400" },
    { name: "Node / Express", percent: 85, color: "bg-green-400" },
    { name: "Databases", percent: 82, color: "bg-pink-500" },
  ];

  const handleSend = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
    if (!name || !email || !message) {
      setFormMsg("⚠️ Please fill all fields.");
      return;
    }
    setFormMsg("✅ Thanks! Mail client opened (demo).");
    window.location.href = `anilpanwar12232@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(
      message
    )}`;
  };


  const [selected, setSelected] = useState(null);

  const certificates = [
    { id: 1, src: "/certificate.jpg", alt: "Certificate 1" },
    { id: 2, src: "/certficate1.jpg", alt: "Certificate 2" },
  ];

  return (
    <div className="bg-gray-950 text-gray-100 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Anil <span className="text-white">Panwar</span>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-gray-300 font-medium">
            <a href="#hero" className="hover:text-blue-400 transition">Home</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>

          {/* Desktop Socials */}
          <div className="hidden md:flex gap-4">
            <a
              href="https://github.com/anilpanwar011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anil-panwar-b0a455374/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:anilpanwar12232@gmail.com"
              className="text-gray-300 hover:text-red-500 text-2xl transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900/95 border-t border-gray-800">
            <nav className="flex flex-col items-center gap-4 py-6 text-gray-300 font-medium">
              <a href="#hero" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Home</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Projects</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Skills</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Contact</a>

              {/* Socials in mobile */}
              <div className="flex gap-6 pt-4 text-2xl">
                <a href="https://github.com/anilpanwar011" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/anil-panwar-b0a455374/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                  <FaLinkedin />
                </a>
                <a href="mailto:anilpanwar12232@gmail.com" className="text-gray-300 hover:text-red-500">
                  <FaEnvelope />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Anil Panwar</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8">
            Full-Stack Developer creating modern & scalable web apps with React, Next.js & Node.js
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-black rounded-lg font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-gray-400 text-center mb-10">
          Highlighted works & experiments
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>
                <div className="flex gap-3">
                  <a href={p.live} className="px-3 py-1 bg-blue-500 text-black rounded-lg hover:bg-blue-400 transition">Live</a>
                  <a href={p.code} className="px-3 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 transition">Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificate */}
      <section id="certificate" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Certificates</h2>

        {/* Grid for certificates */}
        <div className="grid sm:grid-cols-2 gap-8 justify-center">
          {certificates.map((cert) => (
            <div key={cert.id} className="flex justify-center">
              <img
                src={cert.src}
                alt={cert.alt}
                className="rounded-xl shadow-lg max-w-md w-full hover:scale-105 transition cursor-pointer"
                onClick={() => setSelected(cert.src)}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-6">
          Successfully completed 6 Months Full Stack Web Development Course from WsCube Tech.
        </p>

        {/* Modal for full view */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Full Certificate"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full rounded-lg shadow-2xl"
            />
          </div>
        )}
      </section>



    
      {/* Skills */}
      <section id="skills" className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="w-24 h-24 rounded-full border-4 border-gray-700 flex items-center justify-center text-xl font-bold">
                  {skill.percent}%
                </div>
                <p className="mt-4">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <motion.div
          className="max-w-3xl mx-auto text-gray-300 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            I'm a passionate Full-Stack Developer building modern, responsive web applications with focus on clean code, performance and user experience.
          </p>
          <p>
            I enjoy problem-solving, learning new technologies, contributing to open-source projects, and continuously improving my skills.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
          <form onSubmit={handleSend} className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700" />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700" />
            <textarea name="message" placeholder="Message" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 h-32"></textarea>
            <button type="submit" className="w-full py-3 bg-blue-500 text-black font-semibold rounded-lg hover:scale-105 transition">
              Send Message
            </button>
            <p className="text-sm text-gray-400">{formMsg}</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C2A63] text-gray-200">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-start">
          {/* Left: Info */}
          <div>
            <h2 className="font-semibold text-white text-lg">Anil Panwar</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Full Stack Developer <br /> React.js | Next.js | Node.js | MongoDB
            </p>
            <p className="mt-2 text-xs text-gray-400">
              Building modern, scalable, and user-friendly web applications.
            </p>
          </div>

          {/* Middle: Contact Details */}
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-300" /> +91 95495 41329
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-300" />{" "}
              <a
                href="mailto:anilpanwar12232@gmail.com"
                className="hover:underline"
              >
                anilpanwar12232@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaGithub className="text-blue-300" />{" "}
              <a
                href="https://github.com/anilpanwar011"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/anilpanwar011
              </a>
            </p>
          </div>

          {/* Right: Button */}
          <div className="flex justify-center md:justify-end">
            <a
              href="#contact"
              className="bg-[#1976D2] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <hr className="border-gray-500 opacity-30" />

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-5 text-lg">
            <a
              href="https://github.com/anilpanwar011"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anil-panwar-b0a455374/"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>

          {/* Signature / Branding */}
          <div className="text-xs text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Anil Panwar</span>. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
