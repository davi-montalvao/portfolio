import styles from "./home.module.scss";

import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Introduction } from "../components/Introduction";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Contacts } from "../components/Contacts";
import { Career } from "../components/Career";
import { useEffect, useState } from "react";
import { Portfolio } from "../components/Portfolio";


export default function Home( ) {
  const [backToStop, setBackToStop] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollTrigger = window.innerHeight - 600
      if (scrollTop > scrollTrigger) {
        setBackToStop(true)
      } else {
        setBackToStop(false)
      }
    });    
  },[])

  return (
    <div style={{position: 'relative'}}>
    <Header />
    <main className={styles.contentContainer}>
      <Introduction/>
      <AboutMe />
      <Skills />
      <Portfolio/>
      <Career />
      <Contacts/>
    </main>
    <Footer/>
    
    {backToStop &&
      <div 
        className={styles.backToStop}
        onClick={()=>  {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}  
        style={{position: 'fixed', right: 10, bottom: 100}}
      >
        <p>Voltar ao topo</p>
      </div>
    }
    </div>
  )
}
      