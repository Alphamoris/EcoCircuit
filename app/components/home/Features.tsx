"use client"
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  CloudArrowUpIcon, 
  ShieldCheckIcon,
  TrophyIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CpuChipIcon,
    title: 'AI-Powered Sorting',
    description: 'Advanced algorithms categorize e-waste for optimal recycling',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Data Wiping',
    description: 'Military-grade data destruction for your privacy',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: TrophyIcon,
    title: 'Rewards Program',
    description: 'Earn points for every recycled device',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: ChartBarIcon,
    title: 'Impact Tracking',
    description: 'Monitor your environmental contribution',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud Reports',
    description: 'Access your recycling history anytime',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: UserGroupIcon,
    title: 'Community Events',
    description: 'Join local recycling initiatives',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Value Recovery',
    description: 'Get fair value for recyclable components',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Impact',
    description: 'Part of worldwide sustainability efforts',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-green/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-green mb-4">
            Powered by Innovation
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with environmental responsibility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6 border border-primary-green/10 hover:border-primary-green/20 transition-colors"
            >
              <div className="bg-[#E7F4E8] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-green" />
              </div>
              <h3 className="text-lg font-bold text-primary-green mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 