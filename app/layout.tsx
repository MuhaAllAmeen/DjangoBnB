import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from './components/modals/Modal'
import LoginModal from "./components/modals/LoginModal";
import SignUpModal from "./components/modals/SignUpModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DjangoBnb",
  description: "AirBnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
      <p></p>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">
        {children}
        </div>
        <LoginModal />
        <SignUpModal />
        </body>
    </html>
  );
}
