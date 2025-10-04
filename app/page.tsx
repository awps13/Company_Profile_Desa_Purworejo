"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

export default function Home() {
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
	// const { scrollYProgress } = useScroll();
	// const rotate = useTransform(scrollYProgress, [0, 1], [0, 72000]);
  	// // Scale down speed: starts big, slows down towards 1
  	// const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  	// // Zoom in and out effect (oscillation)
  	// const zoom = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

	return (
		<div>

			{/* Hero Section */}
			<Hero />

			{/* About Section */}
			<section id="profile" className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center mb-12"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						transition={{ duration: 0.6 }}>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Tentang Desa Purworejo
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Desa Purworejo adalah sebuah desa yang terletak di
							Kecamatan Ngantang, Kabupaten Malang, Jawa Timur
							dengan kode pos 65392.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={fadeInUp}
							transition={{ duration: 0.6, delay: 0.2 }}>
							<h3 className="text-2xl font-semibold text-gray-900 mb-4">
								Keindahan Alam yang Memukau
							</h3>
							<p className="text-gray-600 mb-6 leading-relaxed">
								Desa Purworejo dikelilingi oleh pemandangan alam
								yang indah, dengan hamparan sawah hijau,
								perbukitan yang menawan, dan udara yang sejuk.
								Desa ini menawarkan kehidupan pedesaan yang
								damai dan harmonis.
							</p>
							<p className="text-gray-600 leading-relaxed">
								Masyarakat desa yang ramah dan gotong royong
								menjadikan Purworejo sebagai tempat yang ideal
								untuk wisata alam dan budaya. Berbagai potensi
								ekonomi, budaya, dan pariwisata terus
								dikembangkan untuk kesejahteraan masyarakat.
							</p>
						</motion.div>

						<motion.div
							className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={fadeInUp}
							transition={{ duration: 0.6, delay: 0.4 }}
							whileHover={{ scale: 1.05 }}>
							<Image
								src="/desa_purworejo.jpg"
								alt="Indonesian Village Scene"
								fill
								className="object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Tourism Highlights */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center mb-12"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						transition={{ duration: 0.6 }}>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Daya Tarik Wisata
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Jelajahi keindahan dan kekayaan budaya Desa
							Purworejo melalui berbagai destinasi wisata yang
							menawan.
						</p>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
						{/* Tourism Card 1 */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
							variants={fadeInUp}
							whileHover={{ y: -8 }}>
							<div className="relative h-48 overflow-hidden">
								<Image
									src="/sawah.jpg"
									alt="Rice Fields"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Hamparan Ladang
								</h3>
								<p className="text-gray-600 text-sm">
									Nikmati pemandangan ladang yang
									membentang luas dengan udara segar
									pegunungan.
								</p>
							</div>
						</motion.div>

						{/* Tourism Card 2 */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
							variants={fadeInUp}
							whileHover={{ y: -8 }}>
							<div className="relative h-48 overflow-hidden">
								<Image
									src="/pemandanganGunung.jpg"
									alt="Mountain View"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Pemandangan Gunung
								</h3>
								<p className="text-gray-600 text-sm">
									Saksikan keindahan sunrise dan sunset dari
									ketinggian dengan panorama yang menakjubkan.
								</p>
							</div>
						</motion.div>

						{/* Tourism Card 3 */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
							variants={fadeInUp}
							whileHover={{ y: -8 }}>
							<div className="relative h-48 overflow-hidden">
								<Image
									src="/produk_susu.webp"
									alt="Local Products"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Produk Lokal
								</h3>
								<p className="text-gray-600 text-sm">
									Cicipi dan beli langsung produk unggulan
									desa seperti bawang merah dan hasil
									pertanian lainnya.
								</p>
							</div>
						</motion.div>
						{/* Tourism Card 4 */}
						<motion.div
							className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
							variants={fadeInUp}
							whileHover={{ y: -8 }}>
							<div className="relative h-48 overflow-hidden">
								<Image
									src="/produk_susu.webp"
									alt="Local Products"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Jalur Pendakian 
								</h3>
								<p className="text-gray-600 text-sm">
									Cobain jalur pendakian Gunung Kawinanjang yang dapat dilewati oleh siapa saja.
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
					<div className="flex flex-col justify-center items-center">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={fadeInUp}
							transition={{ duration: 0.6 }}>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
								Kunjungi Desa Purworejo
							</h2>
							<p className="text-lg text-green-100 mb-8 max-w-2xl">
								Rasakan kehangatan masyarakat desa dan keindahan
								alam yang tak terlupakan
							</p>
							<div className="flex flex-col sm:flex-row gap-4 w-[50vw] sm:w-[40vw] lg:w-[20vw] text-center">
								<motion.a
									href="/pelayanan"
									className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}>
										Layanan Desa
								</motion.a>
							</div>
						</motion.div>
					</div>
					<div className="">
						 <iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5086.622432106931!2d112.38055852392942!3d-7.886487538593051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788946a9783375%3A0xcd8a80a7c3d32c39!2sKantor%20Desa%20Purworejo!5e0!3m2!1sid!2sid!4v1758430594452!5m2!1sid!2sid"  
							className="w-[300px] h-[200px] sm:w-[500px] sm:h-[350px] lg:w-[600px] lg:h-[450px] border-0 rounded-md"
							loading="lazy">
						</iframe>
					</div>
				</div>
			</section> 
		</div>
)}
