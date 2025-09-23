import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Wilayah - Desa Purworejo",
	description: "Informasi geografis dan wilayah administratif Desa Purworejo",
};

export default function WilayahPage() {
	return (
		<div className="min-h-dvh bg-gray-50 py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
						Wilayah Desa Purworejo
					</h1>

					{/* Geographic Overview */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
						<div>
							<h2 className="text-2xl font-semibold text-green-600 mb-4">
								Informasi Geografis
							</h2>
							<div className="space-y-4">
								<div className="flex justify-between items-center py-2 border-b border-gray-200">
									<span className="font-medium text-gray-700">
										Kecamatan:
									</span>
									<span className="text-gray-900">
										Ngantang
									</span>
								</div>
								<div className="flex justify-between items-center py-2 border-b border-gray-200">
									<span className="font-medium text-gray-700">
										Kabupaten:
									</span>
									<span className="text-gray-900">
										Malang
									</span>
								</div>
								<div className="flex justify-between items-center py-2 border-b border-gray-200">
									<span className="font-medium text-gray-700">
										Provinsi:
									</span>
									<span className="text-gray-900">
										Jawa Timur
									</span>
								</div>
								<div className="flex justify-between items-center py-2 border-b border-gray-200">
									<span className="font-medium text-gray-700">
										Kode Pos:
									</span>
									<span className="text-gray-900">65392</span>
								</div>
								<div className="flex justify-between items-center py-2 border-b border-gray-200">
									<span className="font-medium text-gray-700">
										Luas Wilayah:
									</span>
									<span className="text-gray-900">
										312,050 Ha
									</span>
								</div>
								<div className="flex justify-between items-center py-2">
									<span className="font-medium text-gray-700">
										Ketinggian:
									</span>
									<span className="text-gray-900">
										600 mdpl
									</span>
								</div>
							</div>
						</div>

						<div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
							<Image
								src="/peta.jpg"
								alt="Village Landscape"
								fill
								className="object-cover "
							/>
						</div>
					</div>

					{/* Administrative Divisions */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Pembagian Wilayah Administratif
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Dusun Pakan
								</h3> 
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• RT 01, 02, 03, 04, 05, 06, 07</li>
									<li>• Pusat pemerintahan desa</li>
									<li>• Pasar tradisional</li>
								</ul>
							</div>

							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Dusun Binangsri
								</h3>
								
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• RT 08, 09, 10, 11, 12, 13, 14</li>
									<li>• Area persawahan utama</li>
									<li>• Sentra bawang merah</li>
								</ul>
							</div>

							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Dusun Jeruk
								</h3>
								
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• RT 15, 16, 17, 18, 19</li>
									<li>• Area perbukitan</li>
									<li>• Hutan produksi</li>
								</ul>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Dusun Tokol
								</h3>
								
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• RT 20, 21, 22, 23</li>
									<li>• Area perbukitan</li>
									<li>• Hutan produksi</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Boundaries */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Batas Wilayah
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-blue-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-blue-700 mb-4 text-center">
									Batas Sebelah Utara
								</h3>
								<p className="text-gray-700 text-center">
									Desa Mulyorejo
								</p>
							</div>

							<div className="bg-red-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-red-700 mb-4 text-center">
									Batas Sebelah Selatan
								</h3>
								<p className="text-gray-700 text-center">
									Desa Banjarejo
								</p>
							</div>

							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-green-700 mb-4 text-center">
									Batas Sebelah Barat
								</h3>
								<p className="text-gray-700 text-center">
									Desa Banjarejo
								</p>
							</div>

							<div className="bg-yellow-50 p-6 rounded-lg">
								<h3 className="text-lg font-semibold text-yellow-700 mb-4 text-center">
									Batas Sebelah Timur
								</h3>
								<p className="text-gray-700 text-center">
									Desa Bendosari
								</p>
							</div>
						</div>
					</div>

					{/* Land Use */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Penggunaan Lahan
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							
							<div className="text-center p-4 bg-green-100 rounded-lg">
								<div className="text-2xl font-bold text-green-700">
									269,7 hektar
								</div>
								<div className="text-sm text-gray-700">
									Sawah & Ladang
								</div>
							</div>

							<div className="text-center p-4 bg-gray-100 rounded-lg">
								<div className="text-2xl font-bold text-gray-700">
									312 hektar
								</div>
								<div className="text-sm text-gray-700">
									Total Lahan
								</div>
							</div>
							<div className="text-center p-4 bg-blue-100 rounded-lg">
								<div className="text-2xl font-bold text-blue-700">
									42,3 hektar
								</div>
								<div className="text-sm text-gray-700">
									Pemukiman
								</div>
							</div>
							

						</div>
					</div>

					{/* Climate & Topography */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<h2 className="text-2xl font-semibold text-green-600 mb-4">
								Kondisi Iklim
							</h2>
							<div className="bg-blue-50 p-6 rounded-lg">
								<ul className="space-y-3 text-gray-700">
									<li className="flex items-center space-x-2">
										<span className="text-blue-600">
											🌡️
										</span>
										<span>Suhu rata-rata: 20-26°C</span>
									</li>
									<li className="flex items-center space-x-2">
										<span className="text-blue-600">
											💧
										</span>
										<span>
											Curah hujan: 1.500-2.000 mm/tahun
										</span>
									</li>
									<li className="flex items-center space-x-2">
										<span className="text-blue-600">
											💨
										</span>
										<span>Kelembaban: 70-85%</span>
									</li>
									<li className="flex items-center space-x-2">
										<span className="text-blue-600">
											☀️
										</span>
										<span>
											Musim kemarau: April-Oktober
										</span>
									</li>
									<li className="flex items-center space-x-2">
										<span className="text-blue-600">
											🌧️
										</span>
										<span>Musim hujan: November-Maret</span>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
