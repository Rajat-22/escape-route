# GitHub Repository Discoverability Guide

How to make `Rajat-22/escape-route` surface in GitHub search and Google results.
Everything here is a **copy-paste block** — no decisions left to make.

---

## 1. Repository "About" section (highest impact)

Open **https://github.com/Rajat-22/escape-route** → click the **⚙️ gear** next to _About_.

### Description (paste verbatim — 350 char limit, this is ~235)

```
AI travel itinerary generator with real-time route visualization. Day-by-day trip planner that sequences stops, plots road-accurate routes on an interactive Leaflet map, and adds insider tips. Built with Next.js 16, React 19, Gemini, OSRM.
```

### Website

```
https://escape-route-beryl.vercel.app/
```

### Topics (paste one per field, press Enter each time)

GitHub allows **max 20 topics**. These 20 are ordered so the most-searched terms come first
(GitHub weights earlier topics marginally higher, and the UI truncates the row):

```
ai-itinerary-generator
travel-route-planner
trip-planner
itinerary-builder
travel-planner
interactive-map
route-visualization
geospatial
leaflet
react-leaflet
openstreetmap
osrm
route-optimization
nextjs
react
typescript
tailwindcss
gemini-ai
google-gemini
generative-ai
```

> **Why these:** GitHub search matches `name + description + topics` and treats topic
> slugs as _exact keyword_ matches. A search for `travel route planner` hits
> `travel-route-planner`; a search for `ai itinerary` hits `ai-itinerary-generator`.
> Mixed domains (`nextjs`, `leaflet`) also catch the _developer_ audience, which is
> the audience that actually stars repos.

---

## 2. Repository name ✅ DONE

The repo was renamed from `map-my-escape` to **`escape-route`**, matching the product
name and the primary search term. GitHub redirects the old URL automatically, so any
links already shared still resolve.

If you cloned before the rename, point your local remote at the new name:

```bash
git remote set-url origin https://github.com/Rajat-22/escape-route.git
```

---

## 3. Social preview image

_Settings → General → Social preview → Edit → Upload_

Use the **same generated OG card** the app already serves, so GitHub and LinkedIn
show an identical brand image.

Download it once from the live deployment:

```
https://escape-route-beryl.vercel.app/opengraph-image
```

Save as `social-preview.png` (1200×630) and upload. This is what appears when the
repo link is pasted into Slack, X, LinkedIn or Discord.

---

## 4. Pin the repository

Profile → **Customize your pins** → tick `escape-route`.

Pinned repos are the only ones shown above the fold on your profile. This is the
single cheapest visibility win available.

---

## 5. README badges (optional, boosts trust signals)

Add directly under the title in `README.md` to show live status and stack:

```markdown
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=flat-square)](https://escape-route-beryl.vercel.app/)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
```

> Badges are also **crawlable text in Google's index**, so they feed keywords
> into the search snippet.

---

## 6. Enable Discussions

_Settings → General → Features → Discussions_ ✅

Gives the repo a `discussions` surface that Google indexes, and adds a
"Community" signal. Already wired into `.github/ISSUE_TEMPLATE/config.yml`.

---

## 7. Release a version (creates an indexable page)

_Releases → Draft a new release_

- Tag: `v0.1.0`
- Title: `Escape-Route v0.1.0 — AI Itinerary Planner`
- Description: short changelog + the live demo link

Each release creates its own URL that Google indexes and gives the repo a
**"Latest release"** badge on the repo page.

---

## 8. Add a LICENSE (trust + template licensing)

_Add file → Create new file_ → name it `LICENSE`.

Without a license file GitHub shows **"No license"**, which measurably reduces
stars and reuse. The README currently says _"Released for educational and
personal project use"_ — if you want that to be binding, add the matching license
text; if you want maximum reuse, use MIT.

---

## 9. Keep the keyword footprint consistent

Search engines reward **consistency across surfaces**. Make sure the same phrases
appear in all of these:

| Surface                   | Primary keyword phrase                            |
| ------------------------- | ------------------------------------------------- |
| GitHub description        | AI travel itinerary generator                     |
| GitHub topics             | `ai-itinerary-generator`, `travel-route-planner`  |
| `package.json` keywords   | `ai-itinerary-generator`, `travel-route-planner`  |
| `README.md` title         | AI Travel Itinerary Planner & Real-Time Route Map |
| `<title>` in `layout.tsx` | AI Travel Itinerary Planner & Live Route Map      |
| `metadata.description`    | day-by-day travel itinerary with AI               |

All six are already aligned in this repo — that consistency is what lets Google
connect the GitHub repo, the Vercel deployment and the app page as _one entity_.

---

## Checklist

- [ ] Description pasted into About
- [ ] Website set to the Vercel URL
- [ ] All 20 topics added
- [ ] Social preview PNG uploaded _(from `/opengraph-image`)_
- [ ] Repository pinned on profile
- [ ] README badges added _(optional)_
- [ ] Discussions enabled
- [ ] `v0.1.0` release published
- [ ] `LICENSE` file added
- [x] ~~Rename repo to `escape-route`~~ ✅ done
- [ ] Local git remote updated to the new name
- [ ] All local changes committed and pushed
