import { motion } from "framer-motion";
import { 
  Smartphone, 
  Download, 
  Camera, 
  Settings, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Cpu, 
  Apple, 
  Info,
  ChevronRight
} from "lucide-react";

export default function UserManual() {
  const containerVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#f5f0e6] font-sans pb-32 selection:bg-[#c2a24a] selection:text-black">
      {/* --- HEADER --- */}
      <header className="pt-24 pb-16 px-6 text-center bg-gradient-to-b from-[#1c1a14] to-transparent">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <span className="text-[#c2a24a] text-xs font-black tracking-[0.5em] uppercase mb-4 block">Official Documentation</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#c2a24a]">User Manual</h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Game Installation, Device Requirements & Developer Mode Guide (For Mobile Phones & Tablets Only) [cite: 230, 231]
          </p>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-20">
        
        {/* 1. INSTALLATION & REQUIREMENTS */}
        <motion.section variants={containerVariant} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[#c2a24a]/20"></div>
            <h2 className="text-2xl font-serif text-[#c2a24a] px-4">1. Game Installation & Requirements</h2>
            <div className="h-px flex-1 bg-[#c2a24a]/20"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariant} className="bg-[#1a1814] p-8 rounded-[2.5rem] border border-[#c2a24a]/10">
              <div className="flex items-center gap-4 mb-6">
                <Smartphone className="text-[#c2a24a]" size={32} />
                <h3 className="text-xl font-serif">Supported Platforms</h3>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                This game is designed to run only on mobile phones and tablets. 
                APK files are not supported on iOS or iPadOS[cite: 264].
              </p>
            </motion.div>

            <motion.div variants={itemVariant} className="bg-[#1a1814] p-8 rounded-[2.5rem] border border-[#c2a24a]/10">
              <div className="flex items-center gap-4 mb-6">
                <Download className="text-[#c2a24a]" size={32} />
                <h3 className="text-xl font-serif">Download & Install</h3>
              </div>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex gap-3"><span className="text-[#c2a24a] font-bold">1.</span> Download the APK to your Android device[cite: 236].</li>
                <li className="flex gap-3"><span className="text-[#c2a24a] font-bold">2.</span> Open and install the application[cite: 237].</li>
                <li className="flex gap-3"><span className="text-[#c2a24a] font-bold">3.</span> Launch and play once complete[cite: 238].</li>
                <li className="mt-4 p-4 bg-[#c2a24a]/5 rounded-xl border border-[#c2a24a]/20 italic">
                  If prompted, allow installation from "Unknown Sources" in settings[cite: 239, 240].
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* 2. HOW TO PLAY (CAMERA ACCESS) */}
        <motion.section variants={itemVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-[#232018] p-12 rounded-[3rem] border border-[#c2a24a]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Camera size={120} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-serif text-[#c2a24a] mb-6">2. Mandatory: Camera Access</h2>
            <p className="text-lg text-[#f5f0e6] font-light leading-relaxed mb-6">
              To play the game, you must open and use your device's camera. Camera access is mandatory for gameplay features to function properly[cite: 241, 242, 243].
            </p>
            <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
              <AlertTriangle className="text-red-500 shrink-0" size={20} />
              <p className="text-xs text-red-400 font-bold uppercase tracking-widest leading-normal">
                Without camera access, the game will not function correctly[cite: 244].
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. DEVICE COMPATIBILITY GRID */}
        <section className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariant} initial="initial" whileInView="animate" className="space-y-6">
            <h3 className="text-2xl font-serif text-[#c2a24a] flex items-center gap-3">
              <CheckCircle2 className="text-green-500" /> Supported Devices
            </h3>
            <ul className="space-y-3 bg-[#1a1814] p-6 rounded-3xl border border-white/5">
              <li className="flex items-center gap-3 text-gray-300"> <ChevronRight size={14} className="text-[#c2a24a]" /> Android mobile phones [cite: 246]</li>
              <li className="flex items-center gap-3 text-gray-300"> <ChevronRight size={14} className="text-[#c2a24a]" /> Android tablets [cite: 246]</li>
              <li className="flex items-center gap-3 text-gray-300"> <ChevronRight size={14} className="text-[#c2a24a]" /> A working camera is required [cite: 249]</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariant} initial="initial" whileInView="animate" className="space-y-6">
            <h3 className="text-2xl font-serif text-red-400 flex items-center gap-3">
              <XCircle className="text-red-500" /> Unsupported
            </h3>
            <ul className="space-y-3 bg-red-500/5 p-6 rounded-3xl border border-red-500/10">
              <li className="flex items-center gap-3 text-gray-500"> <XCircle size={14} /> Desktop computers & Laptops [cite: 252, 253]</li>
              <li className="flex items-center gap-3 text-gray-500"> <XCircle size={14} /> Emulators or virtual devices [cite: 255]</li>
              <li className="flex items-center gap-3 text-gray-500"> <XCircle size={14} /> Devices without a camera [cite: 254]</li>
            </ul>
          </motion.div>
        </section>

        {/* 4. DEVELOPER MODE - THE "MASTER LIST" */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#c2a24a] mb-4">3. Enabling Developer Mode</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-black">Brand-Specific Step-by-Step Guide [cite: 270, 289]</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard Android */}
            <div className="bg-[#1a1814] p-8 rounded-[2rem] border border-[#c2a24a]/10">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="text-[#c2a24a]" />
                <h4 className="font-bold text-[#c2a24a] uppercase text-xs tracking-widest">Standard Android Method [cite: 273]</h4>
              </div>
              <ol className="space-y-3 text-sm text-gray-400">
                <li>1. Open Settings [cite: 276]</li>
                <li>2. Tap About phone or About tablet [cite: 277]</li>
                <li>3. Find Build number [cite: 278]</li>
                <li>4. Tap "Build number" 7 times continuously [cite: 279]</li>
                <li className="text-[#c2a24a] italic mt-2">Message: "You are now a developer!" [cite: 283]</li>
              </ol>
            </div>

            {/* Apple Devices */}
            <div className="bg-[#1a1814] p-8 rounded-[2rem] border border-[#c2a24a]/10">
              <div className="flex items-center gap-3 mb-6">
                <Apple className="text-[#c2a24a]" />
                <h4 className="font-bold text-[#c2a24a] uppercase text-xs tracking-widest">Apple (iOS 16+) [cite: 317, 319]</h4>
              </div>
              <ol className="space-y-3 text-sm text-gray-400">
                <li>1. Open Settings → Privacy & Security [cite: 320, 321]</li>
                <li>2. Tap Developer Mode → Toggle ON [cite: 322, 323]</li>
                <li>3. Restart the device to activate [cite: 324]</li>
                <li className="text-red-400 text-xs mt-2 uppercase font-black">Note: APKs are NOT supported on iOS [cite: 264]</li>
              </ol>
            </div>

            {/* Brand Specific Grid */}
            {[
              { brand: "Samsung (One UI)", path: "Settings → About phone → Software information → Build number (7x) [cite: 290, 293]" },
              { brand: "Xiaomi / Redmi (MIUI)", path: "Settings → About phone → MIUI version (7x) [cite: 295, 296]" },
              { brand: "OnePlus (OxygenOS)", path: "Settings → About device → Build number (7x) [cite: 303, 304]" },
              { brand: "Realme / OPPO", path: "Settings → About device → Version → Build number (7x) [cite: 305, 306]" },
              { brand: "Google Pixel / Nothing", path: "Settings → About phone → Build number (7x) [cite: 311, 313, 314]" },
              { brand: "Lenovo / Motorola", path: "Settings → About device → Build number (7x) [cite: 315, 316]" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
                <span className="text-[10px] text-[#c2a24a] font-black uppercase tracking-widest mb-2">{item.brand}</span>
                <p className="text-xs text-gray-400 leading-relaxed font-mono">{item.path}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. IMPORTANT NOTES & WARNINGS */}
        <section className="py-16 border-t border-[#c2a24a]/10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-[#c2a24a] font-serif text-xl flex items-center gap-2"><Cpu size={20}/> Hardware Notes</h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Performance varies by hardware[cite: 268].</li>
                <li>• Recommended stable lighting for camera[cite: 269].</li>
                <li>• Optimized for touchscreen interaction[cite: 267].</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#c2a24a] font-serif text-xl flex items-center gap-2"><Settings size={20}/> Settings</h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Enable Developer Options if required[cite: 259].</li>
                <li>• Keep Camera & Storage enabled[cite: 260].</li>
                <li>• Ensure sufficient storage space[cite: 261].</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-red-400 font-serif text-xl flex items-center gap-2"><Info size={20}/> Risks</h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Changing unknown settings may reduce battery life[cite: 334].</li>
                <li>• May cause system instability or affect performance[cite: 333, 335].</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL NOTICE */}
        <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} className="text-center bg-[#c2a24a] p-4 rounded-[2rem] text-black">
          <h2 className="text-3xl font-serif mb-4 italic">Final Notice</h2>
          <p className="max-w-2xl mx-auto font-bold uppercase text-[10px] tracking-[0.3em] leading-relaxed">
            Download the APK file to your device. Camera access is mandatory. 
            The game is supported only on mobile phones and tablets. Without a camera-enabled device, 
            the game cannot be played[cite: 337, 338, 339, 340, 341].
          </p>
        </motion.div>

      </main>
    </div>
  );
}