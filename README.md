# Executive Finance Academy — Website

Built with Next.js 14 (static export), Tailwind CSS, deployed to Cloudflare Pages.

## Local development
```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
5. Click Deploy
6. Connect your domain in Pages → Custom Domains

## Update Teachable links
Edit `app/page.tsx` and `app/courses/real-world-tokenization/page.tsx` — the URLs are defined at the top of each file as constants.

## Add Islamic Finance course link
When the Teachable course is live, update `app/courses/islamic-finance/page.tsx` — add the `ISLAMIC_FINANCE_URL` constant and replace the "Notify Me" button with an enrol button.
