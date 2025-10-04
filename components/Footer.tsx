import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Village Info */}
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-2xl font-bold mb-4">
							Desa Purworejo
						</h3>
						<p className="text-gray-300 mb-4">
							Desa Purworejo terletak di Kecamatan Ngantang,
							Kabupaten Malang, Jawa Timur. Kami adalah desa yang
							memadukan keindahan alam, kekayaan budaya, dan
							kehangatan masyarakat.
						</p>
						<div className="text-gray-300">
							<p>📍 Kecamatan Ngantang, Kabupaten Malang</p>
							<p>📮 Kode Pos: 65392</p>
							<p>🌐 Jawa Timur, Indonesia</p>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Tautan Cepat
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/profil/visi-misi"
									className="text-gray-300 hover:text-white transition-colors">
									Visi Misi
								</Link>
							</li>
							<li>
								<Link
									href="/profil/sejarah"
									className="text-gray-300 hover:text-white transition-colors">
									Sejarah Desa
								</Link>
							</li>
							<li>
								<Link
									href="/potensi"
									className="text-gray-300 hover:text-white transition-colors">
									Potensi Desa
								</Link>
							</li>
							<li>
								<Link
									href="/pelayanan"
									className="text-gray-300 hover:text-white transition-colors">
									Pelayanan
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Kontak </h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="https://www.instagram.com/pemdes_purworejo_ngantang/"
									className="text-gray-300 hover:text-white transition-colors">
									Instagram
								</Link>
							</li>
							<li>
								<Link
									href="https://wa.me/6281249260276"
									className="text-gray-300 hover:text-white transition-colors">
									Whatsapp
								</Link>
							</li>
							<li>
								<Link
									href="mailto:purworejo810@gmail.com"
									className="text-gray-300 hover:text-white transition-colors">
									Email
								</Link>
							</li>
							
							
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-700 mt-8 pt-8 text-center">
					<p className="text-gray-400">
						© {new Date().getFullYear()} Desa Purworejo. Semua hak
						dilindungi.
					</p>
					<p className="text-gray-400 mt-2">
						Website resmi Pemerintah Desa Purworejo, Kecamatan
						Ngantang, Kabupaten Malang
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
