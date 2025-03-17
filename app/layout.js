import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/header';
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shajara",
  description: "Personal diary",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[url('/background.jpg')] opacity-30 fixed  -z-10 inset-0"/>
        <Header />
       <main className="min-h-screen">
        {children}
        </main> 

        <footer className="bg-orange-50 py-12 bg-opacity-10">
          <div className="mx-auto px-4 text-center text-gray-900">
            <p>
              Made with ❤️ by Joe Kabucho
            </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
