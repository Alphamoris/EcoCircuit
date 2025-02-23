"use client"
import { motion } from 'framer-motion';
import ProductGrid from '../components/marketplace/ProductGrid';
import FilterSidebar from '../components/marketplace/FilterSidebar';
import { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('featured');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-10 pb-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-green mb-6">
            Green Points Marketplace
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Redeem your Green Points for certified refurbished electronics.
            Every purchase supports sustainable technology.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-primary-green font-semibold">
            <SparklesIcon className="h-5 w-5" />
            <span>Your Balance: 12,450 points</span>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCondition={selectedCondition}
              setSelectedCondition={setSelectedCondition}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            <ProductGrid 
              selectedCategory={selectedCategory}
              selectedCondition={selectedCondition}
              priceRange={priceRange}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    </main>
  );
} 