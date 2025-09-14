import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Karang Taruna - Desa Purworejo",
	description: "Organisasi Karang Taruna Desa Purworejo",
};

export default function KarangTarunaPage() {
	return (
		<div className="min-h-dvh bg-gray-50 py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
						Karang Taruna Desa Purworejo
					</h1>

					{/* Hero Image */}
					<div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
						<Image
							src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2942&auto=format&fit=crop"
							alt="Youth Organization Activity"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<div className="text-white text-center">
								<h2 className="text-2xl md:text-3xl font-bold mb-2">
									&quot;Bersama Membangun Desa&quot;
								</h2>
								<p className="text-lg">
									Karang Taruna Tunas Muda Purworejo
								</p>
							</div>
						</div>
					</div>

					{/* About */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Tentang Karang Taruna
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div>
								<p className="text-gray-700 leading-relaxed mb-4">
									Karang Taruna &quot;Tunas Muda&quot; Desa
									Purworejo adalah organisasi kepemudaan yang
									berperan aktif dalam pembangunan desa dan
									pemberdayaan masyarakat. Organisasi ini
									menjadi wadah bagi pemuda-pemudi desa untuk
									berkreasi, berkarya, dan berkontribusi
									positif.
								</p>
								<p className="text-gray-700 leading-relaxed">
									Dengan semangat gotong royong dan inovasi,
									Karang Taruna Purworejo terus mengembangkan
									program-program yang bermanfaat bagi
									kemajuan desa dan kesejahteraan masyarakat.
								</p>
							</div>
							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Informasi Organisasi
								</h3>
								<div className="space-y-3 text-sm">
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Nama:
										</span>
										<span className="text-gray-900">
											Tunas Muda Purworejo
										</span>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Didirikan:
										</span>
										<span className="text-gray-900">
											1995
										</span>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Anggota:
										</span>
										<span className="text-gray-900">
											85 orang
										</span>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Usia Anggota:
										</span>
										<span className="text-gray-900">
											17-45 tahun
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Leadership */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Struktur Kepengurusan Periode 2023-2025
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{/* Ketua */}
							<div className="bg-blue-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop"
										alt="Ketua Karang Taruna"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Andi Pratama
								</h3>
								<p className="text-blue-600 font-medium text-sm mb-2">
									Ketua
								</p>
								<p className="text-xs text-gray-600">
									Umur: 28 tahun
								</p>
							</div>

							{/* Wakil Ketua */}
							<div className="bg-green-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=387&auto=format&fit=crop"
										alt="Wakil Ketua"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Sari Dewi
								</h3>
								<p className="text-green-600 font-medium text-sm mb-2">
									Wakil Ketua
								</p>
								<p className="text-xs text-gray-600">
									Umur: 25 tahun
								</p>
							</div>

							{/* Sekretaris */}
							<div className="bg-yellow-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop"
										alt="Sekretaris"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Maya Sari
								</h3>
								<p className="text-yellow-600 font-medium text-sm mb-2">
									Sekretaris
								</p>
								<p className="text-xs text-gray-600">
									Umur: 23 tahun
								</p>
							</div>

							{/* Bendahara */}
							<div className="bg-purple-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
										alt="Bendahara"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Rudi Santoso
								</h3>
								<p className="text-purple-600 font-medium text-sm mb-2">
									Bendahara
								</p>
								<p className="text-xs text-gray-600">
									Umur: 26 tahun
								</p>
							</div>

							{/* Koordinator */}
							<div className="bg-orange-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop"
										alt="Koordinator Kegiatan"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Dimas Eko
								</h3>
								<p className="text-orange-600 font-medium text-sm mb-2">
									Koor. Kegiatan
								</p>
								<p className="text-xs text-gray-600">
									Umur: 24 tahun
								</p>
							</div>

							{/* Humas */}
							<div className="bg-pink-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2940&auto=format&fit=crop"
										alt="Humas"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Lina Kartika
								</h3>
								<p className="text-pink-600 font-medium text-sm mb-2">
									Humas
								</p>
								<p className="text-xs text-gray-600">
									Umur: 22 tahun
								</p>
							</div>
						</div>
					</div>

					{/* Programs */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Program Kegiatan
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Regular Programs */}
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Program Rutin
								</h3>
								<div className="space-y-4">
									<div className="bg-blue-50 p-4 rounded-lg">
										<h4 className="font-semibold text-blue-700 mb-2">
											🏐 Olahraga Mingguan
										</h4>
										<p className="text-sm text-gray-600">
											Setiap Minggu pagi, voli dan
											badminton di lapangan desa
										</p>
									</div>

									<div className="bg-green-50 p-4 rounded-lg">
										<h4 className="font-semibold text-green-700 mb-2">
											🌱 Kerja Bakti Lingkungan
										</h4>
										<p className="text-sm text-gray-600">
											Gotong royong kebersihan desa setiap
											bulan
										</p>
									</div>

									<div className="bg-yellow-50 p-4 rounded-lg">
										<h4 className="font-semibold text-yellow-700 mb-2">
											📚 Bimbingan Belajar
										</h4>
										<p className="text-sm text-gray-600">
											Membantu anak-anak desa dalam
											pembelajaran
										</p>
									</div>
								</div>
							</div>

							{/* Annual Programs */}
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Program Tahunan
								</h3>
								<div className="space-y-4">
									<div className="bg-red-50 p-4 rounded-lg">
										<h4 className="font-semibold text-red-700 mb-2">
											🎉 Festival Bawang Merah
										</h4>
										<p className="text-sm text-gray-600">
											Perayaan panen raya dan promosi
											produk unggulan desa
										</p>
									</div>

									<div className="bg-purple-50 p-4 rounded-lg">
										<h4 className="font-semibold text-purple-700 mb-2">
											🏆 Turnamen Antar Desa
										</h4>
										<p className="text-sm text-gray-600">
											Kompetisi olahraga dan seni dengan
											desa sekitar
										</p>
									</div>

									<div className="bg-orange-50 p-4 rounded-lg">
										<h4 className="font-semibold text-orange-700 mb-2">
											💼 Pelatihan Keterampilan
										</h4>
										<p className="text-sm text-gray-600">
											Workshop wirausaha dan keterampilan
											praktis
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Achievements */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Prestasi & Penghargaan
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg text-center">
								<div className="text-4xl mb-3">🥇</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Juara 1 Karang Taruna Terbaik
								</h3>
								<p className="text-sm text-gray-600">
									Tingkat Kecamatan Ngantang 2023
								</p>
							</div>

							<div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg text-center">
								<div className="text-4xl mb-3">🏆</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Penghargaan Inovasi Desa
								</h3>
								<p className="text-sm text-gray-600">
									Program Agrowisata Bawang Merah 2022
								</p>
							</div>

							<div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg text-center">
								<div className="text-4xl mb-3">🎖️</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Karang Taruna Aktif
								</h3>
								<p className="text-sm text-gray-600">
									Penghargaan dari Pemkab Malang 2021
								</p>
							</div>
						</div>
					</div>

					{/* Activities Gallery */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Galeri Kegiatan
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="relative h-48 rounded-lg overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2069&auto=format&fit=crop"
									alt="Kegiatan Olahraga"
									fill
									className="object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
									<p className="text-sm font-medium">
										Turnamen Voli Antar RT
									</p>
								</div>
							</div>

							<div className="relative h-48 rounded-lg overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070&auto=format&fit=crop"
									alt="Kegiatan Sosial"
									fill
									className="object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
									<p className="text-sm font-medium">
										Gotong Royong Desa
									</p>
								</div>
							</div>

							<div className="relative h-48 rounded-lg overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2949&auto=format&fit=crop"
									alt="Pelatihan"
									fill
									className="object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
									<p className="text-sm font-medium">
										Workshop Digital Marketing
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Join Us */}
					<div className="bg-green-50 p-8 rounded-lg text-center">
						<h2 className="text-xl font-semibold text-green-600 mb-4">
							Bergabung dengan Karang Taruna
						</h2>
						<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
							Terbuka untuk pemuda-pemudi Desa Purworejo usia
							17-45 tahun yang ingin berkontribusi dalam
							pembangunan desa dan pengembangan diri.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
							<div className="bg-white p-4 rounded-lg">
								<h3 className="font-medium text-gray-900 mb-2">
									Pertemuan Rutin
								</h3>
								<p className="text-sm text-gray-600">
									Setiap Sabtu, 19:00 WIB
								</p>
								<p className="text-sm text-gray-600">
									Balai Desa Purworejo
								</p>
							</div>
							<div className="bg-white p-4 rounded-lg">
								<h3 className="font-medium text-gray-900 mb-2">
									Kontak
								</h3>
								<p className="text-sm text-gray-600">
									Ketua: Andi Pratama
								</p>
								<p className="text-sm text-gray-600">
									WA: +62 812-3456-7890
								</p>
							</div>
							<div className="bg-white p-4 rounded-lg">
								<h3 className="font-medium text-gray-900 mb-2">
									Syarat
								</h3>
								<p className="text-sm text-gray-600">
									Warga Desa Purworejo
								</p>
								<p className="text-sm text-gray-600">
									Berkomitmen aktif
								</p>
							</div>
						</div>
						<button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
							Hubungi Kami
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
