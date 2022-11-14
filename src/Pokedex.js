import Pokecard from './Pokecard.js';


/**
 * Used to create a list of given pokemon. Calls Pokecard component to render 
 * a Pokemon card for each given pokemon
 * 
 * Input: Array of objects with information about pokemons
 *  - Object should include 
 *         [{ id, name, type, base_experience }, ......]
 * 
 * Output: Div with class name of Pokdex
 * 
 */
function Pokedex({pokemons}){
    console.log("Pokedex");
    return(
        <div className="Pokedex container">
            <div className="row">
                {pokemons.map(p=> <Pokecard pokemon={p}/>)}
            </div>
        </div>
    )
}

export default Pokedex;