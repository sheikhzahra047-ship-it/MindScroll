import { Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center section-padding pt-32 overflow-hidden">
      
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-10"
        width={1920}
        height={1080} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Welcome to MindScroll
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Write. Read.{" "}
          <span className="text-gradient">Inspire.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Discover stories, thinking, and expertise from writers on any topic that matters to you.
        </p>

        <div className="relative max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-card border border-border shadow-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
          
        </div>
      </div>
    </section>);

};

export default HeroSection;