import butterfly1 from "@/assets/butterfly-1.png";
import butterfly2 from "@/assets/butterfly-2.png";

interface ButterflyProps {
  variant?: 1 | 2;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  size?: number;
}

const Butterfly = ({ variant = 1, className = "", style, delay = 0, size = 48 }: ButterflyProps) => {
  return (
    <img
      src={variant === 1 ? butterfly1 : butterfly2}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none animate-float ${className}`}
      style={{
        width: size,
        height: "auto",
        animationDelay: `${delay}s`,
        ...style,
      }}
    />
  );
};

export default Butterfly;
