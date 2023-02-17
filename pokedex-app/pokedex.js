function logic() {
    // DONT FORGET CSS
    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;

    /*-----------------------------------------------7
     * Add your solution code here
     *---------------------------------------------*/


    const pokemon = {
        pokemonName: document.createTextNode(name),
        pokemonType: document.createTextNode(type),
        pokemonRegion: document.createTextNode(region)
    }

    const node = document.createElement("li");
    const space = document.createTextNode(' ');
    const space1 = document.createTextNode(' ');
    node.appendChild(pokemon.pokemonName);
    node.appendChild(space1);
    node.appendChild(pokemon.pokemonType);
    node.appendChild(space);
    node.appendChild(pokemon.pokemonRegion);

    console.log(pokemon.pokemonName)

    const preview = document.querySelector('#preview-button');
    const previewOutput = document.querySelector('#preview-output');

    preview.addEventListener('click', () => {
        
        if(pokemon.pokemonName.length == 0) {
            alert("Please enter a valid Pokemon")
        } 
        document.getElementById("pokedex-entries").appendChild(node);
        const previewButton = `
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                 <input type="submit">
            </form>`;
        previewOutput.innerHTML = previewButton;
        document.getElementById('name').value='';

    });


};


/*-----------------------------------------------
 * Solution must be above this comment
 *---------------------------------------------*/






