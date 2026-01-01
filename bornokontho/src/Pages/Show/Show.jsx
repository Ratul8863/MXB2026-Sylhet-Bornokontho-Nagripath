import { useEffect, useState, useRef } from "react";
import { Volume2, Edit, Trash2 } from "lucide-react";
import useAuth from "../../Hooks/useAuth";
import * as filestack from "filestack-js";

const client = filestack.init("ArwG7ExQMQ5CpdhjzUM9Kz");

export default function Show() {
  const { cuser } = useAuth();
  const [letters, setLetters] = useState([]);
  const [filteredLetters, setFilteredLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLetter, setEditingLetter] = useState(null);
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);
  const [currentField, setCurrentField] = useState(null);

  useEffect(() => {
    fetchLetters();
  }, []);

  useEffect(() => {
    filter === "all"
      ? setFilteredLetters(letters)
      : setFilteredLetters(letters.filter(l => l.category === filter));
  }, [filter, letters]);

  const fetchLetters = async () => {
    const res = await fetch("https://bornokontho-server.vercel.app/letters");
    const data = await res.json();
    setLetters(data);
    setLoading(false);
  };

  const playAudio = (src) => {
    audioRef.current.src = src;
    audioRef.current.play();
  };

  const openEditModal = (letter) => {
    setEditingLetter(letter);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingLetter(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#14120d]">
        <span className="loading loading-spinner loading-lg text-[#c2a24a]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen  max-w-7xl mx-auto bg-[#14120d] p-6 text-[#f5f0e6]">

      {/* Title */}
      <h1 className="text-3xl font-serif font-bold text-center mb-8 text-[#c2a24a] tracking-wide">
        Letters Gallery
      </h1>

      {/* Filter */}
      <div className="flex justify-center gap-4 mb-10">
        {["all", "vowel", "consonant"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-md border font-serif
              ${filter === f
                ? "bg-[#c2a24a] text-black border-[#c2a24a]"
                : "border-[#3a3324] text-[#b6ae9c] hover:text-[#c2a24a]"
              }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <audio ref={audioRef} />
      <input
        type="file"
        accept="audio/*"
        ref={fileInputRef}
        onChange={() => {}}
        className="hidden"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredLetters.map(letter => (
          <div
            key={letter._id}
            className="bg-[#1f1b14] border border-[#3a3324]
              rounded-2xl p-6 text-center
              hover:scale-[1.02] transition"
          >

            {/* Letters */}
            <div className="flex gap-3 mb-4">
              {[
                { label: "Bangla", value: letter.bangla, audio: letter.banglaAudioUrl },
                { label: "Syloti", value: letter.syloti, audio: letter.sylotiAudioUrl },
              ].map((item, i) => (
                <div key={i} className="flex-1 border border-[#3a3324] rounded-xl p-3">
                  <p className="text-4xl font-bold text-[#c2a24a]">
                    {item.value}
                  </p>
                  <p className="text-xs text-[#b6ae9c] mt-1">{item.label}</p>
                  {item.audio && (
                    <button
                      onClick={() => playAudio(item.audio)}
                      className="mt-2 text-[#c2a24a] hover:scale-110 transition"
                    >
                      <Volume2 size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="text-sm space-y-1 text-[#b6ae9c]">
              <p><span className="text-[#f5f0e6]">Pronunciation:</span> {letter.pronunciation}</p>
              <p><span className="text-[#f5f0e6]">Meaning:</span> {letter.meaning}</p>
              <p><span className="text-[#f5f0e6]">Level:</span> {letter.level}</p>
              <p><span className="text-[#f5f0e6]">Category:</span> {letter.category}</p>
              <p>
                <span className="text-[#f5f0e6]">Example:</span>{" "}
                {letter.banglaexample} →
                <span className="text-[#c2a24a]"> {letter.sylotiexample}</span>
              </p>
            </div>

            {/* Admin Actions */}
            {cuser?.role === "admin" && (
              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={() => openEditModal(letter)}
                  className="flex items-center gap-1 text-[#c2a24a] hover:underline"
                >
                  <Edit size={16} /> Edit
                </button>
                <button
                  onClick={() => confirm("Delete?")}
                  className="flex items-center gap-1 text-red-400 hover:underline"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal can be themed next (step 2) */}
    </div>
  );
}



// import { useEffect, useState, useRef } from "react";
// import { Volume2 } from "lucide-react";

// export default function Show() {
//   const [letters, setLetters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     fetch("https://bornokontho-server.vercel.app//letters")
//       .then(res => res.json())
//       .then(data => {
//         setLetters(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   const playAudio = (src) => {
//     if (audioRef.current) {
//       audioRef.current.src = src;
//       audioRef.current.play();
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   return (
//    <></>
//   );
// }