import './globals.css';
import { Nunito } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel='Submit' isOpen={true} />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
