import React from 'react';

interface CategoryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function CategoryTabs({ activeTab, setActiveTab }: CategoryTabsProps) {
  const categories = ['all', 'foundation', 'marketing', 'beginner', 'web'];

  return (
    <div className="flex justify-center mb-12 space-x-4 p-2 glass-effect rounded-full mx-auto max-w-2xl">
      {categories.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform ${
            activeTab === tab
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
              : 'bg-white/50 text-gray-600 hover:bg-white hover:shadow-md hover:scale-105'
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}