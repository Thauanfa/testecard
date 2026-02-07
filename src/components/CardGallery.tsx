import { useState } from "react";
import FlipCard from "./FlipCard";
import NavigationArrow from "./NavigationArrow";

import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

const cards = [
  {
    id: 1,
    image: card1,
    title: "Aurora",
    backContent: (
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Aurora</h3>
        <p className="text-muted-foreground">
          Cores vibrantes do pôr do sol, fluindo em ondas suaves de laranja, rosa e dourado.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    image: card2,
    title: "Oceano",
    backContent: (
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Oceano</h3>
        <p className="text-muted-foreground">
          A serenidade das águas profundas, em tons de azul e turquesa que acalmam a alma.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    image: card3,
    title: "Floresta",
    backContent: (
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Floresta</h3>
        <p className="text-muted-foreground">
          O mistério das florestas ancestrais, envolvidas em tons de verde esmeralda.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    image: card4,
    title: "Cosmos",
    backContent: (
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Cosmos</h3>
        <p className="text-muted-foreground">
          A imensidão do universo, com nebulosas douradas e constelações distantes.
        </p>
      </div>
    ),
  },
];

const CardGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blur images */}
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="background-blur"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="fixed inset-0 -z-10 bg-background/60" />

      {/* Main content */}
      <div className="relative z-10 flex items-center gap-8 md:gap-16 px-4">
        <NavigationArrow direction="left" onClick={goToPrevious} />

        <div key={currentIndex}>
          <FlipCard
            frontImage={currentCard.image}
            backContent={currentCard.backContent}
            title={currentCard.title}
          />
        </div>

        <NavigationArrow direction="right" onClick={goToNext} />
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-foreground w-6"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Ir para card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGallery;
