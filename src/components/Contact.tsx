/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className=" text-white py-16 px-6 md:px-20 mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-400 text-center mb-4">
          CONTACT ME
        </h1>
        <p className="text-center text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
          Have a question, want to work together, or just want to say hi? Feel free to reach out—I'd love to connect with you!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-300">Get in Touch</h2>
            <p className="text-gray-400">
              <strong>Email:</strong> <a href="mailto:kirtimalik@example.com" className="text-green-400 hover:underline">kirtimalik@example.com</a>
            </p>
            <p className="text-gray-400">
              <strong>Location:</strong> New Delhi, India
            </p>
            <p className="text-gray-400">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/kirtimalik"
                target="_blank"
                className="text-green-400 hover:underline"
              >
                linkedin.com/in/kirtimalik
              </a>
            </p>
            <p className="text-gray-400">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/kirtimalik"
                target="_blank"
                className="text-green-400 hover:underline"
              >
                github.com/kirtimalik
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
