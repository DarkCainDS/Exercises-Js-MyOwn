function censored (text,search) {
    text_final = "";  
if(text && search){
    text_final = text.replace(new RegExp(search, 'gi') , "[censored]");
}
return text_final
    

}

console.log(censored("hola  mi hola nombre es darkcain", "hola"));