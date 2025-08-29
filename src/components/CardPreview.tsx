"use client";

import { useState, Fragment } from "react";

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
    // Default to the first card's image
    const [activeImage, setActiveImage] = useState<string>(cards[0]?.image || "");
    const [activeCard, setActiveCard] = useState<number>(cards[0]?.id || -1);

    return (
        <div className="min-h-screen flex flex-col md:flex-row gap-6 p-6 bg-[#F8F8F8] dark:bg-black">
            {/* Left side - list of cards */}
            <div className="md:w-2/6 flex flex-col h-full">
                {cards.map((card, index) => (
                    <Fragment key={card.id}>
                        <div
                            className={`p-4 rounded-xl cursor-pointer transition 
                            ${activeCard === card.id
                                    ? "bg-white dark:bg-[#2A2A2A]"
                                    : "hover:bg-white dark:hover:bg-[#2A2A2A]"
                                }`}
                            onMouseEnter={() => {
                                setActiveImage(card.image);
                                setActiveCard(card.id);
                            }}
                            onClick={() => {
                                setActiveImage(card.image);
                                setActiveCard(card.id);
                            }}
                        >
                            <h2 className="text-xl font-semibold text-[#110C22] dark:text-white">
                                {card.title}
                            </h2>
                            <p className="text-[#4F4B5C] dark:text-[#C2C2C2]">
                                {card.description}
                            </p>
                        </div>

                        {/* Line between cards (not after the last one) */}
                        {index < cards.length - 1 && (
                            <hr className="border-t border-[#ECECED] dark:border-[#333333] my-2" />
                        )}
                    </Fragment>
                ))}
            </div>

            {/* Right side - image preview */}
            <div className="md:w-4/6 flex items-center justify-center h-full rounded-xl pt-4 bg-white dark:bg-[#0C0C0C]">
                {activeImage ? (
                    <img
                        src={activeImage}
                        alt="Preview"
                        className="w-full h-auto max-h-[500px] object-contain rounded-lg p-4"
                    />
                ) : (
                    <p className="text-gray-400">Hover or click a card to see image</p>
                )}
            </div>
        </div>
    );
}
