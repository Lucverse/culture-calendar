# 🌍 Milan — Couple's Cross-Cultural Calendar

A dedicated web application for couples to discover, plan, and celebrate major festivals and cultural traditions from around the world—specifically curated for **practical feasibility, grocery availability, and local sourcing in India**.

---

## ✨ Features

- **🏮 12+ Curated Global Festivals (Feasible in India):**
  - **Lunar New Year (Spring Festival):** Hand-rolled dumplings, red lanterns, and good luck wishes.
  - **St. Patrick's Day:** Homemade Irish soda bread, hearty potato-leek stew, and Celtic acoustic music.
  - **Nowruz (Persian New Year):** Miniature *Haft-sin* table, fragrant saffron jeweled rice with pomegranates.
  - **Hanami (Cherry Blossom Picnic):** Spring picnic date under pink blooms with homemade onigiri and iced strawberry matcha.
  - **Cinco de Mayo:** Fresh street-style tacos, guacamole bar, homemade cinnamon churros, and chili-lime margaritas.
  - **Midsommar (Summer Solstice):** Weaving fresh flower crowns (*Midsommarkrans*), golden hour terrace dinner, and berry shortcake.
  - **Tanabata (Japanese Star Festival):** Writing secret couple wishes on colorful *Tanzaku* paper strips tied to bamboo, rooftop stargazing.
  - **Oktoberfest:** Giant chewy Bavarian soft pretzels, warm beer-cheese dip, and couple tabletop board game duel.
  - **Halloween:** Carving local Indian *Kaddu* Jack-o'-lanterns, spooky movie marathon, and warm spiced apple cider.
  - **Día de los Muertos (Day of the Dead):** Marigold (*Genda Phool*) altar of memories, Mexican spiced hot chocolate, and sweet buns.
  - **Diwali:** Hand-painting terracotta diyas, floral rangoli, festive sweets, and terrace candlelight feast.
  - **Thanksgiving:** Garlic-herb roast dinner for two, creamy mashed potatoes, and couple gratitude notes.
  - **Christmas & Advent:** Decorating a tabletop pine, gingerbread cookies, mulled wine, and classic holiday cinema.
  - **Hogmanay (New Year's Eve):** Scottish "First-Footing" tradition, couple travel vision board, and midnight sparkling toast.

- **📦 "Date-in-a-Box" Celebration Kit:**
  - **Shared Ritual:** 30–60 minute engaging shared experience for two.
  - **Feast & Toast:** Authentic recipes scaled for two with vegetarian substitutions.
  - **Ambiance:** Spotify playlist search link, lighting suggestions, and movie/show recommendations.
  - **History & Respect:** 2-minute cultural background so you appreciate the true meaning.

- **🇮🇳 Indian Feasibility Engine:**
  - 1-click **Blinkit / Zepto / Swiggy Instamart** grocery checklist.
  - **Local Mandi & Kumhar guide** (e.g. fresh *genda phool* for Día de los Muertos, Indian *kaddu* for Halloween carving).
  - **Smart Substitutions Matrix** (authentic item $\rightarrow$ readily available Indian equivalent).
  - Estimated budget in ₹ INR and prep time.

- **📖 Couple Scrapbook & Annual Tradition Tracker:**
  - Log past dates, upload photos, rate date nights (1–5 stars), and vote to make a festival an annual tradition.
  - Confetti celebration upon saving!

- **🛒 Aggregated Grocery Cart Generator:**
  - Select upcoming festivals and generate a unified shopping checklist formatted for WhatsApp or Blinkit.

- **📅 Calendar Integration:**
  - 1-click "Add to Google Calendar" with event details and prep notes.
  - Download standard `.ics` file with built-in prep alarms (T-7 days and event day) for Apple Calendar / Outlook.

- **☁️ MongoDB Cloud Sync + Offline Local Storage:**
  - Works out of the box using browser storage.
  - Provide a `MONGODB_URI` in `.env.local` to sync memories across both partners' phones!

---

## 🚀 Getting Started

### 1. Install & Run Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 2. Configure MongoDB (Optional)

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/culture_calendar?retryWrites=true&w=majority
```

If not provided, the app will seamlessly run in offline-ready local storage mode.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB (native driver with connection pooling)
- **Icons & Effects:** Lucide React, Canvas Confetti
