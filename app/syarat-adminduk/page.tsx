// "use client";

// import { motion } from "framer-motion";

// export default function SyaratAdmindukPage() {
// 	const fadeInUp = {
// 		hidden: { opacity: 0, y: 60 },
// 		visible: { opacity: 1, y: 0 },
// 	};

// 	const staggerContainer = {
// 		hidden: { opacity: 0 },
// 		visible: {
// 			opacity: 1,
// 			transition: {
// 				delayChildren: 0.3,
// 				staggerChildren: 0.1,
// 			},
// 		},
// 	};

// 	const generalRequirements = [
// 		{
// 			icon: "📄",
// 			title: "KTP Asli + Fotocopy",
// 			description: "Yang masih berlaku dan terbaca jelas",
// 			color: "from-blue-500 to-blue-600",
// 		},
// 		{
// 			icon: "👨‍👩‍👧‍👦",
// 			title: "Kartu Keluarga (KK)",
// 			description: "Asli dan fotocopy yang jelas",
// 			color: "from-green-500 to-green-600",
// 		},
// 		{
// 			icon: "📝",
// 			title: "Surat Pengantar RT/RW",
// 			description: "Dengan cap dan tanda tangan",
// 			color: "from-purple-500 to-purple-600",
// 		},
// 		{
// 			icon: "📋",
// 			title: "Formulir Permohonan",
// 			description: "Diisi lengkap dan ditandatangani",
// 			color: "from-orange-500 to-orange-600",
// 		},
// 		{
// 			icon: "📷",
// 			title: "Pas Foto (jika diperlukan)",
// 			description: "3x4 cm background merah, 2 lembar",
// 			color: "from-pink-500 to-pink-600",
// 		},
// 		{
// 			icon: "🆔",
// 			title: "Dokumen Pendukung",
// 			description: "Sesuai jenis permohonan",
// 			color: "from-indigo-500 to-indigo-600",
// 		},
// 	];

// 	const specificRequirements = [
// 		{
// 			title: "KTP (Kartu Tanda Penduduk)",
// 			icon: "🆔",
// 			color: "from-blue-500 to-indigo-500",
// 			requirements: [
// 				"Formulir permohonan KTP",
// 				"Surat pengantar dari RT/RW",
// 				"Fotocopy Kartu Keluarga",
// 				"Fotocopy akta kelahiran/ijazah",
// 				"Pas foto 3x4 background merah (2 lembar)",
// 				"Surat keterangan pindah (jika pindah domisili)",
// 			],
// 			processTime: "14 hari kerja",
// 			cost: "Gratis",
// 		},
// 		{
// 			title: "Kartu Keluarga (KK)",
// 			icon: "👨‍👩‍👧‍👦",
// 			color: "from-green-500 to-emerald-500",
// 			requirements: [
// 				"Formulir permohonan KK",
// 				"Surat pengantar dari RT/RW",
// 				"Fotocopy KTP kepala keluarga",
// 				"Fotocopy akta nikah/cerai",
// 				"Fotocopy akta kelahiran anak",
// 				"Pas foto kepala keluarga 3x4 (2 lembar)",
// 				"KK lama (jika ada perubahan)",
// 			],
// 			processTime: "7 hari kerja",
// 			cost: "Gratis",
// 		},
// 		{
// 			title: "Akta Kelahiran",
// 			icon: "👶",
// 			color: "from-pink-500 to-rose-500",
// 			requirements: [
// 				"Formulir permohonan akta kelahiran",
// 				"Surat keterangan kelahiran dari desa",
// 				"Fotocopy KTP kedua orang tua",
// 				"Fotocopy Kartu Keluarga",
// 				"Fotocopy akta nikah orang tua",
// 				"Surat keterangan dari bidan/dokter",
// 				"Fotocopy KTP 2 orang saksi",
// 			],
// 			processTime: "14 hari kerja",
// 			cost: "Gratis (jika < 60 hari)",
// 		},
// 		{
// 			title: "Akta Kematian",
// 			icon: "⚰️",
// 			color: "from-gray-500 to-gray-600",
// 			requirements: [
// 				"Formulir permohonan akta kematian",
// 				"Surat keterangan kematian dari desa",
// 				"Fotocopy KTP yang meninggal",
// 				"Fotocopy Kartu Keluarga",
// 				"Surat keterangan dari dokter/RS",
// 				"Fotocopy KTP pelapor",
// 				"Fotocopy KTP 2 orang saksi",
// 			],
// 			processTime: "7 hari kerja",
// 			cost: "Gratis",
// 		},
// 		{
// 			title: "Akta Nikah",
// 			icon: "💍",
// 			color: "from-purple-500 to-pink-500",
// 			requirements: [
// 				"Formulir nikah model N1-N4",
// 				"Fotocopy KTP calon mempelai",
// 				"Fotocopy Kartu Keluarga",
// 				"Fotocopy akta kelahiran",
// 				"Pas foto 2x3 (4 lembar) dan 3x4 (2 lembar)",
// 				"Surat persetujuan calon mempelai",
// 				"Surat keterangan belum menikah",
// 				"Surat izin orang tua (jika < 21 tahun)",
// 			],
// 			processTime: "10 hari kerja",
// 			cost: "Rp 600.000",
// 		},
// 		{
// 			title: "Akta Cerai",
// 			icon: "📜",
// 			color: "from-orange-500 to-red-500",
// 			requirements: [
// 				"Fotocopy putusan pengadilan",
// 				"Fotocopy KTP kedua belah pihak",
// 				"Fotocopy Kartu Keluarga",
// 				"Fotocopy akta nikah",
// 				"Formulir permohonan",
// 				"Surat pengantar dari RT/RW",
// 				"Pas foto 3x4 (2 lembar masing-masing)",
// 			],
// 			processTime: "14 hari kerja",
// 			cost: "Gratis",
// 		},
// 	];

