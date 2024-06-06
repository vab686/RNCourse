import { createContext, useState } from "react"

export const FavouritesContext = createContext({
  ids: [],
  addToFavourites: (id) => {},
  removeFromFavourites: (id) => {},
  isFavourite: (mealId) => {}
})

function FavouritesContextProvider({children}) {
  const [favourites, setFavourites] = useState([])
  
  function addToFavourites(id) {
    setFavourites((currentFavourites) => [...currentFavourites, id])
  }
  
  function removeFromFavourites(id) {
    setFavourites((currentFavourites) => currentFavourites.filter((meal) => meal !== id))
  }
  
  function isFavourite(mealId) {
    return favourites.some((meal) => meal.id === mealId)
  }

  const context = {
    ids: favourites, //.map((meal) => meal.id),
    addToFavourites,
    removeFromFavourites,
    isFavourite
  }

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContextProvider