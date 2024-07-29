import React, { useEffect, useState } from 'react';
import { companies as initialCompanies } from "@/src/utils/companies";
import styles from "./styles.module.scss";

interface Project {
  id: number,
  title: string,
  description: string,
  time: string,
  totalTime: string,
}

type Month =
  | 'Janeiro'
  | 'Fevereiro'
  | 'Março'
  | 'Abril'
  | 'Maio'
  | 'Junho'
  | 'Julho'
  | 'Agosto'
  | 'Setembro'
  | 'Outubro'
  | 'Novembro'
  | 'Dezembro';

const months: Record<Month, number> = {
  Janeiro: 0,
  Fevereiro: 1,
  Março: 2,
  Abril: 3,
  Maio: 4,
  Junho: 5,
  Julho: 6,
  Agosto: 7,
  Setembro: 8,
  Outubro: 9,
  Novembro: 10,
  Dezembro: 11,
};

function calculateDuration(startDate: string) {
  const [startMonth, startYear] = startDate.split('/').map(part => part.trim()) as [Month, string];
  const start = new Date(parseInt(startYear), months[startMonth]);
  const now = new Date();

  const diffYears = now.getFullYear() - start.getFullYear();
  const diffMonths = now.getMonth() - start.getMonth();

  const totalMonths = diffYears * 12 + diffMonths;
  const years = Math.floor(totalMonths / 12);
  const monthsRemaining = totalMonths % 12;

  let duration = '';
  if (years > 0) {
    duration += `${years} ano${years > 1 ? 's' : ''}`;
  }
  if (monthsRemaining > 0) {
    if (duration) duration += ' e ';
    duration += `${monthsRemaining} mês${monthsRemaining > 1 ? 'es' : ''}`;
  }
  return duration;
}

export function Career() {
  const [companies, setCompanies] = useState<Project[]>(initialCompanies);

  useEffect(() => {
    const updatedCompanies = companies.map(company => {
      if (company.id === 1) {
        const startDate = 'Junho/2023';
        const duration = calculateDuration(startDate);
        return { ...company, time: duration };
      }
      return company;
    });
    setCompanies(updatedCompanies);
  }, []);

  return (
    <main className={styles.container}>
      <section>
        <div>
          <p id="career">💼 Carreira</p>
        </div>
      </section>
      <div className={styles.content}>
        {companies.map((item: Project) => (
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
