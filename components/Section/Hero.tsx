import { PromotionCarousel } from "../Carousel";
import { MenuCategory } from "../Header";
import { Wrapper } from "../Wrapper";

export const Hero = () => {
  return (
    <Wrapper classname="pt-0 flex flex-row justify-between items-center">
      <MenuCategory />
      <PromotionCarousel />
    </Wrapper>
  );
};
