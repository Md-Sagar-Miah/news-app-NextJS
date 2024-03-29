import NextTopLoader from 'nextjs-toploader';

import "./globals.css";
import { Providers } from "./providers";



export const metadata = {
  title: "SA.NEWS",
  description: "New aplication ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NextTopLoader color='red' />
          {children}
        </Providers>


      </body>
    </html>
  );
}
