"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScaleIcon, SparklesIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const wasteCategories = [
  { id: 'electronics', name: 'Electronics', pointsPerKg: 50 },
  { id: 'batteries', name: 'Batteries', pointsPerKg: 75 },
  { id: 'appliances', name: 'Appliances', pointsPerKg: 40 },
  { id: 'computers', name: 'Computers & Laptops', pointsPerKg: 60 },
];

export default function WasteCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [category, setCategory] = useState(wasteCategories[0].id);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    calculatePoints();
  }, [weight, category]);

  const calculatePoints = () => {
    const selectedCategory = wasteCategories.find(c => c.id === category);
    const weightNum = parseFloat(weight);
    if (selectedCategory && !isNaN(weightNum) && weightNum > 0) {
      setPoints(Math.round(weightNum * selectedCategory.pointsPerKg));
    } else {
      setPoints(0);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setWeight(value);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-green/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-green mb-4">
            Calculate Your Green Points
          </h2>
          <p className="text-gray-700 text-lg">
            Estimate how many Green Points you'll earn from your e-waste recycling
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                  Type of E-Waste
                </label>
                <div className="relative">
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-800 appearance-none focus:outline-none focus:border-primary-green pr-10"
                  >
                    {wasteCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({cat.pointsPerKg} points/kg)
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="weight" className="block text-gray-700 font-semibold mb-2">
                  Approximate Weight (kg)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ScaleIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="weight"
                    type="text"
                    inputMode="decimal"
                    pattern="[0-9]*\.?[0-9]*"
                    value={weight}
                    onChange={handleWeightChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
                    placeholder="Enter weight in kilograms"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Enter the approximate weight of your e-waste in kilograms
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-green/10 mb-4">
                  <SparklesIcon className="h-10 w-10 text-primary-green" />
                </div>
                <div className="text-4xl font-bold text-primary-green mb-2">
                  {points.toLocaleString()}
                </div>
                <div className="text-gray-700 font-medium">Estimated Green Points</div>
                <p className="mt-4 text-sm text-gray-600">
                  Points are calculated based on weight and type of e-waste
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wasteCategories.map((cat) => (
              <div key={cat.id} className="bg-gray-50 rounded-lg p-4 border-2 border-gray-100">
                <h3 className="font-bold text-gray-800 mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-600">
                  {cat.pointsPerKg} points per kg
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 