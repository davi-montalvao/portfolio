import { Career } from "@/components/career/page";
import { Footer } from "@/components/footer/page";
import { Header } from "@/components/header/page";
import { Hero } from "@/components/hero/page";
import { Projects } from "@/components/projects/page";
import { Skills } from "@/components/skills/page";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-20"> {/* Ajustado para o novo header */}
        <main className="relative">
          {/* Hero Section */}
          <section id="sobre">
            <Hero />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="portfolio">
            <Projects />
          </section>

          {/* Career Section */}
          <section id="carreira">
            <Career />
          </section>

          {/* Footer Section */}
          <section id="contato">
            <Footer />
          </section>
        </main>
      </div>
    </>
  )
}
