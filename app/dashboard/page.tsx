"use client"
import { motion } from 'framer-motion';
import DashboardStats from '../components/dashboard/DashboardStats';
import CollectionHistory from '../components/dashboard/CollectionHistory';
import RewardsSection from '../components/dashboard/RewardsSection';
import UpcomingCollections from '../components/dashboard/UpcomingCollections';

export default function DashboardPage() {
  const username = 'Dhanush Kumar S'; // Replace with actual username

  return (
    <main className="min-h-screen bg-background bg-gradient-to-b from-[#E7F4E8] via-[#F2F9F3] to-white">
      <div className="py-10">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-primary-green">Welcome back, {username}!</h1>
              <p className="text-gray-600 mt-1">Track your recycling impact and rewards</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-primary-green text-white px-6 py-2 rounded-full hover:bg-primary-green/90 transition-colors">
                Schedule New Collection
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <DashboardStats />
              <CollectionHistory />
              <UpcomingCollections />
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-8">
              <RewardsSection />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 