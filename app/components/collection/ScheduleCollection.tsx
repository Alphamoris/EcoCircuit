"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, PhotoIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

interface CollectionForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  time: string;
  items: string;
  description: string;
  images: FileList | null;
}

export default function ScheduleCollection() {
  const [formData, setFormData] = useState<CollectionForm>({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    items: '',
    description: '',
    images: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          date: '',
          time: '',
          items: '',
          description: '',
          images: null
        });
      }, 2000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, images: e.target.files }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
              aria-label='name'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
              aria-label='email'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <div className="relative">
                <DevicePhoneMobileIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                aria-label='phone'
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Collection Address
              </label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                aria-label='address'
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
                />
              </div>
            </div>
          </div>

          {/* Collection Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Preferred Date
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                aria-label='date'
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Preferred Time
              </label>
              <select
              aria-label='time'
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
              >
                <option value="">Select a time slot</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                <option value="evening">Evening (3 PM - 6 PM)</option>
              </select>
            </div>
          </div>

          {/* E-Waste Details */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Items to Collect
            </label>
            <input
              type="text"
              name="items"
              value={formData.items}
              onChange={handleChange}
              required
              placeholder="e.g., 2 laptops, 1 printer, 3 phones (or) in Kg's"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Additional Details
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Provide any additional information about your e-waste items"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-primary-green"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Images (optional)
            </label>
            <div className="relative">
              <input
                type="file"
                name="images"
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="hidden"
                id="images"
              />
              <label
                htmlFor="images"
                className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 text-gray-600 hover:border-primary-green hover:text-primary-green cursor-pointer"
              >
                <PhotoIcon className="h-6 w-6" />
                <span>Click to upload images</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`w-full py-4 rounded-lg text-white font-semibold transition-colors ${
              isSuccess ? 'bg-green-500' : 'bg-primary-green hover:bg-primary-green/90'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                Processing...
              </span>
            ) : isSuccess ? (
              'Collection Scheduled!'
            ) : (
              'Schedule Collection'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
} 