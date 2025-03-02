"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
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

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePurchase = () => {
    setIsConfirming(true);
    // Simulate API call
    setTimeout(() => {
      setIsConfirming(false);
      setIsSuccess(true);
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-primary-green"
                  >
                    {product.name}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                    aria-label="Close dialog"
                    title="Close dialog"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout='responsive'
                      width={600}
                      height={400}
                      className="w-full rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-product.png';
                      }}/>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <SparklesIcon className="h-6 w-6 text-primary-green" />
                      <span className="text-2xl font-bold text-primary-green">
                        {product.points.toLocaleString()} points
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-black mb-2">Condition</h4>
                      <p className="text-black">{product.condition}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-black mb-2">Description</h4>
                      <p className="text-black">{product.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-black mb-2">Specifications</h4>
                      <dl className="grid grid-cols-2 gap-2">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key}>
                            <dt className="text-sm text-gray-500">{key}</dt>
                            <dd className="text-black">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <button
                      onClick={handlePurchase}
                      disabled={isConfirming || isSuccess}
                      className={`w-full py-3 rounded-lg transition-colors ${
                        isSuccess
                          ? 'bg-green-500 text-white'
                          : 'bg-primary-green text-white hover:bg-primary-green/90'
                      }`}
                    >
                      {isConfirming ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                          Processing...
                        </span>
                      ) : isSuccess ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircleIcon className="h-5 w-5" />
                          Purchase Successful!
                        </span>
                      ) : (
                        'Redeem with Points'
                      )}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 