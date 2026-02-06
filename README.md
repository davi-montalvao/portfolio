This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testar idioma por país (geo)

O site abre em **inglês** para visitantes de fora do Brasil e em **português** para o Brasil (na Vercel isso usa o header `x-vercel-ip-country`).

**Localmente (desenvolvimento):**

1. Com o servidor rodando (`pnpm dev`), abra o DevTools (F12) → aba **Console**.
2. Para simular acesso de **fora do Brasil** (site em inglês):
   ```js
   document.cookie = 'test-country=US;path=/;max-age=3600'
   ```
   Depois recarregue a página (F5).
3. Para simular acesso do **Brasil** (site em português):
   ```js
   document.cookie = 'test-country=BR;path=/;max-age=3600'
   ```
   Recarregue a página.
4. Para limpar o teste e voltar ao padrão (português local):
   ```js
   document.cookie = 'test-country=;path=/;max-age=0'
   ```
   Recarregue.

**Em produção (Vercel):** o país é detectado automaticamente pelo IP; não é necessário fazer nada. Para validar, use um VPN com servidor fora do Brasil e acesse o site.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:!!!!!

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
