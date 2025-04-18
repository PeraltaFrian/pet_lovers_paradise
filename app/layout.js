import { Roboto } from "next/font/google";
import "./globals.css"; 
import Header from "./components/header"; 
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer"; 
import { ClerkProvider } from "@clerk/nextjs"; 

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={`${roboto.className} flex flex-col min-h-screen bg-white`}>
          <Header />
          <NavBar /> 
          <main className="flex-grow flex flex-col items-center justify-start w-full px-4 py-4">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
