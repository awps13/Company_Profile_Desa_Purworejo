"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function PotensiPage() {
	const fadeInUp = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0 },
	} as Variants;

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	} as Variants;

const economicPotentials = [
  {
    title: "Budidaya Bawang Merah",
    image:
      "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/tpqx_7Ik9yLWFVOeJTs4W/original/052222900_1607682083-Manfaat-Bawang-Merah_-Antialergi-hingga-Menurunkan-Risiko-Kanker-shutterstock_1724962108.jpg",
    description:
      "Komoditas unggulan desa dengan kualitas terbaik. Bawang merah Purworejo dikenal hingga ke luar daerah dan menjadi sumber pendapatan utama petani.",
    stats: [],
    color: "from-gray-400/50 to-gray-600/50",
  },
  {
    title: "Kerupuk Lempeng",
    image:
      "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/882/2023/09/13/c5ce8ff2-3b42-47cd-b210-b4d9cd1d4c95-3109086727.jpeg",
    description:
      "Kerupuk lempeng berasal dari adonan yang terbuat dari berbagai bahan seperti beras, tepung tapioka (kanji), dan bumbu-bumbu seperti garam, bawang putih, bawang merah, dan ketumbar.",
    stats: [],
    color: "from-gray-400/50 to-gray-600/50",
  },
  {
    title: "Susu Sapi Perah",
    image:
      "https://assetd.kompas.id/fThJDuspzDcte5vhE9K1T8uehEw=/fit-in/1024x720/filters:format(webp):quality(80):watermark(https://cdn-content.kompas.id/umum/kompas_main_logo.png,-16p,-13p,0)/https://inr-production-content-bucket.s3.ap-southeast-1.amazonaws.com/INR_PRODUCTION/photo/pre/2022/06/03/881031cb-3700-431b-94e6-0c5d5df3b510_jpg.jpg",
    description:
      "Susu perah adalah produk dari sapi, kambing, atau kerbau yang dihasilkan melalui pemerahan dan menjadi komoditas bernilai tinggi karena banyak digunakan sebagai bahan baku industri makanan dan minuman.",
    stats: [],
    color: "from-gray-400/50 to-gray-600/50",
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
			title: "Sumber Seger Waras",
			image: "https://lh3.googleusercontent.com/geougc-cs/AB3l90DV8CSszSrXX-hu_f_sgT9pb7bwazHPgTiFNl5Sw5zPGuhN7ZMWT8emOgye82pUX5ggHDmvd6ddLMySFTUvTkV0oAfBObT703PovQ5layTaSHf12XKjqeJThkJ8ZqN4zmHSeSEl",
			description:
				"Sumber Seger Waras di Desa Purworejo, Ngantang, Malang adalah sumber air alami sekaligus pemandian alam yang sejuk dan asri, dikelilingi pepohonan rindang.",
			color: "from-gray-400/50 to-gray-600/50",
		},
		{
			title: "Pendakian Gunung Kawinanjang Via Purworejo",
			image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr6kwZzrGUhDDAC6JdXR0ReYrheETuIkOoSmBnPRrkq0SqCZHGflF52Bl-booasNniPIKC8Yi8u2jzZavalOFRY3d2WzwuS8NwBfesIN8ujcnBXvIcfMMpEhzxkLYFEZfsBzvPF=w408-h544-k-no",
			description:
				"Pendakian Gunung Kawinanjang via Purworejo menyajikan jalur asri dengan panorama indah dan tantangan seru bagi pendaki.",
			color: "from-gray-400/50 to-gray-600/50",
		},
		{
			title: "Pucuk Mentelung",
			image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
			description:
				"Pucuk Mentelung adalah sebuah puncak di Desa Purworejo, Kecamatan Ngantang yang menawarkan panorama alam pegunungan yang menenangkan.",
			color: "from-gray-400/50 to-gray-600/50",
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
					transition={{ duration: 0.6  }}>
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
								className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500"
								variants={fadeInUp}
								whileHover={{ y: -10, scale: 1.02, rotate: 2 }}>
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
				{/* <motion.section
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
				</motion.section> */}

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
						// variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
							<a href="https://wa.me/6281249260276">
								<motion.button
									className="bg-white text-green-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:cursor-pointer"
									variants={fadeInUp}
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}>
										Hubungi Kami
								</motion.button>
							</a>
						{/* <motion.button
							className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 hover:cursor-pointer"
							variants={fadeInUp}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}>
							Pelajari Lebih Lanjut
						</motion.button> */}
					</motion.div>
				</motion.section>
			</div>
		</div>
	);
}
