import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

const NavigationArrow = ({ direction, onClick, disabled }: NavigationArrowProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`nav-arrow ${disabled ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-6 h-6 text-foreground" />
      ) : (
        <ChevronRight className="w-6 h-6 text-foreground" />
      )}
    </button>
  );
};

export default NavigationArrow;
