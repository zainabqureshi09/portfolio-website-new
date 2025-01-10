import Head from 'next/head';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
    <html lang="en">
      <body><Navbar />{children}<Footer/></body>
    </html>
    </>
  );
}
