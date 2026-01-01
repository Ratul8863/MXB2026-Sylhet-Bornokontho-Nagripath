import { useState, useRef } from "react";
import { Play, Pause, Upload } from "lucide-react";
import * as filestack from "filestack-js";

const client = filestack.init("ArwG7ExQMQ5CpdhjzUM9Kz");

export default function Add() {
  const [formData, setFormData] = useState({
    bangla: "",
    syloti: "",
    pronunciation: "",
    meaning: "",
    category: "vowel",
    level: "beginner",
    banglaAudioUrl: "",
    sylotiAudioUrl: "",
    banglaexample: "",
    sylotiexample: "",
  });

  const [isPlaying, setIsPlaying] = useState({ bangla: false, syloti: false });
  const [uploading, setUploading] = useState({ bangla: false, syloti: false }); // loader state

  const audioRefs = { bangla: useRef(null), syloti: useRef(null) };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (fieldName, file) => {
    try {
      setUploading((prev) => ({ ...prev, [fieldName]: true }));
      const result = await client.upload(file);
      setFormData((prev) => ({ ...prev, [fieldName]: result.url }));
      alert("Audio uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to upload audio");
    } finally {
      setUploading((prev) => ({ ...prev, [fieldName]: false }));
    }
  };

  const togglePlay = (field) => {
    const audio = audioRefs[field].current;
    if (!audio) return;

    if (isPlaying[field]) {
      audio.pause();
      setIsPlaying((prev) => ({ ...prev, [field]: false }));
    } else {
      audio.play();
      setIsPlaying((prev) => ({ ...prev, [field]: true }));
      audio.onended = () => setIsPlaying((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bornokontho-server.vercel.app/letters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert("✅ Letter added successfully!");
      setFormData({
        bangla: "",
        syloti: "",
        pronunciation: "",
        meaning: "",
        category: "vowel",
        level: "beginner",
        banglaAudioUrl: "",
        sylotiAudioUrl: "",
        banglaexample: "",
        sylotiexample: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add letter");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-base-100 rounded-3xl shadow-xl p-8 max-w-3xl w-full border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          ➕ Add New Letter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ label: "Bangla Letter", name: "bangla" },
            { label: "Syloti Letter", name: "syloti" },
            { label: "Pronunciation", name: "pronunciation" },
            { label: "Meaning", name: "meaning" },
            { label: "Bangla Example", name: "banglaexample" },
            { label: "Syloti Example", name: "sylotiexample" }].map((field) => (
            <fieldset key={field.name}>
              <label className="label">
                <span className="label-text">{field.label}</span>
              </label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="input input-bordered w-full"
                required={field.name === "bangla" || field.name === "syloti"}
              />
            </fieldset>
          ))}

          {/* Level */}
          <fieldset>
            <label className="label"><span className="label-text">Level</span></label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </fieldset>

          {/* Category */}
          <fieldset>
            <label className="label"><span className="label-text">Category</span></label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="vowel">Vowel</option>
              <option value="consonant">Consonant</option>
            </select>
          </fieldset>

          {/* Audio Uploads */}
          {[{ label: "Bangla Audio", name: "banglaAudioUrl" },
            { label: "Syloti Audio", name: "sylotiAudioUrl" }].map((field) => (
            <fieldset key={field.name}>
              <label className="label flex items-center justify-between">
                <span className="label-text">{field.label}</span>
                {formData[field.name] && (
                  <button
                    type="button"
                    onClick={() => togglePlay(field.name)}
                    className="btn btn-sm btn-outline flex items-center gap-2"
                  >
                    {isPlaying[field.name] ? <Pause size={16} /> : <Play size={16} />}
                    {isPlaying[field.name] ? "Pause" : "Play"}
                  </button>
                )}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => handleFileUpload(field.name, e.target.files[0])}
                  className="input input-bordered flex-1"
                  disabled={uploading[field.name]} // disable during upload
                />
                {uploading[field.name] ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <Upload size={20} className="text-gray-500" />
                )}
              </div>
              {formData[field.name] && (
                <audio ref={audioRefs[field.name]} src={formData[field.name]} className="hidden" />
              )}
            </fieldset>
          ))}
        </div>

        <button className="btn btn-primary w-full mt-4 text-lg">Add Letter</button>
      </form>
    </div>
  );
}
