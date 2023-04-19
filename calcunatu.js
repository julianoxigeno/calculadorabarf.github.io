const selectElement = document.querySelector('.tipo');
selectElement.addEventListener('change', (event) => {
const resultado = document.querySelector('.resultado');
var x = document.getElementById("adultos");
var a = document.getElementById("resultado");
var z = document.getElementById("cachorros");
var b = document.getElementById("resultado3");
// resultado.textContent = 'seleciiona uno';
//alert(event.target.value);
if (event.target.value == 1) {
jQuery('#select_id').prop('selectedIndex',0);
jQuery(".resultado").text("Seleccione una opción ↑");
jQuery(".cucharadas").text("");
x.style.display = "none"


if (window.matchMedia("(max-width: 768px)").matches) {
  z.style.display = "block"
} else {
  z.style.display = "inline-flex"
}


a.style.display = "none"
b.style.display = "block"  	
} else {
jQuery('#cachorro_kilo').prop('selectedIndex',0);
jQuery('#cachorro_meses').prop('selectedIndex',0);
jQuery(".resultado").text("Seleccione una opción ↑");
jQuery(".cucharadas").text("");
x.style.display = "inline-flex"
z.style.display = "none"
a.style.display = "block"
b.style.display = "none"    	
}
});
function revisar(){
var tipo = jQuery(".tipo input[type='radio']:checked").val();
// alert(tipo);
switch (tipo) {
case "1":
calcular();
break;
case "2":
val();
break;
default:
// alert("nada");
break;
}
}
function val() {
var cantidad = jQuery( "#select_id option:selected" ).val();
// var suplemento = jQuery( "#suplemento option:selected" ).val();
var suplemento = jQuery(".suplemento input[type='radio']:checked").val();
if (cantidad == "Seleccione su Peso"){
} else {
if (suplemento == 1) {
cantidad = (cantidad *30)/100;
cantidad = cantidad.toFixed(2)
} else {
cantidad = cantidad;
}
jQuery( ".resultado" ).html( '<div id="calculado"> Tu perro debe comer <span style="width: 100px;" id="comer">'+cantidad+'</span> Gramos al día.</div>' );
// jQuery( ".cucharadas" ).html( '<div id="calculado2"> Tu perro debe comer <span id="aldia"></span> cucharadas/porciones <b>al día.</b> </div>' );
}
}





// Función para calcular la cantidad de alimento
function calcular() {
  // Obtener los valores seleccionados por el usuario
  var kilos = jQuery("#cachorro_kilo option:selected").val();
  var meses = jQuery("#cachorro_meses option:selected").val();
 

  var cantidad = (kilos * meses)/100*100; //cambiar aca



  // Mostrar el resultado
  jQuery(".resultado").html("Debe dar<span style='width: 100px;' id='comer'> " + cantidad + "</span>  gramos de alimento al día");
}




