import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Sejarah - Desa Purworejo",
	description: "Sejarah dan perkembangan Desa Purworejo dari masa ke masa",
};

export default function SejarahPage() {
	return (
		<div className="min-h-dvh bg-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
						Sejarah Desa Purworejo
					</h1>

					{/* Hero Image */}
					<div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
						<Image
							src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2946&auto=format&fit=crop"
							alt="Historical Village Scene"
							fill
							className="object-cover"
						/>
					</div>

					{/* Introduction */}
					<div className="mb-8">
						<p className="text-lg text-gray-700 leading-relaxed">
							Desa Purworejo memiliki sejarah yang panjang dan
							kaya akan budaya. Nama &quot;Purworejo&quot; berasal
							dari bahasa Jawa yang memiliki makna mendalam dalam
							kehidupan masyarakat desa.
						</p>
					</div>

					{/* Timeline */}
					<div className="space-y-8">
						<div className="border-l-4 border-green-600 pl-6">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Era Kerajaan (Abad 15-17)
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Pada masa kerajaan Majapahit dan Mataram,
								wilayah yang sekarang menjadi Desa Purworejo
								sudah mulai dihuni oleh masyarakat Jawa. Nama
								Purworejo diperkirakan berasal dari kata
								&quot;Purwo&quot; yang berarti awal atau
								pertama, dan &quot;Rejo&quot; yang berarti
								sejahtera.
							</p>
						</div>

						<div className="border-l-4 border-green-600 pl-6">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Masa Kolonial Belanda (Abad 18-19)
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Selama masa kolonial, Desa Purworejo menjadi
								salah satu daerah penghasil produk pertanian.
								Sistem tanam paksa (cultuurstelsel) mempengaruhi
								pola pertanian masyarakat, namun juga
								memperkenalkan teknik-teknik pertanian baru.
							</p>
						</div>

						<div className="border-l-4 border-green-600 pl-6">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Era Kemerdekaan (1945-sekarang)
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Setelah kemerdekaan Indonesia, Desa Purworejo
								terus berkembang sebagai desa agraris.
								Pembangunan infrastruktur, pendidikan, dan
								kesehatan terus dilakukan untuk meningkatkan
								kesejahteraan masyarakat.
							</p>
						</div>

						<div className="border-l-4 border-green-600 pl-6">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Era Modern (2000-sekarang)
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Memasuki era modern, Desa Purworejo mulai
								mengembangkan sektor pariwisata dan ekonomi
								kreatif. Budidaya bawang merah menjadi komoditas
								unggulan yang dikenal hingga ke luar daerah.
							</p>
						</div>
					</div>

					{/* Cultural Heritage */}
					<div className="mt-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Warisan Budaya
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gray-50 p-6 rounded-lg">
								<h4 className="text-lg font-semibold text-gray-900 mb-3">
									Tradisi Gotong Royong
								</h4>
								<p className="text-gray-700">
									Semangat gotong royong telah mengakar kuat
									dalam kehidupan masyarakat Desa Purworejo
									sejak zaman dahulu dan masih dilestarikan
									hingga kini.
								</p>
							</div>

							<div className="bg-gray-50 p-6 rounded-lg">
								<h4 className="text-lg font-semibold text-gray-900 mb-3">
									Pertanian Tradisional
								</h4>
								<p className="text-gray-700">
									Teknik pertanian yang diwariskan
									turun-temurun, khususnya dalam budidaya
									bawang merah, menjadi identitas khas desa
									ini.
								</p>
							</div>

							<div className="bg-gray-50 p-6 rounded-lg">
								<h4 className="text-lg font-semibold text-gray-900 mb-3">
									Seni dan Budaya
								</h4>
								<p className="text-gray-700">
									Berbagai seni tradisional seperti kesenian
									Jawa masih dipelihara dan ditampilkan dalam
									acara-acara adat dan perayaan desa.
								</p>
							</div>

							<div className="bg-gray-50 p-6 rounded-lg">
								<h4 className="text-lg font-semibold text-gray-900 mb-3">
									Kuliner Khas
								</h4>
								<p className="text-gray-700">
									Makanan tradisional yang menggunakan
									bahan-bahan lokal, termasuk olahan dari
									bawang merah sebagai komoditas unggulan.
								</p>
							</div>
						</div>
					</div>

					{/* Fun Facts */}
					<div className="mt-12 bg-green-50 p-6 rounded-lg">
						<h3 className="text-xl font-semibold text-green-600 mb-4">
							Fakta Menarik
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li className="flex items-center space-x-2">
								<span className="text-green-600">•</span>
								<span>
									Desa Purworejo telah ada selama lebih dari
									300 tahun
								</span>
							</li>
							<li className="flex items-center space-x-2">
								<span className="text-green-600">•</span>
								<span>
									Bawang merah Purworejo dikenal kualitasnya
									hingga ke luar Jawa
								</span>
							</li>
							<li className="flex items-center space-x-2">
								<span className="text-green-600">•</span>
								<span>
									Desa ini memiliki tradisi &quot;Bersih
									Desa&quot; yang diadakan setiap tahun
								</span>
							</li>
							<li className="flex items-center space-x-2">
								<span className="text-green-600">•</span>
								<span>
									Sistem irigasi tradisional masih digunakan
									untuk mengairi sawah
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
