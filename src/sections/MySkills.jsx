import mysql from "../assets/icons/mysql.svg";
import java from "../assets/icons/Java.svg";
import c from "../assets/icons/C.svg";
import cpp from "../assets/icons/C++.svg";
import react from "../assets/icons/react.svg";
import javascript from "../assets/icons/javascript.svg";
import tailwind from "../assets/icons/tailwind.svg";
import github from "../assets/icons/github.svg";
import vscode from "../assets/icons/vscode.svg";
import firebase from "../assets/icons/firebase.svg";
import css from "../assets/icons/CSS3.svg";
import html from "../assets/icons/HTML5.svg";

export const skills = [
  { icon: html, subject: "HTML5" },
  { icon: css, subject: "CSS3" },
  { icon: javascript, subject: "JavaScript" },
  { icon: react, subject: "React" },
  { icon: tailwind, subject: "Tailwind CSS" },
  { icon: firebase, subject: "Firebase" },
  { icon: github, subject: "GitHub" },
  { icon: vscode, subject: "VS Code" },
  { icon: mysql, subject: "MySQL" },
  { icon: java, subject: "Java" },
  { icon: c, subject: "C" },
  { icon: cpp, subject: "C++" },
];  


export  const MySkills = () => { 
 return <section >
<div className="mt-20 px-10 animate-fade-in animation-delay-600" id="MySkills">
  {/* Title */}
  <p className="text-lg text-muted-foreground mb-8 text-center uppercase">
    My Skills
  </p>

  {/* Marquee Container */}
  <div className="relative overflow-hidden mx-6 mb-6">
    <div className="flex animate-marquee w-max">
      {[...skills, ...skills].map((skill, index) => (
        <div
          key={index}
          className="
            shrink-0
            mx-3
            px-6 py-4
            flex items-center gap-3
            rounded-lg
            border border-border
            bg-background/60
            transition-all duration-300
            hover:border-primary
          "
        >
          <img
            src={skill.icon}
            alt={skill.subject}
            className="w-10 h-10"
          />

          <span className="text-base text-muted-foreground">
            {skill.subject}
          </span>
        </div>
      ))}
    </div>
  </div>  
  {/* reverse animation */}
  <div className="relative overflow-hidden mx-6 ">
    <div className="flex animate-marquee-reverse w-max">
      {[...skills, ...skills].map((skill, index) => (
        <div
          key={index}
          className="
            shrink-0
            mx-3
            px-6 py-4
            flex items-center gap-3
            rounded-lg
            border border-border
            bg-background/60
            transition-all duration-300
            hover:border-primary
          "
        >
          <img
            src={skill.icon}
            alt={skill.subject}
            className="w-10 h-10"
          />

          <span className="text-base text-muted-foreground">
            {skill.subject}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>



 </section>
}