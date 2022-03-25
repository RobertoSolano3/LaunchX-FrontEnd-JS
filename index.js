const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            
            document.getElementById("nombrePokemon").innerHTML = data.name;
            document.getElementById("tipoPokemon").innerHTML = data.types[0].type.name;
            document.getElementById("vidaPokemon").innerHTML = data.stats[0].base_stat;
            document.getElementById("atkPokemon").innerHTML = data.stats[1].base_stat;
            document.getElementById("defPokemon").innerHTML = data.stats[2].base_stat;
            document.getElementById("atkespPokemon").innerHTML = data.stats[3].base_stat;
            document.getElementById("defespPokemon").innerHTML = data.stats[4].base_stat;
            document.getElementById("speedPokemon").innerHTML = data.stats[5].base_stat;
            document.getElementById("mov1Pokemon").innerHTML = data.moves[1].move.name;
            document.getElementById("mov2Pokemon").innerHTML = data.moves[24].move.name;
            document.getElementById("mov3Pokemon").innerHTML = data.moves[5].move.name;
            document.getElementById("mov4Pokemon").innerHTML = data.moves[10].move.name;
            
            let pokeImg = data.sprites.front_default;
            
            pokeImage(pokeImg);
            console.log(pokeImg);
            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

// const pokeName = (url) => {
//     const pokeNombre = document.getElementById("name");
//     pokeNombre.src = url;
// }
