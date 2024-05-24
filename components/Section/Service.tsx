import Image from "next/image";
import { Wrapper } from "../Wrapper";

const services = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    image: "/delivery.png",
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    image: "/Services.png",
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
    image: "/guaranty.png",
  },
];

export const Service = () => {
  return (
    <Wrapper classname="py-36">
      <div className="flex flex-row justify-around">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              alt={service.title}
              src={service.image}
              width={80}
              height={80}
            />
            <h2 className="font-semibold text-xl text-black leading-8 mt-6">
              {service.title}
            </h2>
            <p className="font-normal text-base text-black leading-6 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
