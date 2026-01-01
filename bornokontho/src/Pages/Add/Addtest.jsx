import { useState } from "react";
import * as filestack from "filestack-js";

const client = filestack.init("ArwG7ExQMQ5CpdhjzUM9Kz"); // replace with your API key

export default function Addtest() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (fieldName, file) => {
    try {
      const result = await client.upload(file);
      // result.url has the hosted audio URL
      setFormData((prev) => ({ ...prev, [fieldName]: result.url }));
      alert("Audio uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to upload audio");
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
      alert("✅ Letter added successfully");
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
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-base-100 rounded-box border border-warning p-6 max-w-3xl w-full">
        <h2 className="card-title justify-center text-primary">➕ Add New Letter</h2>

        {/* Your existing fields... */}

        {/* Bangla Audio Upload */}
        <fieldset>
          <label className="label">
            <span className="label-text">Bangla Audio</span>
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => handleFileUpload("banglaAudioUrl", e.target.files[0])}
            className="input input-bordered w-full"
          />
          {formData.banglaAudioUrl && (
            <audio controls src={formData.banglaAudioUrl} className="mt-2 w-full"></audio>
          )}
        </fieldset>

        {/* Syloti Audio Upload */}
        <fieldset>
          <label className="label">
            <span className="label-text">Syloti Audio</span>
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => handleFileUpload("sylotiAudioUrl", e.target.files[0])}
            className="input input-bordered w-full"
          />
          {formData.sylotiAudioUrl && (
            <audio controls src={formData.sylotiAudioUrl} className="mt-2 w-full"></audio>
          )}
        </fieldset>

        <button className="btn btn-primary w-full mt-4">Add Letter</button>
      </form>
    </div>
  );
}
