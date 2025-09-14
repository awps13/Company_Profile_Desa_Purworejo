"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const navRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = (dropdown: string) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navRef.current &&
				!navRef.current.contains(event.target as Node)
			) {
				setActiveDropdown(null);
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const dropdownVariants = {
		hidden: { opacity: 0, y: -10, scale: 0.95 },
		visible: { opacity: 1, y: 0, scale: 1 },
		exit: { opacity: 0, y: -10, scale: 0.95 },
	};

	return (
		<nav
			className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-green-100"
			ref={navRef}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<motion.div
						className="flex items-center"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}>
						<Link
							href="/"
							className="flex-shrink-0 flex items-center">
							<span className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
								Desa Purworejo
							</span>
						</Link>
					</motion.div>

					{/* Desktop Menu */}
					<motion.div
						className="hidden md:flex items-center space-x-8"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}>
						<Link
							href="/"
							className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 rounded-lg">
							Beranda
						</Link>

						{/* Profile Dropdown */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown("profil")}
								className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center hover:bg-green-50 rounded-lg">
								Profil
								<motion.svg
									className="ml-1 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									animate={{
										rotate:
											activeDropdown === "profil"
												? 180
												: 0,
									}}
									transition={{ duration: 0.2 }}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</motion.svg>
							</button>
							<AnimatePresence>
								{activeDropdown === "profil" && (
									<motion.div
										className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-10 border border-green-100"
										variants={dropdownVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										transition={{ duration: 0.2 }}>
										<Link
											href="/profil/visi-misi"
											className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
											onClick={() =>
												setActiveDropdown(null)
											}>
											Visi Misi
										</Link>
										<Link
											href="/profil/sejarah"
											className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
											onClick={() =>
												setActiveDropdown(null)
											}>
											Sejarah
										</Link>
										<Link
											href="/profil/wilayah"
											className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
											onClick={() =>
												setActiveDropdown(null)
											}>
											Wilayah
										</Link>
										<Link
											href="/profil/perangkat-desa"
											className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
											onClick={() =>
												setActiveDropdown(null)
											}>
											Perangkat Desa
										</Link>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						<Link
							href="/potensi"
							className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 rounded-lg">
							Potensi
						</Link>

						<Link
							href="/pelayanan"
							className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 rounded-lg">
							Pelayanan
						</Link>

						<Link
							href="/transportasi"
							className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 rounded-lg">
							Transportasi
						</Link>

						{/* Organizations Dropdown */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown("lembaga")}
								className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center hover:bg-green-50 rounded-lg">
								Lembaga
								<motion.svg
									className="ml-1 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									animate={{
										rotate:
											activeDropdown === "lembaga"
												? 180
												: 0,
									}}
									transition={{ duration: 0.2 }}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</motion.svg>
							</button>
							<AnimatePresence>
								{activeDropdown === "lembaga" && (
									<motion.div
										className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-10 border border-green-100"
										variants={dropdownVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										transition={{ duration: 0.2 }}>
										<Link
											href="/lembaga/karang-taruna"
											className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
											onClick={() =>
												setActiveDropdown(null)
											}>
											Karang Taruna
										</Link>
										<Link
											href="/lembaga/komunitas-bawang-merah"
											className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
											onClick={() =>
												setActiveDropdown(null)
											}>
											Komunitas Bawang Merah
										</Link>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						<Link
							href="/syarat-adminduk"
							className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 rounded-lg">
							Syarat Adminduk
						</Link>
					</motion.div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 hover:text-green-600 focus:outline-none">
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								{isOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="md:hidden"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}>
							<div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-green-100">
								<Link
									href="/"
									className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
									onClick={() => setIsOpen(false)}>
									Beranda
								</Link>

								<div className="space-y-1">
									<span className="block px-3 py-2 text-gray-900 font-medium">
										Profil
									</span>
									<Link
										href="/profil/visi-misi"
										className="block px-6 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
										onClick={() => setIsOpen(false)}>
										Visi Misi
									</Link>
									<Link
										href="/profil/sejarah"
										className="block px-6 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
										onClick={() => setIsOpen(false)}>
										Sejarah
									</Link>
									<Link
										href="/profil/wilayah"
										className="block px-6 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
										onClick={() => setIsOpen(false)}>
										Wilayah
									</Link>
									<Link
										href="/profil/perangkat-desa"
										className="block px-6 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
										onClick={() => setIsOpen(false)}>
										Perangkat Desa
									</Link>
								</div>

								<Link
									href="/potensi"
									className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
									onClick={() => setIsOpen(false)}>
									Potensi
								</Link>
								<Link
									href="/pelayanan"
									className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
									onClick={() => setIsOpen(false)}>
									Pelayanan
								</Link>
								<Link
									href="/transportasi"
									className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
									onClick={() => setIsOpen(false)}>
									Transportasi
								</Link>

								<div className="space-y-1">
									<span className="block px-3 py-2 text-gray-900 font-medium">
										Lembaga
									</span>
									<Link
										href="/lembaga/karang-taruna"
										className="block px-6 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
										onClick={() => setIsOpen(false)}>
										Karang Taruna
									</Link>
									<Link
										href="/lembaga/komunitas-bawang-merah"
										className="block px-6 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
										onClick={() => setIsOpen(false)}>
										Komunitas Bawang Merah
									</Link>
								</div>

								<Link
									href="/syarat-adminduk"
									className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
									onClick={() => setIsOpen(false)}>
									Syarat Adminduk
								</Link>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
