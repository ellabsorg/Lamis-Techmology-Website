import React, { createContext, useState } from "react";

export const FormationsContext = createContext();

export default function FormationsProvider({ children }) {
  const [favorite, setFavorite] = useState(
    storedFavorites ? JSON.parse(storedFavorites) : []
  );

  const addToFavorite = (joke) => {
    setFavorite((prev) => {
      if (favorite.some((item) => item.id === joke.id)) return prev;
      else return [...prev, joke];
    });
  };
  const removeFromFavorite = (joke) => {
    setFavorite(favorite.filter((item) => item.id !== joke.id));
    localStorage.setItem("favoritesList", JSON.stringify(favorite));
  };

  // console.log("favorites = ", favorite);

  localStorage.setItem("favoritesList", JSON.stringify(favorite));

  const values = {
    favorite,
    addToFavorite,
    removeFromFavorite,
  };
  return (
    <FormationsContext.Provider value={values}>
      {children}
    </FormationsContext.Provider>
  );
}
