import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

// Asset imports
import ratul from "../../assets/ratul.png";
import sahil from "../../assets/ishmam.png";
import banidipa from "../../assets/banidipa.png";
import pritom from "../../assets/pritom.png";
import shivani from "../../assets/shivani.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { i } from "framer-motion/client";

const teamMembers = [
  {
    name: "Pritom Paul",
    role: "Lead Researcher, XR Developer & System Architect",
    institution: "Metropolitan University, Bangladesh",
    image: pritom,
    description: "Team lead; oversees XR design, system architecture, and ensures cultural authenticity."
  },
{
  name: "Ratul Saha Roy",
  role: "Full-Stack Software Developer & Video Editor",
  institution: "Metropolitan University, Bangladesh",
  image: ratul,
  description: "Designed and developed the website end-to-end, seamlessly combining frontend, backend, database and visual demo content."
},

  {
    name: "Shivani Gokul Badgujar",
    role: "XR Conceptualizer, 3D Designer & AI Developer",
    institution: "MIT Institute Of Design, India",
    image: shivani,
    description: "Responsible for AR 3D assets, gamified interactions, and AI model integration."
  },
  {
  name: "Sahil Uddin Ishmam",
  role: "Backend & API Developer",
  institution: "Metropolitan University, Bangladesh",
  image: sahil,
  description: "Developed backend API and processed data for the Unity AR project."
},
  {
    name: "Banidipa Chakraborty",
    role: "Graphic Designer, Content Writer & Vocal Artist",
    institution: "Metropolitan University, Bangladesh",
    image: banidipa,
    description: "Designs visual content, writes educational materials, and provides pronunciation/audio guidance."
  },
];

const milestones = [
  { date: "1 Oct 2025", title: "Concept & Ideation", desc: "Define project vision, problem scope, target users, and alignment with the MillionX Bangladesh hackathon theme." },
  { date: "10 Oct 2025", title: "Cultural Documentation", desc: "Conduct in-depth research on Sylheti Nagri history, script structure, pronunciation, and dataset preparation." },
  { date: "20 Oct 2025", title: "Experience Design", desc: "Design wireframes, user journeys, gamified learning paths, and AR interaction concepts." },
  { date: "1 Nov 2025", title: "3D Asset Dev", desc: "Develop 3D Sylheti Nagri letters, animations, and AR-ready assets using Blender and Unity." },
  { date: "15 Nov 2025", title: "Frontend Build", desc: "Build responsive user interfaces using React.js, Tailwind CSS, and Phaser.js for gamification." },
  { date: "25 Nov 2025", title: "Backend Systems", desc: "Set up Node.js, Express.js, MongoDB, authentication, and progress-tracking REST APIs." },
  { date: "5 Dec 2025", title: "AI Model Sync", desc: "Integrate Bangla–Nagri transliteration, pronunciation models, and AI conversational chatbot." },
  { date: "15 Dec 2025", title: "AR Feature Integration", desc: "Connect AR modules with learning content for real-time 3D letter visualization and audio interaction." },
  { date: "20 Dec 2025", title: "Gamification Logic", desc: "Implement level-based learning, rewards, badges, and learner analytics." },
  { date: "23 Dec 2025", title: "Testing Phase", desc: "Perform functional, usability, performance, and offline-mode testing across devices." },
  { date: "25 Dec 2025", title: "Preliminary Submit", desc: "Submit initial version of NagriPath for preliminary hackathon evaluation." },
  { date: "29 Dec 2025", title: "Deployment", desc: "Deploy on cloud infrastructure and prepare demo video, pitch deck, and technical documentation." },
  { date: "1 Jan 2026", title: "Final Submission", desc: "Complete and submit the final version of the project." },
  { date: "16 Jan 2026", title: "Final Demo", desc: "Live presentation and demonstration of NagriPath at the MillionX Bangladesh Hackathon 2026." },
];

