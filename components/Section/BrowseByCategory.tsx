import { CategoryCard } from "../Card";
import { Wrapper } from "../Wrapper";

import { Separator } from "../ui/Separator";
import { Title } from "../ui/Title";

export const BrowseByCategory = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-10">
        <Title postTitle="categories" title="browse by category" />
        <div className="flex flex-row gap-7">
          {Array.from({ length: 6 }, (_, index) => (
            <CategoryCard
              key={index}
              lien="phone"
              name="phone"
              logo={"/CellPhone.png"}
            />
          ))}
        </div>
      </div>
      <Separator classname="mt-16" />
    </Wrapper>
  );
};
