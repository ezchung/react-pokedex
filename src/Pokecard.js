import './Pokecard.css';

/**
 * Used to create a pokemon card
 * 
 * Input: Object with information about pokemon
 *  - Object should include 
 *         { id, name, type, base_experience }
 *  - Image will be created with id.
 * 
 * Output: Div with class name of Pokecard
 * 
 */
function Pokecard({pokemon}){
    const POKE_IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    console.log("Pokecard");
    return(
        <div className="Pokecard col-3">
            <div className="Pokecard-inner"> 
                <p className="Pokecard-name">{pokemon.name}</p>
                <img className="Pokecard-img"src={POKE_IMG} alt={pokemon.name} />
                <p className="Pokecard-type">Type: {pokemon.type}</p>
                <p className="Pokecard-exp">Exp: {pokemon.base_experience}</p>
            </div>
        </div>
    );
}

export default Pokecard;