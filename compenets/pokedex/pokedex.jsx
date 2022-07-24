import React from "react";
import Pagination from "../pagination/paginanation";
import Pokemon from "../Pokemon/Pokemon";

const  Pokedex = ({pokemon,loading,Oi,totalPages,BackPage,NextPage,page,setPage}) => {
     

     const BackPageHandleClick= () => {
        if(page > 0) {
            setPage(page-1)
        }
     }
     const NextPageHandleClick  = () => {
       if(page + 1 !== totalPages) {
           setPage(page +1)
       }
     }
  
     
    return (
        <div> 
        <div className="pokedex-header">
            <h1>{Oi}Pokedex</h1>
            <Pagination
               page={page+1}
               totalPages={totalPages}
                BackPage={BackPageHandleClick}
                NextPage={NextPageHandleClick}   
            />
        </div>
         {loading || !pokemon ? (<div>Carregandooooo</div>) : 

           (<div className="pokedex-grid">
                {pokemon && pokemon.map((pokemon,index)=> {
                    return (
                       <Pokemon key={index} pokemon={pokemon}/> 
                    )
                })}
           </div>
               
           
           
         )}
        </div>
    )
}

export  default Pokedex
