"use client";
import { EyeIcon, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface ProductCardProps {
  image: any;
  name: string;
  normal_price: number;
  promotionnal_price: number;
  rate_average: number;
  rate_number: number;
  id: number;
}

export const ProductCard = ({
  image,
  name,
  normal_price,
  promotionnal_price,
  rate_average,
  rate_number,
  id,
}: ProductCardProps) => {
  return image ? (
    <div className="flex flex-col w-64 group overflow-hidden">
      <div className="flex flex-col justify-center items-center bg-input h-[250px] w-full px-10 py-8 relative z-1">
        <div className="flex flex-col gap-[13px] absolute top-4 right-4">
          <span className="bg-white rounded-full p-[8px] w-fit cursor-pointer">
            <Heart className="text-black" />
          </span>
          <Link
            href={`/shop/${id}`}
            className="bg-white rounded-full p-[8px] w-fit cursor-pointer"
          >
            <EyeIcon className="text-black" />
          </Link>
        </div>
        <Badge classname="absolute top-4 left-4 font-light">-40%</Badge>

        <Image
          alt={name}
          src={`data:image/*;base64,${image.data.toString("base64")}`}
          width={126}
          height={126}
          className="w-full h-full object-contain"
        />
        <button className="bg-secondary w-full mb-0 absolute bottom-0 rounded-sm rounded-t-none invisible group-hover:visible text-white text-base font-medium leading-6 py-2">
          Add to cart
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h3 className="text-black leading-[24px] text-base font-medium">
          {name}
        </h3>
        <p className="text-base leading-[24px] text-primary flex flex-row gap-3">
          <span>{`$${promotionnal_price}`}</span>{" "}
          <span className="text-black opacity-60 line-through ">{`$${normal_price}`}</span>
        </p>
        <p className="flex flex-row items-center text-sm">
          <span className="flex flex-row">
            {Array.from({ length: rate_average }, (_, index) => (
              <Star key={index} className="text-accent fill-accent w-5 h-5" />
            ))}
          </span>
          <span className="opacity-60">({rate_number})</span>
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-64 group overflow-hidden">
      <div className="flex flex-col justify-center items-center bg-input h-[250px] w-full px-10 py-8 relative z-1">
        <div className="flex flex-col gap-[13px] absolute top-4 right-4">
          <span className="bg-white rounded-full p-[8px] w-fit cursor-pointer">
            <Heart className="text-black" />
          </span>
          <Link
            href={`/shop/${id}`}
            className="bg-white rounded-full p-[8px] w-fit cursor-pointer"
          >
            <EyeIcon className="text-black" />
          </Link>
        </div>
        <Badge classname="absolute top-4 left-4 font-light">-40%</Badge>

        <Image
          alt={name}
          src="/manette.png"
          width={126}
          height={126}
          className="w-full h-full object-contain"
        />
        <button className="bg-secondary w-full mb-0 absolute bottom-0 rounded-sm rounded-t-none invisible group-hover:visible text-white text-base font-medium leading-6 py-2">
          Add to cart
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h3 className="text-black leading-[24px] text-base font-medium">
          {name}
        </h3>
        <p className="text-base leading-[24px] text-primary flex flex-row gap-3">
          <span>{`$${promotionnal_price}`}</span>{" "}
          <span className="text-black opacity-60 line-through ">{`$${normal_price}`}</span>
        </p>
        <p className="flex flex-row items-center text-sm">
          <span className="flex flex-row">
            {Array.from({ length: rate_average }, (_, index) => (
              <Star key={index} className="text-accent fill-accent w-5 h-5" />
            ))}
          </span>
          <span className="opacity-60">({rate_number})</span>
        </p>
      </div>
    </div>
  );
};
