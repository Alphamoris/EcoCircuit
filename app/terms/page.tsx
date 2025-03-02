"use client"
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
            Terms of Service
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the EcoCircuit platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the platform following any changes constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div className="policy-container">
            <h2>2. Description of Service</h2>
            <p>
              EcoCircuit provides an e-waste recycling platform that allows users to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Schedule e-waste collection from their location</li>
              <li>Track their environmental impact from recycling activities</li>
              <li>Earn and redeem Green Points for sustainable products</li>
              <li>Access educational resources about e-waste management</li>
            </ul>
            <p className="mt-4">
              We strive to ensure our service is available 24/7, but we do not guarantee uninterrupted access to our platform.
            </p>
          </div>

          <div className="policy-container">
            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our platform, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Providing accurate and complete information when creating your account</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
            </ul>
            <p className="mt-4">
              We reserve the right to terminate accounts that violate our terms or for any other reason at our sole discretion.
            </p>
          </div>

          <div className="policy-container">
            <h2>4. Collection Services</h2>
            <p>
              When scheduling an e-waste collection through our platform:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>You must provide accurate information about the items to be collected</li>
              <li>You must ensure the items are accessible at the scheduled time</li>
              <li>You agree to transfer ownership of the items to EcoCircuit upon collection</li>
              <li>You are responsible for removing all personal data from devices before collection</li>
            </ul>
            <p className="mt-4">
              While we offer data wiping services, we recommend backing up and removing all personal data from your devices before collection.
            </p>
          </div>

          <div className="policy-container">
            <h2>5. Green Points Program</h2>
            <p>
              Our Green Points program allows users to earn points for recycling activities and redeem them for sustainable products.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Points are awarded based on the type and quantity of items recycled</li>
              <li>Points have no monetary value and cannot be exchanged for cash</li>
              <li>Points expire 12 months after they are earned if not redeemed</li>
              <li>We reserve the right to modify the program, including point values and redemption options</li>
            </ul>
          </div>

          <div className="policy-container">
            <h2>6. Intellectual Property</h2>
            <p>
              All content on the EcoCircuit platform, including text, graphics, logos, and software, is the property of EcoCircuit or its content suppliers and is protected by intellectual property laws.
            </p>
            <p className="mt-4">
              You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>
          </div>

          <div className="policy-container">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, EcoCircuit shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers or data</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or other harmful code transmitted through our service</li>
            </ul>
          </div>

          <div className="policy-container">
            <h2>8. Changes to Terms</h2>
            <p>
              We may revise these Terms of Service at any time without notice. By continuing to use our platform after any changes, you accept the revised terms.
            </p>
            <p className="mt-4">
              We encourage you to periodically review these terms to stay informed about our policies.
            </p>
          </div>

          <div className="policy-container">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> terms@ecocircuit.com<br />
              <strong>Phone:</strong> (555) 123-4567<br />
              <strong>Address:</strong> 123 Green Street, Eco City, EC 12345
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 