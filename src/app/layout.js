import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "leaflet tutorial",
  description: "displaying shapefiles in next using react-leaflet, shpjs with file input",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
