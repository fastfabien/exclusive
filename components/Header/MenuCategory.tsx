import Link from "next/link";

const liens = [
  {
    title: "Woman’s Fashion",
    link: "/",
  },
  {
    title: "Men’s Fashion",
    link: "/contact",
  },
  {
    title: "Electronics",
    link: "/about",
  },
  {
    title: "Home & Lifestyle",
    link: "/signup",
  },
  {
    title: "Medicine",
    link: "/signup",
  },
  {
    title: "Sports & Outdoor",
    link: "/signup",
  },
  {
    title: "Baby’s & Toys",
    link: "/signup",
  },
  {
    title: "Groceries & Pets",
    link: "/signup",
  },
  {
    title: "Health & Beauty",
    link: "/signup",
  },
];

export const MenuCategory = () => {
  return (
    <div
      data-testid="menucategory"
      className="border-r border-border w-[210px] py-10 px-2"
    >
      <div className="flex flex-col gap-4 ">
        {liens.map((lien, index) => (
          <Link
            className="capitalize font-normal text-base leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200"
            key={index}
            href={lien.link}
          >
            {lien.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
