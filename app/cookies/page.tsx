"use client"
import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Last updated: March 1, 2023
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary-green mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>

            <h2 className="text-2xl font-bold text-primary-green mb-4 mt-8">2. How We Use Cookies</h2>
            <p>
              EcoCircuit uses cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be turned off in our systems.</li>
              <li><strong>Performance cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functional cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-green mb-4 mt-8">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-primary-green/10">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_session</td>
                    <td className="border border-gray-300 px-4 py-2">Maintains your session state across page requests</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to distinguish users</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to distinguish users</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">_fbp</td>
                    <td className="border border-gray-300 px-4 py-2">Used by Facebook to deliver advertisements</td>
                    <td className="border border-gray-300 px-4 py-2">3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-primary-green mb-4 mt-8">4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. You can also use the &quot;Help&quot; option in your browser for more details.
            </p>
            <p>
              Please note that if you choose to block or delete cookies, some features of our website may not function correctly.
            </p>

            <h2 className="text-2xl font-bold text-primary-green mb-4 mt-8">5. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third parties on our website. These third parties may include analytics providers, advertising networks, and social media platforms. We do not control these third-party cookies and recommend that you check the privacy policies of these third parties to understand how they use your information.
            </p>

            <h2 className="text-2xl font-bold text-primary-green mb-4 mt-8">6. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-primary-green mb-4 mt-8">7. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> alphamoris45@gmail.com<br />
              <strong>Phone:</strong> +91 7010815310<br />
              <strong>Address:</strong> Paniamalar Engineering College, Chennai
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 