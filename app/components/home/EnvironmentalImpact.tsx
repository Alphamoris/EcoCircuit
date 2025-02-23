"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const impacts = [
  {
    title: "Reduced CO₂ Emissions",
    value: "28,000",
    unit: "kg",
    description: "of CO₂ emissions prevented through proper e-waste recycling"
  },
  {
    title: "Water Saved",
    value: "15,000",
    unit: "liters",
    description: "of water saved through our efficient recycling processes"
  },
  {
    title: "Materials Recovered",
    value: "850",
    unit: "kg",
    description: "of valuable materials recovered and returned to the supply chain"
  }
];

export default function EnvironmentalImpact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-primary-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Our Environmental Impact
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Every device recycled through EcoCircuit contributes to a healthier planet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="text-4xl font-bold mb-2">
                {impact.value}
                <span className="text-2xl ml-1">{impact.unit}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
              <p className="opacity-90">{impact.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="bg-white text-primary-green px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors font-bold">
            Calculate Your Impact
          </button>
        </motion.div>
      </div>
    </section>
  );
} 