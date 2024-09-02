import "./globals.css";

export const metadata = {
  title: "Frontend Developer - Vinicius De Biasi",
  description: "Frontend Developer - Vinicius De Biasi",
  icons: { icon: '/icon-guia.png' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}