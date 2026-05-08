import { categories } from "@/data/blogData";

const CategoriesSection = () => {
  return (
    <section id="categories" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Explore</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Browse by Category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) =>
          <div
            key={cat.name}
            className="group relative p-6 rounded-2xl bg-card border border-border text-center hover-lift cursor-pointer"
            style={{ boxShadow: "var(--card-shadow)" }}>
            
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-sm text-card-foreground mb-1">{cat.name}</h3>
              <p className="text-xs text-muted-foreground">{cat.count} articles</p>
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default CategoriesSection;