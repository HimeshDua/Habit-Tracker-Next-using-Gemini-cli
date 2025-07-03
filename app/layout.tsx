import '../styles/globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{fontFamily: 'Inter, Arial, sans-serif'}}>{children}</body>
    </html>
  );
}
