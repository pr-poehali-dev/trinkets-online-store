
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isBestseller = false,
  inStock = true
}) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md group">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover object-center"
          />
          
          {(isNew || isBestseller) && (
            <div className="absolute top-2 left-2">
              {isNew && (
                <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md mr-1">
                  Новинка
                </span>
              )}
              {isBestseller && (
                <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  Хит продаж
                </span>
              )}
            </div>
          )}
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs text-gray-500 mb-1">{category}</span>
          <h3 className="font-medium text-sm mb-2 line-clamp-2 flex-grow">
            {name}
          </h3>
          
          <div className="mt-auto flex items-center justify-between">
            <div className="font-semibold">
              {price.toLocaleString()} ₽
            </div>
            <Button 
              size="sm" 
              className="bg-purple-600 hover:bg-purple-700"
              disabled={!inStock}
            >
              {inStock ? (
                <>
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  <span className="sr-only md:not-sr-only md:inline-block">
                    В корзину
                  </span>
                </>
              ) : (
                <span>Нет в наличии</span>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
