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
jQuery( ".resultado" ).html( '<div id="calculado"> Tu perro debe comer <span style="width: 100px;" id="comer">'+cantidad+'</span> Kilos al mes.</div>' );
jQuery( ".cucharadas" ).html( '<div id="calculado2"> Tu perro debe comer <span id="aldia"></span> cucharadas/porciones <b>al día.</b> </div>' );
}
}
// function calcular(){
// var kilos1 = jQuery( "#cachorro_kilo option:selected" ).val();
// var meses1 = jQuery( "#cachorro_meses option:selected" ).val();
// // var suplemento1 = jQuery( "#suplemento option:selected" ).val();
// var suplemento1 = jQuery(".suplemento input[type='radio']:checked").val();
// // alert(kilos1);
// // alert(meses1);
// jQuery.post("calcular.php", {meses: meses1, kilos: kilos1, suplemento: suplemento1 }, function(htmlexterno){
// jQuery(".resultado").html(htmlexterno);
// });  
// }


// Definir la tabla de valores como objeto
var tabla_cachorro = {
  "1 a 2": {
    "_2_a_3": 1.3,
    "_4_a_5": 0.9,
    "_6_a_7": 0.8,
    "_8_a_9": 0.6,
    "_10_a_11": 0.5
  },
  "3 a 4": {
    "_2_a_3": 2.9,
    "_4_a_5": 2.2,
    "_6_a_7": 1.8,
    "_8_a_9": 1.5,
    "_10_a_11": 1.1
  },
  "5 a 6": {
    "_2_a_3": 4.6,
    "_4_a_5": 3.5,
    "_6_a_7": 2.9,
    "_8_a_9": 2.3,
    "_10_a_11": 1.7
  },
  "7 a 8": {
    "_2_a_3": 6.3,
    "_4_a_5": 4.7,
    "_6_a_7": 3.9,
    "_8_a_9": 3.2,
    "_10_a_11": 2.4
  },
  "9 a 10": {
    "_2_a_3": 8.0,
    "_4_a_5": 6.0,
    "_6_a_7": 5.0,
    "_8_a_9": 4.0,
    "_10_a_11": 3.0
  },
  "11 a 12": {
    "_2_a_3": 9.7,
    "_4_a_5": 7.2,
    "_6_a_7": 6.0,
    "_8_a_9": 4.8,
    "_10_a_11": 3.6
  },
  "13 a 14": {
    "_2_a_3": 11.3,
    "_4_a_5": 8.5,
    "_6_a_7": 7.1,
    "_8_a_9": 5.7,
    "_10_a_11": 4.3
  },
  "15 a 16": {
    "_2_a_3": 13.0,
    "_4_a_5": 9.8,
    "_6_a_7": 8.1,
    "_8_a_9": 6.5,
    "_10_a_11": 4.9
  },
  "17 a 18": {
    "_2_a_3": 14.7,
    "_4_a_5": 11.0,
    "_6_a_7": 9.2,
    "_8_a_9": 7.4,
    "_10_a_11": 5.5
  },
  "19 a 20": {
    "_2_a_3": 16.4,
    "_4_a_5": 12.3,
    "_6_a_7": 10.2,
    "_8_a_9": 8.2,
    "_10_a_11": 6.1
  },"21 a 22": {
    "_2_a_3": 18.1,
    "_4_a_5": 13.5,
    "_6_a_7": 11.3,
    "_8_a_9": 9.0,
    "_10_a_11": 6.8
  },
  "22 a 23": {
    "_2_a_3": 19.7,
    "_4_a_5": 14.8,
    "_6_a_7": 12.3,
    "_8_a_9": 9.9,
    "_10_a_11": 7.4
  },
  "23 a 24": {
    "_2_a_3": 21.4,
    "_4_a_5": 16.1,
    "_6_a_7": 13.4,
    "_8_a_9": 10.7,
    "_10_a_11": 8.0
  },
  "24 a 25": {
    "_2_a_3": 23.1,
    "_4_a_5": 17.3,
    "_6_a_7": 14.4,
    "_8_a_9": 11.6,
    "_10_a_11": 8.7
  },
  "25 a 26": {
    "_2_a_3": 24.8,
    "_4_a_5": 18.6,
    "_6_a_7": 15.5,
    "_8_a_9": 12.4,
    "_10_a_11": 9.3
  },
  "26 a 27": {
    "_2_a_3": 26.5,
    "_4_a_5": 19.8,
    "_6_a_7": 16.5,
    "_8_a_9": 13.2,
    "_10_a_11": 9.9
  },
  "27 a 28": {
    "_2_a_3": 28.1,
    "_4_a_5": 21.1,
    "_6_a_7": 17.6,
    "_8_a_9": 14.1,
    "_10_a_11": 10.6
  },
  "28 a 29": {
    "_2_a_3": 29.8,
    "_4_a_5": 22.4,
    "_6_a_7": 18.6,
    "_8_a_9": 14.9,
    "_10_a_11": 11.2
  },
  "29 a 30": {
    "_2_a_3": 31.5,
    "_4_a_5": 23.6,
    "_6_a_7": 19.7,
    "_8_a_9": 15.8,
    "_10_a_11": 11.8
  },
  "30 a 31": {
    "_2_a_3": 33.2,
    "_4_a_5": 24.9,
    "_6_a_7": 20.7,
    "_8_a_9": 16.6,
    "_10_a_11": 12.4
  },"31 a 32": {
    "_2_a_3": 26.5,
    "_4_a_5": 19.8,
    "_6_a_7": 16.5,
    "_8_a_9": 13.2,
    "_10_a_11": 9.9
  },
  "33 a 34": {
    "_2_a_3": 28.1,
    "_4_a_5": 21.1,
    "_6_a_7": 17.6,
    "_8_a_9": 14.1,
    "_10_a_11": 10.6
  },
  "35 a 36": {
    "_2_a_3": 29.8,
    "_4_a_5": 22.4,
    "_6_a_7": 18.6,
    "_8_a_9": 14.9,
    "_10_a_11": 11.2
  },
  "37 a 38": {
    "_2_a_3": 31.5,
    "_4_a_5": 23.6,
    "_6_a_7": 19.7,
    "_8_a_9": 15.8,
    "_10_a_11": 11.8
  },
  "39 a 40": {
    "_2_a_3": 33.2,
    "_4_a_5": 24.9,
    "_6_a_7": 20.7,
    "_8_a_9": 16.6,
    "_10_a_11": 12.4
  },
  "41 a 42": {
    "_2_a_3": 34.9,
    "_4_a_5": 26.1,
    "_6_a_7": 21.8,
    "_8_a_9": 17.4,
    "_10_a_11": 13.1
  },
  "42 a 43": {
    "_2_a_3": 35.9,
    "_4_a_5": 27.4,
    "_6_a_7": 22.8,
    "_8_a_9": 18.3,
    "_10_a_11": 13.7
  },
  "44 a 45": {
    "_2_a_3": 37.0,
    "_4_a_5": 28.7,
    "_6_a_7": 23.9,
    "_8_a_9": 19.1,
    "_10_a_11": 14.3
  }
};

