import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { wine: "#70213d", cream: "#f5ecdf", ink: "#251b20" }, fontFamily: { sans: ["var(--font-bricolage)", "sans-serif"] } } }, plugins: [] };
export default config;
