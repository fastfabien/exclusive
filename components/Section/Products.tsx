import Link from "next/link";
import { ProductCard } from "../Card";

import { Products } from "@prisma/client";
import { Wrapper } from "../Wrapper";
import { Separator } from "../ui/Separator";
import { Title } from "../ui/Title";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function getProducts() {
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();
  return products;
}

export const Product = async () => {
  const products = await getProducts();

  return (
    <Wrapper>
      <div className="flex flex-col gap-10">
        <Title postTitle="our products" title="explore our products" />
        <div className="flex flex-row gap-5 flex-wrap">
          {products.data.map((product: Products, index: number) => (
            <ProductCard
              key={index}
              image={product.couverture}
              name={product.name}
              normal_price={product.price}
              promotionnal_price={product.price}
              rate_average={5}
              rate_number={88}
              id={product.id}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center">
          <button className="bg-primary rounded-sm text-white px-12 py-4 w-fit font-medium text-base capitalize mt-8">
            <Link href="/">View all products</Link>
          </button>
        </div>
      </div>
      <Separator classname="mt-16" />
    </Wrapper>
  );
};
