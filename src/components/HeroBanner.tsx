
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Тысяча мелочей <br className="hidden md:block" />
              <span className="text-purple-600">для вашего дома</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-md">
              Полезные товары для дома, кухни, ванной и многого другого с доставкой по Терновке
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link to="/catalog">Смотреть каталог</Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Link to="/delivery">Доставка</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full bg-purple-200 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Коллекция мелочей для дома"
                className="relative rounded-lg shadow-lg w-full h-auto object-cover max-h-80"
              />
              <div className="absolute top-0 left-0 bg-purple-600 text-white px-4 py-2 rounded-tl-lg rounded-br-lg">
                <span className="font-semibold">Только в Терновке</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
