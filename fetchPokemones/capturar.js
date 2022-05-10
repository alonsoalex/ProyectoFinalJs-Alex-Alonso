

const idRandom = Math.floor(Math.random() * 700) + 1;

const url = `https://pokeapi.co/api/v2/pokemon/${idRandom}`;






    fetch(url)

    .then(response => response.json() )
    .then(data => { 
    
    let elementoPok = document.getElementById("elementoPoke1");
    elementoPok.innerHTML = `
    <span> ${data.name} </span> 
    <img src=${data.sprites.front_default}  > 
    `;

    
        
    })
    
    .catch(err=>console.log(err))



