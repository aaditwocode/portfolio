import { RevealOnScroll } from "./RevealonScroll.jsx";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "Python" , "Java" ,"PHP", "MySQL", "MongoDB"],
  },
  {
    title: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "NodeJS",
      "Express.js",
      "React",
      "Parcel",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools",
    skills: ["npm", "Postman", "Git", "Jest", "Babel","Vite","vercel","Render"],
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300">
            <p className="text-gray-300 mb-8">
            Enjoying learning new technologies and applying them to real-world projects. My goal is to continuously improve my skills and contribute to impactful solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm sm:text-base">
              {skillCategories.map(({ title, skills }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl border border-white/10 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-semibold text-blue-400 mb-4">{title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {skills.map((tech) => (
                      <li
                        key={tech}
                        className="inline-block mr-3 mb-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/30 hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12 p-6 rounded-xl border border-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.Tech in Computer Science</strong> – Jaypee Institute Of
                Information Technology , Noida, India
              </li>
              <li>
                Relevant Coursework: Data Structures, Web Development, Object
                Oriented Programming, DBMS, Algorithms
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
