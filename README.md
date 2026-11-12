# Pikup — Pre-hackathon delivery prototype

A lightweight, static, mobile-first prototype for clients and delivery riders in Buea. Merchant features are intentionally excluded. The visual system follows the existing Pikup app: warm orange actions, blue-teal trust accents, cool light surfaces, and Sora-style headings.

## Run locally
Open `index.html` in a browser, or run a local static server from this folder:

```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Demo journey
1. Stay on **Client view** and enter pickup, drop-off and contact details.
2. Select **Find me a rider**.
3. Switch to **Rider view** and accept the request.
4. Mark it as picked up, then complete the delivery.
5. Return to **Client view** and leave a star rating.

All interactions use local browser state only. No real rider is notified, no payment is collected, and the fare is a demo estimate. Refreshing the page resets the demo.

## Free hosting
Upload the contents of this folder to Netlify Drop, or import the folder/repository into Vercel or GitHub Pages. No build step or server is required.

## Tests
Run `npm test` (Node.js 18+ recommended). Tests cover the delivery state flow, invalid completion transition, and fare estimate inputs.
