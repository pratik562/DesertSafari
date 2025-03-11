import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Emirates Desert Safari",
  description: "Unforgettable desert safari experiences with thrilling dune bashing, camel rides, BBQ dinner, and live entertainment. Explore the beauty of Dubai’s golden dunes with us.",
};


const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster />
        <body className={`${outfit.className} antialiased text-gray-700`}>
          {children}
        </body>
    </html>
  );
}
