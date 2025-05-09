
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Елена К.',
    rating: 5,
    text: 'Очень удобный магазин! Заказала органайзеры для кухни, доставили через 2 часа. Качество отличное, буду заказывать еще.',
    date: '15.04.2025'
  },
  {
    id: 2,
    name: 'Дмитрий М.',
    rating: 5,
    text: 'Купил беспроводные наушники, очень доволен. Цена ниже, чем в больших магазинах, а доставка прямо в день заказа.',
    date: '03.05.2025'
  },
  {
    id: 3,
    name: 'Ольга П.',
    rating: 4,
    text: 'Заказывала несколько мелочей для ванной. Привезли быстро, все хорошо упаковано. Минус звезда только за небольшой выбор.',
    date: '22.04.2025'
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star 
      key={index} 
      className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
    />
  ));
};

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Отзывы наших клиентов</h2>
        <p className="text-gray-600 text-center mb-8">Что говорят жители Терновки о нашем магазине</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 flex-grow">{testimonial.text}</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
