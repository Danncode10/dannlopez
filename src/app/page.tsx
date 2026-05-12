import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { GitHubSection } from "@/components/sections/github";
import { Skills } from "@/components/sections/skills";
import { Credentials } from "@/components/sections/credentials";
import { Grades } from "@/components/sections/grades";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubSection />
        <Skills />
        <Credentials />
        <Grades />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
