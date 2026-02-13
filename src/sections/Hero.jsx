import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "../components/Button";
import { Download } from "lucide-react";


export  const Hero = () => { 
 return (
  <section className="relative min-h-screen flex items-center overflow-hidden"> 
{/* green dots */} 
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) =>(
            <div className="absolute w-1 h-1 rounded-full opacity-60" style={{backgroundColor: "#e74c3c",
                left: `${Math.random()*100}%`,
                top: `${Math.random()*100}%`, 
                animation:`slow-drift ${15 + Math.random() * 20 }s ease-in-out infinite`, 
                animationDelay:`${Math.random()* 5}s`
            }}/>
        ))} 
    </div>  
    {/* content */} 
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* left column*/}  
            <div className="space-y-8"> 
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Computer Science Student
                    </span>
                </div> 
                {/*headline*/} 
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:7xl font-bold leading-tight animate-fade-in animation-delay-100" >
                        Hi I'm 
                        <br /> 
                       Larbi <span className="text-primary glow-text"> Youcef</span>
                    </h1> 
                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                       A Computer Science student passionate about frontend development.
                        Specialized in React, Tailwind CSS <br /> 
                        I build responsive, user-focused web applications.
                    </p>
                </div> 

                {/*CTAs*/} 
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                    <Button size="lg">Contact Me <ArrowRight className="h-5 w-5" /></Button> 
                    <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50
                    transition-all duration-500 focus:outline-none focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                    group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border"> 
                        
                        <span className="relative z-10 flex items-center justify-center gap-2"> 
                            <Download className="w-5 h-5"/>
                            Download CV</span>
                    </button>
                </div> 
                {/*social links*/} 
                <div>
                    <span>Follow Me</span> 
                    {[{icon: Github, href:"#"},
                     {icon: Linkedin, href:"#"}, 
                     { icon: Instagram, href:"#"},
                     { icon: Twitter , href:"#" }

                    ].map( (social, idx)=> (
                        <a href="">{<social.icon />}</a>
                    ) )}
                </div>

            </div>

            {/* right column*/}
        </div>
    </div>
  </section> 
 );

}