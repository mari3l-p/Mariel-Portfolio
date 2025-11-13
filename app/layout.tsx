import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "My Portfolio Web as a Web Developer",
  description: "Welcome to my portfolio, this is were I show all my knowledge as a Web Developer using modern tools and frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      
      <body>
          <div className="m-4 bg-(--black) text-(--white) flex flex-col md:flex-row rounded-3xl">
            <Sidebar />
            <div className="flex-1">
              <Navbar />
              <main className="p-6">{children}</main>
            </div>
          </div>
      </body>
    </html>
  );
}
