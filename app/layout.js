import { Poppins } from "next/font/google";
import "./globals.css";
import "animate.css";
import Navbar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Bitwise Web and Graphic Designer | IT Experts",
  description:
    "Bitwise offers expert web design, graphic design, and IT solutions. Our services include custom website development, creative graphics, and reliable IT support to elevate your digital presence. Experience top-quality results and exceptional service with Bitwise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
