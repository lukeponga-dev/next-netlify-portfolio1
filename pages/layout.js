// app/layout.js
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/Header'; // Assuming your components are in the 'components' directory
import Footer from '@/components/Footer'; 

// Define metadata for ALL pages
export const metadata = {
  title: "Luke Ponga's Portfolio",
  description: "Luke Ponga - Junior Software Developer",
};
// Set up the font
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
