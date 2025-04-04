import React from 'react';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'NexusTech Recruitment - Your Trusted Recruitment Partner',
  description: 'Find your next opportunity or hire the perfect candidate with NexusTech Recruitment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
