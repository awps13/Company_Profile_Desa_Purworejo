import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Desa Purworejo - Kecamatan Ngantang, Kabupaten Malang",
	description:
		"Website resmi Desa Purworejo, Kecamatan Ngantang, Kabupaten Malang, Jawa Timur. Harmoni Alam, Budaya, dan Masyarakat.",
	keywords: "Desa Purworejo, Ngantang, Malang, Jawa Timur, Wisata, Desa",
	openGraph: {
		title: "Desa Purworejo - Harmony of Nature, Culture, and Community",
		description:
			"Official website of Purworejo Village, Ngantang Subdistrict, Malang Regency, East Java",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<main>
					<Navbar />
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
