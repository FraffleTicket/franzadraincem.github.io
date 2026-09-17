# Franz Christian A. Adraincem — Portfolio Website

A static, self-contained portfolio website (Healthcare Virtual Assistant | Administrative & Operations Support | Social Media & Graphic Design). No build tools, no frameworks, no server-side code — plain HTML, CSS, and JavaScript that runs anywhere.

## Folder structure

```
franz-portfolio/
├── index.html                 Main page (all sections: hero, about, experience,
│                               services, creative portfolio, skills, tools,
│                               education, workflow, contact)
├── assets/
│   ├── css/
│   │   └── style.css          All styling (ocean-inspired palette, layout, animations)
│   ├── js/
│   │   └── main.js            Portfolio filtering, project modal, mobile nav, scroll reveal
│   ├── images/
│   │   ├── profile-photo.jpg
│   │   ├── project-world-heart-day.jpg
│   │   ├── project-marine-plastic-pollution.jpg
│   │   ├── project-protein-muffin-poster.jpg
│   │   ├── project-croup-syndrome-infographic.jpg
│   │   ├── project-world-migratory-bird-day.jpg
│   │   ├── project-world-food-day.jpg
│   │   └── project-english-language-day.jpg
│   └── icons/
│       └── favicon.svg
└── README.md                  This file
```

Everything the page needs is inside this folder. The only outside connection is a standard Google Fonts stylesheet link (for the Sora/Inter typefaces) — this works on any host and requires no configuration.

## Editing content

- **Text sections** (About, Experience, Services, Skills, Tools, Education, Contact, etc.): edit directly inside `index.html` — it's plain, commented HTML.
- **Creative portfolio projects**: open `assets/js/main.js` and look for the `projects` array near the top. Each project is an object with `title`, `category`, `catLabel`, `role`, `tools`, `desc`, and `image`. To add a new project, copy an existing object, update the fields, and drop the matching image file into `assets/images/`.
- **Colors/fonts/spacing**: all in `assets/css/style.css`, driven by CSS variables at the top of the file (`--navy`, `--ocean`, `--teal`, `--seafoam`, `--aqua`, etc.).
- **Contact info**: search `index.html` for the email, phone, and LinkedIn link in the Contact section near the bottom.

## Deploying

This is a static site, so any static host works. Three easy options:

### Option 1: GitHub Pages (free)

1. Create a new GitHub repository (e.g. `franz-portfolio`).
2. Upload the **contents** of this folder to the repository (not the folder itself — `index.html` should sit at the repo root).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch," choose the `main` branch and `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<your-username>.github.io/franz-portfolio/` within a minute or two.

### Option 2: Netlify (free)

1. Go to [app.netlify.com](https://app.netlify.com) and sign in (or create an account).
2. Click **Add new site → Deploy manually**.
3. Drag and drop this entire `franz-portfolio` folder (or its ZIP) onto the upload area.
4. Netlify deploys it instantly and gives you a live URL (e.g. `random-name-123.netlify.app`).
5. Optional: under **Site settings → Change site name**, pick a custom subdomain, or connect your own domain under **Domain settings**.

### Option 3: Any other static host

The same folder works unmodified on Vercel, Cloudflare Pages, Firebase Hosting, an S3 static website bucket, or a plain Apache/Nginx server — just upload the contents so `index.html` is at the web root.

## Notes

- No `npm install`, build step, or server is required — just upload and go.
- The site is fully responsive (desktop, tablet, mobile) and works with JavaScript disabled for all static content; the creative portfolio filter and project modal require JavaScript (enabled by default in all modern browsers).
- If you add new images, keep file sizes reasonable (compress large photos before uploading) so the site stays fast to load.
