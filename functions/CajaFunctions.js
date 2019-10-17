// Varables
var borrando = new Boolean(false);
var totalCompra = 0;
var esUber = new Boolean(true);
var curMesa = 0;
var formaPago = "";
var propinaSug = 0;
var nTransas = 0;
//obtener los divs
let transas = document.getElementById("transas");
let inProp = document.getElementById("inPropina");
let mainCaja = document.getElementById("MainCaja");
let totalPagar = document.getElementById("totalPagar");
let detalleCompra = document.getElementById("aPagar");
let listaCompra = document.getElementById("detalle");
let currentMesa = document.getElementById("numMesa");
let botonesPrincipales = document.getElementById("botonesPrincipales");
let botonesAperitivos = document.getElementById("botonesAperitivos");
let botonesHamburguesas = document.getElementById("botonesHamburguesas");
let botonesBebestibles = document.getElementById("botonesBebestibles");
let botonesPostres = document.getElementById("botonesPostres");
let cancelBorrar = document.getElementById("botonCancelaBorrar");
let botonesBebidas = document.getElementById("botonesBebidas");
let botonesJugos = document.getElementById("botonesJugos");
let botonesTe = document.getElementById("botonesTe");
let botonesKombu = document.getElementById("botonesKombu");

let vida = document.getElementById("vida");
let Total = document.getElementById("Total");
let Mensaje = document.getElementById("Mensajes");
let Compras = document.getElementById("Compras");
let transasBtns = document.getElementById("transasBtns");
let propi = document.getElementById("propi");
let inPago = document.getElementById("Pago");
let muestraTrans = document.getElementById("muestraTrans");
currentMesa.innerHTML = "UBER";
// Lista de productos
var items = [
	{ name: 'Aros de Cebolla', code: 'aros', price: 2500, priceUber: 2000 },
	{ name: 'Porcion Falafel', code: 'falafel', price: 2500, priceUber: 2000 },
	{ name: 'Porcion Nuggets', code: 'nuggets', price: 2800, priceUber: 2000 },
	{ name: 'Satanica Normal', code: 'satanica', price: 4800, priceUber: 2000 },
	{ name: 'Clasica Normal', code: 'clasica', price: 4200, priceUber: 2000 },
	{ name: 'Enganosa Normal', code: 'enganosa', price: 5200, priceUber: 2000 },
	{ name: 'Exotica Normal', code: 'exotica', price: 4200, priceUber: 2000 },
	{ name: 'Andina Normal', code: 'andina', price: 5200, priceUber: 2000 },
	{ name: 'Vroaster Normal', code: 'vroaster', price: 5200, priceUber: 2000 },
	{ name: 'Frijolera Normal', code: 'frijolera', price: 5300, priceUber: 2000 },
	{ name: 'Supremas', code: 'supremas', price: 3990, priceUber: 2000 },
	{ name: 'Satanica Bronto', code: 'satanicaB', price: 6300, priceUber: 2000 },
	{ name: 'Clasica Bronto', code: 'clasicaB', price: 5700, priceUber: 2000 },
	{ name: 'Enganosa Bronto', code: 'enganosaB', price: 6700, priceUber: 2000 },
	{ name: 'Exotica Bronto', code: 'exoticaB', price: 5700, priceUber: 2000 },
	{ name: 'Andina Bronto', code: 'andinaB', price: 6700, priceUber: 2000 },
	{ name: 'Vroaster Bronto', code: 'vroasterB', price: 6700, priceUber: 2000 },
	{ name: 'Frijolera Bronto', code: 'frijoleraB', price: 6800, priceUber: 2000 },
	{ name: 'Coca-Cola Normal', code: 'cocaN', price: 1200, priceUber: 2000 },
	{ name: 'Coca-Cola Zero', code: 'cocaZ', price: 1200, priceUber: 2000 },
	{ name: 'Fanta Normal', code: 'fantaN', price: 1200, priceUber: 2000 },
	{ name: 'Fanta Zero', code: 'fantaZ', price: 1200, priceUber: 2000 },
	{ name: 'Sprite Normal', code: 'spriteN', price: 1200, priceUber: 2000 },
	{ name: 'Sprite Zero', code: 'spriteZ', price: 1200, priceUber: 2000 },
	{ name: 'Jugo Mango', code: 'jugoMan', price: 2400, priceUber: 2000 },
	{ name: 'Jugo Melon', code: 'jugoMel', price: 2400, priceUber: 2000 },
	{ name: 'Jugo Frambuesa', code: 'jugoFram', price: 2400, priceUber: 2000 },
	{ name: 'Jugo Frutilla', code: 'jugoFru', price: 2400, priceUber: 2000 },
	{ name: 'Te Rex Verde Durazno', code: 'TVD', price: 1890, priceUber: 2000 },
	{ name: 'Te Rex Verde Limon', code: 'TVL', price: 1890, priceUber: 2000 },
	{ name: 'Te Rex Negro Durazno', code: 'TND', price: 1890, priceUber: 2000 },
	{ name: 'Te Rex Negro Limon', code: 'TNL', price: 1890, priceUber: 2000 },
	{ name: 'Limonada', code: 'limonada', price: 2500, priceUber: 2000 },
	{ name: 'Kombu Original', code: 'kombuO', price: 2500, priceUber: 2000 },
	{ name: 'Kombu Heart Beat', code: 'kombuH', price: 2500, priceUber: 2000 },
	{ name: 'Kombu SunShot', code: 'kombuS', price: 2500, priceUber: 2000 },
	{ name: 'Brownie', code: 'brownie', price: 1900, priceUber: 2000 },
	{ name: 'Brownie con Helado', code: 'brownieH', price: 2800, priceUber: 2000 },
	{ name: 'Cono Simple', code: 'conoS', price: 1490, priceUber: 2000 },
	{ name: 'Cono Doble', code: 'conoD', price: 2790, priceUber: 2000 },
	{ name: 'Triceratops', code: 'triceratops', price: 3500, priceUber: 2000 },
	{ name: 'Tetera', code: 'tetera', price: 1200, priceUber: 2000 },
	{ name: 'Nescafe', code: 'nescafe', price: 800, priceUber: 2000 },
	{ name: 'Cafe Grano', code: 'cafeGrano', price: 1400, priceUber: 2000 },
	{ name: 'Chorrillana', code: 'chorrillana', price: 5800, priceUber: 2000 },
	{ name: 'Menu Niñosaurio', code: 'menuKid', price: 3800, priceUber: 2000 },
	{ name: 'Extra Mayo Normal', code: 'extraMayoN', price: 300, priceUber: 2000 },
	{ name: 'Extra Mayo Ajo', code: 'extraMayoA', price: 300, priceUber: 2000 },
	{ name: 'Extra Mayo Merken', code: 'extraMayoM', price: 300, priceUber: 2000 },
	{ name: 'Extra Salsa Tartara', code: 'extraSalsaT', price: 300, priceUber: 2000 },
	{ name: 'Extra Salsa BBQ', code: 'extraSalsaB', price: 300, priceUber: 2000 },
	{ name: 'Extra Tomate', code: 'extraTomate', price: 300, priceUber: 2000 },
	{ name: 'Extra Lechuga', code: 'extraLechuga', price: 300, priceUber: 2000 },
	{ name: 'Extra Pepinillo', code: 'extraPepo', price: 300, priceUber: 2000 },
	{ name: 'Extra Aji', code: 'extraAji', price: 300, priceUber: 2000 },
	{ name: 'Extra Cebolla Morada', code: 'extraCebollaM', price: 300, priceUber: 2000 },
	{ name: 'Extra Pimentón', code: 'extraPimenton', price: 300, priceUber: 2000 },
	{ name: 'Extra Queso Vegan', code: 'extraQueso', price: 600, priceUber: 2000 },
	{ name: 'Extra Plátano Frito', code: 'extraPlatanoF', price: 600, priceUber: 2000 },
	{ name: 'Extra Tofu Revuelto', code: 'extraTofuR', price: 600, priceUber: 2000 },
	{ name: 'Extra Palta', code: 'extraPalta', price: 600, priceUber: 2000 },
	{ name: 'Extra Hummus', code: 'extraHummus', price: 600, priceUber: 2000 },
	{ name: 'Extra Guacamole', code: 'extraGuacamole', price: 600, priceUber: 2000 },
	{ name: 'Extra Cebolla Caramelizada', code: 'extraCebollaC', price: 600, priceUber: 2000 },
	{ name: 'Extra Champiñones', code: 'extraChampi', price: 600, priceUber: 2000 },
	{ name: '', code: '', price: 3800, priceUber: 2000 },
	{ name: '', code: '', price: 3800, priceUber: 2000 }
]
//Guarda los items ya seleccionados
var currentCompra = new Array();
var cuentaMesas = new Array(11);
var Transacciones = new Array();
for (i = 0; i < cuentaMesas.length; i++) {
	cuentaMesas[i] = { key: null, items: null, porPagar: false, total: null };
}
// esconde y muestra los botones
function selectType(tipo) {
	if (tipo == "Aperitivos") {
		
		botonesAperitivos.style.display = 'block';
		botonesPostres.style.display = 'none';
		botonesHamburguesas.style.display = 'none';
		botonesBebestibles.style.display = 'none';
		ocultarSabores();
	} else {
		if (tipo == "Hamburguesas") {
			
			botonesHamburguesas.style.display = 'block';
			botonesAperitivos.style.display = 'none';
			botonesBebestibles.style.display = 'none';
			botonesPostres.style.display = 'none';
			ocultarSabores();
		} else {
			if (tipo == "Bebestibles") {
				
				botonesBebestibles.style.display = 'block';
				botonesAperitivos.style.display = 'none';
					botonesHamburguesas.style.display = 'none';
					botonesPostres.style.display = 'none';
					ocultarSabores();
			} else {
				if(tipo == "Postres"){
					botonesBebestibles.style.display = 'none';
					botonesAperitivos.style.display = 'none';
					botonesHamburguesas.style.display = 'none';
					botonesPostres.style.display = 'block';
					ocultarSabores();

				}else{
					if (tipo == "volver") {
						botonesPrincipales.style.display = 'block';
						botonesAperitivos.style.display = 'block';
						document.getElementById("listaEspera").style.display = "none";
						botonesHamburguesas.style.display = 'none';
						botonesBebestibles.style.display = 'none';
						mainCaja.style.display = 'block';
                    	detalleCompra.style.display = 'none';
                    	transas.style.display = "none";
						pagoCustom = false;
						cambiandoMesa = false;
						ocultarSabores();
						Mesas(curMesa);
					}
				}
			}
		}
	}
}
// funcion de agregar item 
function selectItem(item) {
	if (cuentaMesas[curMesa].porPagar == false) {
		if (borrando == false) {
			vida.innerHTML = "";
			for (i = 0; i < items.length; i++) {
				if (item == items[i].code) {
					if (esUber == false) {
						let precio = parseInt(items[i].price);
						totalCompra = precio + totalCompra;
						currentCompra.push({ "name": items[i].name, "price": precio, "code": items[i].code });
						Total.innerHTML = "$" + totalCompra;
					} else {
						let precio = parseInt(items[i].priceUber);
						totalCompra = precio + totalCompra;
						currentCompra.push({ "name": items[i].name, "price": precio, "code": items[i].code });
						Total.innerHTML = "$" + totalCompra;
					}
				}
			}
			for (i = 0; i < currentCompra.length; i++) {
				vida.innerHTML += currentCompra[i].name + " $" + currentCompra[i].price + "<br />";
			}
		} else {
			borrarItem = currentCompra.findIndex(x => x.code === item);
			if (borrarItem > -1) {
				borrarPrecio = currentCompra[borrarItem].price;
				currentCompra.splice(borrarItem, 1);
				totalCompra = totalCompra - borrarPrecio;
				borrando = false;
				Total.innerHTML = "$" + totalCompra;
				vida.innerHTML = "";
				cancelBorrar.style.display = 'none';
				for (i = 0; i < currentCompra.length; i++) {
					vida.innerHTML += currentCompra[i].name + " $" + currentCompra[i].price + "<br />";
				}
			} else {
				Total.innerHTML = "No está este item, intenta con otro...";
			}
		}
	} else {
			document.getElementById("ventanaAlertas").style.display = "block";
			
	}
}
//Guardar
function preGuardar() {
	if (cuentaMesas[curMesa].porPagar == false) {
		let trans = { key: curMesa, items: currentCompra, porPagar: false, total: totalCompra };
		cuentaMesas[curMesa] = trans;
		Total.innerHTML = "Mesa " + curMesa + " guardada exitosamente!";
		mostrarAllMesas();
	} else {
		Total.innerHTML = "Esta cuenta ya esta enviada";
	}
}
// Acceder a la mesa
function Mesas(Mesa) {
	currentCompra = [];
	curMesa = Mesa;
	vida.innerHTML = "";
	totalCompra = 0;
	if (Mesa == 0) {
		currentMesa.innerHTML = "UBER";
		esUber = true;
	} else {
		currentMesa.innerHTML = "MESA " + curMesa;
		esUber = false;
	}
	Total.innerHTML = "$" + totalCompra;
	if (cuentaMesas[Mesa].items != null) {
		for (i = 0; i < cuentaMesas[Mesa].items.length; i++) {
			currentCompra.push({ name: cuentaMesas[Mesa].items[i].name, price: cuentaMesas[Mesa].items[i].price, code: cuentaMesas[Mesa].items[i].code });
			totalCompra += cuentaMesas[Mesa].items[i].price;
		}
		for (i = 0; i < currentCompra.length; i++) {
			vida.innerHTML += currentCompra[i].name + " $" + currentCompra[i].price + "<br />";
		}
		Total.innerHTML = "$" + totalCompra;
	}
}
//acciona la funcion de borrar
function borrar() {
	borrando = true;
	Total.innerHTML = "Selecciona item a borrar";
	cancelBorrar.style.display = 'block';
}
function cancelaBorrar() {
	borrando = false;
	Total.innerHTML = "$" + totalCompra;
	cancelBorrar.style.display = 'none';
}
function isUber() {
	esUber = true;
	Mensaje.innerHTML = "Esta compra es por uber eats";
}
var compraPorMesa = 0;
var totalMesas = 0;
function mostrarAllMesas() {
	Compras.innerHTML = "";
	totalMesas = 0;
	for (i = 0; i < cuentaMesas.length; i++) {
		compraPorMesa = 0;
		if (cuentaMesas[i].key != null) {
			for (j = 0; j < cuentaMesas[i].items.length; j++) {
				let precio = cuentaMesas[i].items[j].price;
				compraPorMesa += precio;
			}
			Compras.innerHTML += "Mesa " + i + " Total= $" + compraPorMesa + "<br />"
			totalMesas += compraPorMesa;
		}
	}
	Compras.innerHTML += "Total $" + totalMesas;
}
function prePagar() {
     if(esUber == false){
         if (cuentaMesas[curMesa].porPagar == true) {
             listaCompra.innerHTML = "";
             mainCaja.style.display = "none";
             transasBtns.style.display = "block";
             detalleCompra.style.display = "block";
             propi.style.display = "block";
             
             propinaSug = (totalCompra * 10) / 100;
             
             for (i = 0; i < currentCompra.length; i++) {
                 listaCompra.innerHTML += currentCompra[i].name + " $" + currentCompra[i].price + "<br />";
             }
             totalPagar.innerHTML = "Total: $" + totalCompra + " Propina Sugerida: $" + propinaSug;
             inProp.value = propinaSug;
        } else {
             Total.innerHTML = "Debes imprimir antes de pagar!";
        }
    }else{
		if (cuentaMesas[curMesa].porPagar == true){

			listaCompra.innerHTML = "";
			transasBtns.style.display = "none";
			mainCaja.style.display = "none";
			detalleCompra.style.display = "block";
			propi.style.display = "none";
			inPago.style.display = "none";
			for (i = 0; i < currentCompra.length; i++) {
	
				listaCompra.innerHTML += currentCompra[i].name + " $" + currentCompra[i].price + "<br />";
				
			}
		}else{
			Total.innerHTML = "Debes imprimir antes de pagar!";
			}
			totalPagar.innerHTML = "Total: $" + totalCompra ;
			formaPago = "Uber";
        }
             
    }

