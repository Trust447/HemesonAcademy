# Hemeson Academy — Official Website

> **"Striving for Excellence"** — Aba's Premier Private School, Abia State, Nigeria.

A fast, modern school website built with **React + Vite**, covering Nursery through Senior Secondary School (SS3). Fully responsive, WhatsApp-integrated, and built for Nigerian families.

---

## Live Site

> Deploy to GitHub Pages and update this link.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| EmailJS | Contact form (no backend needed) |
| CSS Modules (BEM) | Scoped component styles |
| Hash Router (custom) | Client-side routing |

---

## Project Structure

```
hemeson-react/
├── public/
│   └── images/
│       ├── principal.webp       ← drop principal photo here
│       └── levels/
│           ├── nursery.webp
│           ├── basic.webp
│           ├── junior-secondary.webp
│           └── senior-secondary.webp
├── src/
│   ├── assets/
│   │   └── hemeson-logo.png
│   ├── data/
│   │   └── site.js              ← ALL site content lives here
│   ├── hooks/
│   │   ├── useReveal.js
│   │   └── useRouter.js
│   ├── utils/
│   │   └── whatsapp.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── base.css
│   │   └── animations.css
│   ├── pages/
│   │   ├── NewsPage.jsx
│   │   └── ArticlePage.jsx
│   └── components/
│       ├── ui/
│       ├── layout/
│       └── sections/
├── .env                         ← create this locally (never commit)
├── .env.example                 ← template — safe to commit
└── .gitignore
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR-USERNAME/hemeson-academy.git
cd hemeson-academy
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 4. Start the dev server

```bash
npm run dev
```

---

## Updating Content

All site content — school name, motto, address, phone, staff, news articles, testimonials — lives in one file:

```
src/data/site.js
```

Edit that file and the entire site updates automatically.

---

## Adding Images

| Image | Path |
|-------|------|
| Principal photo | `public/images/principal.webp` |
| Nursery level | `public/images/levels/nursery.webp` |
| Basic level | `public/images/levels/basic.webp` |
| Junior Secondary | `public/images/levels/junior-secondary.webp` |
| Senior Secondary | `public/images/levels/senior-secondary.webp` |

---

## EmailJS Setup

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Connect your Gmail service
3. Create a template with these variables:

```
{{parent_name}}  {{child_name}}  {{child_age}}
{{level}}  {{phone}}  {{email}}  {{notes}}
```

4. Set **To Email** to `hemesonschool@gmail.com`
5. Copy your Service ID, Template ID and Public Key into `.env`

---

## Deployment (GitHub Pages)

```bash
# 1. Build
npm run build

# 2. Push to GitHub
git add .
git commit -m "deploy"
git push

# 3. GitHub → Settings → Pages → Branch: main → Save
```

---

## Contact

**Hemeson Academy**  
Umu-Ukaegbu, Umuejije (Opp "One Man"), Osisioma-Ngwa LGA, Abia State, Nigeria  
WhatsApp: +2348144082663  
Email: hemesonschool@gmail.com
