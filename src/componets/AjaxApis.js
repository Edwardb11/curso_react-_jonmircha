import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}


export default class AjaxApis extends Component {
    state = {
      pokemons: [],
    };
  
    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            //console.log(json);
            // para obetener la imagen de cada uno de los pokemonos
            json.results.forEach((el) => {
              fetch(el.url)
                .then((res) => res.json())
                .then((json) => {
                  //console.log(json);
                   // //informacion sobre la API para la informacion
                  let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                  };
    
                 //spreak operator
                  let pokemons = [...this.state.pokemons, pokemon];
    
                  this.setState({ pokemons });
                });
            });
          });
      }
    
      render() {
        return (
          <>
            <h2>Peticiones Asíncronas en Componentes de Clase</h2>
            {this.state.pokemons.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.pokemons.map((el) => (
                <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
              ))
            )}
          </>
        );
      }
}