// Función para calcular la cantidad de alimento
function calcular() {
  // Obtener los valores seleccionados por el usuario
  var kilos = jQuery("#cachorro_kilo option:selected").val();
  var meses = jQuery("#cachorro_meses option:selected").val();
  var suplemento = jQuery(".suplemento input[type='radio']:checked").val();

  // Buscar el valor correspondiente en la tabla
  var valor = null;
  if (tabla_cachorro[kilos] && tabla_cachorro[kilos][meses]) {
    valor = tabla_cachorro[kilos][meses];
  }

  // Calcular la cantidad de alimento a dar
  var cantidad = valor ? valor : "Desconocido";
  if (suplemento == 1) {
    cantidad = (cantidad * 30 / 100).toFixed(2);
  }

  cantidad = Math.round(cantidad);
 if (cantidad == 0) {
 	cantidad = 1;
 }

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
var almes = (comer*30)/1.07;
almes = Math.round(almes);
var aldia = almes/30;
// caso especial para suplementacion 
//alert(aldia);
if (aldia == "1.5") {
aldia = "unaymedia";
//alert("??")
} else {
var aldia = aldia.toFixed(0);
var porciones = aldia/dividir;
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
jQuery('#desayuno').text(porciones1);
jQuery('#almuerzo').text(porciones2);
jQuery('#cena').text(porciones3);
jQuery('#buscando').css("visibility", "hidden");
}, 500);
}
