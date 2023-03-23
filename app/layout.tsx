import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap'
});

export const metadata = {
  title: 'Dennis Nolte',
  description: 'It\'s all about me.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}