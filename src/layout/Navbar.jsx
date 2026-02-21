
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react"; 
import { useState } from "react";  

const navLinks = [
    { href:"#about" , label:"About"},
    { href:"#MySkills" , label:"Skills"},
    { href:"#Projects" , label:"Projects"},
    { href:"#Contact" , label:"Contact"},
]; 


export  const Navbar = () => {   
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
 return <header className="fixed top-0 left-0 right-0 transition-all duration-500 bg-transparent py-1.5 z-50 glass animate-header">
    <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
            Youcef
        </a>  

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-1">
            <div className=" rounded-full px-2 py-1 flex items-center gap-1">
                {navLinks.map( (link,index)=> (
                    <a href={link.href} 
                    key={index} 
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-primary/90 rounded-full" 
                    
                    >{link.label}</a>
                ) )}
            </div>
        </div> 




        {/*mobile menu button */} 
        <button
  onClick={() => setIsMobileMenuOpen(prev => !prev)}
  className="md:hidden p-2 text-foreground cursor-pointer"
>
  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>


    </nav>  
    {/*mobile menu*/} {isMobileMenuOpen && ( 
    <div className="md:hidden glass-strong animate-fade-in">
        <div className=" container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map( (link,index)=> (
            <a href={link.href} 
            key={index} 
            className="text-lg text-muted-foreground hover:text-foreground py-2" 
            onClick={() => (setIsMobileMenuOpen(false))}
            >{link.label}</a>
            ) )} 
        </div>
    </div> )}
 </header>
}