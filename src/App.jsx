import {Navbar} from "@/layout/Navbar"
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { MySkills } from "@/sections/MySkills";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
function App() {
  

  return (
<div className="min-h-screen overflow-x-hidden">
  <Navbar />
  <main>
    <Hero /> 
    <MySkills /> 
    <About /> 
    <Projects /> 
    <Contact />
  </main>
</div>
  )
}

export default App
