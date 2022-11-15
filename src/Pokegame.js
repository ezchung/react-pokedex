import Pokedex from './Pokedex.js';
const _ = require('lodash');

function Pokegame({pokemons}) {
  console.debug('Pokegame');
  const shuffledPokemon = _.shuffle(pokemons);
  const player1 = shuffledPokemon.slice(0, (pokemons.length / 2));
  const player1PokemonExp = player1.reduce((exp, p) => {
    return exp + p.base_experience;
  }, 0);
  const player2 = shuffledPokemon.slice((pokemons.length / 2));
  const player2PokemonExp = player2.reduce((exp, p) => {
    return exp + p.base_experience;
  }, 0);

  console.log('Player1 EXP', player1PokemonExp);
  console.log('Player2 EXP', player2PokemonExp);
  let player1Win;
  let player2Win;
  let tied = false;

  if (player1PokemonExp > player2PokemonExp) {
    player1Win = true;
    player2Win = false;
  } else if (player2PokemonExp > player1PokemonExp) {
    player1Win = false;
    player2Win = true;
  } else {
    tied = <h3 className="Pokegame-tie">This is a tie!</h3>;
  }

  return (
    <div className='Pokegame'>
      {tied}
      <div className='Pokegame-player1'>
        <h3 className="Pokegame-player1-header">Player 1</h3>
        <Pokedex pokemons={player1} exp={player1PokemonExp} isWinner={player1Win}/>
      </div>
      <div className='Pokegame-player2'>
        <h3 className="Pokegame-player1-header">Player 2</h3>
        <Pokedex pokemons={player2} exp={player2PokemonExp} isWinner={player2Win}/>
      </div>
    </div>
  )
}

export default Pokegame;