function imprimir() {
	if (cuentaMesas[curMesa].porPagar == false) {
		preGuardar();
		cuentaMesas[curMesa].porPagar = true;
		Total.innerHTML = "Imprimiendo voucher!";
	} else {
		Total.innerHTML = "Ya está impreso!";
	}
}
var nCuentas = 1;
var nT = 0; //numero de veces repetido el ciclo

var curCompraObject = {};
function pagar() {
        
	if (pagoCustom == false) {
		if (formaPago !== "") {
			
			
			for (i in currentCompra){
				curCompraObject[i] = currentCompra[i];
			}
			guardarItem(curCompraObject);
			let pro = inProp.value;
			guardarCompra( pro, totalCompra);
			curCompraObject = {};
			Transacciones.push({ transID: nTransas, formaPago: formaPago, items: currentCompra, propina: inProp.value, total: totalCompra});
			nTransas += 1;
			cuentaMesas[curMesa] = { key: null, items: null, porPagar: false, total: null };
            alert("Pagado Exitosamente!");
			Mesas(curMesa);
			mostrarAllMesas();
            selectType("volver");
		} else {
			totalPagar.innerHTML = "Agrega forma de pago!"
         }
	} else {
		var itemsChecked = new Array();
		let allCheck = document.querySelectorAll("#checkItem");
			
			if (formaPago !== "") {
				
				if (nT < totalCompra) {
					for(i=0; i<allCheck.length; i++){
						if(allCheck[i].checked == true){
							allCheck[i].disabled = true;
							allCheck[i].checked = false;
							itemsChecked.push(currentCompra[i]);
						}
					}
					document.getElementById("volverBtn").style.display = "none";

					Transacciones.push({ transID: nTransas, formaPago: formaPago, items: itemsChecked, propina: inProp.value, total: sumaCheck });
					let falta = totalCompra - nT;
					totalCompra = falta;
					nTransas += 1;
					alert("Pagado Exitosamente! Faltan $" + falta);
				} else {
					
					if (nT == totalCompra) {
						Transacciones.push({ transID: nTransas, time: tiempo, dia: Dia, mes: Mes, year: Year, formaPago: formaPago, items: itemsChecked, propina: inProp.value, total: sumaCheck });
						cuentaMesas[curMesa] = { key: null, items: null, porPagar: false, total: null };
						Mesas(curMesa);
						mostrarAllMesas();
						nTransas += 1;
						nT = 0;
						
						pagoCustom = false;
						document.getElementById("volverBtn").style.display = "block";
						
                        document.getElementById("inPropina").value = null;
                        alert("Pagado Exitosamente!");
						selectType("volver");
					}
				}
				
			} else {
				totalPagar.innerHTML = "Agrega forma de pago!"
			}
							
		
	}
    formaPago = "";
    
}
var pagoCustom = new Boolean(false);
function custom() {
	if (pagoCustom == false) {
		
		pagoCustom = true;
		document.getElementById("inPropina").value = null;
		listaCompra.innerHTML = "";
		for(i=0;i<currentCompra.length;i++){
			var newCheck = document.createElement("input");
			var newLabel = document.createElement("label");
			var saltoLinea = document.createElement("div");
			newCheck.type = 'checkbox';
			newCheck.value = currentCompra[i].price;
			newCheck.setAttribute("onclick", "checkCuenta()");
			newCheck.id = "checkItem";
			newLabel.innerHTML = currentCompra[i].name + " $" + currentCompra[i].price + "<br />"  ;
	
			listaCompra.appendChild(newCheck);
			listaCompra.appendChild(newLabel);
			listaCompra.appendChild(saltoLinea);
		}
	}
}