export default function AboutUs() {
  return (
    <div className="bg-[#0f0e0c] text-[#ece6d9] min-h-screen selection:bg-[#c2a24a] selection:text-black">
      
      {/* ================= SECTION 1: THE STORY (ABOUT US) ================= */}
      <section className="relative pt-32 pb-20 px-6 border-b border-[#c2a24a]/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h4 className="text-[#c2a24a] font-bold tracking-[0.3em] uppercase text-xs mb-6">Established 2025</h4>
            <h1 className="text-6xl md:text-7xl font-serif text-white leading-tight mb-8">
              NagriPath: <br/><span className="text-[#c2a24a]">A Legacy Reborn.</span>
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg text-justify italic border-l-2 border-[#c2a24a] pl-6">
              NagriPath is a heritage-driven Ed-Tech platform developed for the MillionX Bangladesh – AI Innovation Hackathon 2025, dedicated to preserving, revitalizing, and modernizing the Sylheti Nagri script through AR, AI, and gamified multimodal learning. Blending centuries-old linguistic heritage with cutting-edge technology, NagriPath enables learners to interact with Sylheti Nagri using AR-based 3D letters, AI-powered transliteration, and cultural storytelling inspired by the 1952 Language Movement.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
            <div className="absolute inset-0 bg-[#c2a24a]/20 rounded-[4rem] blur-3xl group-hover:bg-[#c2a24a]/30 transition-all duration-700" />
            <div className="relative bg-[#1a1814] p-10 rounded-[3rem] border border-[#3a3324] text-center">
               <p className="text-sm text-gray-400 leading-relaxed mb-6">
                 Built by a multidisciplinary team from Bangladesh and India, NagriPath is mobile-friendly, offline-accessible, and scalable—ensuring inclusive learning for students and educators in rural regions.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0f0e0c] p-4 rounded-2xl border border-[#3a3324]">
                    <h3 className="text-[#c2a24a] text-2xl font-bold">41</h3>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Characters</p>
                  </div>
                  <div className="bg-[#0f0e0c] p-4 rounded-2xl border border-[#3a3324]">
                    <h3 className="text-[#c2a24a] text-2xl font-bold">3</h3>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Levels</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: MISSION & VISION ================= */}
      <section className="py-24 px-6 bg-[#0a0907]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-[#c2a24a]">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed text-justify pr-10">
              The Sylheti Nagri Immersive Learning Portal is dedicated to transforming how people learn and connect with their linguistic heritage. Our mission is to make endangered script learning accessible and immersive through the thoughtful integration of AR, AI, and gamified education. By enabling learners to see, hear, and interact with Nagri, we aim to inspire youth engagement and safeguard cultural identity.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-[#c2a24a]">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed text-justify pr-10">
              We envision a world where heritage languages thrive alongside modern technology. Our portal aims to be a global model for digital language preservation, scalable to other endangered scripts worldwide. We strive to empower the next generation to carry their linguistic legacy forward with pride through multimodal learning and AI guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE VISIONARIES (NEW DESIGN) ================= */}
      <section className="py-32 bg-[#0f0e0c]">
        <h2 className="text-center text-5xl font-serif text-[#c2a24a] mb-20 tracking-tight">The Visionaries</h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-[#1a1814] rounded-3xl p-6 border border-[#3a3324] flex flex-col items-center hover:border-[#c2a24a]/50 transition-all duration-300 shadow-xl"
            >
              {/* Rounded Image Frame */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#c2a24a]/20 shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="text-center flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{member.name}</h3>
                <p className="text-[#c2a24a] text-[10px] font-bold uppercase tracking-widest mb-4 h-8 flex items-center justify-center">
                  {member.role}
                </p>
                <p className="text-gray-500 text-[9px] font-medium mb-4 italic px-2">
                  {member.institution}
                </p>
                <div className="w-8 h-[2px] bg-[#c2a24a]/30 mx-auto mb-4" />
                <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-4">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 4: HORIZONTAL TIMELINE ================= */}
      <section className="py-32 px-6 bg-[#0a0907] border-y border-[#c2a24a]/10">
        <h2 className="text-center text-4xl font-serif text-[#c2a24a] mb-20 uppercase tracking-[0.2em]">Project Milestones</h2>
        <div className="max-w-7xl mx-auto overflow-x-auto pb-10 scrollbar-hide">
          <div className="flex gap-8 min-w-[2000px]">
            {milestones.map((m, i) => (
              <div key={i} className="w-72 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c2a24a]/30" />
                <div className="pt-8">
                   <div className="w-3 h-3 bg-[#c2a24a] rounded-full absolute -top-[6px] left-0 shadow-[0_0_10px_#c2a24a]" />
                   <span className="text-[#c2a24a] font-mono text-xs font-bold">{m.date}</span>
                   <h3 className="text-white font-bold text-lg mt-2 group-hover:text-[#c2a24a]">{m.title}</h3>
                   <p className="text-gray-500 text-sm mt-3 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: CALL TO ACTION ================= */}
        <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-serif text-[#c2a24a] mb-6">Explore Our Documentation</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { label: "SRS Document", url: "https://drive.google.com/file/d/1jfR23VUCctE17zXcLKbw8dWjPt54y8yQ/view?usp=sharing" },
            { label: "Nagri Datasets", url: "https://huggingface.co/datasets/shivdi1999/nagri-sound-dataset" },
            { label: "Project Demo", url: "https://youtu.be/qCMpn9jdgdo" }
          ].map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-3 rounded-full border border-[#c2a24a] text-[#c2a24a] hover:bg-[#c2a24a] hover:text-[#14120d] transition-all font-bold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}