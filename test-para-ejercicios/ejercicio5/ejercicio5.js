const porcentage = (number,percent) => {
    let resultado = (percent / 100) * number;
    return `El ${percent} % de ${number} es igual a: ${resultado}`

    
}

module.exports = porcentage;
