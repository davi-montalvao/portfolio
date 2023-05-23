
import { useResposive } from "@/src/hooks/useResponsive";

import styles from "./styles.module.scss";
import { MenuHamburger } from "../MenuHamburger";

export function Header() {

  const { isTabletOrMobile } = useResposive()
  return (
    <>
    {isTabletOrMobile ? (
      <MenuHamburger/>
      ) : (
      <header className={styles.container}>
        <div className={styles.content}>
          <a href='#aboutMe'>Sobre mim</a>
          <a href='#portfolio'>Portfólio</a>
          <a href='#skills'>Skills</a>
          <a href='#career'>Carreira</a>
          <a href='#contacts'>Contato</a>
       </div>
      </header> 
        )
      }
      </>
  );
}
