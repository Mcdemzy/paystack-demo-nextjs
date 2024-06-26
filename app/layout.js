import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Paystack",
  description: "Paystack Integration With Next.js",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
