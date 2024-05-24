import Link from "next/link";
import { ProductCard } from "../Card";

import { Wrapper } from "../Wrapper";
import { Separator } from "../ui/Separator";
import { Title } from "../ui/Title";

export const MouthBestSelling = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between items-end">
          <Title postTitle="this mounth" title="best selling products" />
          <button className="bg-primary rounded-sm text-white px-12 py-4 w-fit font-medium text-base capitalize mt-8">
            <Link href="/">View all</Link>
          </button>
        </div>
        <div className="flex flex-row gap-7">
          {Array.from({ length: 4 }, (_, index) => (
            <ProductCard
              key={index}
              image={undefined}
              name={"HAVIT HV-G92 Gamepad"}
              normal_price={120}
              promotionnal_price={160}
              rate_average={5}
              rate_number={88}
              id={1}
            />
          ))}
        </div>
      </div>
      <Separator classname="mt-16" />
    </Wrapper>
  );
};
