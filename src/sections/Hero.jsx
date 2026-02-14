import { ArrowRight, CircleChevronDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "../components/Button";
import { Download } from "lucide-react";


export  const Hero = () => { 
 return (
  <section className="relative min-h-screen flex items-center overflow-hidden"> 
{/* green dots */} 
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) =>(
            <div className="absolute w-1 h-1 rounded-full opacity-60 " style={{backgroundColor: "#e74c3c",
                  boxShadow: "0 0 8px #e74c3c, 0 0 16px #e74c3c",
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
                <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                    <span className="text-sm text-muted-foreground">Follow Me</span> 
                    {[{icon: Github, href:"https://github.com/Youcef14-l"},
                     {icon: Linkedin, href:"https://www.linkedin.com/in/youcef-larbi-778b77388/"}, 
                     { icon: Instagram, href:"https://www.instagram.com/youcef14yo/"},
                     { icon: Twitter , href:"#" }

                    ].map( (social, idx)=> (
                        <a href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all delay-200">{<social.icon className="w-5 h-5" />}</a>
                    ) )}
                </div>

            </div>

            {/* right column*/} 
            <div className="relative animate-fade-in animation-delay-300 animate-float">
                {/* profile image */} 
                <div className="relative max-w-md mx-auto"> 
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                    <div className="relative glass rounded-3xl p-2 glow-border">
                        <img src="public\image.jpg" alt="youcef larbi" className="w-full aspect-4/5 object-cover rounded-2xl" /> 
                        {/* 1st badge*/} 
                        <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/> 
                                <span className="text-sm font-medium">Available For Work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  </section> 
 );

}