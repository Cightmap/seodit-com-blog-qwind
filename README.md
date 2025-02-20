README.md
markdown
# 🌟 SEOdit.com - Premium SEO Domain Template

**SEOdit.com** is a premium domain for sale, with it's website built as a showcase using **Astro 5.0** and a customized Qwind template. Developed by **[SuperCight Domains](https://supercight.com)**, this site features a fast, modern design with a blog powered by **[PublishInk Agency](https://publishink.agency)** to drive organic traffic and boost domain authority. It’s an ideal asset for SEO professionals or businesses seeking a standout domain that starts with, SEO, one of the hottest keywords on the market today, built right into the name!

This project doubles as a reusable template for SuperCight Domains’ growing portfolio of domain-sales websites, blending cutting-edge tech with strategic content.

## The Bigger Picture

SuperCight Domains acquires and sells premium domains like SEOdit.com, enhancing them with active websites, social handles, blogs, backlinks and affiliate marketing monitization. PublishInk Agency crafts the daily long-form posts to increase traffic, authority, and resale value. SEOdit.com is the first of many other domain name sites to start using these Astro-based templates, with a future gallery on SuperCight.com planned to connect all domain-sales projects.

## Features

- Built with **Astro 5.0** and **Tailwind CSS** for speed and flexibility.
- Blog-ready with dynamic routing for SEO-rich posts.
- Hosted free on **Cloudflare Pages**—no server costs!
- Optimized for SEO and domain value growth.
- Public GitHub repo serves as a development history and portfolio.

<br>

![SEOdit.com Screenshot](./public/images/seodit-preview.jpeg)

[![SuperCight Domains](https://custom-icon-badges.demolab.com/badge/made%20by%20-SuperCight%20Domains-556bf2?style=flat-square&logo=supercight&logoColor=white&labelColor=101827)](https://supercight.com)
[![License](https://img.shields.io/github/license/supercight/seodit-qwind?style=flat-square&color=dddddd&labelColor=000000)](./LICENSE.md)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/yourusername/seodit-qwind#contributing)

<br>

## Table of Contents

- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

<br>

## Demo

📌 [https://seodit-qwind.pages.dev/](https://seodit-qwind.pages.dev/) *(Dev URL until live at SEOdit.com)*

Interested in owning SEOdit.com? [Contact SuperCight Domains](mailto:hello@supercight.com).

<br>

## Getting Started

Built with Astro 5.0, this project delivers a lightweight, performant site with blog functionality, hosted on Cloudflare Pages via GitHub.

### Project Structure
/
├── public/
│   ├── favicon.svg          # SEOdit favicon
│   ├── images/
│   │   └── seodit-preview.jpeg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/         # SEOdit logo, hero, blog images
│   │   └── styles/
│   ├── components/
│   │   ├── common/         # Logo.tsx, etc.
│   │   └── widgets/        # Header.tsx, Footer.tsx, Hero.tsx
│   ├── content/
│   │   └── post/           # Blog posts (e.g., keyword-cannibalization.md)
│   ├── routes/
│   │   ├── (blog)/blog/    # Blog index and [slug] routing
│   │   ├── (markdown)/     # About, Privacy, Terms, Contact
│   │   └── index.tsx       # Homepage
│   └── config.mjs          # Site config for templating
├── astro.config.mjs        # Astro setup with Tailwind
├── package.json
└── tailwind.config.js

- `src/routes`: Handles page and blog routing.
- `src/content/post`: Stores Markdown blog posts.
- `public`: Contains static assets.

### Commands

From the project root:

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`      | Start dev server at `localhost:4321`        |
| `npm run build`    | Build production site to `./dist/`          |
| `npm run preview`  | Preview build locally before deploying      |

### Configuration

Edit `src/config.mjs` to customize:

```javascript
export const siteConfig = {
  domain: "SEOdit.com",
  title: "SEOdit.com - Premium SEO Domain",
  description: "A high-value domain for sale by SuperCight Domains.",
  company: "SuperCight Domains",
  email: "hello@supercight.com",
  contentBy: "PublishInk Agency",
};
Swap assets and config values for other domains.


### Deploy

- Build: npm run build
- Push: Auto-deploys to Cloudflare Pages via GitHub.
- Go Live: Assign SEOdit.com when ready.
- Clone this repo and tweak siteConfig for new domains.


## Usage

- Domain Sales: Reuse for sites like AINotified.com or Tree.Institute.
- Blogging: Add posts to src/content/post/ for traffic growth.
- Affiliate Income: Embed affiliate links in blog content.
- Gallery: Link all sites via SuperCight.com’s future gallery.


## Contributing

Got ideas or bug reports? Open an issue or pull request to help refine this template!


## Acknowledgements

- Based on the Qwind template by onWidget, customized by SuperCight Domains.
- Content strategy by PublishInk Agency.
- Thanks to the Astro community!


## License

MIT License—see LICENSE.md (./LICENSE.md).

____________________________________________________________

Contact:  Jason Cline, Owner of SuperCight Domains
          jason@SuperCight.com (mailto:jason@supercight.com)
          +1-708-402-8570
          SuperCight.com | PublishInk.Agency