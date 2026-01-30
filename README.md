# Portfolio Website

Moderné osobné portfólia vytvorené pomocou React, Vite, TypeScript a Tailwind CSS.

## Funkcie

- ✅ Responzívny dizajn (mobile-first)
- ✅ React Router pre SPA routing
- ✅ TypeScript pre type safety
- ✅ Tailwind CSS pre styling
- ✅ SEO optimalizácia
- ✅ Accessibility features
- ✅ Kontaktný formulár

## Technológie

- **React 18** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **React Router** - Routing
- **Tailwind CSS** - Utility-first CSS framework

## Inštalácia

```bash
# Inštalácia závislostí
npm install

# Spustenie development servera
npm run dev

# Build pre produkciu
npm run build

# Preview produkčného buildu
npm run preview
```

Otvorte [http://localhost:5173](http://localhost:5173) v prehliadači.

## Deployment na Netlify

Projekt je pripravený na deployment na Netlify:

1. Pushnite kód do GitHub repozitára
2. V Netlify dashboarde vytvorte nový site z Git
3. Netlify automaticky detekuje nastavenia z `netlify.toml`
4. Build command: `npm run build`
5. Publish directory: `dist`

## Štruktúra projektu

```
├── src/
│   ├── components/      # React komponenty
│   │   ├── layout/     # Layout komponenty
│   │   ├── home/       # Homepage komponenty
│   │   ├── projects/   # Projekt komponenty
│   │   └── ui/         # UI komponenty
│   ├── pages/          # Stránky
│   ├── data/           # Data súbory
│   ├── App.tsx         # Hlavná aplikácia
│   └── main.tsx        # Entry point
├── public/             # Statické súbory
├── netlify.toml        # Netlify konfigurácia
└── vite.config.ts      # Vite konfigurácia
```

## Prispôsobenie

### Zmena obsahu

- **Projekty**: Upravte `src/data/projects.ts`
- **Skills**: Upravte `src/data/skills.ts`
- **Testimonials**: Upravte `src/data/testimonials.ts`
- **Bio**: Upravte `src/data/bio.ts`
- **Kontakt**: Upravte `src/data/contact.ts`

### Zmena farieb

Upravte `tailwind.config.js` pre zmenu farieb a dizajnu.

## Licencia

MIT
