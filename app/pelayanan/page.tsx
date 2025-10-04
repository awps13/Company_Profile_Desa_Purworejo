"use client";

import { motion } from "framer-motion";

export default function PelayananPage() {
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

	const serviceCards = [
		{
			icon: "📄",
			title: "Surat Keterangan Domisili",
			description:
				"Surat keterangan tempat tinggal untuk berbagai keperluan administratif",
			color: "from-blue-500 to-blue-600",
			bg: "bg-blue-50",
		},
		{
			icon: "📋",
			title: "Surat Keterangan Usaha",
			description:
				"Surat keterangan untuk mendukung perizinan usaha dan kegiatan ekonomi",
			color: "from-green-500 to-green-600",
			bg: "bg-green-50",
		},
		{
			icon: "🏠",
			title: "Surat Keterangan Tidak Mampu",
			description:
				"Surat keterangan untuk bantuan sosial dan keringanan biaya pendidikan/kesehatan",
			color: "from-yellow-500 to-yellow-600",
			bg: "bg-yellow-50",
		},
		{
			icon: "👶",
			title: "Surat Keterangan Kelahiran",
			description:
				"Surat keterangan kelahiran untuk pengurusan akta kelahiran",
			subTitle: "Persyaratan",
			persyaratan: "Surat Pengantar dari RT, KK Asli dan Fotocopy, KTP Asli Pelapor, KTP Saksi (Fotocopy) 2 Orang, Materai 10.000 (2), Surat Kelahiran dari Bidan/Dokter, Buku Nikah Orang Tua",
			color: "from-purple-500 to-purple-600",
			bg: "bg-purple-50",
		},
		{
			icon: "👨‍👩‍👧‍👦",
			title: "Surat Keterangan Kartu Keluarga Baru",
			description:
				"Dokumen resmi dari desa untuk permohonan pembuatan KK baru.",
			subTitle: "Persyaratan",
			persyaratan: "Surat Pengantar dari RT, KK, Surat Kelahiran dari Bidan/Dokter, Buku Nikah, Jika ada elemen data yang ingin diubah mohon sertakan bukti perubahan (Misal: Ganti Status Pendidikan artinya harus melampirkan Ijazah Terakhir)",
			color: "from-pink-500 to-pink-600",
			bg: "bg-pink-50",
		},
		{
			icon: "⚰️",
			title: "Surat Keterangan Kematian",
			description:
				"Surat keterangan kematian untuk pengurusan akta kematian",
			subTitle: "Persyaratan",
			persyaratan: "Surat Pengantar dari RT, KK Asli dan Fotocopy, KTP Asli Pelapor, KTP Saksi (Fotocopy) 2 Orang, Materai 10.000 (2), Buku Nikah Subjek (Jika yang meninggal adalah kepala keluarga)",
			color: "from-gray-500 to-gray-600",
			bg: "bg-gray-50",
		},
	];

	const requirements = [
		"Fotokopi KTP yang masih berlaku",
		"Fotokopi Kartu Keluarga",
		"Surat pengantar dari RT/RW",
		"Formulir permohonan yang telah diisi",
		"Materai 10.000 (jika diperlukan)",
	];

	return (
		<div className="min-h-dvh bg-gradient-to-br from-gray-50 to-green-50 py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-white/80"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ duration: 0.6 }}>
					<motion.h1
						className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8 text-center"
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.2 }}>
						Pelayanan Desa Purworejo
					</motion.h1>

					{/* Introduction */}
					<motion.div
						className="text-center mb-12"
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.3 }}>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Pemerintah Desa Purworejo berkomitmen memberikan
							pelayanan terbaik kepada masyarakat dengan prinsip
							cepat, tepat, dan transparan.
						</p>
					</motion.div>

					{/* Service Hours */}
					<motion.div
						className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-2xl mb-12 text-white shadow-xl"
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.4 }}>
						<h2 className="text-2xl font-semibold mb-6 text-center">
							Jam Pelayanan
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
							<div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
								<p className="font-medium text-lg">
									Senin - Kamis
								</p>
								<p className="text-green-100">
									08:00 - 15:00 WIB
								</p>
							</div>
							<div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
								<p className="font-medium text-lg">Jumat</p>
								<p className="text-green-100">
									08:00 - 11:30 WIB
								</p>
							</div>
						</div>
						<p className="text-center text-sm text-green-100 mt-4">
							Sabtu, Minggu, dan hari libur nasional tutup
						</p>
					</motion.div>

					{/* Administrative Services */}
					<motion.div
						className="mb-12"
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.5 }}>
						<h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
							Layanan Administrasi Kependudukan
						</h2>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
							variants={staggerContainer}
							initial="hidden"
							animate="visible">
							{serviceCards.map((service, index) => (
								<motion.div
									key={index}
									className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
									variants={fadeInUp}
									whileHover={{ y: -8, scale: 1.02 }}>
									<div
										className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
									<div className="p-8 relative z-10">
										<div className="text-5xl mb-4">
											{service.icon}
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-4">
											{service.title}
										</h3>
										<p className="text-gray-600 mb-6 leading-relaxed">
											{service.description}
										</p>
										<h3 className="text-xl font-bold text-gray-900 mb-4">
											{service.subTitle}
										</h3>
										<p className="text-gray-600 mb-6 leading-relaxed">
											{service.persyaratan}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Requirements Section */}
					<motion.div
						className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-12"
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.6 }}>
						<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
							Persyaratan Umum 
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{requirements.map((req, index) => (
								<motion.div
									key={index}
									className="flex items-center p-4 bg-white rounded-xl shadow-sm"
									variants={fadeInUp}
									transition={{
										duration: 0.3,
										delay: 0.7 + index * 0.1,
									}}>
									<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
										<svg
											className="w-4 h-4 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<span className="text-gray-700">{req}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						className="text-center bg-gray-50 p-8 rounded-2xl"
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.8 }}>
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							Informasi Kontak
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex items-center justify-center">
								<svg
									className="w-6 h-6 text-green-600 mr-3"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<span className="text-gray-700">
									<a href="https://wa.me/6281249260276">+62 8124-9260-276</a>
								</span>
							</div>
							<div className="flex items-center justify-center">
								<svg
									className="w-6 h-6 text-green-600 mr-3"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<a href="mailto:purworejo810@gmail.com">
									<span className="text-gray-700" >
										purworejo810@gmail.com
									</span>
								</a>
							</div> 
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
