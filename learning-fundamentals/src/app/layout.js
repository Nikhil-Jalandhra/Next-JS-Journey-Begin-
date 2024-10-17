import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: {
    absolute: "",
    default: "Welcome ! | Jneek",
    template: "%s | Jneek"
  },
  description: "Learning fundamentals of Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar/>
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
