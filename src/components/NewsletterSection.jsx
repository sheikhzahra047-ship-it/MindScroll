import { useState } from "react";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Subscribed!", description: "You'll receive our latest articles." });
    setEmail("");
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="p-10 md:p-14 rounded-3xl bg-card border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-card-foreground mb-3">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the best articles delivered straight to your inbox. No spam, ever.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />
            
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>);

};

export default NewsletterSection;