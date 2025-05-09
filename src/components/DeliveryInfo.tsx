
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Truck, Clock, CreditCard } from 'lucide-react';

const DeliveryInfo = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Доставка по Терновке</h2>
        <p className="text-gray-600 text-center mb-8">Быстрая доставка товаров в день заказа</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Только по Терновке</h3>
              <p className="text-gray-600 text-sm">
                Работаем только в пределах Терновки, что позволяет нам доставлять заказы максимально быстро
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Бесплатная доставка</h3>
              <p className="text-gray-600 text-sm">
                При заказе от 1000 ₽ доставка бесплатная. Стоимость доставки при заказе до 1000 ₽ — всего 150 ₽
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600 text-sm">
                Доставляем заказы в день оформления. Среднее время доставки по Терновке — 2 часа
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Удобная оплата</h3>
              <p className="text-gray-600 text-sm">
                Оплачивайте заказы при получении наличными, картой или переводом на карту
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
