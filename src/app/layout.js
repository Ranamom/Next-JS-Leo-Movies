import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "@/app/globals.css";

export const metadata = {
  title: "Leo Movies - All Latest",
  description: "Watch latest movies and TV shows here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
