// import { useEffect, useState } from "react";
// import React from "react";
// const AnimeList = () => {
//   const [anime, setAnime] = useState([]);

//   useEffect(() => {
//     fetch("https://api.jikan.moe/v4/top/anime")
//       .then((res) => res.json())
//       .then((data) => setAnime(data.data));
//   }, []);

//   return (
//     <div className="w-9/12 mx-auto items-center">
//       <h2 className="text-6xl text-center mt-16 mb-8 font-bold">Top Anime</h2>
//       <h3 className="mb-14 text-center text-3xl">
//         🔥AnimeWorld🔥 is an exciting and immersive platform dedicated to anime
//         fans. It offers a wide range of features, from exploring the latest
//         anime series and discovering hidden gems of classic anime. users can
//         easily navigate through content, read reviews, and find recommendations.
//         🔥AnimeWorld🔥 is the perfect place to dive deep into the world of anime
//         and Japanese culture.
//       </h3>
//       <ul className="grid grid-cols-4 gap-y-10">
//         {anime.map((item) => (
//           <li key={item.mal_id}>
//             <img
//               className="w-[350px] h-[450px]"
//               src={item.images.jpg.image_url}
//               alt={item.title}
//               width="100"
//             />
//             <div className="font-bold text-2xl mt-3 w-8/12 ">Name: {item.title}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AnimeList;


import { useEffect, useState } from "react";
import React from "react";

const AnimeList = () => {
  const [anime, setAnime] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setAnime(data.data));

    // Add categories for filtering (you can modify this as per your data)
    setCategories([
      "all",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Slice of Life",
    ]);
  }, []);

  // Filter anime by category
  const filteredAnime = selectedCategory === "all" 
    ? anime 
    : anime.filter((item) => item.genres.some((genre) => genre.name === selectedCategory));

  return (
    <div className="w-9/12 mx-auto items-center mb-20">
      <h2 className="text-6xl text-center mt-16 mb-8 font-bold">Top Anime</h2>
      <h3 className="mb-14 text-center text-3xl">
        🔥AnimeWorld🔥 is an exciting and immersive platform dedicated to anime
        fans. It offers a wide range of features, from exploring the latest
        anime series and discovering hidden gems of classic anime. Users can
        easily navigate through content, read reviews, and find recommendations.
        🔥AnimeWorld🔥 is the perfect place to dive deep into the world of anime
        and Japanese culture.
      </h3>

      {/* Category Selection */}
      <div className="text-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border-2 justify-end border-gray-400 rounded-md"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Anime List */}
      <ul className="grid grid-cols-1 md:gap-x-10 lg:gap-x-0 md:grid-cols-2 lg:grid-cols-4 gap-y-11">
        {filteredAnime.map((item) => (
          <li key={item.mal_id}>
            <img
              className="w-[350px] h-[450px]"
              src={item.images.jpg.image_url}
              alt={item.title}
              width="100"
            />
            <div className="font-bold text-2xl mt-3 w-8/12 ">Name: {item.title}</div>
            <div className="text-xl w-8/12  mt-2">Genres: {item.genres.map(genre => genre.name).join(", ")}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
