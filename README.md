# React Portfolio

Personal portfolio built with React + Vite, component-based architecture, Framer Motion interactions, and light/dark theme toggle.

## Features

- Component-based UI (`Navbar`, `Hero`, `Skills`, `Projects`, `About`, `Contact`, `Footer`)
- Smooth motion effects with Framer Motion (hover tilt, reveal animations)
- Theme switcher (light/dark) with persistent state (`localStorage`)
- Skills section with external icons
- Project cards with GitHub/live links
- Fully responsive layout

## Tech Stack

- React 18
- Vite 7
- Framer Motion
- Chakra UI (provider setup)
- React Icons

## Project Structure

```text
src/
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    Skills.jsx
  data/
    portfolioData.js
  assets/
  App.jsx
  App.css
  main.jsx
```

## Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## Customize Content

Update these files:

- Skills, projects, social links: `src/data/portfolioData.js`
- Main section layout: `src/App.jsx`
- Section/component UI: `src/components/*.jsx`
- Theme + styling: `src/App.css`

## Theme Notes

- Theme key: `portfolio-theme`
- Dark mode is applied using `data-theme="dark"` on the root document element.

## Troubleshooting

If dev server shows a white page:

1. Check browser console for first red error.
2. Ensure no Git conflict markers remain (`<<<<<<<`, `=======`, `>>>>>>>`) in files.
3. Restart with force:

```bash
npm run dev -- --force
```

## Author

B. Aditya Rao

- GitHub: https://github.com/aditya26rao
- LinkedIn: https://www.linkedin.com/in/bonthapalli-aditya-rao-3175561bb