jQuery('#select_id').on('input', function() {
calcularcambio();   
});
jQuery('#cachorro_kilo').on('input', function() {
var meses1 = jQuery( "#cachorro_meses option:selected" ).val();
if (meses1 == 0) {
// jQuery("#aldia .et_pb_text_inner").css("display", "inline-block;");
// jQuery('#aldia .et_pb_text_inner').text("0");
} else {
calcularcambio();  	
}  
});
jQuery('#cachorro_meses').on('input', function() {
var kilos1 = jQuery( "#cachorro_kilo option:selected" ).val();
// jQuery("#aldia .et_pb_text_inner").css("display", "inline-block;");
// jQuery('#aldia .et_pb_text_inner').text("0");
aldia = 0;
if (kilos1 == 0) {
} else {
calcularcambio();  	
}
});
function calcularcambio() {
jQuery('#buscando').css("visibility", "visible");
// 	jQuery('#suplemento').on('input', function() {
// 	calcularcambio();  
// 	alert("cambio");
// });
jQuery('input:radio[name="suplemento"]').change(function(){
calcularcambio();  
//alert("cambio");
});
setTimeout(
function() 
{  	
var tipo = jQuery(".tipo input[type='radio']:checked").val();
if (tipo == 1) {
var dividir = 3;
} else {
var dividir = 2;
}
var comer = jQuery("#comer").text();
var almes = comer;
almes = Math.round(almes);
var aldia = almes;
// caso especial para suplementacion 
//alert(aldia);
if (aldia == "1.5") {
aldia = "unaymedia";
//alert("??")
} else {
var aldia = aldia.toFixed(0);
var porciones = aldia/dividir;
// alert(porciones);
}
// porciones = porciones.toFixed(0);
porciones = Math.round(porciones*100)/100;
if (tipo == 1) {
// revisamos los valores nuevamente de la seleccion
var kilos1 = jQuery( "#cachorro_kilo option:selected" ).val();
var meses1 = jQuery( "#cachorro_meses option:selected" ).val();
if (kilos1 == 0) {aldia = "NO"}
if (meses1 == 0) {aldia = "NO"}
} else {
// revisamos la de los adultos que no este en seleccion
var peso1 = jQuery( "#select_id option:selected" ).val();
if (peso1 == "Seleccione su Peso") {aldia = "NO"}
}
switch (aldia) {
case "NO":
porciones1 = 0;
porciones2 = 0;
porciones3 = 0;
aldia = 0;
jQuery("span#aldia").css("display", "inline-block;");
jQuery("#desayuno").css("font-size", "30px");
jQuery("#almuerzo").css("font-size", "30px");
jQuery("#cena").css("font-size", "30px");	  	
break;
case "0":
if (tipo == 1) {
porciones1 = "(1/5) Un Quinto";
porciones2 = "(1/5) Un Quinto";
porciones3 = "(1/5) Un Quinto";
} else {
porciones1 = "(1/4) Un Cuarto";
porciones2 = 0;
porciones3 = "(1/4) Un Cuarto";
}						
aldia = "(1/2) Media";
setTimeout(
function() 
{  
jQuery("span#aldia").css("display", "table-header-group");	
}, 200);
jQuery("#desayuno").css("font-size", "14px");
jQuery("#almuerzo").css("font-size", "14px");
jQuery("#cena").css("font-size", "14px");
break;
case "1":
if (tipo == 1) {
porciones1 = "(1/3) Un Tercio";
porciones2 = "(1/3) Un Tercio";
porciones3 = "(1/3) Un Tercio";
} else {
porciones1 = "(1/2) Media";
porciones2 = 0;
porciones3 = "(1/2) Media";
}						
// aldia = "(1);
jQuery("#aldia").css("display", "inline-block;");	
jQuery("#desayuno").css("font-size", "16px");
jQuery("#almuerzo").css("font-size", "16px");
jQuery("#cena").css("font-size", "16px");
break;		
case "unaymedia":
if (tipo == 1) {
porciones1 = "(1) Una";
porciones2 = "0";
porciones3 = "(1/2) Media";
} else {
porciones1 = "(1) Una";
porciones2 = "0";
porciones3 = "(1/2) Media";
}						
aldia = "1 y Media";
setTimeout(
function() 
{  
jQuery("span#aldia").css("display", "table-header-group");	
}, 200);
jQuery("#desayuno").css("font-size", "14px");
jQuery("#almuerzo").css("font-size", "14px");
jQuery("#cena").css("font-size", "14px");
break;		
case "2":
if (tipo == 1) {
porciones1 = "1";
porciones2 = "0";
porciones3 = "1";
} else {
porciones1 = "1";
porciones2 = 0;
porciones3 = "1";
}	
jQuery("span#aldia").css("display", "inline-block;");	  	
jQuery("#desayuno").css("font-size", "30px");
jQuery("#almuerzo").css("font-size", "30px");
jQuery("#cena").css("font-size", "30px");	
break;	
case "3":
if (tipo == 1) {
porciones1 = "1";
porciones2 = "1";
porciones3 = "1";
} else {
porciones1 = "2";
porciones2 = 0;
porciones3 = "1";
}	
jQuery("span#aldia").css("display", "inline-block;");	  	
jQuery("#desayuno").css("font-size", "30px");
jQuery("#almuerzo").css("font-size", "30px");
jQuery("#cena").css("font-size", "30px");	
break;	
default:
if (tipo == 1) {
// alert (porciones);
var str=porciones.toString();
var porciondecimal = str.split('.')[1]; ;
// alert (porciondecimal);
if (porciondecimal >= 50) {
porciones1 = Math.ceil(porciones);// acerca al mayor
porciones2 = Math.ceil(porciones);// acerca al mayor
porciones3 = Math.floor(porciones);// acerca al menor
} else {
porciones1 = Math.ceil(porciones);
porciones2 = Math.floor(porciones);
porciones3 = Math.floor(porciones);
}
} else {
//alert (porciones);
var str=porciones.toString();
var porciondecimal = str.split('.')[1]; ;
//alert(porciondecimal);
if (porciondecimal >= 5){
porciones1 = Math.ceil(porciones);// acerca al mayor
porciones2 = 0;
porciones3 = Math.floor(porciones);// acerca al menor
} else {
porciones1 = porciones;
porciones2 = 0;
porciones3 = porciones;
}
}	
jQuery("span#aldia").css("display", "inline-block;");	  	
jQuery("#desayuno").css("font-size", "30px");
jQuery("#almuerzo").css("font-size", "30px");
jQuery("#cena").css("font-size", "30px");	  	
break;	
}
// jQuery('.scoops').html(''+aldia+' <img decoding="async" src="images/scoops.png"> al día, '+porciones1+' al desayuno, y '+porciones2+' en la cena');
jQuery('#aldia').text(aldia);
jQuery('.aldia').text(aldia);
jQuery('#desayuno').text(porciones1+" g");
jQuery('#almuerzo').text(porciones2+" g");
jQuery('#cena').text(porciones3+" g");
jQuery('#buscando').css("visibility", "hidden");
}, 500);
}
