import Pokecard from './Pokecard.js';
import './Pokedex.css';

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

function Pokedex({pokemons, exp, isWinner}){
    console.log("Pokedex");
    let winnerMessage;
    if (isWinner) {
        winnerMessage = <h3 className="Pokedex-winner-message">THIS HAND WINS!</h3>
    }
    return(
        <div className="Pokedex container">
            {winnerMessage}
            <div className="row">
                {pokemons.map(p=> <Pokecard pokemon={p}/>)}
            </div>
        </div>
    )
}

export default Pokedex;