"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQPage() {
  // Sample FAQ items
  const faqItems = [
    {
      question: "What types of electronics do you accept?",
      answer: "We accept all types of electronic devices including smartphones, laptops, tablets, desktop computers, TVs, monitors, printers, gaming consoles, wearables, and small household electronics. If you're unsure about a specific item, please contact us."
    },
    {
      question: "How is my data protected during recycling?",
      answer: "We take data security very seriously. All devices undergo a secure data wiping process that meets military-grade standards. For added peace of mind, we recommend backing up your data and performing a factory reset before recycling."
    },
    {
      question: "How do Green Points work?",
      answer: "Green Points are earned based on the type, condition, and value of the electronics you recycle. These points can be redeemed in our marketplace for refurbished electronics, eco-friendly products, or donated to environmental causes."
    },
    {
      question: "Is there a fee for collection services?",
      answer: "No, our collection service is completely free. We believe in making e-waste recycling as accessible as possible to encourage more people to recycle responsibly."
    },
    {
      question: "How do I track my environmental impact?",
      answer: "Once you create an account, you can view your personal dashboard which tracks metrics like CO2 emissions prevented, water saved, and raw materials recovered through your recycling efforts."
    },
    {
      question: "Can I recycle broken or non-functional devices?",
      answer: "Absolutely! We accept devices in any condition. Even broken electronics contain valuable materials that can be recovered and reused."
    },
    {
      question: "How often can I schedule collections?",
      answer: "You can schedule collections as often as needed. There's no limit to how many times you can use our service."
    },
    {
      question: "What areas do you service?",
      answer: "We currently operate in major metropolitan areas across India. Enter your pincode on our collection page to check if we service your area."
    }
  ];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our e-waste recycling services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-primary-green">{item.question}</h3>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-primary-green transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 pb-4 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                </div>
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
            Still Have Questions?
          </h2>
          <p className="text-gray-700 mb-8">
            Contact our support team for more information about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:alphamoris45@gmail.com" 
              className="inline-block bg-primary-green text-white px-8 py-3 rounded-full hover:bg-primary-green/90 transition-colors"
            >
              Email Us
            </a>
            <a 
              href="tel:+917010815310" 
              className="inline-block border-2 border-primary-green text-primary-green px-8 py-3 rounded-full hover:bg-primary-green hover:text-white transition-colors"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 