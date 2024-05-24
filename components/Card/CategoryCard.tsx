import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  logo: any;
  lien: string;
}

export const CategoryCard = ({ lien, logo, name }: CategoryCardProps) => {
  return (
    <Link
      href={`category/${lien}`}
      className="flex flex-col gap-8 w-[170px] h-[145px] justify-center items-center py-7 hover:bg-primary border-border border text-black hover:text-white transition-all duration-300 ease-out"
    >
      <Image
        src={logo}
        alt="mandona"
        className="object-cover"
        width={56}
        height={56}
      />
      <span className="text-base font-normal">{name}</span>
    </Link>
  );
};
