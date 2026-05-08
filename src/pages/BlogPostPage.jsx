import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="mb-6">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-10">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
              width={800}
              height={400} />
            
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, i) =>
            <p key={i} className="text-foreground/85 leading-relaxed mb-5">
                {paragraph}
              </p>
            )}
          </div>
        </div>
      </article>
      <NewsletterSection />
      <Footer />
    </div>);

};

export default BlogPostPage;