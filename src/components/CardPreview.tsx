"use client";

import { useState } from "react";

type Card = {
    id: number;
    title: string;
    description: string;
    image: string;
};

type CardPreviewProps = {
    cards: Card[];
};

export default function CardPreview({ cards }: CardPreviewProps) {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    return (
        <div className="h-fit flex flex-col md:flex-row gap-6 p-6">
            {/* Left side - list of cards */}
            <div className="md:w-1/2 flex flex-col gap-4 h-full">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="p-4 rounded-xl cursor-pointer transition 
                     bg-white dark:bg-[#1C1C1E] 
                     shadow-md hover:shadow-xl 
                     hover:bg-gray-50 dark:hover:bg-[#2A2A2C]"
                        onMouseEnter={() => setActiveImage(card.image)}
                        onClick={() => setActiveImage(card.image)}
                    >
                        <h2 className="text-xl font-semibold text-[#110C22] dark:text-white">
                            {card.title}
                        </h2>
                        <p className="text-[#4F4B5C] dark:text-[#C2C2C2]">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right side - image preview */}
            <div className="md:w-1/2 flex items-center justify-center h-full bg-[#F8F8F8] dark:bg-black rounded-xl pt-4">
                {activeImage ? (
                    <img
                        src={activeImage}
                        alt="Preview"
                        className="w-full h-full object-contain rounded-lg"
                    />
                ) : (
                    <p className="text-gray-400">Hover or click a card to see image</p>
                )}
            </div>
        </div>
    );
}