var sumaCheck = 0;
function checkCuenta(){
	sumaCheck = 0;
	let allCheck = document.querySelectorAll("#checkItem");
	for(i=0; i< allCheck.length; i++){
		if(allCheck[i].checked == true){
			precio = parseInt(allCheck[i].value);
			sumaCheck += precio;
		}
	}
	let falta = totalCompra - sumaCheck;
	totalPagar.innerHTML = "a pagar: $" + totalCompra + "<br />" + "pagando: $" + sumaCheck + "<br /> _______________<br />" + "falta: $" + falta;
	propinaSug = (sumaCheck * 10) / 100;
	inProp.value = propinaSug;
	nT = sumaCheck;

}

 var listaMesas = document.querySelectorAll(".cadaMesa");
 function listaVentas(){
     muestraTrans.innerHTML = "";
     botonesPrincipales.style.display = 'none';
     botonesAperitivos.style.display = 'none';
     botonesHamburguesas.style.display = 'none';
     botonesBebestibles.style.display = 'none';
     mainCaja.style.display = 'none';
     detalleCompra.style.display = 'none';
	 transas.style.display = 'block';
	let totalVentas = 0; 
	let totalPropinas = 0;	

    for (i = 0; i < Transacciones.length; i++) {
        muestraTrans.innerHTML += Transacciones[i].transID + " fPago: " + Transacciones[i].formaPago + " Total: $" + Transacciones[i].total + " Propina: " + Transacciones[i].propina + "<br />";
		tran = parseInt(Transacciones[i].total);
		prop = parseInt(Transacciones[i].propina);
		totalPropinas += prop;
		totalVentas += tran;
		}
		muestraTrans.innerHTML += "Total: $" + totalVentas + " Total Propinas: $" + totalPropinas;
		loop = 0;
	for(i=0; i<listaMesas.length;i++){
	
		listaMesas[i].innerHTML = "Mesa " + i + "<br />";
		if(cuentaMesas[i].items !== null){
			
			loop += 1;
			for(j=0; j < cuentaMesas[i].items.length ; j++){
				listaMesas[i].innerHTML += cuentaMesas[i].items[j].name + " $" + cuentaMesas[i].items[j].price +"<br />";
			}
		}
	}
	
}

