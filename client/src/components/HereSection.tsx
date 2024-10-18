// import React, { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import { AspectRatio } from "./ui/aspect-ratio"
import { Globe, MapPin } from "lucide-react"
import { Badge } from "./ui/badge"
import { Link } from "react-router-dom"


const HereSection = () => {
    return (
        <div >
            {/* Food slider */}
            <div className="md:ml-60 md:mr-60 ml-20 mr-20">
                <div className="font-extrabold text-2xl mt-4 mb-4" >Popular Food List</div>
                <Carousel className="w-full ">
                    <CarouselContent className="-ml-1 md:gap-9 gap-2">
                        {Array.from({ length: 15 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/5 lg:basis-1/6 basis-1/2">
                                <div className="p-1">
                                    <Card className="border-none ">
                                        <CardContent className="-p-6 dark:bg-darknav">
                                            <img src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="jojo" className="rounded-full  " />
                                            <p className="font-bold text-center text-gray-600 dark:text-gray-400 p-2">Burgar</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            {/* suggest manu  */}
            <div className="grid md:grid-cols-4 gap-4 mt-4 mx-40">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_card: number, _idx: number) => (
                    <Link to={`/restaurant/${123}`}>
                        <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-2">
                            <div className="relative ">
                                <AspectRatio ratio={16 / 6}>
                                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/52cd837b-1d01-4499-a648-bb4f071f523a_38925.jpg" alt="" className="rounded-lg md:h-40 md:w-full" />
                                </AspectRatio>

                                <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg px-3 py-1">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Featured</span>
                                </div>
                            </div>

                            <CardContent className="p-4 mt-12">
                                <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                                    <MapPin size={16} />
                                    <p className="text-sm">City:{" "}<span className="font-medium">{/*restaurant.city*/}Delhi</span>
                                    </p>
                                </div>
                                <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                                    <Globe size={16} />
                                    <p className="text-sm">
                                        Country:{" "}
                                        <span className="font-medium">
                                            {/*restaurant.city*/}India
                                        </span>
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    {["adgja", "ksjkdfbvskj"].map(
                                        (cuisine: string, idx: number) => (
                                            <Badge
                                                key={idx}
                                                className="font-medium px-2 py-1 rounded-full shadow-sm"
                                            >
                                                {cuisine}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}

            </div>

            {/* suggest place restaurant */}
            <div className="md:my-5 md:mx-40">
                <div className="py-4">
                    <h1 className="font-bold text-2xl">Bast restaurent across you</h1>
                </div>
                {[1, 2, 3].map(() => (
                    <div className="flex justify-between item-center w-full gap-6 py-4">
                        {[1, 2, 3, 4].map(() => (
                            <Link to={'/'}>
                                <button className="px-6 border border-gray-200 rounded-lg py-2 font-bold text-gray-700 h-12">
                                    Best restaurant in Agra.
                                </button>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            {/* suggest place restaurant */}
            <div className="md:my-5 md:mx-40">
                <div className="py-4">
                    <h1 className="font-bold text-2xl">Best Cuisines Near you</h1>
                </div>
                {[1, 2, 3].map(() => (
                    <div className="flex justify-between item-center w-full gap-6 py-4">
                        {[1, 2, 3, 4].map(() => (
                            <Link to={'/'}>
                                <button className="px-6 border border-gray-200 rounded-lg py-2 font-bold text-gray-700 h-12">
                                Chinese Restaurant Near 
                                </button>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

        </div>

    )
}
export default HereSection
