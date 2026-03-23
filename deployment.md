Your app is a Vite + React SPA, so moving it to Vercel is a good fit for auto-deploy on every push. I also added the SPA fallback Vercel needs for BrowserRouter routes like /design and /studio/contact in vercel.json.

What To Do

Push the current repo to GitHub, GitLab, or Bitbucket if it is not already there.
In Vercel, create a new project and import that repo.
Vercel should auto-detect Vite. For this repo, the expected settings are:
Build command: npm run build
Output directory: dist
Install command: leave default
Deploy once to the default *.vercel.app URL and test:
/
/design
/studio
/studio/contact
In Vercel project settings, add both domains:
prodmaninc.com
www.prodmaninc.com
DNS Cutover
The important detail is not where the domain is registered, but where DNS is currently hosted. Since the domain is with GoDaddy and hosting is on Hostinger, check the domain’s nameservers first.

If DNS is managed in GoDaddy:

Open the domain’s DNS page in GoDaddy.
Update the website records to point to Vercel.
Keep all non-website records intact, especially MX, TXT, and email-related records.
If DNS is still managed by Hostinger nameservers:

Either update the DNS records inside Hostinger, or
First move DNS management to GoDaddy or Vercel, then recreate all required records before switching.
Vercel’s current custom-domain guide shows these common records for third-party DNS:

Apex/root @: A record to 76.76.21.21
www: CNAME to the value Vercel shows for your project, currently documented as cname.vercel-dns-0.com
Use the exact values Vercel shows inside your project when you add the domain, since that is the authoritative source.

Important Before You Switch

Do not cancel Hostinger hosting before DNS fully propagates and the Vercel site is live.
Lower TTL first if you can, to make propagation faster.
Preserve email records, or mail can break even if the site works.
After cutover, set one canonical domain in Vercel, usually redirect www to prodmaninc.com or vice versa.
After This
Once the repo is connected, Vercel will auto-deploy:

Every push to your production branch, usually main
Preview deployments for PRs/other branches
Useful Docs

Vercel Git deployments: https://vercel.com/docs/git
Vercel custom domains: https://vercel.com/docs/domains/set-up-custom-domain
Vercel Vite + SPA rewrites: https://vercel.com/docs/frameworks/vite
GoDaddy DNS management: https://www.godaddy.com/help/access-domains-on-dns-hosting-20166
GoDaddy A record editing: https://www.godaddy.com/help/edit-an-a-record-19239
If you want, I can help you with the next exact step: checking whether prodmaninc.com DNS is currently controlled by GoDaddy or Hostinger, and then I’ll give you the precise records to change.