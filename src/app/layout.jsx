import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Dev Story",
  description: "An app for showing developer story around the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base-100 text-base-content font-sans">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}