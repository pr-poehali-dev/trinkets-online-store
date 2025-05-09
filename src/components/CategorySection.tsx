
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Для кухни',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e9699a2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: '/catalog/kitchen',
  },
  {
    id: 2,
    name: 'Для ванной',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: '/catalog/bathroom',
  },
  {
    id: 3,
    name: 'Организация хранения',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: '/catalog/storage',
  },
  {
    id: 4,
    name: 'Красота и здоровье',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: '/catalog/beauty',
  },
  {
    id: 5,
    name: 'Гаджеты',
    image: 'https://images.unsplash.com/photo-1573739122661-d751afb9aa25?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: '/catalog/gadgets',
  },
  {
    id: 6,
    name: 'Текстиль',
    image: 'https://images.unsplash.com/photo-1587701711862-d52c218edf59?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: '/catalog/textiles',
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Категории товаров</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link to={category.url} key={category.id}>
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-sm">{category.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
