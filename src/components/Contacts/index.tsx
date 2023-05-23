import styles from "./styles.module.scss";
import Image from 'next/image'
import logoWhats from '../../components/assets/logo-whats.svg'
import logoEmail from '../../components/assets/logo-email.svg'
export function Contacts() {

  return (

   <main className={styles.container}>
      <div>
        <div>
          <p id="contacts">📬 Contatos</p>
        </div>
      </div>
      <div className={styles.content}>
        <a href="https://api.whatsapp.com/send?phone=5511984117991" target='_blank' rel='noreferrer'>
          <Image src={logoWhats} alt="logo github" />
        </a>      
        <a href="mailto:drmontalvao@gmail.com">
          <Image src={logoEmail} alt="logo github" />
          <p>drmontalvao@gmail.com</p>
        </a>      
      </div>
    </main>
  );
}