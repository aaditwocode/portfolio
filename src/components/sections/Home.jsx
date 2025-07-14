import { useEffect, useState } from "react";

export const Home = () => {
  const greetings = [
    "Hi", "Howdy", "Hello", "Hey", "Yo", "What's up",
    "Namaste", "Bonjour", "Hola", "Salam", "Ciao", "Konnichiwa", "Vanakkam"
  ];

  const titles = [
    "Full-Stack Developer",
    "DSA Learner",
    "Problem Solver",
    "System Design Explorer",
    "Tech Enthusiast",
    "React Developer",
    "Backend Curious"
  ];

  const [greetingIndex, setGreetingIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 9000);

    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 6000);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(titleInterval);
    };
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-4 relative"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 transition-opacity duration-500">
          <span className="mr-2 text-blue-400 drop-shadow-md">{greetings[greetingIndex]},</span>
          I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-45% to-blue-200 text-transparent bg-clip-text drop-shadow-md">
            Aaditya Pratap Singh
          </span>
        </h1>

        <p className="text-xl sm:text-2xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 transition-opacity duration-500">
          {titles[titleIndex]}
        </p>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto mt-6">
          Full-stack developer passionate about building clean, scalable web apps with a focus on performance and UX. Constantly learning, always iterating. Driven to make an impact through code and explore new tech.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
