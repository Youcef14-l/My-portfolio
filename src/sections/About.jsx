import { Code2, Lightbulb, Rocket, Users } from "lucide-react"; 
import SpotlightCard from '@/components/SpotlightCard.jsx'; 
import RippleGrid from '@/components/RippleGrid.jsx';

const highlight = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and readable code.",
  },
  {
    icon: Rocket,
    title: "Perfomance",
    description: "Optimized applications built for speed and efficiency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Effective teamwork and clear communication.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Turning creative ideas into impactful digital products.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">  
    <div className="absolute inset-0 z-0"> 
    <RippleGrid
    enableRainbow={false}
    gridColor="#e74c3c"
    rippleIntensity={0.05}
    gridSize={10}
    gridThickness={13}
    mouseInteraction={true}
    mouseInteractionRadius={1.2}
    opacity={0.4}
  /> 
  </div>
      <div className="container mx-auto px-6 relative z-10">
            <div className="animate-fede-in">
              <span className="text-lg text-muted-foreground mb-8 text-center uppercase flex items-center justify-center">
                About Me
              </span>
            </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*left column*/}
          <div className="space -y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 ">
              <span className="font-serif italic">Turning Ideas Into</span>{" "}
              <span className="text-primary font-sans ">
                Interactive Experiences
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 mt-6 ml-3">
              <p>
                I am a Computer Science student with a strong passion for
                frontend development and modern user interface design. I
                specialize in building responsive and interactive web
                applications using React and Tailwind CSS, focusing on clean
                architecture, performance optimization, and scalable
                component-based structure. I am committed to growing as a
                developer by learning
              </p>
              <p>
                I am committed to growing as a developer by learning modern best
                practices, writing maintainable code, and staying up to date
                with evolving technologies in the frontend ecosystem. My goal is
                to build impactful digital experiences that combine performance,
                usability, and modern design.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlight.map((item, index) => ( 
  
              <SpotlightCard
                key={index}
                className="custom-spotlight-card p-8"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }} 
                spotlightColor="rgb(191, 76, 60)"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className=" text-sm text-muted-foreground">
                  {item.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
