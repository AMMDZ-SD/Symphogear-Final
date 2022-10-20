let imagen = $("#img-1");
let per_img = $("#per-img");
let personaje = $("#personaje");    
let per_nombre = $("#per-nombre");
let transformacion = $("#transformacion");
let nombre = $("#nombre-p1");
let symphogears = $("#symphogears");
let descripcion = $("#descripcion");
let descripcion_value = "";

personaje.change(() => {
    let opc = "<option>Seleccione...</option>";
  
    if (personaje.val() == "hibiki") {
        per_nombre.html("Hibiki Tachibana");
      transformacion.prop("disabled", false);
      opc += `
          <option value="1">Base</option>
          <option value="2">Module Ignite</option>
          <option value="3">Berserker </option>
          <option value="4">X-Driver 3</option>
          <option value="5">X-Driver Burning</option>
          <option value="6">Dual Relic</option>
          `;
          symphogears.removeClass("d-none");
    } else if (personaje.val() == "tsubasa") {
        per_nombre.html("Tsubasa Kazanari"); 
      transformacion.prop("disabled", false);
      opc += `
          <option value="7">Base</option>
          <option value="8">Module Ignite</option>
          <option value="9">X-Driver 3</option>
          <option value="10">X-Driver Burning</option>
          <option value="11">Dual Relic</option>
          `;
          symphogears.removeClass("d-none"); 
  } else if (personaje.val() == "chris") {
    per_nombre.html("Chris Yukine"); 
    transformacion.prop("disabled", false);
    opc += `
        <option value="12">Base</option>
        <option value="13">Nehushtana Armor</option>
        <option value="14">Module Ignite</option>
        <option value="15">X-Driver 3</option>
        <option value="16">X-Driver Burning</option>
        <option value="17">Dual Relic</option>
        `;
        symphogears.removeClass("d-none");
} else if (personaje.val() == "maria") {
    per_nombre.html("Maria Cadenzavna Eve"); 
    transformacion.prop("disabled", false);
    opc += `
        <option value="18">Base</option>
        <option value="19">Black Gungnir</option>
        <option value="20">Module Ignite</option>
        <option value="21">Berserker</option>
        <option value="22">X-Driver 3</option>
        <option value="23">X-Driver Burning</option>
        <option value="24">Dual Relic</option>
        `;
        symphogears.removeClass("d-none");
} else if (personaje.val() == "shirabe") {
    per_nombre.html("Shirabe Tsukuyomi"); 
    transformacion.prop("disabled", false);
    opc += `
        <option value="25">Base</option>
        <option value="26">Module Ignite</option>
        <option value="27">X-Driver 3</option>
        <option value="28">X-Driver Burning</option>
        <option value="29">Dual Relic</option>
        `;
        symphogears.removeClass("d-none");
} else if (personaje.val() == "kirika") {
    per_nombre.html("Kirika Akatsuki"); 
    transformacion.prop("disabled", false);
    opc += `
        <option value="30">Base</option>
        <option value="31">Module Ignite</option>
        <option value="32">X-Driver 3</option>
        <option value="33">X-Driver Burning</option>
        <option value="34">Dual Relic</option>
        `;
        symphogears.removeClass("d-none");
} else if (personaje.val() == "adam") {
    per_nombre.html("Adam Weishaupt"); 
    transformacion.prop("disabled", false);
    opc += `
        <option value="35">Base</option>|
        <option value="36">Behamont Golden</option>|
        `;
        symphogears.removeClass("d-none");
} else if (personaje.val() == "shem-ha") {
    per_nombre.html("Shem-Ha Mephorash"); 
    transformacion.prop("disabled", false);
    opc += `
        <option value="37>Awaked</option>|
        <option value="38>Awaked</option>|
        `;
        symphogears.removeClass("d-none");
} else if (personaje.val() == "miku") {
    per_nombre.html("Miku Kohinata"); 
    transformacion.prop("disabled", false);
    opc += `
        <option value="39">Base</option>|
        <option value="40">Recipiente</option>|
        <option value="41">Module Ignite</option>|
        <option value="42">Faust Roble</option>|
        <option value="43">Dual Relic</option>|
        `;
        symphogears.removeClass("d-none");
     } else {
    transformacion.prop("disabled", true);
    symphogears.addClass("d-none");
  }
  
   
  transformacion.html(opc);
});
transformacion.change(() => {
    let tipo = $("#transformacion option:selected").text();
    let nom = $("#nombre option:selected").text();
    switch (transformacion.val()) {
        case "1":
          imagen.attr("src", "img/b-h.png");
          descripcion_value = 'version final del Gungnir, mostrado en SZS XV'
          descripcion.text(descripcion_value);
          
          break;
        case "2":
          imagen.attr("src", "img/ig-h.png");
          descripcion_value = 'Manto oscuro, realizado con alquimia y el fragmento del Drailnuf'
          descripcion.text(descripcion_value);
          
          break;
        case "3":
          imagen.attr("src", "img/br-h.png");
          descripcion_value = 'Solo aparecio tres ocaciones, hace al usurio mas agresivo'
          descripcion.text(descripcion_value);
          
          break;
        case "4":
          imagen.attr("src", "img/driver-h.png");
          descripcion_value = 'Este modo solo puede acceder si existe una gran ganacian sinfonica, esta version aparece en SZS GX'
          descripcion.text(descripcion_value);
          
          break;
        case "5":
          imagen.attr("src", "img/burning-h.png");
          descripcion_value = 'Aparece en SZS XV, y es el resultado de la combinacion de la ganancia sinfonica y la alquimia'
          descripcion.text(descripcion_value);
          
          break;
        case "6":
          imagen.attr("src", "img/dr-h.png");
          descripcion_value = 'Exclusivo del juego android, gear basada en el legendario martillo mjonir'
          descripcion.text(descripcion_value);
          
          break;
          case "7":
            imagen.attr("src", "img/b-t.png");
            descripcion_value = 'Gear base version final, aparece en SZS XV'
          descripcion.text(descripcion_value);
            
            break;
          case "8":
            imagen.attr("src", "img/ig-t.png");
            descripcion_value = 'Manto oscuro, realizado con alquimia y un fragmento de Drailnuf'
          descripcion.text(descripcion_value);
            
            break;
          case "9":
            imagen.attr("src", "img/driver-t.png");
            descripcion_value = 'Este modo solo puede acceder si existe una gran ganancia sinfonica, esta version aparece en SZS GX'
          descripcion.text(descripcion_value);
            break;
          case "10":
            imagen.attr("src", "img/burning-t.png");
            descripcion_value = 'Aparece en SZS XV, y es el resultado de la combinacion de la ganancia sinfonica y la alquimia'
          descripcion.text(descripcion_value);
            break;
         case "11":
         imagen.attr("src", "img/dr-t.png");
         descripcion_value = 'Gear exclusivo del juego android, basado en la mitica espada Taika wo Nagu Tsurugi'
         descripcion.text(descripcion_value);
                break;
      
         case "12":
          imagen.attr("src", "img/b-c.png");
          descripcion_value = 'Gear base version final, Aparece en SZS XV'
          descripcion.text(descripcion_value);
          break;   
          case "13":
           imagen.attr("src", "img/n-c.png");
           descripcion_value = 'Armadura completa, siendo superior al gear comun, solo aparecio en la S1'
          descripcion.text(descripcion_value);
           break;   
           case "14":
            imagen.attr("src", "img/ig-c.png");
            descripcion_value = 'Manto oscuro, realizado con alquimia y un fragmento de Drailnuf'
          descripcion.text(descripcion_value);
             break;   
         case "15":
          imagen.attr("src", "img/driver-c.png");
          descripcion_value = 'Solo se puede acceder a ese modo si existe una gran ganancia sinfonica, aparece en SZS GX.'
          descripcion.text(descripcion_value);
          break;   
          case "16":
           imagen.attr("src", "img/burning-c.png");
           descripcion_value = 'Aparece en SZS XV, y es el resultado de la combinancion de la ganancia sinfonica y la alquimia'
          descripcion.text(descripcion_value);
           break;   
           case "17":
            imagen.attr("src", "img/dr-c.png");
            descripcion_value = 'Gear exclusivo del juego, una version alterna del Nehustan Armor'
          descripcion.text(descripcion_value);
             break;   
         case "18":
          imagen.attr("src", "img/b-m.png");
          descripcion_value = 'Gear base version final, aparece en SZS XV'
          descripcion.text(descripcion_value);
          break;   
          case "19":
           imagen.attr("src", "img/bg-m.png");
           descripcion_value = 'Durante SZS G utiliza el gear Gungnir de color negro, y en GX solo lo uso una vez para salvar a Hibiki y compañia de los Alcanoise'
          descripcion.text(descripcion_value);
           break;   
           case "20":
            imagen.attr("src", "img/ig-m.png");
            descripcion_value = 'Manto oscuro, realizado con alquimia y un fragmento de Drailnuf'
          descripcion.text(descripcion_value);
            break;   
            case "21":
             imagen.attr("src", "img/br-m.png");
             descripcion_value = 'Solo aparecion en GX durante la pelea contra Garie, una autoscorer del elemento agua, esto al altrar al module ignite'
          descripcion.text(descripcion_value);
break;
case "22":
          imagen.attr("src", "img/driver-m.png");
          descripcion_value = 'Este aparece si existe una gran ganancia sinfonica, aparece en SZS GX'
          descripcion.text(descripcion_value);
          break;   
          case "23":
           imagen.attr("src", "img/burning-m.png");
           escripcion_value = 'Aparece en SZS XV, y es el resultado de la combinancion de la alquimia y la ganancia sinfonica'
          descripcion.text(descripcion_value);
           break;   
           case "24":
            imagen.attr("src", "img/dr-m.png");
            descripcion_value = 'Gear exclusivo del juego android, basado en la espada de Hermes.'
          descripcion.text(descripcion_value);
             break;   
         case "25":
          imagen.attr("src", "img/b-s.png");
          descripcion_value = 'Gear base version final, aparece en SZS XV'
          descripcion.text(descripcion_value);
          break;   
          case "26":
           imagen.attr("src", "img/ig-s.png");
           descripcion_value = 'Manto oscuro, realizado con alquimia y un fragmento de Drailnuf'
          descripcion.text(descripcion_value);
           break;   
           case "27":
            imagen.attr("src", "img/driver-s.png");
            descripcion_value = 'Aparece en SZS GX, este modo se puede acceder si existe la suficiente ganancia sinfonica '
          descripcion.text(descripcion_value);
             break;   
         case "28":
          imagen.attr("src", "img/burning-s.png");
          descripcion_value = 'Aparece en SZS XV, y es el resultado de la combinancion de la alquimia y la ganancia sinfonica'
          descripcion.text(descripcion_value);
          break;   
          case "29":
           imagen.attr("src", "img/dr-s.png");
           descripcion_value = 'Gear Exclusivo del juego android, es un gear que en realidad es una entidad divina, basada en la dioso Tsukuyomi'
          descripcion.text(descripcion_value);
           break;   
           case "30":
            imagen.attr("src", "img/b-k.png");
            descripcion_value = 'Gear base version final, aparece en XV'
          descripcion.text(descripcion_value);
            break;   
            case "31":
             imagen.attr("src", "img/ig-k.png");
             descripcion_value = 'Manto oscuro, realizado con alquimia y un fragmento de Drailnuf'
          descripcion.text(descripcion_value);
             break;   
             case "32":
              imagen.attr("src", "img/driver-k.png");
              descripcion_value = 'Este modo solo aparece si existe una gran ganancia sinfonica, aparece en SZS GX'
          descripcion.text(descripcion_value);
              break;   
              case "33":
               imagen.attr("src", "img/burning-k.png");
               descripcion_value = 'Aparece en SZS XV, es el resultado de la combinacion de la alquimia y la ganancia sinfonica'
          descripcion.text(descripcion_value);
               break;   
               case "34":
                imagen.attr("src", "img/dr-k.png");
                descripcion_value = 'Gear Exclusivo del juego, basado en un fragmento de bala de plata de Valhensing'
          descripcion.text(descripcion_value);
                 break;   
             case "35":
              imagen.attr("src", "img/b-a.png");
              descripcion_value = 'Es su forma "perfecta", ya que en realidad oculta su verdadera apariencia'
          descripcion.text(descripcion_value);
              break;   
              case "36":
               imagen.attr("src", "img/bg-a.png");
               descripcion_value = 'Es el resultado de la transmutacion perfecta'
          descripcion.text(descripcion_value);
               break;   
               case "37":
                imagen.attr("src", "img/shem-ha.png");
                descripcion_value = 'forma base y verdader apariencia'
          descripcion.text(descripcion_value);
                break;  
                case "38":
                  imagen.attr("src", "img/a-s.png");
                  descripcion_value = 'Esta apariencia se debe a que por medio de su brazalete, toma posecion del cuerpo de Miku'
          descripcion.text(descripcion_value);
                  break;  
                case "39":
                 imagen.attr("src", "img/b-mk.png");
                 descripcion_value = 'Gear base, solo parece en SZS G y el juego Andorid'
          descripcion.text(descripcion_value);
                 break;   
                 case "40":
                  imagen.attr("src", "img/rec-mk.png");
                  descripcion_value = 'Sus ojos cambian a morado con contorno rojo, debido a que su cuerpo es tomado por Shem-Ha'
          descripcion.text(descripcion_value);
                  break;   
                  case "41":
                   imagen.attr("src", "img/ig-mk.png");
                   descripcion_value = 'Manto oscuro, realizado con alquimia y un fragmento de Drailnuf, solo es exclusivo del juego android'
          descripcion.text(descripcion_value);
                   break;   
                   case "42":
                    imagen.attr("src", "img/driverF-mk.png");
                    descripcion_value = 'Faust robe del shenshoujin, siendo mas fuerte que el propio X-Driver'
          descripcion.text(descripcion_value);
                     break;   
                 case "43":
                  imagen.attr("src", "img/dr-mk.png");
                  descripcion_value = 'Gear exclusivo del juego android, este esta basado en los espejos chinos de la dinastia Hu-tao'
          descripcion.text(descripcion_value);
                  break;   
                  default:
                    alert("No se eligió a un personaje");
                    imagen.attr("src", "");
                    nombre.text("");
                    descripcion_value = ``;
                    
                    break;
                }
                descripcion.text(descripcion_value);
		
              });
              