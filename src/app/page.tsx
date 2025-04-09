/* eslint-disable react/no-unescaped-entities */

import Header from "@/components/Header";
import "./globals.css";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-left px-8 pt-32">
        <section id="home">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Left: Text Section */}
          <div className="md:w-1/2">
            <h1 className="text-6xl md:text-7xl font-extrabold text-green-400 animate-typing">
              Hello, I'm Kirti!
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-green-200 mt-4">
              Full Stack Developer
            </h2>
            <p className="text-lg mt-6 text-gray-200 max-w-xl">
              I'm a passionate Full Stack Developer who enjoys building clean,
              scalable, and high-performing web applications. I specialize in
              the MERN stack and love transforming ideas into interactive,
              user-focused digital products.
            </p>
               {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-8 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Download CV
          </a>
        
          </div>

          {/* Right: Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="w-82 h-82 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
              <Image
              width={600}
              height={600}
                src='/profile.jpg'
                alt="Kirti Malik"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        </section>

          <section id="about" className="px-8">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Left: Text Section */}
          <div className="md:w-1/2">
          
            <p className="text-lg mt-6 text-gray-200 max-w-xl">
              I'm a passionate Full Stack Developer who enjoys building clean,
              scalable, and high-performing web applications. I specialize in
              the MERN stack and love transforming ideas into interactive,
              user-focused digital products.
            </p>
               {/* Download CV Button */}
    
          </div>

        </div>
        </section>
   </main>
    </>
  );
}
