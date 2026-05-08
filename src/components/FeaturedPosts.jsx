import { blogPosts } from "@/data/blogData";
import BlogCard from "./BlogCard";

const FeaturedPosts = () => {
  const featured = blogPosts.filter((p) => p.featured);

  return (
    <section id="featured" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Handpicked</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Featured Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((post, i) =>
          <BlogCard key={post.id} post={post} featured={i === 0} />
          )}
        </div>
      </div>
    </section>);

};

export default FeaturedPosts;