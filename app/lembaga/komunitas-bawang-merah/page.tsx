import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Komunitas Bawang Merah - Desa Purworejo",
	description: "Komunitas petani bawang merah Desa Purworejo",
};

export default function KomunitasBawangMerahPage() {
	return (
		<div className="min-h-dvh bg-gray-50 py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
						Komunitas Bawang Merah Purworejo
					</h1>

					{/* Hero Image */}
					<div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
						<Image
							src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2940&auto=format&fit=crop"
							alt="Onion Farming"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<div className="text-white text-center">
								<h2 className="text-2xl md:text-3xl font-bold mb-2">
									&quot;Bersatu dalam Keunggulan&quot;
								</h2>
								<p className="text-lg">
									Gabungan Kelompok Tani Bawang Merah
									Purworejo
								</p>
							</div>
						</div>
					</div>

					{/* About */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Tentang Komunitas
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div>
								<p className="text-gray-700 leading-relaxed mb-4">
									Komunitas Bawang Merah Purworejo adalah
									gabungan kelompok tani yang didirikan pada
									tahun 2010 dengan tujuan meningkatkan
									produktivitas dan kualitas bawang merah
									sebagai komoditas unggulan desa. Komunitas
									ini beranggotakan 120 petani dari berbagai
									dusun di Desa Purworejo.
								</p>
								<p className="text-gray-700 leading-relaxed mb-4">
									Dengan menerapkan teknik budidaya modern dan
									sistem kerja sama yang solid, komunitas ini
									berhasil menjadikan bawang merah Purworejo
									dikenal hingga ke luar daerah dengan
									kualitas premium.
								</p>
								<p className="text-gray-700 leading-relaxed">
									Selain fokus pada produksi, komunitas juga
									mengembangkan agrowisata edukasi dan
									pemasaran digital untuk memperluas jangkauan
									pasar.
								</p>
							</div>
							<div className="bg-red-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Data Komunitas
								</h3>
								<div className="space-y-3 text-sm">
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Nama:
										</span>
										<span className="text-gray-900">
											Gapoktan Merah Sejahtera
										</span>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Didirikan:
										</span>
										<span className="text-gray-900">
											2010
										</span>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Anggota:
										</span>
										<span className="text-gray-900">
											120 petani
										</span>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Luas Garapan:
										</span>
										<span className="text-gray-900">
											200 hektar
										</span>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-gray-700">
											Produksi/tahun:
										</span>
										<span className="text-gray-900">
											2.400 ton
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Leadership */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Struktur Kepengurusan
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{/* Ketua */}
							<div className="bg-red-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop"
										alt="Ketua Gapoktan"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Pak Sujiwo
								</h3>
								<p className="text-red-600 font-medium text-sm mb-2">
									Ketua Gapoktan
								</p>
								<p className="text-xs text-gray-600">
									Pengalaman: 25 tahun
								</p>
							</div>

							{/* Sekretaris */}
							<div className="bg-blue-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=387&auto=format&fit=crop"
										alt="Sekretaris"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Bu Siti Aisyah
								</h3>
								<p className="text-blue-600 font-medium text-sm mb-2">
									Sekretaris
								</p>
								<p className="text-xs text-gray-600">
									Pengalaman: 15 tahun
								</p>
							</div>

							{/* Bendahara */}
							<div className="bg-green-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
										alt="Bendahara"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Pak Haryono
								</h3>
								<p className="text-green-600 font-medium text-sm mb-2">
									Bendahara
								</p>
								<p className="text-xs text-gray-600">
									Pengalaman: 20 tahun
								</p>
							</div>

							{/* Koordinator */}
							<div className="bg-yellow-50 p-6 rounded-lg text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop"
										alt="Koordinator"
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Pak Bambang
								</h3>
								<p className="text-yellow-600 font-medium text-sm mb-2">
									Koor. Produksi
								</p>
								<p className="text-xs text-gray-600">
									Pengalaman: 18 tahun
								</p>
							</div>
						</div>
					</div>

					{/* Farming Process */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Proses Budidaya Bawang Merah
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-blue-50 p-6 rounded-lg text-center">
								<div className="text-4xl mb-4">🌱</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">
									Persiapan Lahan
								</h3>
								<p className="text-gray-600 text-sm">
									Pengolahan tanah, pembuatan bedengan, dan
									sistem irigasi
								</p>
								<p className="text-xs text-gray-500 mt-2">
									Durasi: 2 minggu
								</p>
							</div>

							<div className="bg-green-50 p-6 rounded-lg text-center">
								<div className="text-4xl mb-4">🧅</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">
									Penanaman
								</h3>
								<p className="text-gray-600 text-sm">
									Penanaman bibit bawang merah berkualitas
									dengan jarak tanam optimal
								</p>
								<p className="text-xs text-gray-500 mt-2">
									Durasi: 1 minggu
								</p>
							</div>

							<div className="bg-yellow-50 p-6 rounded-lg text-center">
								<div className="text-4xl mb-4">🌿</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">
									Perawatan
								</h3>
								<p className="text-gray-600 text-sm">
									Penyiraman, pemupukan, dan pengendalian hama
									penyakit
								</p>
								<p className="text-xs text-gray-500 mt-2">
									Durasi: 8 minggu
								</p>
							</div>

							<div className="bg-red-50 p-6 rounded-lg text-center">
								<div className="text-4xl mb-4">🏆</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">
									Panen
								</h3>
								<p className="text-gray-600 text-sm">
									Pemanenan, pengeringan, dan sortasi untuk
									kualitas terbaik
								</p>
								<p className="text-xs text-gray-500 mt-2">
									Durasi: 2 minggu
								</p>
							</div>
						</div>
					</div>

					{/* Products & Quality */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Produk & Kualitas
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-red-50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold text-red-700 mb-4">
									Varietas Unggulan
								</h3>
								<div className="space-y-4">
									<div>
										<h4 className="font-medium text-gray-900">
											Bawang Merah Brebes
										</h4>
										<p className="text-sm text-gray-600">
											Ukuran besar, tahan simpan, rasa
											pedas sedang
										</p>
									</div>
									<div>
										<h4 className="font-medium text-gray-900">
											Bawang Merah Bangkok
										</h4>
										<p className="text-sm text-gray-600">
											Warna merah cerah, produksi tinggi
										</p>
									</div>
									<div>
										<h4 className="font-medium text-gray-900">
											Bawang Merah Lokal
										</h4>
										<p className="text-sm text-gray-600">
											Adaptasi iklim lokal, rasa khas
										</p>
									</div>
								</div>
							</div>

							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold text-green-700 mb-4">
									Standar Kualitas
								</h3>
								<ul className="space-y-3">
									<li className="flex items-center space-x-2">
										<span className="text-green-600">
											✓
										</span>
										<span className="text-gray-700">
											Bebas pestisida berlebihan
										</span>
									</li>
									<li className="flex items-center space-x-2">
										<span className="text-green-600">
											✓
										</span>
										<span className="text-gray-700">
											Ukuran seragam (grade A-B)
										</span>
									</li>
									<li className="flex items-center space-x-2">
										<span className="text-green-600">
											✓
										</span>
										<span className="text-gray-700">
											Kadar air maksimal 85%
										</span>
									</li>
									<li className="flex items-center space-x-2">
										<span className="text-green-600">
											✓
										</span>
										<span className="text-gray-700">
											Kemasan bersih dan higienis
										</span>
									</li>
									<li className="flex items-center space-x-2">
										<span className="text-green-600">
											✓
										</span>
										<span className="text-gray-700">
											Sertifikat organik (proses)
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Programs & Activities */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Program Komunitas
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-blue-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-blue-700 mb-4">
									🎓 Pelatihan Teknis
								</h3>
								<ul className="space-y-2 text-sm text-gray-700">
									<li>• Teknik budidaya modern</li>
									<li>• Pengendalian hama terpadu</li>
									<li>• Pasca panen dan pengolahan</li>
									<li>• Manajemen keuangan usaha</li>
								</ul>
							</div>

							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-green-700 mb-4">
									🤝 Kerjasama
								</h3>
								<ul className="space-y-2 text-sm text-gray-700">
									<li>• Beli benih secara kolektif</li>
									<li>• Sistem tebasan bersama</li>
									<li>• Pemasaran berkelompok</li>
									<li>• Bantuan modal bergulir</li>
								</ul>
							</div>

							<div className="bg-yellow-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-yellow-700 mb-4">
									📱 Inovasi Digital
								</h3>
								<ul className="space-y-2 text-sm text-gray-700">
									<li>• Aplikasi monitoring cuaca</li>
									<li>• E-commerce marketplace</li>
									<li>• Grup WhatsApp koordinasi</li>
									<li>• Media sosial promosi</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Market & Distribution */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Pemasaran & Distribusi
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Jaringan Pasar
								</h3>
								<div className="space-y-3">
									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="font-medium text-gray-900">
											Pasar Lokal (40%)
										</h4>
										<p className="text-sm text-gray-600">
											Malang, Ngantang, dan sekitarnya
										</p>
									</div>
									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="font-medium text-gray-900">
											Pasar Regional (35%)
										</h4>
										<p className="text-sm text-gray-600">
											Surabaya, Kediri, Blitar
										</p>
									</div>
									<div className="bg-gray-50 p-4 rounded-lg">
										<h4 className="font-medium text-gray-900">
											Pasar Online (25%)
										</h4>
										<p className="text-sm text-gray-600">
											E-commerce, media sosial
										</p>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Harga & Volume
								</h3>
								<div className="bg-red-50 p-6 rounded-lg">
									<div className="grid grid-cols-2 gap-4 text-center">
										<div>
											<p className="text-2xl font-bold text-red-600">
												Rp 18.000
											</p>
											<p className="text-sm text-gray-600">
												per kg (grade A)
											</p>
										</div>
										<div>
											<p className="text-2xl font-bold text-red-600">
												200 ton
											</p>
											<p className="text-sm text-gray-600">
												per musim tanam
											</p>
										</div>
										<div>
											<p className="text-2xl font-bold text-red-600">
												3x
											</p>
											<p className="text-sm text-gray-600">
												musim tanam/tahun
											</p>
										</div>
										<div>
											<p className="text-2xl font-bold text-red-600">
												12-15
											</p>
											<p className="text-sm text-gray-600">
												ton/hektar
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Agrotourism */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
							Agrowisata Edukasi
						</h2>
						<div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
							<div className="text-center mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									&quot;Wisata Kebun Bawang Merah
									Purworejo&quot;
								</h3>
								<p className="text-gray-600">
									Belajar langsung proses budidaya bawang
									merah dari petani berpengalaman
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="bg-white p-4 rounded-lg text-center">
									<div className="text-3xl mb-3">🌾</div>
									<h4 className="font-medium text-gray-900 mb-2">
										Tour Kebun
									</h4>
									<p className="text-sm text-gray-600">
										Melihat proses budidaya dari dekat
									</p>
								</div>

								<div className="bg-white p-4 rounded-lg text-center">
									<div className="text-3xl mb-3">👨‍🌾</div>
									<h4 className="font-medium text-gray-900 mb-2">
										Praktek Tanam
									</h4>
									<p className="text-sm text-gray-600">
										Ikut menanam dan merawat tanaman
									</p>
								</div>

								<div className="bg-white p-4 rounded-lg text-center">
									<div className="text-3xl mb-3">🛒</div>
									<h4 className="font-medium text-gray-900 mb-2">
										Beli Langsung
									</h4>
									<p className="text-sm text-gray-600">
										Membeli produk segar dari petani
									</p>
								</div>
							</div>

							<div className="text-center mt-6">
								<p className="text-sm text-gray-600 mb-4">
									Paket wisata: Rp 25.000/orang (include tour,
									praktek, dan oleh-oleh)
								</p>
								<button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
									Reservasi Agrowisata
								</button>
							</div>
						</div>
					</div>

					{/* Contact & Join */}
					<div className="bg-red-50 p-8 rounded-lg text-center">
						<h2 className="text-xl font-semibold text-red-600 mb-4">
							Bergabung dengan Komunitas
						</h2>
						<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
							Terbuka untuk petani bawang merah di Desa Purworejo
							dan sekitarnya. Bersama kita tingkatkan kualitas dan
							pemasaran bawang merah.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
							<div className="bg-white p-4 rounded-lg">
								<h3 className="font-medium text-gray-900 mb-2">
									Pertemuan Rutin
								</h3>
								<p className="text-sm text-gray-600">
									Setiap Selasa, 19:00 WIB
								</p>
								<p className="text-sm text-gray-600">
									Balai Desa Purworejo
								</p>
							</div>
							<div className="bg-white p-4 rounded-lg">
								<h3 className="font-medium text-gray-900 mb-2">
									Kontak Ketua
								</h3>
								<p className="text-sm text-gray-600">
									Pak Sujiwo
								</p>
								<p className="text-sm text-gray-600">
									WA: +62 813-4567-8901
								</p>
							</div>
							<div className="bg-white p-4 rounded-lg">
								<h3 className="font-medium text-gray-900 mb-2">
									Syarat Bergabung
								</h3>
								<p className="text-sm text-gray-600">
									Memiliki lahan bawang merah
								</p>
								<p className="text-sm text-gray-600">
									Komitmen kerja sama
								</p>
							</div>
						</div>
						<button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
							Hubungi Komunitas
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
