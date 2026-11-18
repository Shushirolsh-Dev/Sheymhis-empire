import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Sheymhi's Empire | Nails & Lash Studio", description: "Thoughtful nail artistry and beautiful lash services in Ile-Ife. Book your appointment with Sheymhi's Empire.", metadataBase: new URL("https://sheymhis-empire.vercel.app"), openGraph: { title: "Sheymhi's Empire", description: "Elegance at your fingertips.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
