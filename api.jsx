 
// eslint-disable-next-line

export const SearchPokemon = async(pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const responce = await fetch(url)
        return await responce.json()

    } catch (error) {
         console.log('Vacilou man', error)
    }
}

export const getPokemons = async(limit , offset) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const responce = await fetch(url)
        return await responce.json()

    } catch (error) {
         console.log('Vacilou man', error)
    }
}

export const getPokemonsData = async(url) => {
    try {
     
        const responce = await fetch(url)
        return await responce.json()

    } catch (error) {
         console.log('Vacilou man', error)
    }
}