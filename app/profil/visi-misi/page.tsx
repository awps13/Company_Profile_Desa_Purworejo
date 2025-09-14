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
								&quot;Mewujudkan Desa Purworejo yang Maju,
								Mandiri, dan Sejahtera Berdasarkan Potensi Alam
								dan Budaya Lokal&quot;
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
									Mengembangkan potensi ekonomi desa melalui
									pertanian berkelanjutan, khususnya budidaya
									bawang merah dan tanaman hortikultura
									lainnya.
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									2
								</div>
								<p className="text-gray-700 leading-relaxed">
									Meningkatkan kualitas sumber daya manusia
									melalui pendidikan, pelatihan, dan
									pemberdayaan masyarakat.
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									3
								</div>
								<p className="text-gray-700 leading-relaxed">
									Membangun infrastruktur desa yang mendukung
									kemajuan ekonomi dan kesejahteraan
									masyarakat.
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									4
								</div>
								<p className="text-gray-700 leading-relaxed">
									Mengembangkan sektor pariwisata berbasis
									alam dan budaya lokal untuk meningkatkan
									pendapatan masyarakat.
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									5
								</div>
								<p className="text-gray-700 leading-relaxed">
									Melestarikan budaya dan tradisi lokal
									sebagai identitas desa yang unik dan
									berharga.
								</p>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
									6
								</div>
								<p className="text-gray-700 leading-relaxed">
									Menyelenggarakan pemerintahan desa yang
									transparan, akuntabel, dan partisipatif
									untuk kepentingan bersama.
								</p>
							</div>
						</div>
					</div>

					{/* Tujuan Section */}
					<div className="mt-12">
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
					</div>
				</div>
			</div>
		</div>
	);
}
