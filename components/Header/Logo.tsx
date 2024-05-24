import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" data-testid="logo">
      <Image
        src="/logo.png"
        alt="Exclusive logo"
        width={118}
        height={24}
        data-testid="imageLogo"
      />
    </Link>
  );
};
