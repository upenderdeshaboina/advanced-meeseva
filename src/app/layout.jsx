import "./globals.css";

export const metadata = {
  title: "Ambati Net World",
  description: "Common Service Centre in Chandupatla Village",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className='font-sans'>
    <body>{children}</body>
    </html>
  );
};

export default RootLayout;