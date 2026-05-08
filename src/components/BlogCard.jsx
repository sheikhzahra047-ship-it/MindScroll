import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

const BlogCard = ({ post, featured }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className={`group block rounded-2xl overflow-hidden bg-card border border-border hover-lift ${
      featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`
      }
      style={{ boxShadow: "var(--card-shadow)" }}>
      
      <div className={`overflow-hidden ${featured ? "h-64 md:h-full" : "h-52"}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={800}
          height={400} />
        
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
        </div>
        <h3 className={`font-serif font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors ${featured ? "text-2xl" : "text-lg"}`}>
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
              {post.author[0]}
            </div>
            <div>
              <p className="text-xs font-medium text-card-foreground">{post.author}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>);

};

export default BlogCard;