import Image, { StaticImageData } from 'next/image'

import styles from "./styles.module.scss";
import { projects } from '@/src/utils/projects';


interface Project {
  id: number,
  title: string,
  description: string,
  image: StaticImageData,
  liveLink: string,
  codeLink: string
}

export function Portfolio() {
  return (
    <main className={styles.container}>
      <section>
        <div>
          <p id="portfolio">🔗 Portfólio</p>
        </div>
      </section>
      <div className={styles.content}>
        {projects !== null &&
         projects.map((item: Project) => (
         <div key={item.id}>
           <Image className={styles.picture} src={item.image} alt="logo linkedin" /> 
           <div>
             <h1>{item.title}</h1>
             <p className={styles.description}>
               {item.description}
             </p>
             <a href={item.codeLink} target='_blank' rel='noreferrer'>
               <button>Veja no Github</button>
             </a>
           </div>
         </div>
       ))}        
      </div>
    </main>
  );
}