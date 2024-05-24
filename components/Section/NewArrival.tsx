import Link from "next/link";

import { Title } from "../ui/Title";
import { Wrapper } from "../Wrapper";

export const NewArrival = () => {
  const products = [
    {
      name: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: "/ps5.png", // Assurez-vous que l'image est dans le dossier public
    },
    {
      name: "Women’s Collections",
      description: "Featured woman collections that give you another vibe.",
      image: "/womens-collection.png",
    },
    {
      name: "Speakers",
      description: "Amazon wireless speakers",
      image: "/speakers.png",
    },
    {
      name: "Gucci Perfume",
      description: "Gucci Intense Oud",
      image: "/gucci-perfume.png",
    },
  ];

  return (
    <Wrapper>
      <div className="flex flex-col gap-10">
        <Title postTitle="featured" title="new arrival" />
        <div className="flex flex-row gap-8">
          <div
            className="w-1/2 bg-black flex flex-col justify-end items-start p-8 h-[600px] rounded-sm bg-no-repeat bg-bottom bg-contain"
            style={{ backgroundImage: "url('/ps5.png')" }}
          >
            <div className="flex flex-col w-[50%]">
              <h4 className="font-semibold text-2xl leading-8 text-white">
                PlayStation 5
              </h4>
              <p className="text-white text-sm leading-5 mt-4 mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link
                href="/"
                className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white"
              >
                shop now
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-between w-1/2 h-full">
            <div className="bg-[#0D0D0D] h-[286px] px-6 flex flex-row  w-full rounded-sm">
              <div className="flex flex-col justify-end w-[55%] py-6">
                <h4 className="font-semibold text-2xl leading-8 text-white">
                  Women’s Collections
                </h4>
                <p className="text-white text-sm leading-5 mt-4 mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <Link
                  href="/"
                  className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white"
                >
                  shop now
                </Link>
              </div>
              <div
                className="bg-contain bg-bottom w-[45%] h-full bg-no-repeat"
                style={{ backgroundImage: "url('/womens-collection.png')" }}
              />
            </div>
            <div className="flex flex-row gap-8 h-[286px] items-end justify-end w-full">
              <div
                className="w-1/2 bg-contain h-full bg-no-repeat px-6 flex flex-col justify-end py-6 rounded-sm"
                style={{ backgroundImage: "url('/speakers.png')" }}
              >
                <div className="flex flex-col justify-end w-full py-6">
                  <h4 className="font-semibold text-2xl leading-8 text-white">
                    Speakers
                  </h4>
                  <p className="text-white text-sm leading-5 mt-2 mb-2">
                    Amazon wireless speakers
                  </p>
                  <Link
                    href="/"
                    className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white"
                  >
                    shop now
                  </Link>
                </div>
              </div>
              <div
                className="w-1/2 bg-contain h-full bg-no-repeat px-6 flex flex-col justify-end py-6 rounded-sm"
                style={{ backgroundImage: "url('/gucci-perfume.png')" }}
              >
                <div className="flex flex-col justify-end w-full py-6">
                  <h4 className="font-semibold text-2xl leading-8 text-white">
                    Perfume
                  </h4>
                  <p className="text-white text-sm leading-5 mt-2 mb-2">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <Link
                    href="/"
                    className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white"
                  >
                    shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
