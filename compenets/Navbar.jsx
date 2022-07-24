import React, {useContext} from 'react'
import FavoritesContext from '../context/favorites'

 const amei = "Amei"

 const  Navabar = ()=> {
   const {FavoritesPokemon} = useContext(FavoritesContext)
    const logoPoke = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

       return (
           <nav>
               <div>
                
                 <img src={logoPoke} alt="poke-logo" className='navbar-img' />
              
               </div>
               <div>{FavoritesPokemon ? FavoritesPokemon.length : 0}{amei}</div>
           </nav>
       )
}

export default Navabar

