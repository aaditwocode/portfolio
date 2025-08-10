import { RevealOnScroll } from "./RevealonScroll";

const projectsData = [
  {
    title: "YoutubeMini",
    period: "Mar 2025 - Apr 2025",
    description:
      "A YouTube-like app fetching YouTube API, with twin mode enabled live chat and Redux state management.",
    skills: ["React", "Redux", "YouTube API", "JavaScript", "CSS"],
    githubLink: "https://github.com/aaditwocode/YoutubeMini",
  },
  {
    title: "movieo",
    period: "May 2025 - Jun 2025",
    description:
      "React + Redux app using TMDB API to display latest movies with slick UI and rich features.",
    skills: ["React", "Redux", "TMDB API", "JavaScript", "CSS"],
    githubLink: "https://github.com/aaditwocode/movieo",
  },
  {
    title: "ALLvoter",
    period: "Jun 2025 - Jul 2025",
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

// Helper function to get start date for sorting more precisely
function getStartDate(period) {
  // format: "Mon YYYY - Mon YYYY" or similar
  // parse start month & year
  const months = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  const match = period.match(/^(\w{3}) (\d{4})/);
  if (!match) return new Date(0); // fallback
  const month = months[match[1]] || 1;
  const year = Number(match[2]);
  return new Date(year, month - 1);
}

export const Projects = () => {
  // Sort descending by start date (latest first)
  const sortedProjects = [...projectsData].sort(
    (a, b) => getStartDate(b.period) - getStartDate(a.period)
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects Timeline
          </h2>

          {/* Timeline container */}
          <div className="relative border-l-2 border-blue-600 ml-4">
            {sortedProjects.map(
              ({ title, period, description, skills, githubLink }) => (
                <div
                  key={title}
                  className="mb-12 ml-6 relative"
                >
                  {/* Timeline dot */}
                  <span
                    className="absolute -left-5 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"
                    aria-hidden="true"
                  ></span>

                  {/* Period badge */}
                  <time
                    className="text-sm text-blue-400 font-semibold mb-1 block"
                    dateTime={period}
                  >
                    {period}
                  </time>

                  <h3 className="text-xl font-bold text-white mb-1">{title}</h3>

                  <p className="text-gray-300 mb-3">{description}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {skills.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm
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

                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  >
                    View Project →
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
