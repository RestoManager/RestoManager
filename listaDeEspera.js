let Lista = document.getElementById("Lista");
let person = document.getElementById("Personas");
let inputName = document.getElementById("nombre");
var nPersonas = 0;
var saveListaEspera = new Array;

function submituser(){
    if(nPersonas > 0 && inputName.value != ""){

        let user = inputName.value;
        saveListaEspera.push({nombre : user, cantidad: nPersonas, tiempo: 0, set time(time){this.tiempo +=1;}});
        nPersonas = 0;
        inputName.value = "";
        person.innerHTML = "Numero de personas= " + nPersonas;
        dibujarLista();
    }

}

function dibujarLista(){
    Lista.innerHTML = "";
    for(i=0; i < listaEspera.length; i++){

        Lista.innerHTML += listaEspera[i].nombre + " nPersonas: " + listaEspera[i].cantidad + " Tiempo: " + listaEspera[i].tiempo + "<br />";
    }
}
function adduser(){
    nPersonas += 1;
    person.innerHTML = "Numero de personas= " + nPersonas;
}

function subtractuser(){
    if(nPersonas > 0){
        nPersonas -= 1;
        person.innerHTML = "Numero de personas= " + nPersonas;
    }
}



setTimeout("unseg()", 1000);

function unseg(){
    for(i=0; i < listaEspera.length; i++){
        listaEspera[i].time += 1;
    }
    again();
    dibujarLista();
}

function again(){
    setTimeout("unseg()", 1000);
}
