import React, { createContext } from "react";

 const FavoritesContext = createContext({
     FavoritesPokemon:[],
      updateFavoritesPokemons: (id) =>null
 })

 export const FavoriteProvider = FavoritesContext.Provider

 export default  FavoritesContext