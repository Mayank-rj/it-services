import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import StoreProvider from "./StoreProvider";
// import PageLoadScrolling from "./components/PageLoadScrolling/PageLoadScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <nav>
            <Navbar />
          </nav>
          {children}
          <footer>
            <Footer />
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
