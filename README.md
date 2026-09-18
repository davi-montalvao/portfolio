# 💻 Davi Montalvão — Portfólio

Site pessoal desenvolvido para apresentar minha trajetória, habilidades e projetos como desenvolvedor front-end.

🔗 Acesse: [davimontalvao.com.br](https://www.davimontalvao.com.br)

## 💭 Sobre o projeto

Portfólio construído com Next.js, com troca automática de idioma (PT/EN) de acordo com o país do visitante, animações fluidas com Framer Motion e design responsivo com Tailwind CSS.

O site conta com as seguintes seções: Hero (apresentação e principais números, como anos de experiência e projetos entregues), Skills & Experiências (tecnologias organizadas por categoria: frontend, backend, linguagens e ferramentas), Portfólio de Projetos (seleção de projetos com filtros por categoria: Frontend, Games, APIs), Carreira (linha do tempo profissional) e Contato (formulário de mensagem e link direto para WhatsApp).

## 🚀 Tecnologias utilizadas

Next.js 16 (App Router, Turbopack), React 19 com TypeScript, Tailwind CSS, Framer Motion para animações, next-intl para internacionalização (PT/EN), Radix UI e lucide-react para componentes e ícones, e Vercel Analytics.

## 🌎 Idioma automático por localização

O site detecta o país do visitante (via header `x-vercel-ip-country` na Vercel) e abre em português para acessos do Brasil e em inglês para os demais países.

Para testar localmente, defina o cookie `test-country` no DevTools (`BR` ou `US`) e recarregue a página — veja detalhes no código-fonte (`src/proxy.ts`).

## 🎲 Como executar o projeto

```bash
git clone https://github.com/davi-montalvao/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Deploy

Hospedado na [Vercel](https://vercel.com), com deploy automático a partir da branch `main`.

## 👤 Autor

**Davi Montalvão** — [LinkedIn](https://www.linkedin.com/in/davi-montalvao-dev/) • [GitHub](https://github.com/davi-montalvao) • drmontalvao@gmail.com

---

Feito com 💜 e persistência 🚀
