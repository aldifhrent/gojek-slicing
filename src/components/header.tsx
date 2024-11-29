import Image from "next/image";
import { Menu } from "lucide-react";
const navMenu = [
  {
    name: "Beranda",
  },
  {
    name: " Gabung jadi Mitra",
  },
  {
    name: "GoCorp",
  },
  {
    name: "Karir",
  },
  {
    name: "Perusahaan",
  },
  {
    name: "Produk",
  },
  {
    name: "Blog",
  },
  {
    name: "Bantuan",
  },
  {
    name: "ID",
  },
];
export default function Header() {
  return (
    <header className="p-4 min-h-[100px] ">
      <div className="sticky top-0 flex justify-between items-center mx-auto p-4">
        <Image
          src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
          alt="Gojek Logo"
          width={100}
          height={28}
        />
        <nav className="hidden xl:flex gap-10 ">
          {navMenu.map((item) => (
            <p
              className="text-white hover:underline hover:underline-offset-4 text-xl hover:cursor-pointer"
              key={item.name}
            >
              {item.name}
            </p>
          ))}
        </nav>
        <Menu className="block text-white lg:hidden" />
      </div>
    </header>
  );
}
