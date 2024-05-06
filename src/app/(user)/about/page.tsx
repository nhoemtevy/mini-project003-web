import React from 'react'

export default function page () {
    return (
        <>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img className="h-full w-full object-cover rounded-md mb-28" src="https://i.pinimg.com/564x/da/a5/5a/daa55aa9d785a642ddef39171bfbaf79.jpg" alt="Winding mountain road" />
                </div>
                <div
                    className="max-w-lg rounded-md bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-gray-900 lg:text-4xl">Welcome Again With Us</h2>
                        <p className="mt-4">
                        E-commerce has become an important tool for small and large businesses worldwide, not only to sell to customers, but also to engage them.Cross-border e-Commerce is also an essential field for e-Commerce businesses.  It has responded to the trend of globalization.
                        </p>
                        <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center rounded-md text-lg font-medium text-gray-100 bg-green-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div>
                    </div>
                </div>

            </div>
            <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
            <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
            <div className="lg:w-[50%] xs:w-full">
                <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://i.pinimg.com/564x/2c/f2/46/2cf24635aa696969b42871c67f73b1d7.jpg" alt="billboard image" />
            </div>
            <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Why You Choose Us</h2>
                <p className="text-md mt-4">E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is the largest sector of the electronics industry and is in turn driven by the technological advances of the semiconductor industry.</p>
            </div>
            </div>
            </section>
            <div className="w-full max-w-2xl my-4 mx-auto p-2">

                <div className="border border-indigo-500 p-4 md:p-6 rounded-lg text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">We need your help!</h2>

                    <p className="text-lg mb-4 text-gray-700">
                        We're developing a website for <strong>study materials for students</strong>.
                      
                        We would love to hear your answers to some of the questions.
                    </p>

                    <a href="#"
                        className="font-bold inline-block bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300 ease-in-out">
                        Take Survey
                    </a>

                    <p className="text-sm py-2 text-gray-500">
                        You will be rewarded for completing survey
                    </p>
                </div>

            </div>
        </>
    )
}
