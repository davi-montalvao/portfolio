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
      <div className="pt-16"> {/* Adiciona um padding-top de 4rem (16) */}
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Career />
          <Footer />
        </main>
      </div>
    </>
  )
}

