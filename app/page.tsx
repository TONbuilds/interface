import ContactUs from "@/components/ContactUs";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Happen from "@/components/Happen";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";
import { Inter } from "next/font/google";
// import "../styles/globals.css";
const inter = Inter({
  subsets: ["latin"], // Optional: other subsets include 'latin-ext' etc.
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-inter", // Custom CSS variable for easier usage
});

export default function Home() {
  return (
    <div
      className={`${inter.className} font-sans w-full bg-white min-h-screen pt-5 bg-contain flex flex-col items-center justify-center gap-16`}
      style={{ backgroundImage: "url('/grid.png')" }}
    >
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Happen />
      <Why />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
