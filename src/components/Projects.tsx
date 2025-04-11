import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, TypeScript, Tailwind CSS showcasing my skills, projects, and contact details.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-commerce App",
    description: "An end-to-end MERN stack application with user authentication, product listing, cart and payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://your-ecommerce-app.com",
  },
 {
  title: "Wave Connect",
  description: "Wave Connect is a dynamic social blogging platform that enables users to publish articles, share insights, and engage in meaningful discussions through comments.",
  tech: ["React", "MySQL","NodeJs", "Tailwind"],
  link: "https://your-blog-app.com",
}

];

const Projects = () => {
  return (
    <section id="projects" className=" text-white py-16 px-6 md:px-20 mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-400 text-center mb-10">
          MY PROJECTS
        </h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-green-400/30 transition-shadow border border-gray-700"
            >
              <h2 className="text-2xl font-semibold text-green-300 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-800/40 text-green-200 text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
