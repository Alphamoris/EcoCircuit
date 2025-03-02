"use client"
import { motion } from 'framer-motion';

export default function FactsPage() {
  // Sample facts about e-waste
  const facts = [
    {
      title: "Growing Problem",
      description: "E-waste is the fastest growing waste stream in the world, with an estimated 50 million tons generated annually."
    },
    {
      title: "Valuable Resources",
      description: "E-waste contains valuable materials like gold, silver, copper, and rare earth elements that can be recovered and reused."
    },
    {
      title: "Toxic Components",
      description: "Electronics contain toxic substances like lead, mercury, and cadmium that can harm the environment and human health if not properly disposed."
    },
    {
      title: "Low Recycling Rates",
      description: "Only about 20% of global e-waste is formally recycled, with the rest ending up in landfills or being informally processed."
    },
    {
      title: "Energy Savings",
      description: "Recycling e-waste requires significantly less energy than mining and processing new materials."
    },
    {
      title: "Economic Opportunity",
      description: "The value of raw materials in global e-waste is estimated to be worth over $62.5 billion annually."
    }
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
            E-Waste Facts
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn about the environmental impact of electronic waste and why proper recycling is crucial.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-primary-green mb-3">{fact.title}</h3>
                <p className="text-gray-700">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primary-green mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-700 mb-8">
            Start recycling your e-waste today and contribute to a more sustainable future.
          </p>
          <a 
            href="/collection" 
            className="inline-block bg-primary-green text-white px-8 py-3 rounded-full hover:bg-primary-green/90 transition-colors"
          >
            Schedule Collection
          </a>
        </motion.div>
      </div>
    </main>
  );
} 