import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Visi Misi - Desa Purworejo",
	description:
		"Visi dan Misi Desa Purworejo, Kecamatan Ngantang, Kabupaten Malang, Jawa Timur",
};

export default function VisiMisiPage() {
	return (
		<div className="min-h-dvh bg-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
						Visi dan Misi Desa Purworejo
					</h1>

					{/* Visi Section */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Visi
						</h2>
						<div className="bg-green-50 p-6 rounded-lg">
							<p className="text-lg text-gray-800 leading-relaxed text-center italic">
								&quot;TERWUJUDNYA MASYARAKAT DESA PURWOREJO YANG SEJAHTERA DAN MANDIRI TERDEPAN DI BIDANG PERTANIAN&quot;
							</p>
						</div>
					</div>

					{/* Misi Section */}
					<div>
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Misi
						</h2>
						<div className="space-y-4">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									1
								</div>
								<p className="text-gray-700 leading-relaxed">
									Terwujudnya aparatur Pemerintah Desa yang mempunyai kapasitas dan kemampuan dalam melayani masyarakat sehingga penyelenggaraan pemerintah desa menjadi efisien dan efektif
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									2
								</div>
								<p className="text-gray-700 leading-relaxed">
									Terwujudnya pelayanan dasar yang memadahi dan berkualitas, meliputi pendidikan, kesehatan, dan tempat tinggal memadahi (papan).
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									3
								</div>
								<p className="text-gray-700 leading-relaxed">
									Tersedianya Infrastruktur perdesaan yang mampu mendukung aktifitas ekonomi, pertanian, sosial dan budaya
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									4
								</div>
								<p className="text-gray-700 leading-relaxed">
									Terciptanya kondisi kegiatan ekonomi yang berkualitas dan berkelanjutan yang dapat dinikmati oleh seluruh masyarakat, berdaya saing, pengembangan ekonomi non-pertanian serta penerapan teknologi tepat guna, sebagai upaya pengembangan ekonomi lokal Desa
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									5
								</div>
								<p className="text-gray-700 leading-relaxed">
									Terwujudnya ekonomi perdesaan berdaya saing tinggi melalui usaha pertanian, petemakan, jasa dan usaha industri skala kecil perseorangan maupun kelompok.
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									6
								</div>
								<p className="text-gray-700 leading-relaxed">
									Terwujudnya pengelolaan sumberdaya daya alam secara bertanggungjawab dan penataan lingkungan hidup untuk kemajuan desa
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									7
								</div>
								<p className="text-gray-700 leading-relaxed">
									Terciptanya ketertiban dan ketentraman masyarakat desa, melalui pembinaan dan pemberdayaan masyarakat
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									8
								</div>
								<p className="text-gray-700 leading-relaxed">
									Terciptanya masyarakat berkesenian dan melestarikan budaya
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									9
								</div>
								<p className="text-gray-700 leading-relaxed">
									Tersedianya kader desa yang tangguh melalui pembinaan kepada generasi muda
								</p>
							</div>
						</div>
					</div>

					{/* Tujuan Section */}
					{/* <div className="mt-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Tujuan
						</h2>
						<div className="bg-gray-50 p-6 rounded-lg">
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-center space-x-2">
									<span className="text-green-600">✓</span>
									<span>
										Meningkatkan pendapatan per kapita
										masyarakat desa
									</span>
								</li>
								<li className="flex items-center space-x-2">
									<span className="text-green-600">✓</span>
									<span>
										Menciptakan lapangan kerja baru di
										sektor pertanian dan pariwisata
									</span>
								</li>
								<li className="flex items-center space-x-2">
									<span className="text-green-600">✓</span>
									<span>
										Menjadikan Desa Purworejo sebagai
										destinasi agrowisata unggulan
									</span>
								</li>
								<li className="flex items-center space-x-2">
									<span className="text-green-600">✓</span>
									<span>
										Membangun masyarakat yang gotong royong
										dan harmonis
									</span>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
