import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductShowcaseProps {
  products?: Product[];
  title?: string;
  selectedCategory?: string;
}

const ProductShowcase = ({
  products = [
    {
      id: "1",
      name: "Modern Sofa",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      category: "sofas",
    },
    {
      id: "2",
      name: "Minimalist Chair",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      category: "chairs",
    },
    {
      id: "3",
      name: "Wooden Coffee Table",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      category: "tables",
    },
    {
      id: "4",
      name: "Accent Lamp",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      category: "lighting",
    },
    {
      id: "5",
      name: "Scandinavian Shelf",
      price: 279,
      image:
        "https://images.unsplash.com/photo-1532372320572-cda25653a694?w=800&q=80",
      category: "storage",
    },
    {
      id: "6",
      name: "Leather Armchair",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      category: "chairs",
    },
  ],
  title = "Featured Products",
  selectedCategory,
}: ProductShowcaseProps) => {
  // Filter products by category if a category is selected
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <Button
            variant="ghost"
            className="text-gray-600 flex items-center gap-1"
          >
            View all <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="w-full">
          <div
            className="flex space-x-6 pb-4"
            style={{ minWidth: "max-content" }}
          >
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="min-w-[280px] max-w-[280px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-[280px] w-full bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-700">
                    ${product.price.toLocaleString()}
                  </p>
                  <Button
                    className="w-full mt-4 bg-orange-100 text-orange-600 hover:bg-orange-200 border-none"
                    variant="outline"
                  >
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ProductShowcase;
