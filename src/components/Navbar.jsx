import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
{ label: "Home", href: "#home" },
{ label: "Blog", href: "#featured" },
{ label: "Categories", href: "#categories" },
{ label: "About", href: "#about" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold font-serif text-foreground">
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">M</span>
          MindScroll
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
            
              {link.label}
            </button>
          )}
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open &&
      <div className="md:hidden glass border-t border-border animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) =>
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className="text-left py-2 text-muted-foreground hover:text-primary transition-colors">
            
                {link.label}
              </button>
          )}
          </div>
        </div>
      }
    </nav>);

};

export default Navbar;