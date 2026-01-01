import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLoaderData, useNavigate } from "react-router-dom";
import BannerSection from "./BannerSection";
import { BookOpen, Mic2, GraduationCap, ArrowRight } from "lucide-react";

export default function Home() {
  const inserteddata = useLoaderData();
  const navigate = useNavigate();

  const containerVariant = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } },
    viewport: { once: true },
  };

  const itemVariant = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#1c1a14] text-[#f5f0e6] font-sans selection:bg-[#c2a24a] selection:text-black">
      
      {/* ================= BANNER ================= */}
      <section className="relative overflow-hidden">
        <BannerSection />
      </section>

      {/* ================= INTRO / PURPOSE ================= */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#1c1a14] to-[#232018]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-[#c2a24a] text-xs font-black tracking-[0.5em] uppercase mb-6 block">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#c2a24a] mb-8 leading-tight">
            Preserving the Soul of <br /> Syloti Nagri Script
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed italic">
            "Syloti Nagri is not just a writing system — it is a historical identity. 
            This platform is a dedicated digital sanctuary to archive, teach, and revive 
            the resonance of our ancestral voice."
          </p>
          <div className="mt-12 w-24 h-px bg-[#c2a24a]/30 mx-auto" />
        </motion.div>
      </section>

      {/* ================= FEATURES (EDITORIAL GRID) ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Mic2 className="text-[#c2a24a]" size={32} />,
              title: "Authentic Audio",
              desc: "Crystal clear phonetic recordings ensuring the preservation of the unique Syloti dialect."
            },
            {
              icon: <BookOpen className="text-[#c2a24a]" size={32} />,
              title: "Letter Archive",
              desc: "A meticulously organized collection of vowels and consonants with practical usage examples."
            },
            {
              icon: <GraduationCap className="text-[#c2a24a]" size={32} />,
              title: "Structured Learning",
              desc: "From basic recognition to advanced reading, follow a path designed for modern learners."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-[#232018] border border-[#c2a24a]/10 rounded-[2.5rem] hover:border-[#c2a24a]/40 transition-all duration-500"
            >
              <div className="mb-6 bg-[#1c1a14] w-16 h-16 rounded-2xl flex items-center justify-center border border-[#c2a24a]/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-[#c2a24a] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= LETTER SHOWCASE (SWIPER) ================= */}
      <section className="py-32 px-6 bg-[#0f0e0c] relative overflow-hidden">
        {/* Decorative Background Letter */}
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none translate-x-1/4">
             <span className="text-[30rem] font-serif text-[#c2a24a]">ন</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
                <span className="text-[#c2a24a] text-xs font-black tracking-[0.5em] uppercase mb-4 block">Visual Gallery</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#c2a24a]">Symbolic Heritage</h2>
            </div>
            <button onClick={() => navigate('/show')} className="flex items-center gap-2 text-[#c2a24a] text-sm font-bold tracking-widest uppercase border-b border-[#c2a24a]/20 pb-2 hover:border-[#c2a24a] transition-all">
                View Full Archive <ArrowRight size={16} />
            </button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Mousewheel]}
          autoplay={{ delay: 3500 }}
          mousewheel
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={30}
          className="max-w-7xl mx-auto pb-20"
        >
          {inserteddata?.slice(0,5).map(letter => (
            <SwiperSlide key={letter._id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[#1c1a14] border border-[#c2a24a]/10 rounded-[3rem] p-16 text-center group cursor-pointer hover:border-[#c2a24a]/40 transition-all duration-500"
              >
                <p className="text-8xl font-serif text-[#c2a24a] group-hover:scale-110 transition-transform duration-700">
                  {letter.syloti}
                </p>
                <div className="mt-8 pt-6 border-t border-[#c2a24a]/5">
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">
                      Nagri Symbol
                    </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= WHY THIS PLATFORM (IMAGE + TEXT) ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[4rem] overflow-hidden border border-[#c2a24a]/20"
            >
                <img 
                    src="https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1974" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Script Archive"
                />
                <div className="absolute inset-0 bg-[#c2a24a]/10 mix-blend-overlay" />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-serif text-[#c2a24a] mb-8">
                    Bridging the <br /> Generation Gap
                </h2>
                <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                    <p>
                        Many scripts fade not because they lack value, but because they lack digital 
                        infrastructure. In an era of globalization, minority languages are often 
                        overlooked.
                    </p>
                    <p>
                        This project serves as a digital bridge, ensuring that the Syloti Nagri script 
                        remains accessible, searchable, and functional for researchers, diaspora 
                        communities, and the future generation.
                    </p>
                </div>
                <button onClick={() => navigate('/history')} className="mt-10 px-10 py-4 bg-[#c2a24a] text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-xl shadow-[#c2a24a]/10">
                    Explore History
                </button>
            </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-40 px-6 bg-[#0f0e0c]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto border border-[#c2a24a]/30 rounded-[5rem] p-16 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#c2a24a]/5" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif text-[#c2a24a] mb-8">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Unlock the secrets of the ancient script. Explore letters, listen to authentic sounds, and join the revival.
            </p>
            <button className="px-14 py-5 bg-transparent border-2 border-[#c2a24a] text-[#c2a24a] hover:bg-[#c2a24a] hover:text-black transition-all rounded-full text-sm font-black uppercase tracking-widest">
              Begin Learning Now
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}