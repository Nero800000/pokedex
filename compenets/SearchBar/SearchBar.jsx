
import React, { useState } from 'react'; 
import {SearchPokemon} from '../../api'

  // eslint-disable-next-line
 const SearchBar = (props) => {
    
     const [search,setSearch] = useState('charizard')

     const {onSearch} = props
  // eslint-disable-next-line
     const  onChangeHandler = (e) => {
         setSearch(e.target.value)
         if(e.target.value.length === 0) {
            onSearch(undefined)

         }
     }  
   

    
     const onButtonClikHandler = () => {
        onSearch(search)
         
     }
   
    return (
        
        <div className="Searchbar-container">
            <div className="searchbar">
            
                
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
            <div className='searchBar-Btn'>
               <button onClick={onButtonClikHandler}>Buscar</button> 
            </div>
            
        </div>
    )
}

export default SearchBar