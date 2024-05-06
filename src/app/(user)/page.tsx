"use client";
import CardComponent from "@/components/CardComponent/CardComponet";
import CardComponet from "@/components/CardComponent/CardComponet";
import HeroSectionComponent from "@/components/CardHero/HeroSectionComponent";
import CategoryComponent from "@/components/CategoryComponent/CategoryComponent";
import PartnerComponent from "@/components/PartnerComponent/PartnerComponent";
import { CartProductType } from "@/lib/definitions";
import { useGetProductsQuery } from "@/redux/service/e-commerce";
 import { useState } from "react";
 import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
//import './pagination.css';
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetProductsQuery({
    page: currentPage,
    pageSize: 10,
  });
  const products = data?.results ?? [];
  const totalPages = 10;
  return (
    <main>
      <section>
        <HeroSectionComponent/>
      </section>
      <div className="w-[90%] mx-auto font-medium text-primaryColor mt-[80px] text-4xl">
      Our Partner
      </div>
      <section className="w-[90%] mx-auto ">
        <PartnerComponent />
      </section>
      <section className="w-[90%] mx-auto ">
        <CategoryComponent />
      </section>
      <div className="w-[90%] mx-auto font-medium text-primaryColor mt-[80px] text-4xl">
        Popular Products
      </div>
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-[40px] ">
        {products.map((pro: CartProductType) => {
          return (
            <CardComponent
              seller={pro.seller}
              id={pro.id}
              key={pro.id}
              name={pro.name}
              image={pro.image}
              price={pro.price}
            />
          );
        })}
      </section>
      <section className="my-10">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
          className="text-green w-6 flex"
        />
      </section>
    </main>
  );
}
