import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

const SubscriptionSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="py-10 bg-purple-600 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">📩 Subscribe for Anime Updates</h2>
        <p className="mb-6">Get the latest anime news & recommendations directly to your inbox!</p>
        <motion.form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email..."
            className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-pink-500 px-6 py-2 rounded-lg font-semibold shadow-md"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default SubscriptionSection;
