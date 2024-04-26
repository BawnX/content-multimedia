const {
  createGlobPatternsForDependencies,
} = require('@nxtensions/astro/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    join(
      __dirname,
      'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,svelte,ts,tsx,vue}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--text-color)",
          accent: "var(--text-accent)"
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--background-base)",
          accent: "var(--background-accent)",
          invalid: "var(--background-invalid)",
        },
      },
    },
  },
  plugins: [],
};
