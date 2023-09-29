import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/app/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reservar Canchas",
  description: "Created by UITEC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
