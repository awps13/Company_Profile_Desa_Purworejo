import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Perangkat Desa - Desa Purworejo",
	description: "Struktur organisasi dan perangkat desa Purworejo",
};

export default function PerangkatDesaPage() {
	return (
		<div className="min-h-dvh bg-gray-50 py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
						Perangkat Desa Purworejo
					</h1>

					{/* Kepala Desa */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
							Kepala Desa
						</h2>
						<div className="max-w-md mx-auto bg-green-50 rounded-lg p-6 text-center">
							<div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
								<Image
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop"
									alt="Kepala Desa"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Bapak Suyanto, S.Pd
							</h3>
							<p className="text-green-600 font-medium mb-2">
								Kepala Desa
							</p>
							<p className="text-sm text-gray-600">
								Periode: 2019 - 2025
							</p>
						</div>
					</div>

					{/* Sekretaris Desa */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Sekretariat Desa
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-gray-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=387&auto=format&fit=crop"
										alt="Sekretaris Desa"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Ibu Siti Aminah, S.Sos
								</h4>
								<p className="text-green-600 font-medium text-sm">
									Sekretaris Desa
								</p>
							</div>

							<div className="bg-gray-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
										alt="Kaur Keuangan"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Bapak Ahmad Wijaya
								</h4>
								<p className="text-green-600 font-medium text-sm">
									Kaur Keuangan
								</p>
							</div>

							<div className="bg-gray-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop"
										alt="Kaur Umum"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Ibu Ratna Sari, A.Md
								</h4>
								<p className="text-green-600 font-medium text-sm">
									Kaur Umum & Perencanaan
								</p>
							</div>
						</div>
					</div>

					{/* Kasi */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Kepala Seksi (Kasi)
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-blue-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop"
										alt="Kasi Pemerintahan"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Bapak Bambang Sutrisno
								</h4>
								<p className="text-blue-600 font-medium text-sm">
									Kasi Pemerintahan
								</p>
							</div>

							<div className="bg-blue-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop"
										alt="Kasi Kesejahteraan"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Bapak Dedi Kusuma
								</h4>
								<p className="text-blue-600 font-medium text-sm">
									Kasi Kesejahteraan
								</p>
							</div>

							<div className="bg-blue-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2940&auto=format&fit=crop"
										alt="Kasi Pelayanan"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Bapak Eko Prasetyo
								</h4>
								<p className="text-blue-600 font-medium text-sm">
									Kasi Pelayanan
								</p>
							</div>
						</div>
					</div>

					{/* Kepala Dusun */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Kepala Dusun (Kadus)
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-yellow-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop"
										alt="Kadus I"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Bapak Sugeng Riyadi
								</h4>
								<p className="text-yellow-600 font-medium text-sm mb-2">
									Kepala Dusun I
								</p>
								<p className="text-xs text-gray-600">
									Dusun Krajan
								</p>
							</div>

							<div className="bg-yellow-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
										alt="Kadus II"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Bapak Haryanto
								</h4>
								<p className="text-yellow-600 font-medium text-sm mb-2">
									Kepala Dusun II
								</p>
								<p className="text-xs text-gray-600">
									Dusun Sawah
								</p>
							</div>

							<div className="bg-yellow-50 rounded-lg p-6 text-center">
								<div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
									<Image
										src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop"
										alt="Kadus III"
										fill
										className="object-cover"
									/>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									Bapak Mulyono
								</h4>
								<p className="text-yellow-600 font-medium text-sm mb-2">
									Kepala Dusun III
								</p>
								<p className="text-xs text-gray-600">
									Dusun Gunung
								</p>
							</div>
						</div>
					</div>

					{/* Struktur Organisasi */}
					<div className="mb-12">
						<h2 className="text-2xl font-semibold text-green-600 mb-6">
							Bagan Struktur Organisasi
						</h2>
						<div className="bg-gray-50 p-6 rounded-lg">
							<div className="text-center">
								<div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mb-4 inline-block">
									<p className="font-semibold text-green-800">
										Kepala Desa
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
									<div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3">
										<p className="font-medium text-blue-800">
											Sekretaris Desa
										</p>
									</div>
									<div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3">
										<p className="font-medium text-blue-800">
											Kepala Seksi
										</p>
									</div>
									<div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3">
										<p className="font-medium text-blue-800">
											Kepala Dusun
										</p>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-4 gap-3">
									<div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-2">
										<p className="text-sm text-yellow-800">
											Kaur Keuangan
										</p>
									</div>
									<div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-2">
										<p className="text-sm text-yellow-800">
											Kaur Umum
										</p>
									</div>
									<div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-2">
										<p className="text-sm text-yellow-800">
											RT/RW
										</p>
									</div>
									<div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-2">
										<p className="text-sm text-yellow-800">
											Masyarakat
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Information */}
					<div className="bg-green-50 p-6 rounded-lg">
						<h3 className="text-xl font-semibold text-green-600 mb-4 text-center">
							Kontak Kantor Desa
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
							<div>
								<p className="text-gray-600 text-sm">Alamat</p>
								<p className="font-medium">
									Jl. Raya Purworejo No. 1
								</p>
								<p className="font-medium">
									Kec. Ngantang, Kab. Malang
								</p>
							</div>
							<div>
								<p className="text-gray-600 text-sm">Telepon</p>
								<p className="font-medium">(0341) 123-4567</p>
							</div>
							<div>
								<p className="text-gray-600 text-sm">Email</p>
								<p className="font-medium">
									info@purworejo-ngantang.desa.id
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
