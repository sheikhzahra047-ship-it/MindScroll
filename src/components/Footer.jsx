import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socials = [
{ icon: Twitter, href: "#", label: "Twitter" },
{ icon: Github, href: "https://github.com/", label: "GitHub" },
{ icon: Linkedin, href: "https://www.linkedin.com/in/zahra-batool-41a48036b/", label: "LinkedIn" },
{ icon: Instagram, href: "#", label: "Instagram" }];


const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold font-serif text-card-foreground mb-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">M</span>
              MindScroll
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A modern blogging platform for curious minds. Write, read, and inspire the world with MindScroll.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-4 font-sans">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "Blog", "Categories", "About", "Contact"].map((l) =>
              <li key={l}>
                  <button className="hover:text-primary transition-colors">{l}</button>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-4 font-sans">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map((s) =>
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                
                  <s.icon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MindScroll. All rights reserved.
        </div>
      </div>
    </footer>);

};

export default Footer;