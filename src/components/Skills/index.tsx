
import Image from 'next/image'
import logoReact from '../assets/logo-react.svg'
import logoJavascript from '../assets/logo-javascript.svg'
import logoTypescript from '../assets/logo-typescript.svg'
import logoNext from '../assets/logo-next.svg'
import logoGitHub from '../assets/logo-github-purple.svg'
import logoHTML from '../assets/logo-html5.svg'
import logoInsomnia from '../assets/logo-insomnia.svg'
import logoSass from '../assets/logo-sass.svg'
import logoCss from '../assets/logo-css.svg'

import styles from "./styles.module.scss";

export function Skills() {
  return (
    <main className={styles.container}>
      <div>
        <div>
          <p id="skills">🧑‍💻 Skills · Experiências</p>
        </div>
      </div>
    <div className={styles.logos}>
      <Image src={logoReact} alt="logo react"/>
      <Image src={logoJavascript} alt="logo javascript"/>
      <Image src={logoTypescript} alt="logo typescript"/>
      <Image src={logoNext} alt="logo next"/>
      <Image src={logoGitHub} alt="logo github"/>
      <Image src={logoHTML} alt="logo hmtl"/>
      <Image src={logoInsomnia} alt="logo insomnia"/>
      <Image src={logoSass} alt="logo sass"/>
      <Image src={logoCss} alt="logo css"/>
    </div>
  </main>
  );
}
