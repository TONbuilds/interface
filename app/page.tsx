import ContactUs from "@/components/ContactUs";
import FeaturedProjects from "@/components/FeaturedProjects";
import Happen from "@/components/Happen";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // Optional: other subsets include 'latin-ext' etc.
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-space-grotesk", // Custom CSS variable for easier usage
});

export default function Home() {
  return (
    <div
      className={`${spaceGrotesk.className} w-full bg-white min-h-screen py-12 bg-contain flex flex-col items-center justify-center gap-16`}
      style={{ backgroundImage: "url('/grid.png')" }}
    >
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Happen />
      <Why />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
