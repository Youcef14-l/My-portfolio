import { ArrowUpRight, Github } from "lucide-react"; 
import SpotlightCard from '@/components/SpotlightCard.jsx';

const projects = [
  {
    title: "Nursery App managment",
    description: "jjjjj",
    image: "public/Projects/nursery-project-1.png",
    tags: ["React", "firebase"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio",
    description: "jjjjj",
    image: "public/Projects/modern-portfolio.png",
    tags: ["React", "firebase"],
    link: "#",
    github: "#",
  },
  {
    title: "Proffesional To-Do list website",
    description: "jjjjj",
    image: "public/Projects/to-do-list.png",
    tags: ["React", "firebase"],
    link: "#",
    github: "#",
  },
  {
    title: "E-commerse website",
    description: "jjjjj",
    image: "public/Projects/E-commerse-website.png",
    tags: ["React", "firebase"],
    link: "#",
    github: "#",
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
            src={project.image}
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
   
</div>


      </div>
    </section>
  );
};
