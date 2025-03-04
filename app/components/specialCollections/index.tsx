"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function SpecialCollections() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="py-5 container mx-auto pb-10">
            <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans pb-4">
                Coleções
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const data = [
    {
        category: "Camisa NewCastle",
        title: "Camisa de todos os times da Premier League.",
        src: "/special-collection/isak.avif",
    },
    {
        category: "Camisa Real Madrid 2025",
        title: "O manto merengue para os verdadeiros madridistas.",
        src: "/special-collection/vini.jpeg",
    },
    {
        category: "Camisa de todos os times nacionais",
        title: "A camisa do seu primeiro amor você encontra aqui.",
        src: "/special-collection/ney.jpeg",
    },
    {
        category: "Camisa Barcelona 2025",
        title: "A nova camisa do Barça já está disponível.",
        src: "/special-collection/raphinha.jpg",
    },
    {
        category: "Camisa Bayern de Munique",
        title: "Vista as cores do gigante da Alemanha.",
        src: "/special-collection/musiala.avif",
    },
    {
        category: "Camisa Brasil 2024",
        title: "O manto da seleção brasileira disponível agora.",
        src: "/special-collection/rodrygo.webp",
    },
    {
        category: "Camisa Manchester City",
        title: "A camisa dos campeões da Premier League.",
        src: "/special-collection/de-bruyne.webp",
    },    
    {
        category: "Camisa Barcelona",
        title: "O futuro do Barça veste essa camisa.",
        src: "/special-collection/yamal-barcelona.jpg",
    },
];

