"use client"
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const upcomingCollections = [
  {
    id: 1,
    date: "Mar 25, 2024",
    time: "10:00 AM - 12:00 PM",
    address: "123 Green Street, Eco City",
    items: "1 Desktop PC, 2 Keyboards",
  },
];

export default function UpcomingCollections() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Collections</h2>
      
      {upcomingCollections.length > 0 ? (
        <div className="space-y-4">
          {upcomingCollections.map((collection) => (
            <div
              key={collection.id}
              className="p-4 rounded-lg bg-gray-50 border-l-4 border-primary-green"
            >
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 text-gray-800 font-medium mb-2">
                    <CalendarIcon className="h-5 w-5 text-primary-green" />
                    <span>{collection.date} • {collection.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600 mb-2">
                    <MapPinIcon className="h-5 w-5 min-w-[1.25rem] text-gray-400 mt-1" />
                    <span>{collection.address}</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium">Items:</span> {collection.items}
                  </p>
                </div>
                <button className="px-4 py-2 rounded-lg border-2 border-primary-green text-primary-green hover:bg-primary-green/10 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p>No upcoming collections scheduled.</p>
          <button className="mt-4 px-6 py-2 rounded-lg bg-primary-green text-white hover:bg-primary-green/90 transition-colors">
            Schedule Collection
          </button>
        </div>
      )}
    </motion.div>
  );
} 