// 	return (
// 		<div className="min-h-dvh bg-gradient-to-br from-gray-50 to-blue-50 py-12">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<motion.div
// 					className="text-center mb-16"
// 					initial="hidden"
// 					animate="visible"
// 					variants={fadeInUp}
// 					transition={{ duration: 0.6 }}>
// 					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
// 						Syarat Administrasi Kependudukan
// 					</h1>
// 					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
// 						Panduan lengkap persyaratan dokumen untuk berbagai
// 						layanan administrasi kependudukan di Desa Purworejo.
// 					</p>
// 				</motion.div>

// 				{/* General Requirements */}
// 				<motion.section
// 					className="mb-20"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true }}
// 					variants={fadeInUp}
// 					transition={{ duration: 0.6 }}>
// 					<div className="text-center mb-12">
// 						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
// 							Persyaratan Umum
// 						</h2>
// 						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
// 						<p className="text-lg text-gray-600">
// 							Dokumen dasar yang diperlukan untuk semua jenis
// 							permohonan
// 						</p>
// 					</div>

// 					<motion.div
// 						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// 						variants={staggerContainer}
// 						initial="hidden"
// 						whileInView="visible"
// 						viewport={{ once: true }}>
// 						{generalRequirements.map((req, index) => (
// 							<motion.div
// 								key={index}
// 								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
// 								variants={fadeInUp}
// 								whileHover={{ y: -8, scale: 1.02 }}>
// 								<div
// 									className={`w-16 h-16 rounded-full bg-gradient-to-r ${req.color} flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300`}>
// 									{req.icon}
// 								</div>
// 								<h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
// 									{req.title}
// 								</h3>
// 								<p className="text-gray-600 text-center leading-relaxed">
// 									{req.description}
// 								</p>
// 							</motion.div>
// 						))}
// 					</motion.div>
// 				</motion.section>

// 				{/* Specific Requirements */}
// 				<motion.section
// 					className="mb-12"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true }}
// 					variants={fadeInUp}
// 					transition={{ duration: 0.6 }}>
// 					<div className="text-center mb-12">
// 						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
// 							Persyaratan Khusus
// 						</h2>
// 						<div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4"></div>
// 						<p className="text-lg text-gray-600">
// 							Persyaratan spesifik untuk setiap jenis dokumen
// 							kependudukan
// 						</p>
// 					</div>

