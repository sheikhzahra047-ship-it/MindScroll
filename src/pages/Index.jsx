import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import LatestPosts from "@/components/LatestPosts";
import CategoriesSection from "@/components/CategoriesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FeaturedPosts />
      <LatestPosts searchQuery={searchQuery} />
      <CategoriesSection />
      <AboutSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>);

};

export default Index;