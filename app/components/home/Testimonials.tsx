"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    ChatBubbleBottomCenterTextIcon, 
    ArrowLeftIcon, 
    ArrowRightIcon,
    CheckBadgeIcon,
    HeartIcon,
    HandThumbUpIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Environmental Activist",
        image: "/testimonial1.jpg",
        quote: "EcoCircuit has revolutionized how we handle e-waste. Their platform makes it incredibly easy to recycle electronics while earning rewards.",
        rating: 5,
        organization: "Green Earth Initiative",
        location: "San Francisco, CA"
    },
    {
        id: 2,
        name: "David Chen",
        role: "IT Manager",
        image: "/testimonial2.jpg",
        quote: "The secure data wiping feature gives us complete confidence when recycling corporate devices. It's a game-changer for our organization.",
        rating: 5,
        organization: "Tech Solutions Inc.",
        location: "Boston, MA"
    },
    {
        id: 3,
        name: "Emma Williams",
        role: "Sustainability Director",
        image: "/testimonial3.jpg",
        quote: "We've reduced our carbon footprint significantly since partnering with EcoCircuit. Their impact tracking tools are exceptional.",
        rating: 5,
        organization: "Future Forward Corp",
        location: "Seattle, WA"
    },
    {
        id: 4,
        name: "Michael Rodriguez",
        role: "School Principal",
        image: "/testimonial4.jpg",
        quote: "Our school district has implemented EcoCircuit's program, and it's been an incredible educational tool for our students about sustainability.",
        rating: 5,
        organization: "Greenwood High School",
        location: "Portland, OR"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const autoplayRef = useRef(autoplay);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.1, 1, 1, 0.1]);

    // Update ref when autoplay changes
    useEffect(() => {
        autoplayRef.current = autoplay;
    }, [autoplay]);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };
    
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.2
            }
        }
    };
    
    const floatingCircleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setAutoplay(false); // Pause autoplay when manually navigating
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) return testimonials.length - 1;
            if (nextIndex >= testimonials.length) return 0;
            return nextIndex;
        });
        
        // Resume autoplay after 5 seconds of inactivity
        setTimeout(() => {
            if (autoplayRef.current === false) {
                setAutoplay(true);
            }
        }, 5000);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        
        if (autoplay) {
            timer = setInterval(() => {
                paginate(1);
            }, 5000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [currentIndex, autoplay]);

    return (
        <section ref={sectionRef} className="py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-primary-green/5 to-white z-0"
                style={{ y: backgroundY }}
            />
            
            <motion.div 
                className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl -z-10"
                style={{ opacity }}
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            
            <motion.div 
                className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl -z-10"
                style={{ opacity }}
                animate={{
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            
            {/* Floating circles */}
            {[...Array(5)].map((_, i) => {
                // Use deterministic values based on index instead of Math.random()
                const sizes = [80, 120, 70, 100, 90]; // Fixed sizes
                const leftPositions = [10, 30, 50, 70, 90]; // Fixed left positions
                const topPositions = [15, 35, 55, 75, 95]; // Fixed top positions
                const yOffsets = [15, 10, 20, 12, 18]; // Fixed y animation offsets
                const xOffsets = [10, 15, 8, 12, 14]; // Fixed x animation offsets
                const scales = [0.9, 1.1, 0.85, 1.05, 0.95]; // Fixed scale values
                const durations = [12, 15, 10, 14, 11]; // Fixed animation durations
                
                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary-green/10 blur-xl -z-10"
                        variants={floatingCircleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            width: `${sizes[i]}px`,
                            height: `${sizes[i]}px`,
                            left: `${leftPositions[i]}%`,
                            top: `${topPositions[i]}%`,
                        }}
                        animate={{
                            y: [0, yOffsets[i], 0],
                            x: [0, xOffsets[i], 0],
                            scale: [1, scales[i], 1],
                        }}
                        transition={{
                            duration: durations[i],
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                );
            })}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={titleVariants}
                    className="text-center mb-16"
                >
                    <motion.div 
                        className="inline-block mb-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 10,
                            delay: 0.2
                        }}
                        viewport={{ once: true }}
                    >
                        <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">
                            TESTIMONIALS
                        </span>
                    </motion.div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-green mb-4">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="block"
                        >
                            What Our Users Say
                        </motion.span>
                    </h2>
                    
                    <motion.p 
                        className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Join thousands of satisfied users making a difference with EcoCircuit
                    </motion.p>
                </motion.div>

                {/* Mobile View: Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden relative h-[450px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute w-full"
                            >
                                <motion.div 
                                    className="bg-white rounded-2xl shadow-lg p-8 border border-primary-green/10 mx-auto max-w-md"
                                    whileHover={{ 
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <motion.div 
                                            className="bg-[#E7F4E8] rounded-full w-12 h-12 flex items-center justify-center"
                                            whileHover={{ 
                                                rotate: 15,
                                                scale: 1.1,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-primary-green" />
                                        </motion.div>
                                        <div className="flex">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                                                >
                                                    <StarIconSolid className="h-5 w-5 text-yellow-400" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <blockquote className="text-gray-700 leading-relaxed text-lg italic mb-6">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            &quot;{testimonials[currentIndex].quote}&quot;
                                        </motion.span>
                                    </blockquote>
                                    <div className="flex items-center">
                                        <motion.div 
                                            className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center text-xl font-bold text-primary-green"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                        >
                                            {testimonials[currentIndex].name.charAt(0)}
                                        </motion.div>
                                        <div className="ml-4">
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.3 }}
                                            >
                                                <div className="flex items-center">
                                                    <p className="font-bold text-primary-green">{testimonials[currentIndex].name}</p>
                                                    <CheckBadgeIcon className="h-5 w-5 text-blue-500 ml-1" />
                                                </div>
                                                <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}, {testimonials[currentIndex].organization}</p>
                                                <p className="text-gray-500 text-xs">{testimonials[currentIndex].location}</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                    
                                    {/* Floating reactions */}
                                    <div className="absolute -top-2 -right-2">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.5, type: "spring" }}
                                            className="bg-red-100 p-2 rounded-full shadow-md"
                                        >
                                            <HeartIcon className="h-4 w-4 text-red-500" />
                                        </motion.div>
                                    </div>
                                    <div className="absolute -bottom-2 -left-2">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.6, type: "spring" }}
                                            className="bg-blue-100 p-2 rounded-full shadow-md"
                                        >
                                            <HandThumbUpIcon className="h-4 w-4 text-blue-500" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    <div className="flex justify-center mt-6 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? "bg-primary-green scale-125" : "bg-primary-green/30"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    <div className="flex justify-between mt-6">
                        <motion.button
                            onClick={() => paginate(-1)}
                            className="bg-white p-3 rounded-full shadow-md text-primary-green hover:bg-primary-green hover:text-white transition-colors"
                            whileHover={{ scale: 1.1, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ArrowLeftIcon className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                            onClick={() => paginate(1)}
                            className="bg-white p-3 rounded-full shadow-md text-primary-green hover:bg-primary-green hover:text-white transition-colors"
                            whileHover={{ scale: 1.1, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ArrowRightIcon className="h-5 w-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Desktop View: Grid */}
                <motion.div 
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                transition: { duration: 0.2 }
                            }}
                            className="relative bg-white rounded-2xl shadow-lg p-8 border border-primary-green/10 hover:border-primary-green/30 transition-all duration-300 h-full flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="relative">
                                    <motion.div 
                                        className="bg-[#E7F4E8] rounded-full w-12 h-12 flex items-center justify-center"
                                        whileHover={{ 
                                            rotate: 15,
                                            scale: 1.1,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-primary-green" />
                                    </motion.div>
                                    <motion.div 
                                        className="absolute -inset-4 bg-primary-green/5 rounded-full blur-xl -z-10"
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.2, 0.3]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: index * 0.5
                                        }}
                                    />
                                </div>
                                <div className="flex">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            
                            <blockquote className="text-gray-700 leading-relaxed italic mb-6 flex-grow">
                                &quot;{testimonial.quote}&quot;
                            </blockquote>
                            
                            <div className="flex items-center mt-auto">
                                <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center text-xl font-bold text-primary-green">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <div className="flex items-center">
                                        <p className="font-bold text-primary-green">{testimonial.name}</p>
                                        <CheckBadgeIcon className="h-5 w-5 text-blue-500 ml-1" />
                                    </div>
                                    <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.organization}</p>
                                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-primary-green/5 rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-24 h-24 bg-tech-blue/5 rounded-full blur-2xl" />
                            
                            {/* Floating reactions */}
                            <div className="absolute -top-2 -right-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 + (index * 0.1), type: "spring" }}
                                    className="bg-red-100 p-2 rounded-full shadow-md"
                                >
                                    <HeartIcon className="h-4 w-4 text-red-500" />
                                </motion.div>
                            </div>
                            <div className="absolute -bottom-2 -left-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.6 + (index * 0.1), type: "spring" }}
                                    className="bg-blue-100 p-2 rounded-full shadow-md"
                                >
                                    <HandThumbUpIcon className="h-4 w-4 text-blue-500" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
                        {[
                            { value: "10K+", label: "Active Users", color: "primary-green" },
                            { value: "95%", label: "Satisfaction Rate", color: "tech-blue" },
                            { value: "50T", label: "E-Waste Recycled", color: "accent-orange" }
                        ].map((stat, index) => (
                            <motion.div 
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3"
                            >
                                <div className={`w-16 h-16 bg-${stat.color}/10 rounded-full flex items-center justify-center relative group`}>
                                    <motion.span 
                                        className={`text-2xl font-bold text-${stat.color}`}
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        {stat.value}
                                    </motion.span>
                                    <motion.div 
                                        className="absolute inset-0 rounded-full"
                                        initial={{ boxShadow: `0 0 0 0 rgba(var(--${stat.color}-rgb), 0.4)` }}
                                        animate={{ 
                                            boxShadow: [
                                                `0 0 0 0 rgba(var(--${stat.color}-rgb), 0.4)`,
                                                `0 0 0 10px rgba(var(--${stat.color}-rgb), 0)`,
                                            ]
                                        }}
                                        transition={{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3
                                        }}
                                    />
                                </div>
                                <span className="text-lg">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 