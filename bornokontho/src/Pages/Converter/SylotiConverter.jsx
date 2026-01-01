import { useState } from "react";

/* ===============================
   SYLOTI ⇄ BANGLA SAFE MAP
   =============================== */

const banglaToSyloti = {
  "অ": "ꠅ", "আ": "ꠀ", "ই": "ꠁ", "ঈ": "ꠁ", "উ": "ꠃ", "ঊ": "ꠃ",
  "এ": "ꠄ", "ঐ": "ꠅꠁ", "ও": "ꠅ", "ঔ": "ꠅꠃ",

  "ক": "ꠇ","খ": "ꠈ","গ": "ꠉ","ঘ": "ꠊ","ঙ": "ꠋ",
  "চ": "ꠌ","ছ": "ꠍ","জ": "ꠎ","ঝ": "ꠏ","ঞ": "ꠘ",
  "ট": "ꠐ","ঠ": "ꠑ","ড": "ꠒ","ঢ": "ꠓ","ণ": "ꠘ",
  "ত": "ꠔ","থ": "ꠕ","দ": "ꠖ","ধ": "ꠗ","ন": "ꠘ",
  "প": "ꠙ","ফ": "ꠚ","ব": "ꠛ","ভ": "ꠜ","ম": "ꠝ",
  "য": "ꠎ","র": "ꠞ","ল": "ꠟ",
  "শ": "ꠡ","ষ": "ꠡ","স": "ꠡ","হ": "ꠢ",

  "া": "ꠣ","ি": "ꠤ","ী": "ꠤ","ু": "ꠥ","ূ": "ꠥ",
  "ে": "ꠦ","ৈ": "ꠧꠁ","ো": "ꠧ","ৌ": "ꠧꠃ",

  "ং": "ꠋ","ঃ": "ꠂ","ঁ": "꠪",
  "য়": "ꠅ","ক্ষ": "ꠇ꠆ꠡ",

  "০": "০","১": "I","২": "ᚴ","৩": "৩","৪": "ᑲ",
  "৫": "☽","৬": "ᑯ","৭": "V","৮": "8","৯": "৭",

  "।": "*",",": ",","?": "?",
};

const sylotiToBangla = Object.fromEntries(
  Object.entries(banglaToSyloti).map(([b, s]) => [s, b])
);

export default function SylotiConverter() {
  const [mode, setMode] = useState("bn-to-syl");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const activeMap = mode === "bn-to-syl" ? banglaToSyloti : sylotiToBangla;

  const convert = (text) => {
    let result = "";
    for (const char of text) result += activeMap[char] || char;
    setOutput(result);
  };

  return (
    <div className="min-h-screen bg-[#14120d] p-6 text-[#f5f0e6]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-serif font-bold text-center mb-2 text-[#c2a24a] tracking-wide">
          Syloti Nagri Converter
        </h1>
        <p className="text-center text-[#b6ae9c] mb-10">
          Ancient Bangla ⇄ Syloti Unicode Translator
        </p>

        {/* Mode Switch */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { key: "bn-to-syl", label: "Bangla → Syloti" },
            { key: "syl-to-bn", label: "Syloti → Bangla" },
          ].map(btn => (
            <button
              key={btn.key}
              onClick={() => {
                setMode(btn.key);
                setOutput("");
              }}
              className={`px-5 py-2 font-serif rounded-md border transition
                ${mode === btn.key
                  ? "bg-[#c2a24a] text-black border-[#c2a24a]"
                  : "border-[#3a3324] text-[#b6ae9c] hover:text-[#c2a24a]"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Converter Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6
          bg-[#1f1b14] border border-[#3a3324]
          p-6 rounded-2xl shadow-xl">

          {/* Input */}
          <div>
            <h3 className="font-serif mb-2 text-[#c2a24a]">Input</h3>
            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                convert(e.target.value);
              }}
              className="
                w-full h-48 p-4 rounded-xl
                bg-[#14120d] border border-[#3a3324]
                text-[#f5f0e6]
                focus:outline-none focus:border-[#c2a24a]
              "
              placeholder="Type here..."
              style={{ fontFamily: "Noto Sans Syloti Nagri, system-ui" }}
            />
          </div>

          {/* Output */}
          <div>
            <h3 className="font-serif mb-2 text-[#c2a24a]">Output</h3>
            <textarea
              value={output}
              readOnly
              className="
                w-full h-48 p-4 rounded-xl
                bg-[#1a1712] border border-[#3a3324]
                text-[#c2a24a]
              "
              placeholder="Converted text..."
              style={{ fontFamily: "Noto Sans Syloti Nagri, system-ui" }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => navigator.clipboard.writeText(output)}
            className="
              px-6 py-2 rounded-md font-serif
              bg-[#c2a24a] text-black
              hover:bg-[#b0903f] transition
            "
          >
            Copy
          </button>

          <button
            onClick={() => {
              setInput("");
              setOutput("");
            }}
            className="
              px-6 py-2 rounded-md font-serif
              border border-[#3a3324]
              text-[#b6ae9c]
              hover:text-[#c2a24a]
            "
          >
            Clear
          </button>
        </div>

      </div>
    </div>
  );
}
