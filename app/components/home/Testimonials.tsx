"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Environmental Activist",
        image: "/testimonial1.jpg",
        quote: "EcoCircuit has revolutionized how we handle e-waste. Their platform makes it incredibly easy to recycle electronics while earning rewards.",
        rating: 5,
        organization: "Green Earth Initiative"
    },
    {
        id: 2,
        name: "David Chen",
        role: "IT Manager",
        image: "/testimonial2.jpg",
        quote: "The secure data wiping feature gives us complete confidence when recycling corporate devices. It's a game-changer for our organization.",
        rating: 5,
        organization: "Tech Solutions Inc."
    },
    {
        id: 3,
        name: "Emma Williams",
        role: "Sustainability Director",
        image: "/testimonial3.jpg",
        quote: "We've reduced our carbon footprint significantly since partnering with EcoCircuit. Their impact tracking tools are exceptional.",
        rating: 5,
        organization: "Future Forward Corp"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) return testimonials.length - 1;
            if (nextIndex >= testimonials.length) return 0;
            return nextIndex;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="py-20 bg-gradient-to-b from-primary-green/5 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-primary-green mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Join thousands of satisfied users making a difference with EcoCircuit
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative bg-white rounded-2xl shadow-lg p-8 border border-primary-green/10 hover:border-primary-green/20 transition-colors"
                        >
                            <div className="bg-[#E7F4E8] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-primary-green" />
                            </div>
                            <blockquote className="text-gray-700 leading-relaxed">
                                {testimonial.quote}
                            </blockquote>
                            <div className="mt-4">
                                <p className="font-bold text-primary-green">{testimonial.name}</p>
                                <p className="text-gray-600">{testimonial.role}</p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-primary-green/5 rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-24 h-24 bg-tech-blue/5 rounded-full blur-2xl" />
                        </motion.div>
                    ))}
                </div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-primary-green">10K+</span>
                            </div>
                            <span>Active Users</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-tech-blue">95%</span>
                            </div>
                            <span>Satisfaction Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-accent-orange">50T</span>
                            </div>
                            <span>E-Waste Recycled</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 