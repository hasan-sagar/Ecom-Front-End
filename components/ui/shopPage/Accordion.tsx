import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
}

export interface Category {
  name: string;
  count: number;
}

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export interface ProductCardProps {
  product: Product;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="border-b border-gray-100">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-700">{title}</span>
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};
