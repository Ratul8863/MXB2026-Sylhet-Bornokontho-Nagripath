import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import BannerSection from "./BannerSection";
import { BookOpen, Mic2, GraduationCap, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import PageLoader from "../../Components/PageLoader/PageLoader";

export default function Home() {
  // 🔹 Hooks MUST always be on top
  // const inserteddata = useLoaderData();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // 🔹 Page loader delay (smooth UX)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 800);

  useEffect(() => {
   fetch("https://bornokontho-server.vercel.app/letters/home")
   .then(res => res.json())
   .then(data => {
    //  console.log(data);
     setData(data);
   })
  }, []);

  //   return () => clearTimeout(timer);
  // }, []);

  // // 🔹 Loader render (AFTER hooks)
  // if (loading) {
  //   return <PageLoader />;
  // }

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

      {/* ================= FEATURES ================= */}
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

      {/* ================= LETTER SHOWCASE ================= */}
      <section className="py-32 px-6 bg-[#0f0e0c] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none translate-x-1/4">
          <span className="text-[30rem] font-serif text-[#c2a24a]">ন</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#c2a24a] text-xs font-black tracking-[0.5em] uppercase mb-4 block">
              Visual Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#c2a24a]">
              Symbolic Heritage
            </h2>
          </div>
          <button
            onClick={() => navigate("/show")}
            className="flex items-center gap-2 text-[#c2a24a] text-sm font-bold tracking-widest uppercase border-b border-[#c2a24a]/20 pb-2 hover:border-[#c2a24a] transition-all"
          >
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
          {data?.map(letter => (
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

      {/* ================= CTA ================= */}
      <section className="py-40 px-6 bg-[#0f0e0c]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto border border-[#c2a24a]/30 rounded-[5rem] p-16 md:p-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-[#c2a24a] mb-8">
            Start Your Journey
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Unlock the secrets of the ancient script and join the revival.
          </p>
          <Link to="/show">
            <button className="px-12 py-5 bg-[#c2a24a] text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all">
              Begin Learning
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
