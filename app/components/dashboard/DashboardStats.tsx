"use client"
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ScaleIcon, 
  EyeIcon, 
  GlobeAsiaAustraliaIcon 
} from '@heroicons/react/24/outline';
import type { ComponentType, SVGProps } from 'react';

interface StatItem {
  title: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  bgColor: string;
}

const stats: StatItem[] = [
  {
    title: "Total Green Points",
    value: "12,450",
    icon: SparklesIcon,
    color: "text-primary-green",
    bgColor: "bg-primary-green/10",
  },
  {
    title: "E-Waste Recycled",
    value: "85 kg",
    icon: ScaleIcon,
    color: "text-primary-green",
    bgColor: "bg-primary-green/10",
  },
  {
    title: "Trees Saved",
    value: "12",
    icon: EyeIcon,
    color: "text-primary-green",
    bgColor: "bg-primary-green/10",
  },
  {
    title: "CO₂ Reduced",
    value: "156 kg",
    icon: GlobeAsiaAustraliaIcon,
    color: "text-primary-green",
    bgColor: "bg-primary-green/10",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-primary-green/10 hover:border-primary-green/20 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
} 