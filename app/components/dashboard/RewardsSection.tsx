"use client"
import { motion } from 'framer-motion';
import { SparklesIcon, GiftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const rewards = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    points: 1000,
    image: "/iphone.jpg", // Using the existing image for now
  },
  {
    id: 2,
    name: "Recycled Tech Backpack",
    points: 2500,
    image: "/iphone.jpg",
  },
  {
    id: 3,
    name: "Smart Home Device",
    points: 5000,
    image: "/iphone.jpg",
  },
];

export default function RewardsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Available Rewards</h2>
        <div className="flex items-center gap-2 text-primary-green">
          <SparklesIcon className="h-5 w-5" />
          <span className="font-medium">12,450 points</span>
        </div>
      </div>

      <div className="space-y-4">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <Image
              src={reward.image}
              alt={reward.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-grow">
              <h3 className="font-medium text-gray-800">{reward.name}</h3>
              <p className="text-sm text-gray-600">{reward.points} points</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-primary-green text-white hover:bg-primary-green/90 transition-colors">
              Redeem
            </button>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-primary-green text-primary-green hover:bg-primary-green/10 transition-colors">
        <GiftIcon className="h-5 w-5" />
        <span>View All Rewards</span>
      </button>
    </motion.div>
  );
} 