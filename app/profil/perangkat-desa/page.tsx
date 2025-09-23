import { Metadata } from "next";
import Image from "next/image";
import img from "@/public/struktur_perangkat_desa.jpg"

export const metadata: Metadata = {
	title: "Perangkat Desa - Desa Purworejo",
	description: "Struktur organisasi dan perangkat desa Purworejo",
};

export default function PerangkatDesaPage() {
	return (
		<div className="min-h-dvh bg-gray-50 py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow-lg p-8 items-center">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
						Perangkat Desa Purworejo
					</h1>

					{/*  */}
					<div className="flex justify-center items-center">
						<Image src="/struktur_perangkat_desa.jpg" alt="strukturPerangkatDesa" width={1000} height={800} className="item-center text-center rounded-xl"/>
					</div>

					{/* Contact Information */}
					<div className="bg-green-50 p-6 rounded-lg mt-5">
						<h3 className="text-xl font-semibold text-green-600 mb-4 text-center">
							Kontak Kantor Desa
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
							<div>
								<p className="text-gray-600 text-sm">Alamat</p>
								<p className="font-medium text-black">
									Jl. Raya Pakan No 1 Desa Purworejo
								</p>
								<p className="font-medium text-black">
									Kec. Ngantang, Kab. Malang
								</p>
							</div>
							<div>
								<p className="text-gray-600 text-sm">Telepon</p>
								<p className="font-medium text-black"><a href="https://wa.me/6281249260276">+62 8124 9260 276</a></p>
							</div>
							<div>
								<p className="text-gray-600 text-sm">Email</p>
								<p className="font-medium text-black">
									purworejo810@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
