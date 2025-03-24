import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedAnime = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setAnime(data.data.slice(0, 6))); // Show only top 9 anime
  }, []);

  return (
    <section className="py-20 mb-10 bg-gray-100 text-white">
      <div className="w-7/12 mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-16">
          🔥 Featured Anime
        </h2>
        <Link to="/animelist">
          <div className="grid md:grid-cols-3 gap-10">
            {anime.map((item) => (
              <motion.div
                key={item.mal_id}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-gray-900 p-5 rounded-2xl shadow-md cursor-pointer"
              >
                <img
                  src={item.images.jpg.image_url}
                  alt={item.title}
                  className="w-[300px] h-[400px] mx-auto object-cover rounded-2xl"
                />
                <h3 className="text-xl font-semibold mt-3">
                  Name: {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedAnime;
