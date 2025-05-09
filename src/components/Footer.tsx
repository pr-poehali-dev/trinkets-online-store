
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">50 мелочей</h3>
            <p className="text-gray-600 mb-4">
              Магазин полезных мелочей с доставкой по Терновке. У нас вы найдете товары для дома, кухни, красоты и многое другое!
            </p>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Терновка, ул. Центральная, 42</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+79001234567" className="hover:text-purple-600">+7 (900) 123-45-67</a>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:info@50melochey.ru" className="hover:text-purple-600">info@50melochey.ru</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  О магазине
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Вопросы и ответы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Время работы</h3>
            <div className="flex items-start mb-3">
              <Clock className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                <p className="text-gray-600">Сб: 10:00 - 18:00</p>
                <p className="text-gray-600">Вс: 10:00 - 16:00</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium text-sm mb-2">Доставка по Терновке:</h4>
              <p className="text-gray-600">Ежедневно с 12:00 до 20:00</p>
              <p className="text-gray-600 mt-2">Заказы принимаются за 3 часа до доставки</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 "50 мелочей" — магазин полезных мелочей в Терновке
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Сайт создан в <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="text-purple-600 hover:underline">Поехали!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
