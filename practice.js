function apiRest(){

    try{
    fetch('https://pokeapi.co/api/v2/pokeon/tyranitar')
    .then(response => response.json())
    .then(data => console.log(data))
    }catch (err)  {
        console.log(err.message)
    }
        
    
}
console.log(apiRest())