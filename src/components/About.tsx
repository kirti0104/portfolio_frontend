/* eslint-disable react/no-unescaped-entities */
import React from 'react'


const About = () => {
  return (
    <>
    <section id='about' className=" text-white py-12  px-6 md:px-20 ">
             <div className="mx-auto mt-30 font-extrabold text-green-400">
          <h1 className="text-3xl text-center">ABOUT ME</h1>
          <h2 className="text-4xl md:text-4xl text-center font-bold text-green-200 mt-4">
              EXPERTISE IN MERN STACK
            </h2>
            <p className="text-xl mt-6 mx-20 text-gray-200 ">
              I'm Kirti Malik, a passionate Full Stack Developer who enjoys building clean, scalable, and high-performing web applications.
               I specialize in  the MERN stack and love transforming ideas into interactive,
              user-focused digital products.  I enjoy turning ideas into reality through clean and efficient code. My expertise lies in JavaScript, TypeScript, React, Node.js, and modern frameworks like Next.js.
            </p>
        </div>
            <div className="mt-10 mx-20">
          <h3 className="text-2xl font-bold text-green-300 mb-2">Skills & Technologies</h3>
          <ul className="text-gray-200 list-disc list-inside space-y-1">
            <li>Frontend: React, Next.js, HTML5, CSS3, Tailwind CSS</li>
            <li>Backend: Node.js, Express</li>
            <li>Database: MongoDB, MySQL</li>
            <li>Tools & Platforms: Git, GitHub, Postman, Vercel, Firebase</li>
      </ul>
    </div>
    </section>


    </>
  )
}

export default About