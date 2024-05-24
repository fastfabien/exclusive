import Link from "next/link";

const link = [
  {
    title: "home",
    lien: "/",
  },
  {
    title: "contact",
    lien: "/contact",
  },
  {
    title: "about",
    lien: "/about",
  },
  {
    title: "sign up",
    lien: "/signup",
  },
];

export const Navbar = () => {
  return (
    <nav data-testid="navbar" className="flex flex-row gap-12 ">
      {link.map((lien, index) => (
        <Link
          key={index}
          href={lien.lien}
          data-testid="navlink"
          className="capitalize font-normal text-secondary text-base leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200"
        >
          {lien.title}
        </Link>
      ))}
    </nav>
  );
};
