# UI components

shadcn/ui components for this site, styled by its theme in src/index.css. This folder is not part of the built site:
the styles of a component are only generated once it is in src/, so a page pays only for the components it uses.

To use one, copy it with the components it needs into src/components/ui/ and import it from `@/components/ui/<name>`:

```bash
mkdir -p src/components/ui && cp ui-library/dialog.tsx ui-library/button.tsx src/components/ui/
```

Never import from ui-library/ directly. Change a copied component in src/components/ui/, not here.

## Needs more than itself

- alert-dialog: button
- calendar: button, and `rork install react-day-picker`
- command: dialog, and `rork install cmdk`
- drawer: `rork install vaul`
- input-otp: `rork install input-otp`
- tooltip: wrap the page, or the root's `<Outlet />`, in `<TooltipProvider>` once

Every other component needs only itself. `rork install` takes `--app <app folder> --json`.

Toasts need nothing from here: sonner is already in src/components/ui/ and its `<Toaster />` is in the root, so a page
calls `toast()` from `sonner`.

## Not in this folder

When a page needs a component that is not here (a carousel, a chart, a sidebar, a date picker), build it in
src/components/ui/ in the same style, a Radix primitive or a small library styled with Tailwind and `cn()` from
src/lib/utils.ts, and add the package it needs with `rork install`.
