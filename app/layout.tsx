/* eslint-disable @next/next/no-head-element */

import { Inter } from "@next/font/google";

import Navbar from "Components/navbar/navbar";
import Footer from "Components/footer/footer";

const inter = Inter();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={inter.className}>
            <head></head>
            <body>
                <header>
                    <Navbar />
                </header>
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