var cambiandoMesa = false;
var seleccionCambio = false;
var mesaAcambiar = 0;
function cambiarMesa(mesita){

	
	if(cambiandoMesa == true && seleccionCambio == false){
		mesaAcambiar = mesita;
		seleccionCambio = true;
	}else if (cambiandoMesa == true && seleccionCambio == true){
		let hola = cuentaMesas[mesita];
		if(cuentaMesas[mesita].key != null){
			cuentaMesas[mesita] = cuentaMesas[mesaAcambiar];
			cuentaMesas[mesaAcambiar] = hola;
		}else{
			cuentaMesas[mesita] = cuentaMesas[mesaAcambiar];
			cuentaMesas[mesaAcambiar] = { key: null, items: null, porPagar: false, total: null };

		}
		seleccionCambio = false;
		cambiandoMesa = false;
		mesaAcambiar= 0;
		mostrarAllMesas();
		listaVentas();
	}
}

function mostrarSabores(type){
	if(type == "bebida"){
		botonesBebidas.style.display = 'block';
		botonesBebestibles.style.display = 'none';
	}else if(type == "Jugo"){
		botonesJugos.style.display = 'block';
		botonesBebestibles.style.display = 'none';
	}else if(type == "TRex"){
		botonesTe.style.display = 'block';
		botonesBebestibles.style.display = 'none';	
	}else if(type == "Kombu"){
		botonesKombu.style.display = 'block';
		botonesBebestibles.style.display = 'none';
	}

}

