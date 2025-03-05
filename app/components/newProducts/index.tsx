"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import ProductCard from "../productCard"
import { useRef } from "react"
import CarouselCustomPrevious from "../productCarousel/CarouselCustomPrevious"
import CarouselCustomNext from "../productCarousel/CarouselCustomNext"

const products = [
    {
        id: 1,
        name: "Camisa Inter de Milão 2025",
        price: "R$ 240,00",
        discount: "25% OFF",
        colors: "4 cores disponíveis",
        image: "/shirts/inter-de-milao.png",
        link: "#",
    },
    {
        id: 2,
        name: "Camisa Juventus 2025",
        price: "R$ 240,00",
        discount: "25% OFF",
        colors: "4 cores disponíveis",
        image: "/shirts/juventus.png",
        link: "#",
    },
    {
        id: 3,
        name: "Camisa Milan 2025",
        price: "R$ 240,00",
        discount: "25% OFF",
        colors: "4 cores disponíveis",
        image: "/shirts/milan.png",
        link: "#",
    },
    {
        id: 4,
        name: "Camisa Real Madrid 2025",
        price: "R$ 240,00",
        discount: "25% OFF",
        colors: "4 cores disponíveis",
        image: "/shirts/real.png",
        link: "#",
    },
    {
        id: 5,
        name: "Camisa PSG 2025",
        price: "R$ 240,00",
        discount: "25% OFF",
        colors: "4 cores disponíveis",
        image: "/shirts/psg.png",
        link: "#",
    }
]

export default function NewProducts() {

    const carouselRef = useRef<CarouselApi | null>(null)

    return (
        <div className="container mx-auto py-5">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-5xl font-bold tracking-tight uppercase">Novidades</h2>
                <div className="flex items-center gap-2">
                    <a href="#" className="text-sm font-medium hover:underline">
                        Ver Todos
                    </a>
                    <div className="flex gap-1">
                    <CarouselCustomPrevious onClick={() => carouselRef.current?.scrollPrev()} />
                    <CarouselCustomNext onClick={() => carouselRef.current?.scrollNext()} />
                    </div>
                </div>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                setApi={api => (carouselRef.current = api)}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}





