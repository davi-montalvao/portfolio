
import { useResposive } from "@/src/hooks/useResponsive";
import { MenuHamburger } from "../MenuHamburger";

import styles from "./styles.module.scss";

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
