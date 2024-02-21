import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.layer.css";
import "@code-hike/mdx/dist/index.css";
import "@mantine/notifications/styles.css";



import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { homepage } from "./course/page.data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `JDOCode-${homepage.title}`,
  description: homepage.title,
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <Notifications position="top-center" color="yellow" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
