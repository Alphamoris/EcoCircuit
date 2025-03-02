"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Define the social media types to fix TypeScript errors
type SocialLinks = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  dribbble?: string;
  website?: string;
};

// Sample contributors data
const contributors = [
  {
    name: "Bhanu Prakash",
    role: "Lead Developer",
    image: "/team1.jpg",
    bio: "Full-stack developer with expertise in React and Node.js. Passionate about creating sustainable tech solutions.",
    social: {
      github: "https://github.com/bhanuprakash",
      linkedin: "https://linkedin.com/in/bhanuprakash",
      twitter: "https://twitter.com/bhanuprakash",
      website: "https://bhanuprakash.dev"
    } as SocialLinks
  },
  {
    name: "Darshan",
    role: "UI/UX Designer",
    image: "/team2.jpg",
    bio: "Creative designer focused on building intuitive and accessible user interfaces. Advocate for sustainable design practices.",
    social: {
      github: "https://github.com/aishwaryareddy",
      linkedin: "https://linkedin.com/in/aishwaryareddy",
      dribbble: "https://dribbble.com/aishwaryareddy",
      website: "https://aishwaryareddy.com"
    } as SocialLinks
  },
  {
    name: "Harshith",
    role: "Backend Engineer",
    image: "/team3.jpg",
    bio: "Systems architect specializing in scalable cloud solutions. Committed to reducing the carbon footprint of digital services.",
    social: {
      github: "https://github.com/rahulsharma",
      linkedin: "https://linkedin.com/in/rahulsharma",
      twitter: "https://twitter.com/rahulsharma",
      website: "https://rahulsharma.dev"
    } as SocialLinks
  }
];

export default function Contributors() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="contributors-section py-20 bg-primary-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            <span className="bg-primary-green text-white px-4 py-1 rounded-full text-sm font-medium">
              OUR TEAM
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
              Meet Our Contributors
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The talented individuals behind EcoCircuit working together to create a sustainable future
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {contributors.map((contributor) => (
            <motion.div
              key={contributor.name}
              variants={itemVariants}
              className="contributor-card"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-primary-green/20 absolute -inset-2 blur-lg" />
                  <Image
                    src={contributor.image}
                    alt={contributor.name}
                    width={120}
                    height={120}
                    className="contributor-image relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary-green mb-1">{contributor.name}</h3>
                <p className="text-sm text-primary-green/80 mb-3 font-medium">{contributor.role}</p>
                <div className="w-16 h-1 bg-primary-green rounded-full mb-4"></div>
                <p className="text-gray-700 text-base mb-6 px-2">{contributor.bio}</p>
              </div>
              
              <div className="contributor-social">
                {contributor.social.github && (
                  <Link href={contributor.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </Link>
                )}
                {contributor.social.linkedin && (
                  <Link href={contributor.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                )}
                {contributor.social.twitter && (
                  <Link href={contributor.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                )}
                {contributor.social.dribbble && (
                  <Link href={contributor.social.dribbble} target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </Link>
                )}
                {contributor.social.website && (
                  <Link href={contributor.social.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Interested in contributing to our mission? We&apos;re always looking for passionate individuals to join our team.
          </p>
          <motion.button
            className="bg-primary-green text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 