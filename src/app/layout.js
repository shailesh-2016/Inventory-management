import "./globals.css";
import { Manrope } from "next/font/google";
import Layout from "../components/Layout";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Beckhaul Inventory",
  description: "Dashboard management system",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
