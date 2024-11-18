import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-fonts-headings": "var(--black-fonts-headings)",
        "dark-green-buttons": "var(--dark-green-buttons)",
        earnsuperteamfunbiscay: "var(--earnsuperteamfunbiscay)",
        earnsuperteamfunblack: "var(--earnsuperteamfunblack)",
        "earnsuperteamfunblack-russian": "var(--earnsuperteamfunblack-russian)",
        earnsuperteamfunboulder: "var(--earnsuperteamfunboulder)",
        earnsuperteamfuncamarone: "var(--earnsuperteamfuncamarone)",
        earnsuperteamfuncandlelight: "var(--earnsuperteamfuncandlelight)",
        earnsuperteamfuncerulean: "var(--earnsuperteamfuncerulean)",
        earnsuperteamfuncrimson: "var(--earnsuperteamfuncrimson)",
        "earnsuperteamfundeep-koamaru": "var(--earnsuperteamfundeep-koamaru)",
        "earnsuperteamfunfun-green": "var(--earnsuperteamfunfun-green)",
        earnsuperteamfunheliotrope: "var(--earnsuperteamfunheliotrope)",
        "earnsuperteamfuninternational-klein-blue":
          "var(--earnsuperteamfuninternational-klein-blue)",
        "earnsuperteamfunjapanese-laurel":
          "var(--earnsuperteamfunjapanese-laurel)",
        earnsuperteamfunmojo: "var(--earnsuperteamfunmojo)",
        earnsuperteamfunmonza: "var(--earnsuperteamfunmonza)",
        earnsuperteamfunmystic: "var(--earnsuperteamfunmystic)",
        "earnsuperteamfunnavy-blue": "var(--earnsuperteamfunnavy-blue)",
        "earnsuperteamfunneon-carrot": "var(--earnsuperteamfunneon-carrot)",
        earnsuperteamfunred: "var(--earnsuperteamfunred)",
        "earnsuperteamfunripe-lemon": "var(--earnsuperteamfunripe-lemon)",
        earnsuperteamfunsmalt: "var(--earnsuperteamfunsmalt)",
        earnsuperteamfunyellow: "var(--earnsuperteamfunyellow)",
        font: "var(--font)",
        theme: "var(--theme)",
        ton: "var(--ton)",
        "white-background": "var(--white-background)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        button: "var(--button-font-family)",
        "earn-superteam-fun-inter-bold-28":
          "var(--earn-superteam-fun-inter-bold-28-font-family)",
        "earn-superteam-fun-inter-bold-36":
          "var(--earn-superteam-fun-inter-bold-36-font-family)",
        "earn-superteam-fun-inter-bold-48":
          "var(--earn-superteam-fun-inter-bold-48-font-family)",
        "earn-superteam-fun-inter-medium-14":
          "var(--earn-superteam-fun-inter-medium-14-font-family)",
        "earn-superteam-fun-inter-medium-14-upper":
          "var(--earn-superteam-fun-inter-medium-14-upper-font-family)",
        "earn-superteam-fun-inter-medium-18":
          "var(--earn-superteam-fun-inter-medium-18-font-family)",
        "earn-superteam-fun-inter-regular-16":
          "var(--earn-superteam-fun-inter-regular-16-font-family)",
        "earn-superteam-fun-inter-regular-18":
          "var(--earn-superteam-fun-inter-regular-18-font-family)",
        "earn-superteam-fun-inter-regular-20":
          "var(--earn-superteam-fun-inter-regular-20-font-family)",
        "earn-superteam-fun-inter-regular-9":
          "var(--earn-superteam-fun-inter-regular-9-font-family)",
        "earn-superteam-fun-inter-semi-bold-14":
          "var(--earn-superteam-fun-inter-semi-bold-14-font-family)",
        "earn-superteam-fun-inter-semi-bold-16":
          "var(--earn-superteam-fun-inter-semi-bold-16-font-family)",
        "earn-superteam-fun-inter-thin-14-upper":
          "var(--earn-superteam-fun-inter-thin-14-upper-font-family)",
        "earn-superteam-fun-inter-thin-16":
          "var(--earn-superteam-fun-inter-thin-16-font-family)",
        "earn-superteam-fun-inter-thin-20":
          "var(--earn-superteam-fun-inter-thin-20-font-family)",
        "earn-superteam-fun-inter-thin-9":
          "var(--earn-superteam-fun-inter-thin-9-font-family)",
        "earn-superteam-fun-segoe-UI-emoji-regular-16":
          "var(--earn-superteam-fun-segoe-UI-emoji-regular-16-font-family)",
        "earn-superteam-fun-semantic-button":
          "var(--earn-superteam-fun-semantic-button-font-family)",
        "earn-superteam-fun-semantic-cell":
          "var(--earn-superteam-fun-semantic-cell-font-family)",
        "earn-superteam-fun-semantic-data":
          "var(--earn-superteam-fun-semantic-data-font-family)",
        "earn-superteam-fun-semantic-input":
          "var(--earn-superteam-fun-semantic-input-font-family)",
        "earn-superteam-fun-semantic-link":
          "var(--earn-superteam-fun-semantic-link-font-family)",
        "earn-superteam-fun-semantic-options":
          "var(--earn-superteam-fun-semantic-options-font-family)",
        text: "var(--text-font-family)",
      },

      boxShadow: {
        s: "var(--s)",
      },
    },
  },
  plugins: [],
};
export default config;
