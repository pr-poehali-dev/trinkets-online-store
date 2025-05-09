
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">50 мелочей</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-64">
              <Input 
                type="text" 
                placeholder="Поиск товаров..." 
                className="pr-8"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <nav className="flex items-center space-x-6">
              <Link to="/catalog" className="text-gray-700 hover:text-purple-600 transition-colors">
                Каталог
              </Link>
              <Link to="/delivery" className="text-gray-700 hover:text-purple-600 transition-colors">
                Доставка
              </Link>
              <Link to="/contacts" className="text-gray-700 hover:text-purple-600 transition-colors">
                Контакты
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
        
        <div className="mt-2 md:hidden">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Поиск товаров..." 
              className="w-full pr-8"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <nav className="flex items-center justify-between mt-2">
            <Link to="/catalog" className="text-sm text-gray-700">
              Каталог
            </Link>
            <Link to="/delivery" className="text-sm text-gray-700">
              Доставка
            </Link>
            <Link to="/contacts" className="text-sm text-gray-700">
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
