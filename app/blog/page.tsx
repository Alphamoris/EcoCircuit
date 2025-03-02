"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      title: "The Growing E-Waste Crisis: What You Need to Know",
      excerpt: "Electronic waste is the fastest growing waste stream in the world. Learn about the scale of the problem and what we can do to address it.",
      image: "/iphone.jpg",
      date: "March 15, 2023",
      author: "Bhanu Prakash",
      category: "Environment"
    },
    {
      title: "How to Properly Prepare Your Devices for Recycling",
      excerpt: "Before recycling your electronics, it's important to take a few steps to protect your data and ensure the device can be recycled efficiently.",
      image: "/mac.jpg",
      date: "February 28, 2023",
      author: "Harshith",
      category: "Tips & Guides"
    },
    {
      title: "The Hidden Value in Your Old Electronics",
      excerpt: "Your outdated gadgets contain valuable materials that can be recovered and reused. Discover what's inside your devices and why recycling matters.",
      image: "/applewatch.jpg",
      date: "January 20, 2023",
      author: "Dharshan",
      category: "Recycling"
    },
    {
      title: "E-Waste Management Innovations Around the World",
      excerpt: "Countries are developing innovative approaches to tackle e-waste. Explore some of the most promising solutions from around the globe.",
      image: "/lgtv.jpeg",
      date: "December 12, 2022",
      author: "Bhanu Prakash",
      category: "Innovation"
    },
    {
      title: "The Environmental Impact of Smartphone Production",
      excerpt: "Manufacturing smartphones requires significant resources and energy. Learn about the environmental footprint of your mobile device.",
      image: "/s24.jpeg",
      date: "November 5, 2022",
      author: "Harshith",
      category: "Environment"
    },
    {
      title: "Corporate Responsibility in E-Waste Management",
      excerpt: "Companies are increasingly taking responsibility for the end-of-life management of their products. See how major tech firms are addressing e-waste.",
      image: "/dellxps.jpg",
      date: "October 18, 2022",
      author: "Dharshan",
      category: "Business"
    }
  ];

  // Categories for filter
  const categories = ["All", "Environment", "Recycling", "Tips & Guides", "Innovation", "Business"];

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
            EcoCircuit Blog
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stay informed about e-waste management, recycling tips, and environmental news.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category === "All" 
                    ? "bg-primary-green text-white" 
                    : "bg-white text-gray-700 hover:bg-primary-green/10"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-primary-green text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-green mb-3">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="text-primary-green font-medium inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-primary-green mb-2">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-700">
              Get the latest news and updates on e-waste management delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green/50"
            />
            <button className="bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-primary-green/90 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 