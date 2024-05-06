import React from "react";

export default function CategoryComponent() {
  return (
    <section className="bg-white">
          <div className="py-4 mx-auto max-w-screen-xl sm:py-4">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
               <div className="mx-4 col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                 <h1 className="font text-3xl font-medium tracking-tight text-gray-900 lg:text-4xl">All Of Model For E-comerce</h1>
                 <p className="mt-4 text-xl text-gray-500">This year, our new svelte signals will shelter you from the harsh
                     elements of a world that doesn't care if you develop or die.</p>
                 <li className="mt-4 text-xl text-gray-500">E-commerce is the buying and selling of goods and services over the internet.</li>
                 <li className="mt-4 text-xl text-gray-500">It is conducted over computers, tablets, smartphones, and other smart devices.</li>
                     <div className="mt-8">
                             <a href="#"
                                className="inline-block w-full text-center rounded-md text-lg font-medium text-gray-100 bg-green-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                  <img src="https://i.pinimg.com/564x/7a/2b/8f/7a2b8f5874e8dcf7fda13eaacf146e47.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Computer</h3>
                </a>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img src="https://i.pinimg.com/564x/35/f3/51/35f35100c8866ce4afbbec4faec0a2f6.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Tablet</h3>
                  </a>
                  <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img src="https://i.pinimg.com/564x/19/6e/6a/196e6ae3edd3d5682b898dd61340ec0c.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Phone</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </section>
  );
}
