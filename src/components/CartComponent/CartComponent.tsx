import Cart from "@/app/(user)/cart/page";
import { CartProductType } from "@/lib/definitions";
import cartSlice from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

export default function CartComponent({
  name,
  price,
  seller,
  image,
}: CartProductType) {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <div className="font-[sans-serif] bg-white">
      <div className="lg:max-w-7xl max-w-xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-start mt-8">
          <div className="divide-y lg:col-span-2">
            <div className="flex items-start justify-between gap-4 py-8">
              <div className="flex gap-6">
                <div className="h-64 bg-gray-100 p-6 rounded">
                  <img
                    src={image}
                    className="w-full h-full object-contain shrink-0"
                  />
                </div>
                <div>
                  <p className="text-md font-bold text-[#333]">{name}</p>
                  <p className="text-gray-400 text-xs mt-1">{seller}</p>
                  <h4 className="text-xl font-bold text-[#333] mt-4">
                    ${price}
                  </h4>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="flex flex-wrap gap-2 text-xl text-[#333]"
                    >
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3.5 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </span>
                      <span className="mx-4">{count}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3.5 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 fill-red-500 inline cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                  data-original="#000000"
                ></path>
                <path
                  d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
