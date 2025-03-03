import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface CarouselCustomProps{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CarouselCustomPrevious({ onClick }: CarouselCustomProps) {
    return (
        <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-200 bg-white dark:bg-black dark:hover:opacity-50"
            onClick={onClick}
        >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Anterior</span>
        </Button>
    )
}