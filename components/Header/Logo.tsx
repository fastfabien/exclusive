import Image from "next/image";
import Link from "next/link";

export const Logo = ({ isFooter = false }: { isFooter?: boolean }) => {
  return (
    <Link href="/" data-testid="logo">
      <Image
        src={isFooter ? "/logo-white.png" : "/logo.png"}
        alt="Exclusive logo"
        width={118}
        height={24}
        data-testid="imageLogo"
      />
    </Link>
  );
};
