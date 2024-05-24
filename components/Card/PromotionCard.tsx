import { Countdown } from "../Countdown";
import { Wrapper } from "../Wrapper";

export const PromotionCard = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10);
  return (
    <Wrapper>
      <div className="w-full  bg-secondary px-14 gap-3 flex flex-row overflow-hidden">
        <div className="flex flex-col py-16 justify-between w-1/2 gap-3">
          <p className="text-green font-semibold text-base leading-5 capitalize mb-8">
            categories
          </p>
          <h2 className="capitalize text-white font-semibold leading-snug text-5xl mb-8">
            Enhance Your Music Experience
          </h2>
          <Countdown targetDate={targetDate} />
          <button className="bg-green px-12 py-4 rounded-sm text-white w-fit capitalize text-base font-medium leading-6 hover:bg-green hover:bg-opacity-50 mt-10">
            buy now!
          </button>
        </div>
        <div className="w-1/2 bg-promotion scale-125" />
      </div>
    </Wrapper>
  );
};
