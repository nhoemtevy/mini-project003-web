import React from 'react'

export default function HeroSectionComponent() {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
         <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
           <div className="absolute inset-0 bg-black opacity-50"></div>
         </div>
  
         <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
           <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Ecomerce Website</h1>
           <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
           <a href="#" className="inline-block w-full text-center rounded-md text-lg font-medium text-gray-100 bg-green-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Get
                Start</a>
         </div>
       </div>
    )
}
