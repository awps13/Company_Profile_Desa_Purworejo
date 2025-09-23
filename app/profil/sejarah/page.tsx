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
								Asal Usul Desa
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Menurut informasi yang kami dapatkan dari para sesepuh desa bahwa desa Purworejo didirikan oleh Pungawa Mataram yang melarikan diri akibat runtuhnya kerajaan tersebut Orang yang datang ke Purworejo bernama:
								<br />
								1. Ki Ageng Slamet / Ki Ageng Poncoyudho / Ki Ageng Gambuhan
								<br />
								2. Ki Ageng Noyo
								<br />
								3. Ki Ageng Poncosumo
								<br />
								4. Nyai Ranti
							</p>
						</div>

						<div className="border-l-4 border-green-600 pl-6">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Sejarah Kepemimpinan Desa
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Pemerintahan desa Purworejo dipimpin oleh Kepala Desa / Aries, mulai berdiri sejak tahun 1935 atas perintah penjajah Belanda desa-desa tersebut digabung menjadi sebuah desa yaitu Purworejo, dan Kepala Desa tersebut dipilih langsung masyarakat setempat
								Adapun Kepala Desa yang pernah memimpin di Desa Purworejo Adalah:
								<br />
								1. Bapak Garbun (1922)
								<br />
								2. Bapak Supangkat (1935)
								<br />
								3. Bapak Martoredjo (1958-1968)
								<br />
								4. Bapak Djafar Soeyanto (1970-1988)
								<br />
								5. Bapak M Harminto (1989-2007)
								<br />
								6. Bapak Yulianto (2007-2013)
								<br />
								7. Bapak Siswaji (2013-2019)
								<br />
								8. Bapak Siswaji (2019-2025)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
