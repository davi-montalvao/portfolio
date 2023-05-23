import { companies } from "@/src/utils/companies";

import styles from "./styles.module.scss";

interface Project {
  id: number,
  title: string,
  description: string,
  time: string,
  totalTime: string,
}

export function Career() {
  return (
    <main className={styles.container}>
      <section>
        <div>
          <p id="career">💼 Carreira</p>
        </div>
      </section>
      <div className={styles.content}>
        {companies !== null &&
         companies.map((item: Project) => (
          <div key={item.id}>
            <h1>
             {item.title}
            </h1>
            <p>
              {item.description}
            </p>
            <section>
              <p>
                {item.time}
              </p>
              <p>
                {item.totalTime}
              </p>
            </section>
          </div>
        ))}
      </div>
    </main>
  );
}