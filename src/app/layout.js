import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "@/app/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Leo Movies - All Latest",
  description: "Watch latest movies and TV shows here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
