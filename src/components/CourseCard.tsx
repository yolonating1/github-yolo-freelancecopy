import React from 'react';
import { CheckCircle2, MousePointerClick } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  link: string;
  price: string;
  features: string[];
  category: string;
  image: string;
  badge?: string;
}

export default function CourseCard({
  title,
  description,
  link,
  price,
  features,
  category,
  image,
  badge
}: CourseCardProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden card-hover">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={`${title} - Professional Copywriting Course`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        {badge && (
          <div className="absolute top-4 right-4 animate-pulse">
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-full text-sm font-bold shadow-lg">
              {badge}
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium shadow-lg">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-8 bg-white/90 backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>
        <div className="mb-6 space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center group">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 transition-transform group-hover:scale-110" />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="group">
            <span className="text-3xl font-bold gradient-text group-hover:text-glow transition-all">
              {price}
            </span>
            <span className="text-gray-500 ml-2">one-time</span>
          </div>
          <a
            href={link}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 active:scale-95"
          >
            Enroll Now 
            <MousePointerClick className="ml-2 h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
}