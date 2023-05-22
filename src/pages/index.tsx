import styles from "./home.module.scss";

import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Introduction } from "../components/Introduction";
import { Header } from "../components/Header";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";
import { Contacts } from "../components/Contacts";

export default function Home( ) {

  return (
    <>
    <Header />
    <main className={styles.contentContainer}>
      <Introduction/>
      <AboutMe />
      <Skills />
      <Portfolio/>
      <Contacts/>
    </main>
    <Footer/>
    </>


  )
}
      