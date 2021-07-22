var barraDeBusca = document.querySelector("#barra-busca");

barraDeBusca.addEventListener("input", function() {
    var personas = document.querySelectorAll(".persona");
    
    if(this.value.length > 0){
        for (var i = 0; i < personas.length; i++) {
            var persona = personas[i];
            var personaNome = persona.querySelector(".persona-nome");
            var nome = personaNome.textContent;
            var expressao = new RegExp(this.value,"i");
            if(!expressao.test(nome)){
                console.log('oi')
                persona.classList.add("invisivel");
            }else{
                persona.classList.remove("invisivel");
            }
        }
    } else{
        for(var i = 0; personas.length; i++){
            var persona = personas[i];
            persona.classList.remove("invisivel");
        }
    }
    
});