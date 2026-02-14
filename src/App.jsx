import {Navbar} from "@/layout/Navbar"
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { MySkills } from "@/sections/MySkills";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";  
import ClickSpark from '@/components/ClickSpark.jsx';  






function App() {
  

  return (
<div className="min-h-screen overflow-x-hidden">   
   
  <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>

  <Navbar />
  <main>
    <Hero /> 
    <MySkills /> 
    <About /> 
    <Projects /> 
    <Contact />
  </main>
     </ClickSpark>
</div>
  )
}

export default App
