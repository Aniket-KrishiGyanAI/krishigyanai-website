import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata = {
  title: "Krishigyan AI",
  description:
    "Krishigyan AI collaborate closely with farmers, agronomists, and industry experts to understand the unique challenges they face. Through these partnerships, we co-create solutions and deliver cutting-edge technology tailored to their specific needs.",

  verification: {
    google: "0C4ZNqEgoXMk0WeRU0gnwmRRve0Rh3GJ8hxvBEu7Olo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} min-h-screen flex flex-col antialiased`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}