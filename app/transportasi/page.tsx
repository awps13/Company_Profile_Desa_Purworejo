"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TransportasiPage() {
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
				staggerChildren: 0.1,
			},
		},
	};

	const routes = [
		{
			city: "Kota Malang",
			distance: "35 km",
			icon: "🚌",
			color: "from-blue-500 to-indigo-500",
			publicTransport: {
				steps: [
					"Terminal Arjosari → naik mikrolet/angkot ke Terminal Ngantang",
					"Terminal Ngantang → naik ojek/becak motor ke Desa Purworejo",
					"Waktu tempuh: ±1,5 jam",
					"Biaya: Rp 15.000 - 25.000",
				],
			},
			privateVehicle: {
				steps: [
					"Malang → Jl. Raya Malang-Kediri",
					"Belok kanan ke Jl. Raya Ngantang",
					"Ikuti papan petunjuk Desa Purworejo",
					"Waktu tempuh: ±45 menit",
				],
			},
		},
		{
			city: "Surabaya",
			distance: "120 km",
			icon: "🚐",
			color: "from-green-500 to-emerald-500",
			publicTransport: {
				steps: [
					"Terminal Bungurasih → bus ke Terminal Arjosari Malang",
					"Terminal Arjosari → mikrolet ke Terminal Ngantang",
					"Terminal Ngantang → ojek ke Desa Purworejo",
					"Waktu tempuh: ±3-4 jam",
				],
			},
			privateVehicle: {
				steps: [
					"Surabaya → Tol Surabaya-Malang",
					"Exit Tol Malang → Jl. Raya Malang-Kediri",
					"Belok ke Jl. Raya Ngantang → Desa Purworejo",
					"Waktu tempuh: ±2,5 jam",
				],
			},
		},
		{
			city: "Batu",
			distance: "25 km",
			icon: "🏔️",
			color: "from-purple-500 to-pink-500",
			publicTransport: {
				steps: [
					"Terminal Batu → angkot ke Terminal Ngantang",
					"Terminal Ngantang → ojek ke Desa Purworejo",
					"Waktu tempuh: ±1 jam",
					"Biaya: Rp 10.000 - 18.000",
				],
			},
			privateVehicle: {
				steps: [
					"Batu → Jl. Raya Batu-Ngantang",
					"Lurus hingga Ngantang",
					"Ikuti petunjuk ke Desa Purworejo",
					"Waktu tempuh: ±30 menit",
				],
			},
		},
	];

	const localTransports = [
		{
			name: "Ojek Motor",
			price: "Rp 5.000 - 15.000",
			description:
				"Transportasi fleksibel untuk akses langsung ke rumah atau lokasi spesifik",
			icon: "🏍️",
			color: "from-orange-500 to-red-500",
		},
		{
			name: "Becak Motor",
			price: "Rp 8.000 - 20.000",
			description: "Transportasi nyaman untuk 2-3 orang dengan bagasi",
			icon: "🛺",
			color: "from-green-500 to-teal-500",
		},
		{
			name: "Angkot/Mikrolet",
			price: "Rp 3.000 - 8.000",
			description:
				"Transportasi umum rutin dengan rute tetap ke pusat desa",
			icon: "🚐",
			color: "from-blue-500 to-indigo-500",
		},
		{
			name: "Sewa Motor",
			price: "Rp 50.000 - 75.000/hari",
			description:
				"Sewa motor harian untuk mobilitas mandiri selama di desa",
			icon: "🏍️",
			color: "from-purple-500 to-pink-500",
		},
	];

	return (
		<div className="min-h-dvh bg-gradient-to-br from-gray-50 to-blue-50 py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
						Transportasi ke Desa Purworejo
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Berikut adalah panduan lengkap untuk mencapai Desa
						Purworejo dari berbagai kota dengan menggunakan
						transportasi umum maupun kendaraan pribadi.
					</p>
				</motion.div>

				{/* Location Overview */}
				<motion.section
					className="mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<div className="bg-white rounded-3xl shadow-xl overflow-hidden">
						<div className="relative h-80">
							<Image
								src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
								alt="Desa Purworejo Location"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
							<div className="absolute bottom-8 left-8 right-8 text-white">
								<h2 className="text-3xl font-bold mb-4">
									📍 Lokasi Desa Purworejo
								</h2>
								<p className="text-xl text-gray-200">
									Kecamatan Ngantang, Kabupaten Malang, Jawa
									Timur
								</p>
							</div>
						</div>
						<div className="p-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
								<div>
									<p className="text-lg font-semibold">
										Koordinat
									</p>
									<p className="text-blue-100">
										-7.8956° S, 112.4321° E
									</p>
								</div>
								<div>
									<p className="text-lg font-semibold">
										Ketinggian
									</p>
									<p className="text-blue-100">
										800-1.200 mdpl
									</p>
								</div>
								<div>
									<p className="text-lg font-semibold">
										Kode Pos
									</p>
									<p className="text-blue-100">65392</p>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Routes from Major Cities */}
				<motion.section
					className="mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							Rute dari Kota Besar
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
					</div>

					<motion.div
						className="space-y-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
						{routes.map((route, index) => (
							<motion.div
								key={index}
								className="bg-white rounded-3xl shadow-xl overflow-hidden"
								variants={fadeInUp}
								whileHover={{ y: -5, scale: 1.01 }}>
								<div
									className={`bg-gradient-to-r ${route.color} p-6 text-white`}>
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<span className="text-4xl mr-4">
												{route.icon}
											</span>
											<div>
												<h3 className="text-2xl font-bold">
													Dari {route.city}
												</h3>
												<p className="text-lg opacity-90">
													Jarak: {route.distance}
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="p-8">
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
										<div className="bg-gray-50 p-6 rounded-2xl">
											<h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
												<span className="text-2xl mr-2">
													🚌
												</span>
												Transportasi Umum
											</h4>
											<ol className="space-y-3">
												{route.publicTransport.steps.map(
													(step, stepIndex) => (
														<li
															key={stepIndex}
															className="flex items-start">
															<span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full mr-3 mt-0.5">
																{stepIndex + 1}
															</span>
															<span className="text-gray-700">
																{step}
															</span>
														</li>
													)
												)}
											</ol>
										</div>

										<div className="bg-gray-50 p-6 rounded-2xl">
											<h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
												<span className="text-2xl mr-2">
													🚗
												</span>
												Kendaraan Pribadi
											</h4>
											<ol className="space-y-3">
												{route.privateVehicle.steps.map(
													(step, stepIndex) => (
														<li
															key={stepIndex}
															className="flex items-start">
															<span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs font-bold rounded-full mr-3 mt-0.5">
																{stepIndex + 1}
															</span>
															<span className="text-gray-700">
																{step}
															</span>
														</li>
													)
												)}
											</ol>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Local Transportation */}
				<motion.section
					className="mb-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
							Transportasi Lokal
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
						<p className="text-lg text-gray-600 mt-4">
							Pilihan transportasi di dalam dan sekitar Desa
							Purworejo
						</p>
					</div>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
						{localTransports.map((transport, index) => (
							<motion.div
								key={index}
								className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
								variants={fadeInUp}
								whileHover={{ y: -8, scale: 1.05 }}>
								<div
									className={`w-16 h-16 rounded-full bg-gradient-to-r ${transport.color} flex items-center justify-center mx-auto mb-4 text-2xl`}>
									{transport.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
									{transport.name}
								</h3>
								<p
									className={`text-lg font-semibold bg-gradient-to-r ${transport.color} bg-clip-text text-transparent text-center mb-4`}>
									{transport.price}
								</p>
								<p className="text-gray-600 text-sm text-center leading-relaxed">
									{transport.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Tips and Notes */}
				<motion.section
					className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl font-bold mb-6 text-center">
						💡 Tips Perjalanan
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-semibold mb-4">
								Yang Perlu Diperhatikan:
							</h3>
							<ul className="space-y-2 text-amber-100">
								<li>
									• Bawa jaket karena udara pegunungan cukup
									dingin
								</li>
								<li>
									• Persiapkan uang tunai untuk transportasi
									lokal
								</li>
								<li>
									• Tanyakan kepada penduduk lokal untuk
									petunjuk arah
								</li>
								<li>
									• Jalan menuju desa cukup berkelok dan
									menanjak
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4">
								Kontak Darurat:
							</h3>
							<ul className="space-y-2 text-amber-100">
								<li>• Kantor Desa: (0341) 123-4567</li>
								<li>• Posko Siaga: 081234567890</li>
								<li>• Kepala Desa: 081987654321</li>
								<li>• Puskesmas Ngantang: (0341) 987-6543</li>
							</ul>
						</div>
					</div>
				</motion.section>
			</div>
		</div>
	);
}
