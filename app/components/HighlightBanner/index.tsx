import { Button } from "@/components/ui/button";
import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function HighlightBanner() {
    return (
        <div className="pb-10">
            <div className="container mx-auto w-full h-[20rem] flex justify-center gap-12 items-center bg-gray-200 dark:bg-[#171717] rounded-lg">
                <div>
                    <Image src="/banner/banner.png" width={400} height={400} alt="Banner" />
                </div>
                <div>
                    <p className="font-medium text-3xl">Até<span className="text-5xl font-bold text-blue-700"> 30%</span></p>                    
                    <p className="font-medium text-5xl">de <span className="font-bold">Desconto</span></p>                   
                    <p className="font-medium text-3xl pb-6"> em Camisas</p>
                    <Link href="#">
                        <Button>Garanta a sua agora!</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}