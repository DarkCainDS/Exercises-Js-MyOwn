const tablaMultiplicacion = numero =>{
    
    let resultado = `# Tabla del ${numero}`+ "\n";
    
    for(let z=0; z <= 10 ; z++){
        let multiplicacion = (z * numero);
        resultado += `${z} x ${numero} = ${multiplicacion}`+ "\n";
    }
    return resultado;
}
console.log(tablaMultiplicacion(7));