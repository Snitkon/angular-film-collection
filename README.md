---

# 🎬 Film Collection

A modern movie catalog application built with **Angular 21**. This project demonstrates hands-on experience with the latest Angular features, focusing on **Signals**, Standalone components, and the new Control Flow and without RxJS.

---

## ✨ Features

- **Signal-Based Reactivity:** Uses `signal()` and `computed()` for state management (filtering, searching, and favorites).
- **Dynamic Search:** Real-time filtering by title as the user types.
- **Custom Directive:** A standalone `autofocus` directive applied to the search input.
- **Custom Pipe:** A specialized `duration` pipe that converts minutes into a readable format (e.g., `90` → `1h 30min`).
- **Modern Control Flow:** Utilizes `@if`, `@for`, and `@switch` for clean and declarative templates.
- **Dynamic Routing:** Implemented with `routerLink`, URL parameters for movie details, and wildcard handling for 404 pages.
- **Responsive Layout:** Includes a shared Header, Footer, and interactive Breadcrumbs across all pages.

---

## 🚀 Demo

Experience the live application here:  
👉 **[Deployment](https://angular-film-collection-snitkon.vercel.app/)**

---

## 🛠 Tech Stack

*   **Framework:** Angular 20+ (Standalone Components)
*   **Language:** TypeScript (Strict Mode)
*   **Reactivity:** Angular Signals (`signal`, `computed`, `input`, `output`)
*   **Styling:** SCSS
*   **Build Tool:** Angular CLI

---

## 📂 Project Structure

The project follows a modular and scalable directory structure:
```text
src/app/
│
├── core/                       # Singleton services and global state
│   ├── services/               # Film.service.ts (Signals, Data storage) and Breadcrumbs.service.ts (Router)
│   ├── models/                 # TypeScript interfaces (Film, Breadcrumbs)
│   ├── resolver/               # Get mock data before initialization component
│   └── mock-data/              # Static mock data (10+ films)
│
├── shared/                     # Reusable UI tools and components
│   ├── components/             # Global UI: Header, Footer, Breadcrumbs
│   ├── directives/             # Autofocus directive
│   └── pipes/                  # Duration pipe (90 -> 1h 30min)
│
├── features/                   # Business logic and page screens
│   ├── layout/                 # Wrapper (Header + Breadcrumbs + Footer)
│   ├── catalog/                # Home Page with search and film-card
│   ├── film-details/           # Detailed view page
│   ├── about/                  # About project page
│   └── not-found/              # 404 Error page
├── styles/                     # Mixins
│
├── app.config.ts               # Application-wide providers
├── app.routes.ts               # Main routing
└── app.component.ts            # Entry component (Router outlet)
```
---

## 📧 Contact Me

I am open to feedback, collaboration, and mentoring opportunities!

*   **GitHub:** [Snitkon](https://github.com/snitkon)
*   **LinkedIn:** [Mikita](https://www.linkedin.com/in/snitkon/)

---
