import { RevealOnScroll } from "./RevealonScroll.jsx";

const projectsData = [
  {
    title: "ALLvoter",
    period: "Jun 2025 - Jun 2025",
    description:
      "ALLvoter is a secure and scalable backend application for an online voting system. It enables users to register with their Aadhar Card Number, view candidates, and vote (only once). It also provides admin functionalities for managing candidates.",
    skills: ["Node.js", "Express.js", "MongoDB", "JavaScript", "JWT"],
    githubLink: "https://github.com/aaditwocode/ALLvoter",
  },
  {
    title: "P.U.S.H",
    period: "Aug 2024 - Nov 2024",
    description:
      "P.U.S.H (Pursue Ultimate Strength and Happiness) is a web-based application culminating all your fitness needs in one.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "PhpMyAdmin", "MySQL"],
    githubLink: "https://github.com/aaditwocode/P.U.S.H",
  },
  {
    title: "WheelsBuddy",
    period: "Feb 2024 - Apr 2024",
    description:
      "A console based to-do car booking and management system in C++.",
    skills: ["C++"],
    githubLink: "https://github.com/KushKansal/WheelBuddy",
  },
  {
    title: "Taskmaster-X",
    period: "Sep 2023 - Nov 2023",
    description:
      "A console based To-Do List program in C language. TaskMaster X simplifies task management with user accounts and personalized files.",
    skills: ["C"],
    githubLink: "https://github.com/KushKansal/TaskMaster-X",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map(
              ({ title, period, description, skills, githubLink }) => (
                <div
                  key={title}
                  className="p-6 rounded-xl border border-white/10
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)]
                    transition
                    flex flex-col
                    justify-between
                    h-full
                  "
                >
                  <div>
                    <h3 className="text-xl font-bold mb-1">{title}</h3>
                    <p className="text-sm text-gray-400 mb-4 italic">{period}</p>
                    <p className="text-gray-400 mb-4">{description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {skills.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                            transition
                            hover:bg-blue-500/25
                            hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]
                            hover:-translate-y-0.5
                            cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};