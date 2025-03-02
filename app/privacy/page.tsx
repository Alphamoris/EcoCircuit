"use client"
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Last updated: March 1, 2023
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="policy-container">
            <h2>1. Introduction</h2>
            <p>
              Welcome to EcoCircuit. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              By accessing or using our service, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our policies, please do not use our services.
            </p>
          </div>

          <div className="policy-container">
            <h2>2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and address when you register for an account or schedule a collection.</li>
              <li><strong>Device Information:</strong> Information about the electronic devices you recycle through our service.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and actions taken.</li>
              <li><strong>Location Data:</strong> General location information to facilitate e-waste collection services.</li>
            </ul>
          </div>

          <div className="policy-container">
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Processing and completing e-waste collection requests</li>
              <li>Managing your account and the Green Points reward system</li>
              <li>Communicating with you about our services, updates, and promotions</li>
              <li>Analyzing usage patterns to improve our website and services</li>
              <li>Calculating and displaying environmental impact metrics</li>
            </ul>
          </div>

          <div className="policy-container">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include data encryption, secure servers, and regular security assessments.
            </p>
            <p>
              For devices you recycle through our service, we follow industry-standard data wiping protocols to ensure all personal information is permanently removed before recycling or refurbishment.
            </p>
          </div>

          <div className="policy-container">
            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt out of marketing communications</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
          </div>

          <div className="policy-container">
            <h2>6. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          <div className="policy-container">
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> privacy@ecocircuit.com<br />
              <strong>Phone:</strong> (555) 123-4567<br />
              <strong>Address:</strong> 123 Green Street, Eco City, EC 12345
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 