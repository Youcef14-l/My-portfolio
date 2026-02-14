import { ArrowUpRight, Github,ArrowUpLeft } from "lucide-react"; 
import SpotlightCard from '@/components/SpotlightCard.jsx';
const projects = [
  {
    title: "Nursery App management",
    description: "A full-featured nursery management application designed to streamline daily operations, manage tasks efficiently, and organize records with a clean and user-friendly interface powered by Firebase.",
    image: "Projects/nursery-project-1.png",
    tags: ["React", "Firebase", "HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/Youcef14-l/my-nursery-app",
  },
  {
    title: "Portfolio",
    description: "A modern and responsive personal portfolio built to showcase my projects, skills, and experience through smooth animations, clean UI, and an elegant user experience.",
    image: "Projects/modern-portfolio.png",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/Youcef14-l/My-portfolio",
  },
  {
    title: "Professional To-Do list website",
    description: "A dynamic task management web app that helps users organize, track, and complete daily tasks efficiently with an intuitive and structured interface.",
    image: "Projects/to-do-list.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/Youcef14-l/To-do-list",
  },
  {
    title: "E-commerce website",
    description: "An  e-commerce platform featuring product listings, promotional sections, and a modern shopping interface designed to deliver a seamless browsing experience.",
    image: "Projects/E-commerse-website.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/mekkiAek/DEV-Project",
  },
];

export const Projects = () => {
  return (
    <section id="Projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-125 h-500 bg-primary rounded-full blur-[200px] opacity-20"></div>
        </div> 
          {/* header section */} 
          <div>
            <span className="text-lg text-muted-foreground  text-center uppercase flex items-center justify-center tracking-wider font-medium animate-fade-in">
                Featured Projects
            </span>  
            <div className="text-center mx-auto max-w-3xl ">
            <h2 className="text-4xl md:text-5xl mb-4 mt-6 font-bold leading-tight animate-fade-in animation-delay-100 ">
              <span className="font-serif italic">Some of my projects that I've</span>{" "}
              <span className="text-primary font-sans ">
                Worked On
              </span>
            </h2> 
            <p className="mt-5 text-muted-foreground text-sm animate-fade-in animation-delay-200">A collection of applications and interfaces
                 I’ve developed using modern technologies, 
                 focusing on performance, usability, and clean design.</p>
            </div>
          </div>  
          {/*Projects*/} 
{/* The parent container adds the side spacing (left/right) */}
<div className="max-w-7xl mx-auto px-6 md:px-10 mt-5 ">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

    {projects.map((project, index) => (
      <SpotlightCard
        key={index}
        className="group relative rounded-2xl overflow-hidden bg-card border-2 border-border animate-fade-in custom-spotlight-card"
        style={{ animationDelay: `${(index + 1) * 100}ms` }}
      >

        {/* Image Section */}
        <div className="relative w-full h-62.5 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt="project-image"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>

          {/* Overlay Links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.link}
              className="p-3 bg-black/40 backdrop-blur rounded-full hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>

            <a
              href={project.github}
              className="p-3 bg-black/40 backdrop-blur rounded-full hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>

          <p className="text-muted-foreground text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-4 py-1.5 rounded-full text-xs font-medium border border-white/10 text-gray-400 hover:border-primary hover:text-primary transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </SpotlightCard>
    ))}

  </div>

  <div className=" flex items-center justify-center mt-10">
<button
  className="
  relative
  bg-card/10
  border border-primary/50
  text-foreground
  transition-all duration-500 ease-out
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
  disabled:opacity-50 disabled:cursor-not-allowed
  group px-8 py-4 text-lg font-medium rounded-full
  hover:border-primary
  hover:shadow-[0_0_25px_#e74c3c40]
  hover:scale-105
  active:scale-95
  "
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    View All Projects
    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
  </span>
</button>

</div>  
 
</div>


      </div>
    </section>
  );
};
