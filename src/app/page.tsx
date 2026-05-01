import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <HeroSection />
        {/* We will add more sections like Projects, KnowledgeGraph, AI Chatbot here later */}
      </main>
    </>
  );
}
