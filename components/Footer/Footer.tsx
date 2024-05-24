import { Copyright } from "lucide-react";
import Link from "next/link";
import { Logo } from "../Header";
import { Subscribe } from "../Subscribe";
import { Wrapper } from "../Wrapper";
import { Separator } from "../ui/Separator";

export const Footer = () => {
  return (
    <>
      <Wrapper classname="bg-secondary pt-0 pb-0">
        <div className="flex flex-row  pt-20 pb-15 gap-22 text-white">
          <div className="flex flex-col gap-6 max-w-54">
            <Logo isFooter />
            <h2 className="font-medium text-xl leading-8 capitalize">
              subscribe
            </h2>
            <p className="font-normal text-base leading-6">
              Get 10% off your first order
            </p>
            <Subscribe />
          </div>
          <div className="flex flex-col max-w-44">
            <h2 className="font-medium text-xl leading-8 capitalize mb-6">
              support
            </h2>
            <address className="font-normal leading-6 text-base not-italic mb-4">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </address>
            <Link
              href="mailto:exclusive@gmail.com"
              className="font-normal leading-6 text-base mb-4"
            >
              exclusive@gmail.com
            </Link>
            <Link
              href="tel:+88015-88888-9999"
              className="font-normal leading-6 text-base"
            >
              +88015-88888-9999
            </Link>
          </div>
          <div className="flex flex-col ">
            <h2 className="font-medium text-xl leading-8 capitalize mb-6">
              Account
            </h2>
            <Link href="/me" className="font-normal leading-6 text-base mb-4">
              My account
            </Link>
            <Link
              href="/login"
              className="font-normal leading-6 text-base mb-4"
            >
              Login / Register
            </Link>
            <Link href="/cart" className="font-normal leading-6 text-base mb-4">
              Cart
            </Link>
            <Link
              href="/whishlist"
              className="font-normal leading-6 text-base mb-4"
            >
              Wishlist
            </Link>
            <Link href="/shop" className="font-normal leading-6 text-base mb-4">
              Shop
            </Link>
          </div>
          <div className="flex flex-col ">
            <h2 className="font-medium text-xl leading-8 capitalize mb-6">
              Quick Link
            </h2>
            <Link
              href="/privacy"
              className="font-normal leading-6 text-base mb-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="font-normal leading-6 text-base mb-4"
            >
              Terms Of Use
            </Link>
            <Link href="/faq" className="font-normal leading-6 text-base mb-4">
              FAQ
            </Link>
            <Link
              href="/terms of use"
              className="font-normal leading-6 text-base mb-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </Wrapper>
      <Separator classname="" />
      <div className="bg-secondary text-white font-normal text-base leading-6 pt-4 pb-6 flex flex-row justify-center items-center gap-2">
        <Copyright className="w-5 h-5 opacity-20" />
        <span className="opacity-20">
          Copyright Rimel 2022. All right reserved
        </span>
      </div>
    </>
  );
};
