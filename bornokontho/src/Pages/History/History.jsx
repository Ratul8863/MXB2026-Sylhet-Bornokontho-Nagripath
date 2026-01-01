import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import hero from "../../assets/history.jpeg";
import overviewImg from "../../assets/D8.jpeg";
import originsImg from "../../assets/D10.jpeg";
import lineageImg from "../../assets/D18.jpeg";
import structureImg from "../../assets/D3.jpeg";
import socialImg from "../../assets/D17.jpeg";
import geographicalImg from "../../assets/D16.jpeg";
import printImg from "../../assets/D19.jpeg";
import authorsImg1 from "../../assets/D13.jpeg";
import authorsImg2 from "../../assets/D14.jpeg";
import authorsImg3 from "../../assets/D15.jpeg";
import declineImg from "../../assets/D9.jpeg";
import revivalImg from "../../assets/D10.jpeg";


import "swiper/css";
import "swiper/css/pagination";
import { i } from "framer-motion/client";

export default function History() {
  const [modalData, setModalData] = useState(null);

  // --- 100% DATA FROM YOUR DOCUMENT (NOTHING REMOVED) ---
  const fullContent = {
    overview: {
      title: "Historical Overview",
      content: `The Sylheti Nagri script also known as Sylhet Nagri, represents one of the most unique and culturally significant writing systems to emerge in eastern South Asia. Developed specifically for the Sylheti language, the script functioned for centuries as a vital tool of communication, education, and spiritual expression for the people of the Sylhet region. Unlike scripts imposed or standardized by royal courts or colonial administrations, Sylheti Nagri arose organically from within the community itself, shaped by local linguistic needs, religious practices, and social realities. Its history spans more than four hundred years, encompassing periods of vibrant literary production, widespread everyday use, gradual marginalization, and finally, renewed recognition in the modern digital era. Through its evolution, Sylheti Nagri reflects the broader social history of Sylhet—its religious transformations, cultural interactions, and enduring struggle to preserve linguistic identity.`
    },
    origins: {
      title: "Origins, Tradition, and Early Development",
      content: `The precise origins of the Sylheti Nagri script remain uncertain, and scholars continue to debate its earliest development. However, historical and linguistic evidence confirms that the script was already well established by the sixteenth century, with manuscripts and dated works demonstrating its mature use. Local tradition strongly connects the emergence of the script to the arrival of Hazrat Shah Jalal in the early fourteenth century and the subsequent spread of Islam throughout the Sylhet region. As Islamic teachings became embedded in local society, there arose a pressing need to communicate religious knowledge in the spoken Sylheti language, rather than in Arabic or Persian, which were inaccessible to the majority of the population. Oral histories suggest that religious scholars, Sufi saints, and preachers began recording sermons, moral guidance, devotional poetry, and religious narratives in a simplified local script that ordinary people could easily learn. Over time, this practical solution evolved into what became known as Sylheti Nagri, deeply intertwining the script with the region’s Islamic educational and devotional traditions.\n\nReligion did not merely influence the content written in Sylheti Nagri; it also shaped the social purpose of the script. Writing became an extension of preaching and teaching, allowing faith-based knowledge to circulate beyond oral transmission. Through handwritten manuscripts and later printed texts, religious ideas reached households, village study circles, and informal learning spaces, reinforcing the script’s association with spiritual life and moral instruction.`
    },
    lineage: {
      title: "Linguistic Lineage and Script Evolution",
      content: `From a linguistic perspective, most modern researchers trace the roots of Sylheti Nagri to the Kaithi script of North India, particularly from the Bihar region. Kaithi itself is derived from older Nagari-based Brahmic scripts and was historically used for informal writing, correspondence, and record-keeping. Structural similarities such as character shapes, vowel marking systems, and consonantal organization strongly suggest that Sylheti Nagri evolved through the local adaptation of these older script traditions. Some scholars propose that Nagar Brahmins, known for retaining Nagari-style scripts while adopting regional languages, may have played a role in transmitting script knowledge into Sylhet. Over generations, many of these groups converted to Islam, carrying script traditions into Muslim literary culture.\n\nOther theories point to indirect Afghan or Central Asian influence during the sixteenth and seventeenth centuries, citing visual similarities between certain Sylheti Nagri characters and symbols found on Afghan-era coins minted in Bengal. Regardless of the exact pathway, Sylheti Nagri clearly represents a localized synthesis of broader South Asian script traditions, shaped by Sylheti phonology, religious life, migration, and social context. Its evolution reflects Sylhet’s historical position as a crossroads of cultures, languages, and belief systems.`
    },
    structure: {
      title: "Script Structure and Accessibility",
      content: `Structurally, Sylheti Nagri belongs to the abugida system and is part of the wider Brahmic family of scripts, yet it differs markedly from standard Bengali and related writing systems. The script consists of approximately thirty-two to thirty-three characters, including five vowels and twenty-seven to twenty-eight consonants, and notably lacks conjunct consonants, which are a defining feature of Bengali and Sanskrit-based scripts. Instead, vowel sounds are indicated through simple markers known as xar, placed before, after, above, or below consonants. This highly phonetic and streamlined structure made Sylheti Nagri exceptionally easy to learn and use.\n\nTraditional accounts famously claim that the script could be mastered in “two and a half days,” a statement that, whether literal or symbolic, reflects its accessibility. This simplicity enabled widespread literacy among groups often excluded from formal education, including women, rural communities, artisans, traders, and informal religious learners. In this way, Sylheti Nagri functioned as a truly democratic script, empowering ordinary people to read, write, and preserve knowledge in their own language without dependence on elite institutions.`
    },
    social: {
      title: "Social Role and Cultural Function",
      content: `Beyond its technical structure, Sylheti Nagri functioned as a powerful social instrument within Sylheti society. It thrived in domestic spaces, mosques, village gatherings, and Sufi lodges, where learning was shared collectively rather than hierarchically. The script allowed people to record personal correspondence, religious reflections, folk narratives, and everyday records, embedding literacy into daily life. Because it was not regulated by the state or formal education systems, its use remained flexible and responsive to community needs.\n\nSylheti Nagri also played a crucial role in preserving oral traditions. Many written texts retain rhythmic language and narrative styles characteristic of oral storytelling, suggesting that writing served to support memory rather than replace speech. In this sense, the script bridged oral and written culture, ensuring continuity while allowing stories, beliefs, and historical knowledge to be transmitted across generations.`
    },
    spread: {
      title: "Geographical Spread and Everyday Usage",
      content: `Historically, Sylheti Nagri was used primarily across the Sylhet region, including Sylhet Sadar, Karimganj, Moulvibazar, Sunamganj, and Greater Mymensingh, as well as in the Barak Valley of Assam and parts of Tripura. Through river networks, trade routes, and migration, its use extended beyond these core areas to cities such as Dhaka, Kolkata, Chittagong, Barisal, Noakhali, and Bankura.\n\nUnlike Bengali, Persian, or English, Sylheti Nagri was rarely employed for state administration or elite governance. Instead, it flourished as a people’s script, deeply embedded in everyday life. It was widely used for religious instruction, Sufi literature, poetry, folk narratives, personal letters, land notes, moral treatises, and educational texts. British linguist George A. Grierson, writing in the Linguistic Survey of India in 1903, observed that Sylheti Nagri was commonly used for informal writing, signatures, and the reading of puthi literature, even though it remained outside official institutions.`
    },
    print: {
      title: "Print Culture and Literary Flourishing",
      content: `From the late nineteenth century onward, Sylheti Nagri entered a vibrant print era, significantly expanding its reach and influence. Several printing presses played a crucial role in this transformation, including the Islamia Press in Bandar Bazar, Sylhet, established around 1869, Sarada Printing in Sylhet, Hamidi Press in Sealdah, Kolkata, and General Printing Works in Kolkata. These presses produced religious books, poetry collections, primers, and popular literature in large numbers, making Sylheti Nagri one of the most widely read scripts in the region during this period.\n\nMore than one hundred and fifty manuscripts and printed books survive today, though historical evidence suggests that many more have been lost. The literary output covered a wide range of genres, including Islamic theology, biographies of the Prophet, Sufi mysticism, Karbala narratives known as Jongonama, moral instruction, romantic epics, folk medicine, astrology, magical texts, war poetry, and historical accounts. The language of these works deliberately minimized Sanskrit influence and favored Perso-Arabic vocabulary, reflecting the Islamic intellectual environment in which Sylheti Nagri literature developed.`
    },
    authors: {
      title: "Authors and Intellectual Legacy",
      content: `Several authors stand out in the script’s literary history. Ghulam Husan’s Talib Husan, dated to 1549, is the earliest known dated work written in Sylheti Nagri and marks the script’s early maturity. Munshi Sadeq Ali’s Halat-un-Nabi, published in 1855, became the most widely circulated and influential Sylheti Nagri book, read across generations. Other notable figures include Abdul Karim (Munshi), Syed Shah Noor, and Shitalang Shah, whose devotional, instructional, and mystical writings enriched the script’s literary heritage and ensured its central role in Sylheti religious and cultural life.`
    },
    decline: {
      title: "Decline and Marginalization",
      content: `Despite its widespread use, the decline of Sylheti Nagri began in the late nineteenth century and accelerated throughout the twentieth century. British colonial education policies promoted standardized Bengali as the primary medium of instruction, gradually marginalizing local scripts. Sylheti Nagri’s exclusion from formal schooling and administration weakened its institutional support, while the political reclassification of Sylhet under the Bengal Presidency in 1874 further reinforced Bengali dominance.\n\nAfter the Partition of 1947, shifting language politics intensified this marginalization, and the Liberation War of 1971 led to the destruction of printing presses and archival materials. Social attitudes increasingly associated Bengali and English with modernity, education, and economic advancement, while Sylheti Nagri came to be viewed as outdated. By the 1970s, active printing had nearly disappeared, although manuscripts continued to survive in private collections, mosques, and family archives, preserved through personal devotion rather than institutional care.`
    },
    revival: {
      title: "Revival, Digitization, and Contemporary Significance",
      content: `Since the early twenty-first century, the Sylheti Nagri script has experienced a renewed phase of recognition and revival. Its inclusion in the Unicode Standard in 2005 marked a major milestone, enabling digital representation and global accessibility. The development of fonts such as Noto Sans Syloti Nagri, along with mobile and desktop keyboard layouts, has allowed the script to re-enter everyday use in digital environments.\n\nMajor preservation initiatives have played a crucial role in this revival. Notably, the British Library’s Endangered Archives Programme and the SOAS University of London Sylheti Project have digitized rare manuscripts, safeguarded historical documents, and promoted scholarly research on the script and its literary heritage. In Bangladesh, academic interest in Sylheti Nagri is growing.\n\nStudents of Metropolitan University, Sylhet, are actively conducting research on the Sylheti Nagri language and script, developing innovative tools such as custom keyboards, language converters, and educational applications. Their work also extends to 2D and 3D games, as well as the integration of artificial intelligence (AI) and augmented reality (AR) technologies, demonstrating the script’s potential in modern and immersive digital platforms.\n\nAlongside academic and technological efforts, cultural initiatives have gained momentum. Historical texts are being republished, cultural landmarks such as Nagri Chattar in Sylhet have been established, and diaspora communities—particularly in the United Kingdom—have organized exhibitions, workshops, and educational programs to promote awareness and learning. Today, Sylheti Nagri is increasingly understood as a powerful symbol of cultural identity, collective memory, and resistance to linguistic erasure.`
    },
    final: {
      title: "Historical and Cultural Significance",
      content: `Historically and culturally, the Sylheti Nagri script stands as a rare example of a community-driven writing tradition developed outside the authority of states or empires. It provides clear evidence of Sylheti as a historically distinct language, bridges oral and written culture, and preserves a rich Muslim literary heritage unique to the region. Although the script remains classified as endangered, ongoing revival efforts suggest that Sylheti Nagri can continue to live on—not only as a preserved historical legacy, but as a living, meaningful form of cultural expression in the modern world.\n\nSylheti Nagri is more than just a writing system—it represents a community-driven cultural heritage that grew organically from the needs of ordinary people rather than being imposed by rulers or colonial powers. For centuries, it empowered rural communities, women, artisans, and religious learners by giving them a simple, accessible way to read, write, and preserve their own language. It served as a bridge between oral traditions and written culture, ensuring that folk narratives, religious teachings, and everyday knowledge could be passed down across generations. By preserving the distinct identity of the Sylheti people, the script became a symbol of resistance against linguistic erasure and cultural domination. Even after its decline during colonial and post-colonial periods, Sylheti Nagri continues to inspire revival efforts in the modern digital age through Unicode inclusion, digitization projects, and diaspora initiatives. Today, it stands not only as a historical legacy but also as a living emblem of identity, memory, and cultural pride, reminding us that language and script are powerful tools of self-expression and community resilience.`
    }
  };

  const sectionVariant = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-[#1c1a14] text-[#f5f0e6] min-h-screen font-sans selection:bg-[#c2a24a] selection:text-black">
      
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#1c1a14] z-10" />
        <motion.img src={hero} className="absolute inset-0 w-full h-full object-cover" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2 }} />
        <div className="relative z-20 text-center px-6">
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-6xl md:text-8xl font-serif text-[#c2a24a] tracking-tight">History of Sylheti Nagri</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto italic font-light">"A script born from the people, for the people."</motion.p>
        </div>
      </section>

      {/* ================= SECTIONS WITH MODAL BUTTONS ================= */}
      
      {/* 1. Overview */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div {...sectionVariant} className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-serif text-[#c2a24a] mb-6">{fullContent.overview.title}</h2>
            <p className="text-gray-400 leading-relaxed text-justify line-clamp-6">{fullContent.overview.content}</p>
            <button onClick={() => setModalData(fullContent.overview)} className="mt-6 px-6 py-2 border border-[#c2a24a] text-[#c2a24a] hover:bg-[#c2a24a] hover:text-black transition-all rounded-full text-sm font-bold tracking-widest uppercase">Read Full History →</button>
          </div>
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden border border-[#c2a24a]/20 shadow-2xl aspect-video">
            <img src={overviewImg} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
          </div>
        </motion.div>
      </section>

      {/* 2. Origins */}
      <section className="bg-[#232018] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...sectionVariant} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden border border-[#c2a24a]/20 shadow-2xl aspect-video">
              <img src={originsImg} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-serif text-[#c2a24a] mb-6">{fullContent.origins.title}</h2>
              <p className="text-gray-400 leading-relaxed text-justify line-clamp-6">{fullContent.origins.content}</p>
              <button onClick={() => setModalData(fullContent.origins)} className="mt-6 px-6 py-2 border border-[#c2a24a] text-[#c2a24a] hover:bg-[#c2a24a] hover:text-black transition-all rounded-full text-sm font-bold tracking-widest uppercase">Explore Archive →</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Linguistic & Structure (Grid) */}
      {/* <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {[fullContent.lineage, fullContent.structure].map((item, idx) => (
            <motion.div key={idx} {...sectionVariant} className="bg-[#232018] p-10 rounded-3xl border border-[#c2a24a]/10 hover:border-[#c2a24a]/40 transition-colors">
              <h3 className="text-2xl font-serif text-[#c2a24a] mb-4">{item.title}</h3>
              <p className="text-gray-400 line-clamp-4 mb-6">{item.content}</p>
              <button onClick={() => setModalData(item)} className="text-[#c2a24a] text-xs font-bold tracking-[0.2em] uppercase hover:underline">View Analysis +</button>
            </motion.div>
          ))}
        </div>
      </section> */}

 <section className="bg-[#0f0e0c] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...sectionVariant} className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-serif text-[#c2a24a] mb-6">{fullContent.lineage.title}</h2>
              <p className="text-gray-400 line-clamp-5 mb-6">{fullContent.lineage.content}</p>
              <button onClick={() => setModalData(fullContent.lineage)} className="px-8 py-3 bg-[#c2a24a] text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors">Read lineage Impact</button>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square md:aspect-video border border-[#c2a24a]/20">
               <img src={lineageImg} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div {...sectionVariant} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden aspect-video border border-[#c2a24a]/20">
               <img src={structureImg} className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif text-[#c2a24a] mb-6">{fullContent.structure.title}</h2>
              <p className="text-gray-400 line-clamp-5 mb-6">{fullContent.structure.content}</p>
              <button onClick={() => setModalData(fullContent.structure)} className="px-8 py-3 border border-[#c2a24a] text-[#c2a24a] rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#c2a24a] hover:text-black transition-all">Trace Geography</button>
            </div>
          </motion.div>
        </div>
      </section>



 {/* 1. Overview */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div {...sectionVariant} className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-serif text-[#c2a24a] mb-6">{fullContent.social.title}</h2>
            <p className="text-gray-400 leading-relaxed text-justify line-clamp-6">{fullContent.social.content}</p>
            <button onClick={() => setModalData(fullContent.social)} className="mt-6 px-6 py-2 border border-[#c2a24a] text-[#c2a24a] hover:bg-[#c2a24a] hover:text-black transition-all rounded-full text-sm font-bold tracking-widest uppercase">Read Full History →</button>
          </div>
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden border border-[#c2a24a]/20 shadow-2xl aspect-video">
            <img src={socialImg} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
          </div>
        </motion.div>
      </section>

      {/* 2. Origins */}
      <section className="bg-[#232018] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...sectionVariant} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden border border-[#c2a24a]/20 shadow-2xl aspect-video">
              <img src={originsImg} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-serif text-[#c2a24a] mb-6">{fullContent.spread.title}</h2>
              <p className="text-gray-400 leading-relaxed text-justify line-clamp-6">{fullContent.spread.content}</p>
              <button onClick={() => setModalData(fullContent.spread)} className="mt-6 px-6 py-2 border border-[#c2a24a] text-[#c2a24a] hover:bg-[#c2a24a] hover:text-black transition-all rounded-full text-sm font-bold tracking-widest uppercase">Explore Archive →</button>
            </div>
          </motion.div>
        </div>
      </section>





      {/* 4. Social & Geographical */}
     <section className="bg-[#0f0e0c] py-24 relative overflow-hidden">
  {/* Soft Background Glow */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c2a24a]/5 blur-[120px] pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* --- Section 1: Print Impact --- */}
    <motion.div {...sectionVariant} className="grid md:grid-cols-2 gap-16 items-center mb-32">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c2a24a]/20 bg-[#c2a24a]/5 text-[#c2a24a] text-[10px] font-black uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#c2a24a] animate-pulse"></span> 
          The Printing Revolution
        </div>
        <h2 className="text-5xl font-serif text-[#c2a24a] leading-tight">{fullContent.print.title}</h2>
        <p className="text-gray-400 text-lg leading-relaxed font-light">{fullContent.print.content}</p>
        <button 
          onClick={() => setModalData(fullContent.print)} 
          className="px-8 py-3 bg-[#c2a24a] text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-lg shadow-[#c2a24a]/10"
        >
          Read print Impact
        </button>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-4 border border-[#c2a24a]/10 rounded-[3rem]"></div>
        <div className="relative rounded-[2.5rem] overflow-hidden aspect-video border border-[#c2a24a]/20 shadow-2xl">
          <img 
            src={printImg}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
            alt="Print technology"
          />
        </div>
      </div>
    </motion.div>

    {/* --- Section 2: THE THREE CUSTODIANS (3 Person Image Layout) --- */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-32"
    >
      <div className="text-center mb-16">
        <h3 className="text-[#c2a24a] font-serif text-3xl mb-2 italic">The Faces of Preservation</h3>
        <div className="w-20 h-px bg-[#c2a24a]/30 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { src: authorsImg1, name: "Archivist One", role: "Researcher" },
          { src: authorsImg2, name: "Archivist Two", role: "Linguist" },
          { src: authorsImg3, name: "Archivist Three", role: "Historian" }
        ].map((person, idx) => (
          <div key={idx} className="group relative">
            <div className={`relative overflow-hidden rounded-[3rem] aspect-[3/4] border border-[#c2a24a]/20 transition-all duration-500 ${idx === 1 ? 'md:-translate-y-8' : 'md:translate-y-8'}`}>
              <img 
                src={person.src} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                alt={person.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-0 right-0 text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-[#c2a24a] font-serif text-xl">{person.name}</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-1">{person.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* --- Section 3: Authors & Geography --- */}
    <motion.div {...sectionVariant} className=" gap-16 items-center">
      {/* <div className="order-2 md:order-1 relative rounded-[3rem] overflow-hidden aspect-video border border-[#c2a24a]/20 group">
         <img 
            src="https://images.unsplash.com/photo-1459706662435-bc820173e6da?q=80&w=2070" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            alt="Authors archive"
          />
          <div className="absolute inset-0 bg-[#c2a24a]/10 mix-blend-overlay"></div>
      </div> */}

      <div className="order-1 md:order-2 space-y-6">
        <span className="text-[#c2a24a] text-xs font-black tracking-[0.4em] uppercase">Literary Legacy</span>
        <h2 className="text-5xl font-serif text-[#c2a24a] leading-tight">{fullContent.authors.title}</h2>
        <p className="text-gray-400 text-lg leading-relaxed">{fullContent.authors.content}</p>
        <button 
          onClick={() => setModalData(fullContent.authors)} 
          className="px-10 py-4 border-2 border-[#c2a24a] text-[#c2a24a] rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#c2a24a] hover:text-black transition-all"
        >
          Trace Geography
        </button>
      </div>
    </motion.div>

  </div>
</section>

      {/* 5. Print Culture & Authors */}
      {/* <section className="max-w-7xl mx-auto px-6 py-24">
         <div className="grid md:grid-cols-2 gap-12">
            {[fullContent.print, fullContent.authors].map((item, idx) => (
              <motion.div key={idx} {...sectionVariant} className="relative group">
                 <div className="absolute inset-0 bg-[#c2a24a]/5 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform" />
                 <div className="relative bg-[#1c1a14] p-12 rounded-3xl border border-[#c2a24a]/20 h-full">
                    <h2 className="text-3xl font-serif text-[#c2a24a] mb-6">{item.title}</h2>
                    <p className="text-gray-400 line-clamp-6 mb-8">{item.content}</p>
                    <button onClick={() => setModalData(item)} className="text-[#c2a24a] font-black italic border-b border-[#c2a24a] pb-1 hover:text-white hover:border-white transition-all">Discover Details</button>
                 </div>
              </motion.div>
            ))}
         </div>
      </section> */}

      {/* 6. Decline & Revival */}
      <section className="bg-[#232018] py-24">
        <div className="max-w-7xl mx-auto px-6">
           <motion.div {...sectionVariant} className="mb-20">
              <h2 className="text-4xl font-serif text-[#c2a24a] mb-8 text-center">{fullContent.decline.title}</h2>
              <p className="text-gray-400 text-center max-w-4xl mx-auto line-clamp-4">{fullContent.decline.content}</p>
              <div className="flex justify-center mt-8">
                <button onClick={() => setModalData(fullContent.decline)} className="px-10 py-3 border border-red-900/50 text-red-500/80 hover:bg-red-900/20 rounded-full transition-all">Review the Decline</button>
              </div>
           </motion.div>

           <motion.div {...sectionVariant} className="bg-black/40 p-12 rounded-[3rem] border border-[#c2a24a]/10">
              <h2 className="text-4xl font-serif text-[#c2a24a] mb-8">{fullContent.revival.title}</h2>
              <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed text-justify">
                <p className="line-clamp-[10]">{fullContent.revival.content.split('\n\n')[0]}</p>
                <p className="line-clamp-[10]">{fullContent.revival.content.split('\n\n')[1]}</p>
              </div>
              <button onClick={() => setModalData(fullContent.revival)} className="mt-10 w-full py-4 bg-[#c2a24a] text-black font-bold uppercase tracking-widest rounded-2xl hover:bg-white transition-colors">See the Digital Renaissance</button>
           </motion.div>
        </div>
      </section>

      {/* 7. Final Significance */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div {...sectionVariant}>
           <h2 className="text-5xl font-serif text-[#c2a24a] mb-12 italic">{fullContent.final.title}</h2>
           <p className="text-xl text-gray-400 font-light leading-relaxed max-w-5xl mx-auto line-clamp-6">{fullContent.final.content}</p>
           <button onClick={() => setModalData(fullContent.final)} className="mt-12 px-12 py-4 bg-transparent border-2 border-[#c2a24a] text-[#c2a24a] rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform">Read the Ultimate Conclusion</button>
        </motion.div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-24 bg-[#0f0e0c]">
        <h2 className="text-center text-5xl font-serif text-[#c2a24a] mb-16 underline decoration-[#c2a24a]/20 underline-offset-8">Historical Timeline</h2>
        <Swiper modules={[Pagination, Mousewheel]} pagination={{ clickable: true }} mousewheel spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="max-w-7xl mx-auto px-6 pb-20">
          {Object.entries(fullContent).map(([key, item]) => (
            <SwiperSlide key={key}>
              <div className="bg-[#1c1a14] p-10 rounded-3xl border border-[#c2a24a]/10 h-[350px] flex flex-col justify-between hover:bg-[#232018] transition-colors cursor-pointer" onClick={() => setModalData(item)}>
                <div>
                  <span className="text-[#c2a24a] font-serif text-2xl mb-4 block leading-tight">{item.title}</span>
                  <p className="text-gray-500 text-sm line-clamp-5 italic">{item.content}</p>
                </div>
                <span className="text-[#c2a24a] text-[10px] tracking-widest font-bold">CLICK TO ENLARGE</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= MODAL COMPONENT ================= */}
      <AnimatePresence>
        {modalData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModalData(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} className="relative bg-[#1c1a14] border border-[#c2a24a]/30 w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-[2rem] p-8 md:p-20 shadow-[0_0_100px_rgba(194,162,74,0.15)]">
              <button onClick={() => setModalData(null)} className="absolute top-8 right-8 text-gray-500 hover:text-[#c2a24a] text-3xl transition-colors">✕</button>
              <div className="max-w-3xl mx-auto">
                <span className="text-[#c2a24a] uppercase text-xs tracking-[0.5em] font-bold block mb-6 opacity-60">Full Archive Entry</span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#f5f0e6] mb-12 leading-tight">{modalData.title}</h2>
                <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-8 whitespace-pre-line text-justify font-light">
                  {modalData.content}
                </div>
                <div className="mt-20 pt-10 border-t border-[#c2a24a]/10 text-center">
                   <button onClick={() => setModalData(null)} className="text-[#c2a24a] uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">Close Document</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}