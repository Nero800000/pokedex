
 // eslint-disable-next-line


import './App.css'
import Navabar from './compenets/Navbar';
import SearchBar from './compenets/SearchBar/SearchBar'
import Pokedex from './compenets/pokedex/pokedex'
import { useEffect, useState } from 'react';
import { getPokemons,getPokemonsData, SearchPokemon } from './api';
import { FavoriteProvider } from './context/favorites';
//git push -f origin main  
 const favoritesKey = "Favorites"
 
function App() {
  const [page, setPage] = useState(0)
  const [totalPages,setTotalPages] = useState(0)
   const [loading, setLoading] = useState(false)
   const [pokemons, setPokemons] = useState([])
   const [favorites, setFavorites] = useState([])
   const [notFound, setNotFund] = useState([])

// eslint-disable-next-line
const itensPerpage = 25
  const fetchPokemons = async ()=> {
 
    
    try {
      setLoading(true)
      setNotFund(false)
      const data = await getPokemons(itensPerpage,itensPerpage *page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })
      
     const results = await Promise.all(promises)

      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerpage))
    } catch (error) {
      console.log(`fetchPokemons error:${error}`)
      
    }
    
    
 }
  const loadingFavoritesPokemons = () => {
   const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
   setFavorites(pokemons)
  }

 useEffect(()=> {
  loadingFavoritesPokemons()
},[])

 useEffect(()=> {
   fetchPokemons()
 },[page])



 const updateFavoritesPokemons = (name) => {
    const  updatedFavorites = [...favorites]
    const favoritesIndex =  favorites.indexOf(name)
    if(favoritesIndex >=0) {
      updatedFavorites.splice(favoritesIndex,1) 
    }
    else {
      updatedFavorites.push(name)  
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)


    
 }
 const onSearchHandler = async(pokemon) => {
    if(!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    setNotFund(false)
    const result = await SearchPokemon(pokemon)
     if(!result) {
       
       setNotFund(true)
     } else {
       setPokemons([result])
       setPage(0)
       setTotalPages(1)
     
     }
     setLoading(false)
 }


  return (
    <FavoriteProvider
    value={{FavoritesPokemon: favorites, 
    updateFavoritesPokemons:updateFavoritesPokemons,
    
    }} > 
    <div>  
       <Navabar/>
       <SearchBar onSearch={onSearchHandler} 
       /> 
       {notFound ? (
         <div className='not-found-text'> Meteu essa?</div>
       ):
            (<Pokedex pokemon={pokemons}
              loading={loading} Oi='oi' 
              page={page}
             totalPages={totalPages}
              setPage={setPage}
             />)}
    </div>
    </FavoriteProvider>
    
  );
}

export default App;
