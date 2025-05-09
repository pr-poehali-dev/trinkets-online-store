
import React from 'react';
import ProductCard, { ProductProps } from './ProductCard';

const featuredProducts: ProductProps[] = [
  {
    id: 1,
    name: 'Органайзер для кухонных принадлежностей',
    price: 590,
    image: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Для кухни',
    isBestseller: true,
    inStock: true
  },
  {
    id: 2,
    name: 'Набор экологичных мешочков для хранения овощей и фруктов',
    price: 350,
    image: 'https://images.unsplash.com/photo-1611030957428-8ce06e2a7143?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Для кухни',
    isNew: true,
    inStock: true
  },
  {
    id: 3,
    name: 'Держатель для зубных щеток с таймером',
    price: 430,
    image: 'https://images.unsplash.com/photo-1559076294-ef19baa4a58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Для ванной',
    inStock: true
  },
  {
    id: 4,
    name: 'Набор складных вешалок для одежды 10 шт',
    price: 780,
    image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Организация хранения',
    inStock: true
  },
  {
    id: 5,
    name: 'Силиконовая маска для глубокого очищения пор',
    price: 420,
    image: 'https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Красота и здоровье',
    isBestseller: true,
    inStock: true
  },
  {
    id: 6,
    name: 'Беспроводные наушники с зарядным кейсом',
    price: 1490,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Гаджеты',
    isNew: true,
    inStock: false
  },
  {
    id: 7,
    name: 'Компактные весы для ванной комнаты',
    price: 890,
    image: 'https://images.unsplash.com/photo-1595707678349-4b3f482bfbd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Для ванной',
    inStock: true
  },
  {
    id: 8,
    name: 'Декоративная подушка с геометрическим узором',
    price: 670,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Текстиль',
    inStock: true
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Популярные товары</h2>
        <p className="text-gray-600 text-center mb-8">Самые востребованные мелочи с доставкой по Терновке</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
