"use client"
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const collections = [
  {
    id: 1,
    date: "Mar 15, 2024",
    items: "2 Laptops, 1 Printer",
    points: 450,
    status: "Completed",
  },
  {
    id: 2,
    date: "Feb 28, 2024",
    items: "3 Smartphones, 1 Tablet",
    points: 300,
    status: "Completed",
  },
  {
    id: 3,
    date: "Feb 10, 2024",
    items: "1 TV, 2 Monitors",
    points: 600,
    status: "Completed",
  },
];

export default function CollectionHistory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Collection History</h2>
      <div className="space-y-4">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <div>
                <p className="font-medium text-gray-800">{collection.items}</p>
                <p className="text-sm text-gray-600">{collection.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-primary-green">
                +{collection.points} points
              </p>
              <p className="text-sm text-gray-600">{collection.status}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 