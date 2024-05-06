"use client";
import CartComponent from "@/components/CartComponent/CartComponent";
import { CartProductType } from "@/lib/definitions";
import {
  selectProducts,
  selectTotalPrice,
} from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
export default function Cart() {
  const products = useAppSelector(selectProducts);
  const totalprice = useAppSelector(selectTotalPrice);
  return (
    <main>
      {products.length == 0 && (
        <h1 className="h-screen items-center flex justify-center text-4xl">
          Cart is Emtpy
        </h1>
      )}
      {products.length > 0 && (
        <div className="lg:max-w-7xl max-w-xl mx-auto mt-10">
          <h2 className=" text-3xl font-extrabold text-primaryColor">
            Shopping Cart
          </h2>
        </div>
      )}
      {products.map((pro: CartProductType) => {
        return (
          <CartComponent
            seller={pro.seller}
            id={pro.id}
            key={pro.id}
            name={pro.name}
            image={pro.image}
            price={pro.price}
          />
        );
      })}
      {products.length > 0 && (
        <div className="bg-gray-100 p-8 w-[90%] mx-auto">
          <h3 className="text-2xl font-bold text-[#333]">Order summary</h3>
          <ul className="text-[#333] mt-6 divide-y">
            <li className="flex flex-wrap gap-4 text-md py-3">
              Subtotal <span className="ml-auto font-bold">${totalprice}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-3">
              Shipping <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-3">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-3 font-bold">
              Total <span className="ml-auto">${totalprice + 8}</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 text-md px-6 py-2.5 w-full bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Check out
          </button>
        </div>
      )}
    </main>
  );
}
