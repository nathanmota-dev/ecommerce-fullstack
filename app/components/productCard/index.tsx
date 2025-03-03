import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    id: number;
    name: string,
    price: string,
    discount: string,
    colors: string,
    image: string,
    link: string,
}


export default function ProductCard({ product }: {product: ProductCardProps}) {
    return (
        <Link href={product.link}>
            <Card className="h-full border-none shadow-none bg-gray-200 dark:bg-[#171717]">
                <CardContent className="p-0 relative">
                    <div className="absolute top-2 left-2 z-10 bg-black text-white text-xs font-bold px-2 py-1">
                        {product.discount}
                    </div>
                    <div className="relative aspect-square">
                        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4 gap-1">
                    <div className="bg-white dark:bg-black w-[100%] p-2 pl-4 rounded-lg">
                        <h3 className="font-bold text-sm uppercase">{product.name}</h3>
                        <div className="flex items-center gap-3">
                            <p className="font-bold">{product.price}</p>
                            <p>•</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{product.colors}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}