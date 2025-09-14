"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PotensiPage() {
	const fadeInUp = {
		hidden: { opacity: 0, y: 60 },
		visible: { opacity: 1, y: 0 },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const economicPotentials = [
		{
			title: "Budidaya Bawang Merah",
			image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
			description:
				"Komoditas unggulan desa dengan kualitas terbaik. Bawang merah Purworejo dikenal hingga ke luar daerah dan menjadi sumber pendapatan utama petani.",
			stats: [
				"Luas tanam: ±200 hektar",
				"Produktivitas: 12-15 ton/ha",
				"Masa tanam: 3x setahun",
			],
			color: "from-red-500 to-orange-500",
		},
		{
			title: "Pertanian Padi",
			image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
			description:
				"Sawah irigasi yang menghasilkan beras berkualitas tinggi dengan sistem pengairan tradisional yang masih terjaga.",
			stats: [
				"Luas sawah: ±150 hektar",
				"Produktivitas: 6-7 ton/ha",
				"Masa tanam: 2x setahun",
			],
			color: "from-green-500 to-emerald-500",
		},
		{
			title: "Peternakan Sapi",
			image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3",
			description:
				"Peternakan sapi potong dan perah yang dikelola oleh kelompok tani ternak dengan sistem kandang komunal.",
			stats: [
				"Populasi: ±300 ekor",
				"Jenis: Sapi potong & perah",
				"Kelompok ternak: 5 unit",
			],
			color: "from-amber-500 to-yellow-500",
		},
	];

	const culturalPotentials = [
		{
			title: "Kesenian Tradisional",
			icon: "🎭",
			description:
				"Seni tari, musik tradisional, dan pertunjukan rakyat yang masih aktif dilestarikan oleh masyarakat.",
			color: "from-purple-500 to-indigo-500",
		},
		{
			title: "Kerajinan Bambu",
			icon: "🎋",
			description:
				"Industri rumahan kerajinan bambu yang menghasilkan berbagai produk fungsional dan dekoratif.",
			color: "from-green-500 to-teal-500",
		},
		{
			title: "Kuliner Tradisional",
			icon: "🍲",
			description:
				"Makanan khas desa yang diolah dengan resep turun temurun dan bahan-bahan lokal.",
			color: "from-orange-500 to-red-500",
		},
		{
			title: "Upacara Adat",
			icon: "🕯️",
			description:
				"Tradisi dan upacara adat yang masih dijaga dan dilaksanakan pada waktu-waktu tertentu.",
			color: "from-blue-500 to-purple-500",
		},
	];

	const tourismPotentials = [
		{
			title: "Wisata Alam Sawah",
			image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
			description:
				"Hamparan sawah hijau dengan latar belakang pegunungan yang menawarkan pemandangan indah dan udara segar.",
			color: "from-green-400 to-emerald-500",
		},
		{
			title: "Wisata Agro",
			image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
			description:
				"Paket wisata edukasi pertanian dimana pengunjung dapat belajar tentang budidaya tanaman lokal.",
			color: "from-amber-400 to-orange-500",
		},
		{
			title: "Tracking Desa",
			image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
			description:
				"Jalur trekking mengelilingi desa dengan pemandangan alam yang menakjubkan dan udara pegunungan yang sejuk.",
			color: "from-blue-400 to-indigo-500",
		},
	];

	return (
		<div className="min-h-dvh bg-gradient-to-br from-gray-50 to-green-50 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
						Potensi Desa Purworejo
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Desa Purworejo memiliki berbagai potensi yang dapat
						dikembangkan untuk meningkatkan kesejahteraan masyarakat
						dan kemajuan desa.
					</p>
				</motion.div>

				{/* Economic Potential */}
				<motion.section
					className="mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							Potensi Ekonomi
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
					</div>

					<motion.div
						className="grid grid-cols-1 lg:grid-cols-3 gap-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
						{economicPotentials.map((potential, index) => (
							<motion.div
								key={index}
								className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
								variants={fadeInUp}
								whileHover={{ y: -10, scale: 1.02 }}>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={potential.image}
										alt={potential.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-t ${potential.color} opacity-60`}></div>
									<div className="absolute bottom-4 left-6 right-6">
										<h3 className="text-2xl font-bold text-white mb-2">
											{potential.title}
										</h3>
									</div>
								</div>
								<div className="p-8">
									<p className="text-gray-600 mb-6 leading-relaxed">
										{potential.description}
									</p>
									<div className="space-y-2">
										{potential.stats.map(
											(stat, statIndex) => (
												<div
													key={statIndex}
													className="flex items-center text-sm text-gray-500">
													<div
														className={`w-2 h-2 rounded-full bg-gradient-to-r ${potential.color} mr-3`}></div>
													{stat}
												</div>
											)
										)}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Cultural Potential */}
				<motion.section
					className="mb-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							Potensi Budaya
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
					</div>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
						{culturalPotentials.map((culture, index) => (
							<motion.div
								key={index}
								className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
								variants={fadeInUp}
								whileHover={{ y: -8, scale: 1.05 }}>
								<div
									className={`w-16 h-16 rounded-full bg-gradient-to-r ${culture.color} flex items-center justify-center mx-auto mb-6 text-2xl`}>
									{culture.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-4">
									{culture.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{culture.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Tourism Potential */}
				<motion.section
					className="mb-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							Potensi Pariwisata
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
					</div>

					<motion.div
						className="grid grid-cols-1 lg:grid-cols-3 gap-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
						{tourismPotentials.map((tourism, index) => (
							<motion.div
								key={index}
								className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
								variants={fadeInUp}
								whileHover={{ y: -10, scale: 1.02 }}>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={tourism.image}
										alt={tourism.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-t ${tourism.color} opacity-60`}></div>
									<div className="absolute bottom-4 left-6 right-6">
										<h3 className="text-2xl font-bold text-white mb-2">
											{tourism.title}
										</h3>
									</div>
								</div>
								<div className="p-8">
									<p className="text-gray-600 leading-relaxed">
										{tourism.description}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Call to Action */}
				<motion.section
					className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Mari Bersama Kembangkan Potensi Desa
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
						Bergabunglah dengan kami dalam mengembangkan berbagai
						potensi yang ada di Desa Purworejo
					</p>
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
						<motion.button
							className="bg-white text-green-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
							variants={fadeInUp}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}>
							Hubungi Kami
						</motion.button>
						<motion.button
							className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
							variants={fadeInUp}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}>
							Pelajari Lebih Lanjut
						</motion.button>
					</motion.div>
				</motion.section>
			</div>
		</div>
	);
}
