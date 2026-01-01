import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Gamepad2, BookOpen, Download, ShieldCheck, Cpu } from "lucide-react";

export default function PlayGame() {
  const navigate = useNavigate();

  const handleDownload = () => {
    const apkUrl = "/apk/Nagripath-3D-Game.apk"; 
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "Nagripath-3D-Game.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#f5f0e6] font-sans overflow-hidden relative">
      
      {/* --- ATMOSPHERIC BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#c2a24a]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#c2a24a]/5 rounded-full blur-[100px]" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#c2a24a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center relative z-10 py-20">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c2a24a]/10 border border-[#c2a24a]/20 text-[#c2a24a] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c2a24a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c2a24a]"></span>
              </span>
              Only Available for Tab and Mobile
            </div> */}

            <h1 className="text-6xl md:text-8xl font-serif text-[#c2a24a] leading-[0.9] mb-8">
              NagriPath <br />
              <span className="text-white opacity-90 text-5xl md:text-7xl">3D Experience</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
              Step into a virtual world where ancient script meets modern technology. 
              Navigate through 3D environments, solve puzzles, and master the Sylheti Nagri alphabet.
            </p>
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c2a24a]/10 border border-[#c2a24a]/20 text-[#c2a24a] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c2a24a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c2a24a]"></span>
              </span>
              Only Available for Tab and Mobile
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(194, 162, 74, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className="group px-10 py-5 rounded-2xl bg-[#c2a24a] text-black font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all"
              >
                <Download size={18} /> 
                Download APK
              </motion.button>

              <motion.button
                whileHover={{ y: -5, backgroundColor: "rgba(194, 162, 74, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/user-manual")}
                className="px-10 py-5 rounded-2xl border-2 border-[#c2a24a]/30 text-[#c2a24a] font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all"
              >
                <BookOpen size={18} /> 
                View Manual
              </motion.button>
            </div>

            {/* Hardware Info */}
            <div className="mt-12 flex items-center gap-8 border-t border-[#c2a24a]/10 pt-8">
                <div className="flex items-center gap-3 opacity-50">
                    <ShieldCheck size={20} className="text-[#c2a24a]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Safe & Secure</span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                    <Cpu size={20} className="text-[#c2a24a]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Android 8.0+</span>
                </div>
            </div>
          </motion.div>

          {/* --- RIGHT VISUAL (3D Game Mockup Concept) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative z-10 aspect-[4/5] bg-[#1a1814] rounded-[4rem] border border-[#c2a24a]/20 p-4 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c2a24a]/10 to-transparent" />
              
              {/* Fake Game Interface Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center group-hover:scale-110 transition-transform duration-[2s]">
                    <Gamepad2 size={120} className="text-[#c2a24a] opacity-20 mb-4 mx-auto" />
                    <span className="text-9xl font-serif text-[#c2a24a] block opacity-40">ꠘꠣꠉꠞꠤ</span>
                 </div>
              </div>

              {/* HUD Decoration */}
              <div className="absolute top-10 left-10 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                 <div className="w-12 h-1 bg-[#c2a24a]/20 rounded-full" />
              </div>
              <div className="absolute bottom-10 right-10">
                 <div className="text-[10px] font-black text-[#c2a24a]/40 tracking-[0.5em] uppercase vertical-text">
                    Level 01: The Origin
                 </div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-[#232018] border border-[#c2a24a]/30 rounded-3xl flex items-center justify-center shadow-2xl z-20"
            >
                <span className="text-4xl font-serif text-[#c2a24a]">গ</span>
            </motion.div>

            <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#c2a24a] rounded-3xl flex items-center justify-center shadow-2xl z-20"
            >
                <Gamepad2 size={32} className="text-black" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}