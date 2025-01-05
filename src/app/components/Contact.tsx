
"use client";

import { useState } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setError("");

    // Submit to Formspree
    const res = await fetch("https://formspree.io/f/xgvvpykn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-md">
        {submitted ? (
          <div className="text-center">
            <h1 className="text-2xl text-purple-700 font-bold">Thank you!</h1>
            <p className="text-xl text-purple-700 ">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-3xl text-blue-800 font-bold text-center">Contact Me</h1>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex justify-center">
            <button
              type="submit"
              className="w-70%  bg-blue-200 text-blue-800 py-2 px-4 rounded-md hover:bg-blue-300 transition"
            >
              Send Message
            </button>
            </div>
          </form>
        )}
        
      </div>
    </div>
     <div>

     </div>
     </>
  );
}