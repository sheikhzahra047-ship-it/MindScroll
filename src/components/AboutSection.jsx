import { BookOpen, Users, Globe } from "lucide-react";

const stats = [
{ icon: BookOpen, label: "Articles Published", value: "500+" },
{ icon: Users, label: "Active Readers", value: "50K+" },
{ icon: Globe, label: "Countries Reached", value: "120+" }];


const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              A Community of Passionate Writers & Readers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              MindScroll is a platform built for curious minds. We believe in the power of words to
              educate, inspire, and connect people across the globe. Our diverse community of writers
              covers everything from cutting-edge technology to timeless life wisdom.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're here to share your expertise or discover new perspectives, MindScroll
              provides the tools and audience to amplify your voice.
            </p>
          </div>
          <div className="grid gap-4">
            {stats.map((stat) =>
            <div
              key={stat.label}
              className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border"
              style={{ boxShadow: "var(--card-shadow)" }}>
              
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;