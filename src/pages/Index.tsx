
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const Index = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const categories = [
    { name: "Кухня", icon: "UtensilsCrossed" },
    { name: "Ванная", icon: "Bath" },
    { name: "Декор", icon: "Sparkles" },
    { name: "Гаджеты", icon: "Smartphone" },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Силиконовая лопатка",
      price: 299,
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=200",
      category: "Кухня",
    },
    {
      id: 2,
      name: "Держатель для зубных щеток",
      price: 199,
      image: "https://images.unsplash.com/photo-1559304822-9eb2813c9844?q=80&w=200",
      category: "Ванная",
    },
    {
      id: 3,
      name: "Мини-ваза для цветов",
      price: 349,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=200",
      category: "Декор",
    },
    {
      id: 4,
      name: "Держатель для телефона",
      price: 249,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=200",
      category: "Гаджеты",
    },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">50 мелочей</h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Icon name="ShoppingCart" size={24} className="text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <Icon name="User" size={24} className="text-gray-600" />
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мелочи, которые делают жизнь лучше
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте для себя нашу коллекцию полезных мелочей для дома с доставкой до вашей двери
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Смотреть каталог
          </Button>
        </div>
      </div>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="group">
                <Card className="transition-all duration-300 hover:shadow-md cursor-pointer hover-scale border-none bg-gray-50 group-hover:bg-white">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 transition-colors group-hover:bg-purple-200">
                      <Icon 
                        name={category.icon} 
                        size={28} 
                        className="text-purple-600" 
                      />
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Популярные товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden transition-all duration-300 hover:shadow-md hover-scale">
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{product.name}</h3>
                    <span className="text-purple-600 font-bold">{product.price} ₽</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">{product.category}</span>
                    <Button 
                      size="sm" 
                      onClick={() => addToCart(product)}
                      className="bg-purple-600 hover:bg-purple-700">
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Показать все товары
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={28} className="text-purple-600" />
              </div>
              <h3 className="font-medium mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем по всей России в течение 2-7 дней</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={28} className="text-purple-600" />
              </div>
              <h3 className="font-medium mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Все товары проходят тщательный отбор</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Icon name="HeartHandshake" size={28} className="text-purple-600" />
              </div>
              <h3 className="font-medium mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Наши консультанты всегда готовы помочь</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">50 мелочей</h3>
              <p className="text-gray-300">Магазин полезных мелочей для вашего дома и быта</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <p className="text-gray-300 mb-2">Телефон: +7 (XXX) XXX-XX-XX</p>
              <p className="text-gray-300">Email: info@50melochey.ru</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-300 hover:text-white cursor-pointer" />
                <Icon name="Facebook" size={24} className="text-gray-300 hover:text-white cursor-pointer" />
                <Icon name="Twitter" size={24} className="text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 50 мелочей. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
