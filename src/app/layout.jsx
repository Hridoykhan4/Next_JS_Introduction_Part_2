import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Dev Story",
  description: "An app for showing developer story around the world ! On the way to master in NextJS | Md. Toyob Uddin Hridoy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header></Header>


        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
