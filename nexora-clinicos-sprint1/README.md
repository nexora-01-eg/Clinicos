# NEXORA ClinicOS

**Smart Clinic Management System** — V1 Free Edition
Offline-first · Installable · Responsive PWA

> **Sprint 1 of N.** This is the project foundation only: app shell, design
> system, PWA config, Login, and Dashboard. Patients, Appointments,
> Inventory, and Reports are intentionally not built yet — the navigation
> and folder structure are already shaped to receive them without rework.

---

## Stack

| Layer      | Choice |
|------------|--------|
| Framework  | React 19 + TypeScript |
| Build      | Vite 8 |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.js` needed) |
| Motion     | Framer Motion |
| Icons      | lucide-react |
| Routing    | React Router 7 |
| Offline    | vite-plugin-pwa (Workbox), IndexedDB scaffold, localStorage |
| Fonts      | Self-hosted variable Inter (`@fontsource-variable/inter` — no external font CDN calls, so typography survives fully offline) |

No backend. No API. No auth server. Everything runs and persists locally
on the device.

---

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

### Other scripts

```bash
npm run build     # type-check + production build to /dist
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

### Installing as an app

In a Chromium-based browser, open the dev/preview URL and use the install
icon in the address bar (or the browser menu → "Install NEXORA ClinicOS").
On iOS Safari, use Share → "Add to Home Screen". The manifest, icons, and
service worker are already wired up (`vite-plugin-pwa`, `generateSW` mode).

---

## Folder structure

```
src/
  app/            Route guards and app-level wiring (ProtectedRoute, etc.)
  components/
    ui/           Design-system primitives (Button, Card, Input, Modal, …)
    common/       Shared, branded pieces (LogoMark, SplashScreen, Breadcrumb…)
  features/
    dashboard/    Dashboard-only widgets (Sprint 1's single feature module)
  layouts/        AppLayout, Sidebar, Navbar, MobileBottomNav
  pages/          Route-level screens (LoginPage, DashboardPage, NotFoundPage)
  hooks/          useAuth, useTheme, useOnlineStatus, useMediaQuery, useInstallPrompt
  services/       storage.service (localStorage), auth.service (local session)
  database/       IndexedDB schema + client — PREPARED, not yet wired to any UI
  contexts/       AuthContext, ThemeContext, ToastContext
  config/         app.config (branding/feature flags), navigation (nav items)
  types/          Shared cross-cutting TypeScript types
  data/           Mock data for the Dashboard, clearly labeled as placeholders
  styles/         Global stylesheet + Tailwind v4 design tokens, font imports
  utils/          cn() class-merge helper
```

Path aliases (`@/`, `@components/`, `@features/`, `@hooks/`, …) are
configured in both `vite.config.ts` and `tsconfig.app.json` — always use
them instead of relative `../../../` imports.

**Rule for future sprints:** each new module (Patients, Appointments,
Inventory, Reports) gets its own folder under `src/features/`, its own
types near its feature (not crammed into the shared `types/index.ts`), and
flips its `disabled: true` flag in `src/config/navigation.ts` +
`src/config/app.config.ts` (`FEATURE_FLAGS`) once it ships. This file
structure and the flag pattern are the contract — don't restructure it,
extend it.

---

## Design system

All tokens are defined once, in `src/styles/index.css`, using Tailwind v4's
CSS-first `@theme` block — no separate `tailwind.config.js`.

| Token | Value |
|---|---|
| Primary | `#0F4C81` |
| Secondary | `#2BB673` |
| Background | `#F6F9FC` |
| Surface | `#FFFFFF` |
| Danger | `#E53935` |
| Warning | `#F9A825` |
| Text | `#1F2937` |
| Radius (card) | `20px` |
| Shadows | very soft, diffused, never harsh (`--shadow-soft-*`) |
| Font | Inter (self-hosted variable) |

Style direction: Material Design 3 structure, Apple-level spacing
discipline, Stripe's card language, Linear's restraint. No gradients, no
glassmorphism, no neon. The signature brand element is the `LogoMark` — a
heartbeat trace that resolves into a medical cross — reused across the
splash screen, login hero, and sidebar so the brand reads as one considered
idea rather than a generic clip-art cross.

Dark mode has a working toggle (`useTheme`, persisted) with baseline
overrides; deep dark-mode polish across every component is left for a
follow-up sprint since the brief's palette is specified for light surfaces.

### Reusable components (`src/components/ui`)

Button · Card (+ Header/Title/Description/Content/Footer) · Input ·
Checkbox · SearchBar · Modal · Avatar · Badge · Dropdown · Toast (+
ToastViewport) · Skeleton (+ StatCardSkeleton) · EmptyState · SectionHeader
· PageContainer

Sidebar, Navbar, and MobileBottomNav live in `src/layouts/` since they're
structural rather than atomic, but are just as reusable — `AppLayout`
composes all three plus the toast viewport.

---

## What's built in Sprint 1

- **Splash screen** — logo, loading animation, fade transition.
- **Login screen** — clinic/doctor branding, remember-device, offline
  notice, no real auth server (local-only session in `localStorage`).
- **Application shell** — desktop sidebar, mobile bottom nav, tablet
  responsive breakpoints, top nav with breadcrumb, notifications icon,
  profile menu, and theme switch.
- **Dashboard** (the only module) — Today's Patients, Today's Appointments,
  New Patients, Revenue stat cards; Upcoming Appointments list; Recent
  Activity feed; Quick Actions (disabled, reserved for future modules);
  mini calendar; Performance and AI Assistant placeholders.
- **PWA** — manifest, icons (192/512/512-maskable/apple-touch), service
  worker via Workbox (`generateSW`), offline caching for the app shell,
  fonts, and images.
- **IndexedDB schema** — reserved store definitions for `patients`,
  `appointments`, `inventory`, `invoices`, `settings` (see
  `src/database/schema.ts`). Not yet read from or written to anywhere in
  the UI — this is groundwork for the next sprint, not a live feature.

## Explicitly not built yet

Patients, Appointments, Inventory, Reports. Sidebar/bottom-nav entries for
these exist and are visibly disabled ("Soon") rather than hidden, so the
navigation shape won't need to change when they land.

## Known follow-ups for later sprints

- The lucide-react icon set is imported as a single namespace in
  `DynamicIcon` for the nav/config-driven icon lookup, which puts the full
  icon set in the main chunk (~1 MB before gzip). Worth revisiting with
  per-icon imports or a route-level code-split once more pages exist.
- IndexedDB (`src/database/`) is schema-only; wiring `getDatabase()` into a
  real repository layer is Patients-module work.
- Deeper dark-mode styling per component.

---

## Browser/platform support

Responsive from mobile (~360px) through tablet and desktop. Installable on
Android, iOS (Safari "Add to Home Screen"), Windows, and macOS via any
Chromium-based browser or Edge/Chrome's install prompt.
