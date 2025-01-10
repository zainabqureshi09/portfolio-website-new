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
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl text-center font-bold text-purple-700 mb-4">
          CONTACT
        </h1>
        <p className="text-center text-blue-600 font-medium mb-10">
          I&apos;d <span className="text-purple-700">♥</span> to help! Feel free to say hello!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-700">Thank You!</h2>
                <p className="text-lg text-blue-600">
                  Your message has been sent successfully. I&apos;ll be in touch soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <p className="text-red-500 text-center">{error}</p>
                )}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="text-center">
                <button type="submit"
        className="px-6 py-3 text-white bg-purple-600 rounded-md outline-none focus:ring-4 focus:ring-purple-300 hover:bg-purple-700 transition"
      >
        Send Message
      </button>
                </div>
              </form>
            )}
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-purple-700">Zainab Ayaz frontend web developer</h2>
              <p className="text-blue-600">Karachi, Pakistan</p>
            </div>
            <div>
              <p className="text-blue-600">
                <strong className="text-purple-700">Phone:</strong> +923171214703
              </p>
            </div>
            <div>
              <p className="text-blue-600">
                <strong className="text-purple-700">WhatsApp:</strong> +923272720895
              </p>
            </div>
            <div>
              <p className="text-blue-600">
                <strong className="text-purple-700">Email:</strong>{" "}
                zainab.cyber.dev@gmail.com
              </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