// 					<motion.div
// 						className="space-y-8"
// 						variants={staggerContainer}
// 						initial="hidden"
// 						whileInView="visible"
// 						viewport={{ once: true }}>
// 						{specificRequirements.map((doc, index) => (
// 							<motion.div
// 								key={index}
// 								className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
// 								variants={fadeInUp}
// 								whileHover={{ y: -5, scale: 1.01 }}>
// 								<div
// 									className={`bg-gradient-to-r ${doc.color} p-6 text-white`}>
// 									<div className="flex items-center justify-between">
// 										<div className="flex items-center">
// 											<span className="text-4xl mr-4">
// 												{doc.icon}
// 											</span>
// 											<div>
// 												<h3 className="text-2xl font-bold">
// 													{doc.title}
// 												</h3>
// 												<div className="flex gap-4 mt-2 text-sm opacity-90">
// 													<span>
// 														⏱️ {doc.processTime}
// 													</span>
// 													<span>💰 {doc.cost}</span>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="p-8">
// 									<h4 className="text-xl font-bold text-gray-800 mb-6">
// 										Persyaratan:
// 									</h4>
// 									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// 										{doc.requirements.map(
// 											(req, reqIndex) => (
// 												<motion.div
// 													key={reqIndex}
// 													className="flex items-start p-4 bg-gray-50 rounded-xl"
// 													initial={{
// 														opacity: 0,
// 														x: -20,
// 													}}
// 													whileInView={{
// 														opacity: 1,
// 														x: 0,
// 													}}
// 													viewport={{ once: true }}
// 													transition={{
// 														duration: 0.3,
// 														delay: reqIndex * 0.1,
// 													}}>
// 													<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
// 														<svg
// 															className="w-3 h-3 text-white"
// 															fill="none"
// 															stroke="currentColor"
// 															viewBox="0 0 24 24">
// 															<path
// 																strokeLinecap="round"
// 																strokeLinejoin="round"
// 																strokeWidth={2}
// 																d="M5 13l4 4L19 7"
// 															/>
// 														</svg>
// 													</div>
// 													<span className="text-gray-700 text-sm leading-relaxed">
// 														{req}
// 													</span>
// 												</motion.div>
// 											)
// 										)}
// 									</div>
// 								</div>
// 							</motion.div>
// 						))}
// 					</motion.div>
// 				</motion.section>

// 				{/* Important Notes */}
// 				<motion.section
// 					className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white"
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true }}
// 					variants={fadeInUp}
// 					transition={{ duration: 0.6 }}>
// 					<h2 className="text-3xl font-bold mb-6 text-center">
// 						⚠️ Catatan Penting
// 					</h2>
// 					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// 						<div>
// 							<h3 className="text-xl font-semibold mb-4">
// 								Hal Yang Perlu Diperhatikan:
// 							</h3>
// 							<ul className="space-y-2 text-amber-100">
// 								<li>
// 									• Semua dokumen harus dalam kondisi jelas
// 									dan terbaca
// 								</li>
// 								<li>
// 									• Fotocopy dokumen harus disertai dokumen
// 									asli
// 								</li>
// 								<li>
// 									• Formulir dapat diambil di kantor desa atau
// 									diunduh online
// 								</li>
// 								<li>
// 									• Waktu pelayanan sesuai jam kerja kantor
// 									desa
// 								</li>
// 								<li>
// 									• Untuk permohonan mendesak, hubungi kepala
// 									desa
// 								</li>
// 							</ul>
// 						</div>
// 						<div>
// 							<h3 className="text-xl font-semibold mb-4">
// 								Biaya Tambahan:
// 							</h3>
// 							<ul className="space-y-2 text-amber-100">
// 								<li>
// 									• Materai 10.000 untuk surat keterangan
// 									tertentu
// 								</li>
// 								<li>
// 									• Biaya fotocopy jika dilakukan di kantor
// 									desa
// 								</li>
// 								<li>
// 									• Biaya transportasi ke Disdukcapil (jika
// 									diperlukan)
// 								</li>
// 								<li>
// 									• Denda keterlambatan untuk akta kelahiran{" "}
// 									{">"}60 hari
// 								</li>
// 								<li>• Biaya legalisir untuk dokumen khusus</li>
// 							</ul>
// 						</div>
// 					</div>

// 					<div className="mt-8 text-center">
// 						<motion.button
// 							className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
// 							whileHover={{ scale: 1.05, y: -2 }}
// 							whileTap={{ scale: 0.95 }}>
// 								<a href="https://wa.me/6281249260276">Hubungi Kantor Desa: +62 8124-9260-276</a>
// 						</motion.button>
// 					</div>
// 				</motion.section>
// 			</div>
// 		</div>
// 	);
// }

"use client"
import { useEffect, useState } from "react";

export default function Iklim() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const API_KEY = "7cfc594807e6048dde17fa47b38865af"; // ganti dengan API key kamu
    const CITY = "Ngantang";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) return <p>Loading...</p>;

  return (
    <div>
      <h2>Cuaca {weather.name}</h2>
      <p>Suhu: {weather.main.temp}°C</p>
      <p>Kelembapan: {weather.main.humidity}%</p>
      <p>Cuaca: {weather.weather[0].description}</p>
    </div>
  );
}

