"use client"
import { motion } from 'framer-motion';
import { SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ProductModal from './ProductModal';
import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  category: string;
  points: number;
  image: string;
  condition: string;
  description: string;
  specs: { [key: string]: string };
}

const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 12 Pro',
    category: 'phones',
    points: 5000,
    image: '/iphone.jpg',
    condition: 'refurbished',
    description: 'Fully refurbished iPhone 12 Pro with 1-year warranty.',
    specs: {
      'Storage': '128GB',
      'Color': 'Pacific Blue',
      'Battery Health': '95%'
    }
  },
  {
    id: '2',
    name: 'MacBook Air M1',
    category: 'computers',
    points: 8000,
    image: '/mac.jpg',
    condition: 'refurbished',
    description: 'Certified refurbished MacBook Air with M1 chip.',
    specs: {
      'Processor': 'M1',
      'RAM': '8GB',
      'Storage': '256GB SSD'
    }
  },
  {
    id: '3',
    name: 'Samsung Galaxy S21',
    category: 'phones',
    points: 4500,
    image: '/s24.jpeg',
    condition: 'new',
    description: 'Brand new, sealed Samsung Galaxy S21 with manufacturer warranty.',
    specs: {
      'Storage': '256GB',
      'Color': 'Phantom Black',
      '5G': 'Yes'
    }
  },
  {
    id: '4',
    name: 'Dell XPS 13',
    category: 'computers',
    points: 7500,
    image: '/dellxps.jpg',
    condition: 'openbox',
    description: 'Open box Dell XPS 13, barely used with all accessories.',
    specs: {
      'Processor': 'Intel i7',
      'RAM': '16GB',
      'Storage': '512GB SSD'
    }
  },
  {
    id: '5',
    name: 'iPad Air',
    category: 'tablets',
    points: 4000,
    image: '/ipad.jpeg',
    condition: 'refurbished',
    description: 'Certified refurbished iPad Air with Apple warranty.',
    specs: {
      'Storage': '64GB',
      'Color': 'Space Gray',
      'Generation': '4th'
    }
  },
  {
    id: '6',
    name: 'Sony WH-1000XM4',
    category: 'accessories',
    points: 2500,
    image: '/sony.jpeg',
    condition: 'new',
    description: 'Premium noise-cancelling headphones.',
    specs: {
      'Type': 'Over-ear',
      'Battery Life': '30 hours',
      'Noise Cancelling': 'Yes'
    }
  },
  {
    id: '7',
    name: 'Gaming PC Bundle',
    category: 'computers',
    points: 12000,
    image: '/monitor.jpg',
    condition: 'refurbished',
    description: 'Complete gaming PC setup with monitor and accessories.',
    specs: {
      'GPU': 'RTX 3070',
      'CPU': 'Ryzen 7',
      'RAM': '32GB'
    }
  },
  {
    id: '8',
    name: 'Apple Watch SE',
    category: 'wearables',
    points: 3000,
    image: '/iphone.jpg',
    condition: 'openbox',
    description: 'Open box Apple Watch SE with all accessories.',
    specs: {
      'Size': '44mm',
      'Color': 'Silver',
      'GPS': 'Yes'
    }
  },
  {
    id: '9',
    name: 'LG 4K OLED TV',
    category: 'tvs',
    points: 9000,
    image: '/lgtv.jpeg',
    condition: 'refurbished',
    description: '65-inch OLED TV with perfect blacks and stunning picture quality.',
    specs: {
      'Screen Size': '65"',
      'Resolution': '4K',
      'HDR': 'Dolby Vision'
    }
  },
  {
    id: '10',
    name: 'Bose QuietComfort 35 II',
    category: 'accessories',
    points: 3500,
    image: '/bose.jpg',
    condition: 'new',
    description: 'Premium wireless noise-cancelling headphones with Alexa voice control.',
    specs: {
      'Type': 'Over-ear',
      'Battery Life': '20 hours',
      'Connectivity': 'Bluetooth 5.0'
    }
  },
  {
    id: '11',
    name: 'Surface Pro 8',
    category: 'computers',
    points: 8500,
    image: '/surface.jpeg',
    condition: 'openbox',
    description: 'Versatile 2-in-1 laptop with touch screen and stylus support.',
    specs: {
      'Processor': 'Intel i5',
      'RAM': '16GB',
      'Storage': '256GB SSD'
    }
  },
  {
    id: '12',
    name: 'Canon EOS R5',
    category: 'cameras',
    points: 11000,
    image: '/sonycam.jpg',
    condition: 'refurbished',
    description: 'Professional mirrorless camera with 8K video capability.',
    specs: {
      'Sensor': '45MP Full-Frame',
      'Video': '8K RAW',
      'Stabilization': 'In-body'
    }
  },
  {
    id: '13',
    name: 'Nintendo Switch OLED',
    category: 'gaming',
    points: 4500,
    image: '/nintindo.jpg',
    condition: 'new',
    description: 'Latest Nintendo Switch with enhanced OLED display.',
    specs: {
      'Screen': '7" OLED',
      'Storage': '64GB',
      'Battery Life': '4.5-9 hours'
    }
  },
  {
    id: '14',
    name: 'HP Color LaserJet Pro',
    category: 'printers',
    points: 5500,
    image: '/printer.jpeg',
    condition: 'refurbished',
    description: 'Professional color laser printer for home office.',
    specs: {
      'Type': 'Color Laser',
      'Speed': '22 ppm',
      'Connectivity': 'WiFi, Ethernet'
    }
  },
  {
    id: '15',
    name: 'Samsung Galaxy Tab S8',
    category: 'tablets',
    points: 6000,
    image: '/samtab.jpeg',
    condition: 'new',
    description: 'Premium Android tablet with S Pen included.',
    specs: {
      'Screen': '11" AMOLED',
      'Storage': '128GB',
      'Processor': 'Snapdragon 8'
    }
  },
  {
    id: '16',
    name: 'Logitech MX Master 3',
    category: 'accessories',
    points: 1500,
    image: '/lgitech.jpg',
    condition: 'new',
    description: 'Premium wireless mouse with advanced features.',
    specs: {
      'DPI': '4000',
      'Battery Life': '70 days',
      'Connectivity': 'Bluetooth/USB'
    }
  },
  {
    id: '17',
    name: 'Asus ROG Gaming Monitor',
    category: 'tvs',
    points: 7000,
    image: '/monitor.jpeg',
    condition: 'refurbished',
    description: '27-inch gaming monitor with 165Hz refresh rate.',
    specs: {
      'Size': '27"',
      'Refresh Rate': '165Hz',
      'Resolution': '1440p'
    }
  },
  {
    id: '18',
    name: 'Sony A7 III',
    category: 'cameras',
    points: 8500,
    image: '/sony.jpeg',
    condition: 'openbox',
    description: 'Full-frame mirrorless camera with excellent low-light performance.',
    specs: {
      'Sensor': '24MP Full-Frame',
      'ISO Range': '100-51200',
      'Stabilization': 'Yes'
    }
  },
  {
    id: '19',
    name: 'Xbox Series X',
    category: 'gaming',
    points: 7500,
    image: '/xbox.jpeg',
    condition: 'refurbished',
    description: 'Next-gen gaming console with 4K gaming capability.',
    specs: {
      'Storage': '1TB SSD',
      'Resolution': '4K',
      'FPS': 'Up to 120'
    }
  },
  {
    id: '20',
    name: 'AirPods Pro',
    category: 'accessories',
    points: 3000,
    image: '/airpods.jpeg',
    condition: 'new',
    description: 'Premium wireless earbuds with active noise cancellation.',
    specs: {
      'ANC': 'Yes',
      'Battery Life': '4.5h',
      'Water Resistance': 'IPX4'
    }
  }
];

