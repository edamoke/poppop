import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  categories?: {
    id: string;
    name: string;
    active?: boolean;
  }[];
  onCategorySelect?: (categoryId: string) => void;
}

const CategoryFilters = ({
  categories = [
    { id: "all", name: "All", active: true },
    { id: "sofas", name: "Sofas" },
    { id: "chairs", name: "Chairs" },
    { id: "tables", name: "Tables" },
    { id: "beds", name: "Beds" },
    { id: "storage", name: "Storage" },
    { id: "lighting", name: "Lighting" },
    { id: "decor", name: "Decor" },
  ],
  onCategorySelect = () => {},
}: CategoryFiltersProps) => {
  return (
    <div className="w-full bg-background py-4 border-b">
      <div className="container mx-auto px-4">
        <ScrollArea className="w-full whitespace-nowrap pb-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.active ? "default" : "outline"}
                className={`rounded-full px-4 py-2 text-sm ${category.active ? "bg-orange-500 hover:bg-orange-600 text-white" : "text-gray-700 hover:text-gray-900"}`}
                onClick={() => onCategorySelect(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CategoryFilters;
