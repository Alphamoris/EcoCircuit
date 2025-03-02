"use client"
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function GuidePage() {
  // Sample recycling steps
  const steps = [
    {
      title: "Prepare Your Devices",
      description: "Back up your data and perform a factory reset to remove all personal information from your devices.",
      icon: "📱"
    },
    {
      title: "Remove Batteries",
      description: "If possible, remove batteries from devices as they may need to be recycled separately.",
      icon: "🔋"
    },
    {
      title: "Schedule Collection",
      description: "Use our app or website to schedule a convenient pickup time for your e-waste.",
      icon: "📅"
    },
    {
      title: "Package Safely",
      description: "Place your devices in a secure box or bag to prevent damage during transport.",
      icon: "📦"
    },
    {
      title: "Handover to Team",
      description: "Our collection team will arrive at your location and safely take your e-waste.",
      icon: "🚚"
    },
    {
      title: "Track Your Impact",
      description: "Monitor your environmental impact and earn Green Points for your contribution.",
      icon: "🌱"
    }
  ];

  // Do's and Don'ts
  const dos = [
    "Back up important data before recycling devices",
    "Remove batteries from devices when possible",
    "Wipe personal data from devices (factory reset)",
    "Recycle all electronic accessories (cables, chargers)",
    "Keep devices intact - don't dismantle them",
    "Separate batteries from devices when instructed",
    "Package items securely to prevent damage",
    "Include all components of the device"
  ];

  const donts = [
    "Don't throw e-waste in regular trash",
    "Don't break screens or damage devices",
    "Don't remove valuable components",
    "Don't expose devices to extreme temperatures",
    "Don't recycle devices with swollen batteries",
    "Don't mix e-waste with other types of waste",
    "Don't leave personal data on devices",
    "Don't hide damage when reporting device condition"
  ];

  return (
    <main className="min-h-screen bg-background bg-gradient-to-b from-[#E7F4E8] via-[#F2F9F3] to-white">
      <div className="pt-10 pb-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-green mb-6">
            E-Waste Recycling Guide
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Follow these simple steps to properly recycle your electronic devices and maximize your positive environmental impact
          </p>
        </motion.div>

        {/* Steps Section */}
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-primary-green mb-8 text-center">
            Recycling Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="guide-step rounded-xl p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-green mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary-green/10 text-primary-green font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Do's and Don'ts Section */}
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-primary-green mb-8 text-center">
            Do&apos;s and Don&apos;ts
          </h2>
          
          <div className="dos-donts-container">
            <motion.div
              className="dos-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3>
                <CheckCircleIcon className="h-6 w-6 text-primary-green" />
                Do&apos;s
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                {dos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              className="donts-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3>
                <XCircleIcon className="h-6 w-6 text-red-600" />
                Don&apos;ts
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                {donts.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-primary-green/10 rounded-2xl p-8 border border-primary-green/20">
            <h2 className="text-2xl font-bold text-primary-green mb-4">Ready to Recycle?</h2>
            <p className="text-gray-700 mb-6">
              Schedule a collection today and start making a positive impact on the environment while earning rewards.
            </p>
            <motion.button
              className="bg-primary-green text-white px-8 py-3 rounded-full font-semibold inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Collection
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 