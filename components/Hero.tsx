"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
	// Array of background images
	const backgroundImages = [
		{
			src: "https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?q=80&w=3661&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Indonesian Village Landscape - Rice Fields",
		},
		{
			src: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
			alt: "Beautiful Village Scenery",
		},
		{
			src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
			alt: "Green Rice Terraces",
		},
		{
			src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
			alt: "Mountain Village View",
		},
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const scrollToProfile = () => {
		const profileSection = document.getElementById("profile");
		if (profileSection) {
			profileSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Auto-change images only if there are multiple images
	useEffect(() => {
		if (backgroundImages.length > 1) {
			const interval = setInterval(() => {
				setCurrentImageIndex((prevIndex) =>
					prevIndex === backgroundImages.length - 1
						? 0
						: prevIndex + 1
				);
			}, 5000); // Change image every 5 seconds

			return () => clearInterval(interval);
		}
	}, [backgroundImages.length]);

	return (
		<section className="relative h-dvh flex items-center justify-center overflow-hidden -mt-16">
			{/* Background Images Slideshow */}
			<div className="absolute inset-0 z-0">
				{backgroundImages.map((image, index) => (
					<motion.div
						key={index}
						className="absolute inset-0"
						initial={{ opacity: 0 }}
						animate={{
							opacity: index === currentImageIndex ? 1 : 0,
							scale: index === currentImageIndex ? 1 : 1.1,
						}}
						transition={{ duration: 1, ease: "easeInOut" }}>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							className="object-cover"
							priority={index === 0}
						/>
					</motion.div>
				))}
				<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
			</div>

			{/* Image Indicators - only show if multiple images */}
			{backgroundImages.length > 1 && (
				<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
					{backgroundImages.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImageIndex(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentImageIndex
									? "bg-white scale-125"
									: "bg-white/50 hover:bg-white/75"
							}`}
						/>
					))}
				</div>
			)}

			{/* Content */}
			<div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
						Desa Purworejo
					</h1>
				</motion.div>

				<motion.p
					className="text-xl md:text-3xl lg:text-4xl mb-4 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}>
					Harmoni Alam, Budaya, dan Masyarakat
				</motion.p>

				<motion.p
					className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}>
					Kecamatan Ngantang, Kabupaten Malang, Jawa Timur
				</motion.p>

				<motion.button
					onClick={scrollToProfile}
					className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-2xl border border-white/20 backdrop-blur-sm hover:cursor-pointer"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.95 }}>
					Jelajahi Desa Kami
				</motion.button>
			</div>

			{/* Scroll Down Indicator */}
			<div
				className={`absolute left-1/2 transform -translate-x-1/2 z-10 ${
					backgroundImages.length > 1 ? "bottom-4" : "bottom-8"
				}`}>
				<div className="animate-bounce">
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Hero;
