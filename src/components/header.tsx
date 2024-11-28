import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-[#101820] p-4 h-[100px] ">
            <div className="sticky flex justify-between items-center mx-auto p-4">
                <Image src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" alt="Gojek Logo" width={100} height={28}/>
                <nav className="hidden lg:flex gap-10 text-white">
                    <p>Beranda</p>
                    <p>Gabung jadi Mitra</p>
                    <p>GoCorp</p>
                    <p>Karir</p>
                    <p>Perusahaan</p>
                    <p>Produk</p>
                    <p>Blog</p>
                    <p>Bantuan</p>
                    <p>ID</p>
                </nav>
            </div>
        </header>
    )
}