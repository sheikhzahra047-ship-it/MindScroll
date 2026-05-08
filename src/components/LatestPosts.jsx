import { blogPosts } from "@/data/blogData";
import BlogCard from "./BlogCard";

const LatestPosts = ({ searchQuery }) => {
  const filtered = searchQuery
    ? blogPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Recent</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            {searchQuery ? `Results for "${searchQuery}"` : "Latest Articles"}
          </h2>
        </div>
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground text-lg">No articles found matching your search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestPosts;
