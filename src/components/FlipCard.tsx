import { useState } from "react";

interface FlipCardProps {
  frontImage: string;
  backContent: React.ReactNode;
  title: string;
}

const FlipCard = ({ frontImage, backContent, title }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-72 h-96 md:w-80 md:h-[28rem] cursor-pointer animate-scale-in"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-face glass-card overflow-hidden">
          <img
            src={frontImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">Clique para virar</p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-face flip-card-back glass-card flex items-center justify-center p-8">
          <div className="text-center">
            {backContent}
            <p className="text-sm text-muted-foreground mt-4">Clique para voltar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
