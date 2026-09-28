<div align="center">

# 🧭 Escape-Route — AI Travel Itinerary Planner & Real-Time Route Map

**Generate a day-by-day travel itinerary from a single prompt, then explore it on an interactive, road-following map.**

AI itinerary generator · Trip planner · Route optimization · Interactive geospatial visualization · Next.js

[**🚀 Live Demo**](https://escape-route-beryl.vercel.app/)

</div>

---

## 🏔️ What is Escape-Route?

Escape-Route is an **AI trip planner / itinerary generator** for travellers tired of copy-paste blog itineraries. Enter a starting city, pick your vibes (temples, treks, cafés, beaches, waterfalls, forts, night markets…), set the trip duration, pace and transport — and it returns a **sequenced, day-by-day travel itinerary** with geo-coordinates for every stop.

Every stop is plotted on a **live interactive map** with **real road-following geometry**, travel times, estimated durations, insider tips and packing suggestions. Don't like it? Hit **Remix** for a variation, **Modify** to refine inputs, or **Save Escape** to keep it locally in the browser.

> **Keywords:** AI itinerary generator, travel route planner, trip itinerary maker, day-by-day travel planner, interactive travel map, travel route visualization, personalised travel itinerary, road trip planner, geospatial travel app, Next.js Gemini app, Leaflet React map, OSRM routing.

---

## ✨ Features

| | Feature | Summary |
|---|---|---|
| 🤖 | **AI Itinerary Generation** | Gemini-powered day-by-day trip planner from natural-language preferences |
| 🗺️ | **Interactive Real-Time Map** | Leaflet + OpenStreetMap with fly-to-stop, day filtering, fit-route |
| 🛣️ | **Road-Accurate Routing** | OSRM road geometry instead of straight lines, per day |
| 🔁 | **Remix Trip** | One-click itinerary variation via a new `variationSeed` |
| ✏️ | **Modify Trip** | Re-run generation with pre-filled form values |
| 💾 | **Saved Escapes** | Local itinerary library (localStorage, up to 20) with schema migration |
| 🧩 | **Travel Vibe Categories** | Temple, café, trek, mountain, waterfall, beach, hotel, viewpoint, heritage, market |
| ⏱️ | **Pace & Transport Controls** | Relaxed / Moderate / Action-Packed · Walking & TukTuk, Scooter, Car/Cab/Taxi |
| 📍 | **Must-Visit Pinning** | Force specific places into the generated route |
| 🎨 | **Dark Themed UI** | Tailwind CSS v4 + Lucide icons + animated hero scene |
| ♿ | **Accessible Dialogs** | Esc-to-close modal, ARIA labels, toasts for save/error states |
| 🔧 | **Fault-Tolerant Engine** | Model fallback chain, sweeps with backoff, shared time budget, honest failures |

---

## 🧠 How It Works

1. **Configure your escape** — starting location, must-visit places, vibes, duration, pace, transport, custom notes.
2. **The AI engine sequences the trip** — server-side Gemini call returns structured JSON: days → stops → coordinates → travel times → insider tips.
3. **The map renders the route** — day-wise OSRM road geometry (falls back to straight polylines when routing is unavailable).
4. **Refine or keep it** — Remix, Modify, or Save Escape to your local library.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router, React 19, TypeScript 5) |
| Styling | **Tailwind CSS v4**, Lucide React icons, custom UI primitives |
| AI | **Google Gemini** via `@google/generative-ai` |
| Maps | **Leaflet** + **react-leaflet** (dynamically imported, SSR-safe) |
| Routing | **OSRM** public demo server (polyline geometry, in-memory cache + in-flight dedupe) |
| Storage | Browser `localStorage`, versioned key + schema migration |
| Deployment | **Vercel** |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A **Google Gemini API key** — [get one here](https://aistudio.google.com/app/apikey)

### Setup

```bash
git clone <your-repo-url>
cd mapmyescape
npm install
```

Create `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Optional tunables (override `itinerary-prompt.json` without touching code):

```env
GEMINI_TIMEOUT_MS=45000        # per-attempt timeout
GEMINI_TOTAL_BUDGET_MS=120000  # whole-request budget
```

### Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the build
npm run lint    # ESLint
```

---

## 🤝 Contributing

1. Fork and branch (`feat/road-trip-mode`).
2. Keep copy in `src/data/localization.json` — never hard-code user-facing strings.
3. Keep tunables in `itinerary-prompt.json` — never hard-code model lists or timeouts.
4. Run `npm run lint` and `npm run build` before opening a PR.

---

## 📄 License

Released for educational and personal project use.

---

<div align="center">

**Escape-Route** — *Dynamic Travel Routes & Real-Time Geospatial Visualization*

AI travel itinerary generator · trip planner · route optimization · interactive map visualization

</div>
