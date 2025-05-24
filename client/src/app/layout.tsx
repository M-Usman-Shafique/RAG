import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, SignUp, SignedIn, SignedOut } from '@clerk/nextjs'
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ChatPDF",
	description: "RAG based chat app using Langchain",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
	  <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
		<body className="antialiased flex flex-col min-h-screen">
		  <ClerkProvider>
			<SignedOut>
			  <main className="min-h-screen flex items-center justify-center">
				<SignUp routing="hash" />
			  </main>
			</SignedOut>
  
			<SignedIn>
			  <Navbar />
			  <main className="h-[calc(100vh-4rem)]">{children}</main>
			</SignedIn>
		  </ClerkProvider>
		</body>
	  </html>
	);
}
