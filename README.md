# Next Interactive Boilerplate

Demo: [INCOMING]
A simple [Next.js](https://nextjs.org/) boilerplate with [TailwindCSS](https://tailwindcss.com/) [Framer Motion](https://www.framer.com/motion/),  [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) and [GSAP Scroll Trigger](https://github.com/greensock/GSAP).
Developed based on [Samuel Goddard Next Boilerplate](https://github.com/samuelgoddard/next-tailwind-motion.git).

## ✨ Features
- [Next](https://nextjs.org/) 11
- [Tailwind](https://tailwindcss.com/) (With [JIT](https://tailwindcss.com/docs/just-in-time-mode) mode enabled)
- Custom [PostCSS](https://postcss.org/) setup preconfigured to allow for `@import` and simple CSS nesting
- [Framer Motion 4](https://www.framer.com/motion/) (With [LazyMotion](https://www.framer.com/api/motion/lazy-motion/) setup for smaller bundle sizes)
- [Preact](https://preactjs.com/) preconfigured instead of React for smaller bundle size*
- SEO preconfigured with [next-seo](https://github.com/garmeeh/next-seo)
- [Module Aliasing](https://nextjs.org/docs/advanced-features/module-path-aliases) preconfigured with `jsconfig.json`
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) preconfigured for smooth, lerp based page scrolling
-  [GSAP Scroll Trigger](https://github.com/greensock/GSAP) preconfigured for custom scroll animation.

_*To remove Preact and switch back to React simply remove the code in `next.config.js`_

### Roadmap / Coming Soon...
- Feature branch with [Sanity](https://www.sanity.io/) preconfigured

## 🚀 Quick start

1.  **Clone the repo**

    ```sh
    git clone https://github.com/tomostudio/next-interactive-boilerplate.git
    ```

2.  **Start developing**

    Navigate into your new site’s directory and install the local dependencies first, then run the dev command.

    ```sh
    cd next-interactive-boilerplate/
    
    yarn
    yarn run dev
    ```

3.  **Open the source code and start editing!**

    Your site is will be running at `http://localhost:3000`

## 🗄 Directory Structure
```
|-- components
    |-- container.js *// A simple container component to wrap areas in a max width*
    |-- fancyLink.js *// A simple wrapper around `next/link`
    |-- footer.js *// Example footer component*
    |-- header.js *// Example header component*
    |-- layout.js *// Layout component that can be used to wrap your pages in a global layout*
    |-- scrolltrigger.js *// A container to enable scrolltrigger interaction*
|-- helpers
    |-- seo.config.js *// default SEO configuration helper, imported in `pages/_app.js`*
    |-- transitions.js *// re-usable framer motion transition helper with a basic 'fade' transition to get started*
    |-- globalscroll.js *// push locomotive scroll event to context or global window event*
|-- context
    |-- state.js  *// default react context initiation, currently preset to store contextual locomotive scroll event*
|-- pages
    |-- _app.js *// Includes default SEO component, Framer motion AnimatePresence & Locomotive Scroll init*
    |-- _document.js *// Default Next document component*
    |-- about.js
    |-- index.js
|-- public *// Next public assets*
|-- styles
    |-- _locomotive.css *// custom locomotive scroll styles*
    |-- _fonts.css *// custom webfont styles*
    |-- _typography.css *// custom typographical styles*
    |-- main.css *// Tailwind init and custom css imports*
|-- .gitignore
|-- jsconfig.json *// module aliasing*
|-- postcss.config.js *// Tailwind, CSS import, CSS nesting init*
|-- next.config.js *// Prefer Preact to React*
|-- package.json
|-- README.md
|-- tailwind.config.js
```