interface ProductGridProps {
  selectedCategory: string;
  selectedCondition: string;
  priceRange: number[];
  sortBy: string;
  itemsPerPage?: number;
}

export default function ProductGrid({ 
  selectedCategory, 
  selectedCondition,
  priceRange, 
  sortBy,
  itemsPerPage = 9 // Default to 9 items per page
}: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (selectedCondition === 'all' || product.condition === selectedCondition) &&
      product.points <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'points-low':
          return a.points - b.points;
        case 'points-high':
          return b.points - a.points;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                layout='responsive'
                width={300}
                height={169}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  product.condition === 'new' ? 'bg-green-500 text-white' :
                  product.condition === 'refurbished' ? 'bg-blue-500 text-white' :
                  'bg-yellow-500 text-white'
                }`}>
                  {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 text-base text-gray-600 mb-4">
                <SparklesIcon className="h-5 w-5 text-primary-green" />
                <span className="font-semibold">{product.points.toLocaleString()} points</span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="w-full bg-primary-green text-white py-3 rounded-lg hover:bg-primary-green/90 transition-colors font-semibold"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${
              currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-primary-green hover:bg-primary-green/10'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === page
                  ? 'bg-primary-green text-white'
                  : 'text-gray-600 hover:bg-primary-green/10'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${
              currentPage === totalPages 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-primary-green hover:bg-primary-green/10'
            }`}
            aria-label="Next page"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
} 