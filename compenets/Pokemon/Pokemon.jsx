import React, {useContext} from 'react'
import FavoritesContext from '../../context/favorites'
 

 const Pokemon = (props) => {
     const {FavoritesPokemon,updateFavoritesPokemons} = useContext(FavoritesContext)
     const {pokemon} = props

     const onHeartClick = () => {
         updateFavoritesPokemons(pokemon.name)
     }
    
     const Heart = FavoritesPokemon && FavoritesPokemon.includes(pokemon.name) ? "Amei": "favor"
 
   return (<div className='pokemon-card'>
        <div className='pokemon-img-container'>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image"/>
        </div>
        <div className='card-body'>
        <div className='card-top'>
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
        </div>
            <div className='card-bottom'>
             <div className='pokemon-type'>  
             {pokemon.types.map((type,index) => {
                 console.log('oi e tipo',type)
                
                 return(
                     <div key={index} className="pokemon-type-text">{type.type.name}
                
                  </div>
                 )
             })}
        </div>
           <button className='pokemon-heart-btn' onClick={onHeartClick}>
             <p>{Heart}</p> 
           </button>
          
            
           </div>
           </div> 
   </div>)
   
 }

 export default Pokemon