function ocultarSabores(){
	botonesBebidas.style.display = 'none';
	botonesJugos.style.display = 'none';
	botonesTe.style.display = 'none';
	botonesKombu.style.display = 'none';
}

function cerrarVentana(){
	document.getElementById("ventanaAlertas").style.display = "none";
}

function listaEspera(){
	document.getElementById("listaEspera").style.display = "flex";
	mainCaja.style.display = "none";


}





// AJAXSS


function guardarItem(obj){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		idDetalle = parseInt(this.responseText);
		alert('guardade');
	  }
	};
	let obj2 = JSON.stringify(obj);
	xhttp.open("POST", "data/consultasCaja.php", false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	statusRequest = "addDetalle";
	let dataa = 'items='+obj2+'&curStatus='+statusRequest;
	xhttp.send(dataa);
	
}	

var statusRequest = "";
var idDetalle;


  function guardarCompra(propine, totalcomp) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	
		alert('todo ok');
	  }
	};
	xhttp.open("POST", "data/consultasCaja.php", false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	statusRequest = "addTotal";
	let ffpago = 1;
	let dataa = 'metodoPago='+ffpago+'&curStatus='+statusRequest+'&propina='+propine+'&total='+totalcomp+'&mesa='+curMesa+'&idDetalle='+idDetalle;
	
	xhttp.send(dataa);
  }
