// =====================================================
// funciones.js  ->  aqui vive la LOGICA del sitio
// Cap. 1: como el navegador ejecuta JS   Cap. 2: variables y operadores
// Cap. 3: funciones, objetos, Date, Math, String, window (alert/prompt/confirm)
// Cap. 4: if / else, switch, for
// =====================================================


// ------------------------------------------------------
// 1) SALUDO SEGUN LA HORA  (objeto Date + if/else + switch)
// ------------------------------------------------------
function saludoSegunHora() {
  var ahora = new Date();          // objeto Date: fecha y hora actuales
  var hora = ahora.getHours();     // numero de 0 a 23
  var saludo;

  if (hora < 12) {
    saludo = "Good morning";
  } else if (hora < 18) {
    saludo = "Good afternoon";
  } else {
    saludo = "Good evening";
  }
  return saludo;
}

function nombreDelDia(numero) {
  var dia;
  switch (numero) {                // getDay(): 0 = domingo ... 6 = sabado
    case 0: dia = "Sunday";    break;
    case 1: dia = "Monday";    break;
    case 2: dia = "Tuesday";   break;
    case 3: dia = "Wednesday"; break;
    case 4: dia = "Thursday";  break;
    case 5: dia = "Friday";    break;
    case 6: dia = "Saturday";  break;
    default: dia = "Unknown";
  }
  return dia;
}

function mostrarSaludo() {
  var ahora = new Date();
  var minutos = ahora.getMinutes();
  if (minutos < 10) {
    minutos = "0" + minutos;       // para que se vea 9:05 y no 9:5
  }
  document.write('<div class="caja-js">');
  document.write('<h3>' + saludoSegunHora() + '!</h3>');
  document.write('<p>Today is ' + nombreDelDia(ahora.getDay()) + '. It is ' + ahora.getHours() + ':' + minutos + '.</p>');
  document.write('<p>Greet like this right now: <b>' + saludoSegunHora() + '</b></p>');
  document.write('</div>');
}


// ------------------------------------------------------
// 2) VERBO DEL DIA  (Math.random + array de objetos)
// ------------------------------------------------------
function verboDelDia() {
  var posicion = Math.floor(Math.random() * verbosDelDia.length);
  var v = verbosDelDia[posicion];
  document.write('<div class="caja-js">');
  document.write('<h3>Verb of the day: ' + v.infinitivo + '</h3>');
  document.write('<p>Past simple: <b>' + v.pasado + '</b> | Past participle: <b>' + v.participio + '</b></p>');
  document.write('<p>Significado: ' + v.significado + '</p>');
  document.write('<p><small>Recarga la página (F5) para ver otro verbo.</small></p>');
  document.write('</div>');
}


// ------------------------------------------------------
// 3) TABLA GENERADA CON UN BUCLE  (for + array de objetos)
// ------------------------------------------------------
function tablaPhrasalVerbs() {
  for (var i = 0; i < phrasalVerbs.length; i++) {
    document.write('<tr>');
    document.write('<td>' + phrasalVerbs[i].frase + '</td>');
    document.write('<td>' + phrasalVerbs[i].significado + '</td>');
    document.write('</tr>');
  }
}


// ------------------------------------------------------
// 4) VERB TO BE  (switch)
// ------------------------------------------------------
function formaDeBe(pronombre) {
  var p = pronombre.trim().toLowerCase();
  var forma = "";
  switch (p) {
    case "i":
      forma = "am";
      break;
    case "he":
    case "she":
    case "it":
      forma = "is";
      break;
    case "you":
    case "we":
    case "they":
      forma = "are";
      break;
    default:
      forma = "";                  // no es un pronombre valido
  }
  return forma;
}

function probarVerbToBe() {
  var entrada = prompt("Escribe un pronombre: I, you, he, she, it, we o they");
  if (entrada === null) {
    return;                        // la persona pulso Cancelar
  }
  var forma = formaDeBe(entrada);
  if (forma === "") {
    alert("No reconozco \"" + entrada + "\". Prueba con: I, you, he, she, it, we, they.");
  } else {
    var p = entrada.trim().toLowerCase();
    var pMayus = p.charAt(0).toUpperCase() + p.slice(1);   // "he" -> "He"
    alert(pMayus + " " + forma + "   (verb to be)");
  }
}


// ------------------------------------------------------
// 5) CONJUGADOR PRESENT SIMPLE: agrega -s / -es / -ies  (String + if/else)
// ------------------------------------------------------
function esVocal(letra) {
  return "aeiou".indexOf(letra) !== -1;   // indexOf devuelve -1 si no la encuentra
}

function agregarS(verbo) {
  var v = verbo.trim().toLowerCase();
  var n = v.length;
  var ultima = v.charAt(n - 1);
  var penultima = v.charAt(n - 2);
  var dosUltimas = v.slice(n - 2);        // las 2 ultimas letras

  if (v === "have") {
    return "has";
  } else if (ultima === "s" || ultima === "x" || ultima === "z" || ultima === "o" ||
             dosUltimas === "sh" || dosUltimas === "ch") {
    return v + "es";                      // watch -> watches, go -> goes
  } else if (ultima === "y" && !esVocal(penultima)) {
    return v.slice(0, n - 1) + "ies";     // study -> studies
  } else {
    return v + "s";                       // work -> works, play -> plays
  }
}

function probarPresentSimple() {
  var entrada = prompt("Escribe un verbo en infinitivo (ej: work, study, watch, go):");
  if (entrada === null) {
    return;
  }
  if (entrada.trim() === "") {
    alert("No escribiste nada. Intenta otra vez.");
    return;
  }
  alert("I / you / we / they: " + entrada.trim().toLowerCase() + "\nHe / she / it: " + agregarS(entrada));
}


// ------------------------------------------------------
// 6) CONJUGADOR PAST SIMPLE: agrega -ed / -d / -ied / duplica la letra
// ------------------------------------------------------
function agregarEd(verbo) {
  var v = verbo.trim().toLowerCase();
  var n = v.length;

  // primero buscamos en la lista de irregulares con un bucle for
  for (var i = 0; i < pasadosIrregulares.length; i++) {
    if (pasadosIrregulares[i][0] === v) {
      return pasadosIrregulares[i][1] + "  (irregular)";
    }
  }

  var ultima = v.charAt(n - 1);
  var penultima = v.charAt(n - 2);
  var antepenultima = v.charAt(n - 3);

  // contamos las vocales del verbo con otro bucle
  var vocales = 0;
  for (var j = 0; j < n; j++) {
    if (esVocal(v.charAt(j))) {
      vocales++;
    }
  }

  if (ultima === "e") {
    return v + "d";                        // live -> lived
  } else if (ultima === "y" && !esVocal(penultima)) {
    return v.slice(0, n - 1) + "ied";      // study -> studied
  } else if (vocales === 1 && !esVocal(antepenultima) && esVocal(penultima) && !esVocal(ultima) &&
             ultima !== "w" && ultima !== "x" && ultima !== "y") {
    return v + ultima + "ed";              // stop -> stopped, plan -> planned
  } else {
    return v + "ed";                       // visit -> visited
  }
}

function probarPastSimple() {
  var entrada = prompt("Escribe un verbo en infinitivo (ej: play, live, study, stop, go):");
  if (entrada === null) {
    return;
  }
  if (entrada.trim() === "") {
    alert("No escribiste nada. Intenta otra vez.");
    return;
  }
  alert("Past simple de \"" + entrada.trim().toLowerCase() + "\": " + agregarEd(entrada));
}


// ------------------------------------------------------
// 7) QUIZ  (prompt + confirm + alert + for + if/else + variables)
// ------------------------------------------------------
function hacerQuiz(titulo, preguntas) {
  var puntaje = 0;                 // contador de aciertos
  var total = preguntas.length;
  var cancelado = false;

  var empezar = confirm("Quiz: " + titulo + "\n" + total + " preguntas.\n\n¿Empezamos?");
  if (!empezar) {
    return;
  }

  for (var i = 0; i < total; i++) {
    var texto = "Pregunta " + (i + 1) + " de " + total + "\n\n" + preguntas[i].pregunta +
                "\n\nEscribe tu respuesta (Cancelar para salir):";
    var respuesta = prompt(texto);

    if (respuesta === null) {      // pulso Cancelar
      cancelado = true;
      break;                       // sale del bucle
    }

    respuesta = respuesta.trim().toLowerCase();

    if (respuesta === preguntas[i].respuesta) {
      puntaje = puntaje + 1;
      alert("Correct!");
    } else {
      alert("Not quite. La respuesta correcta es: " + preguntas[i].respuesta);
    }
  }

  if (cancelado) {
    alert("Quiz cancelado. Puedes intentarlo de nuevo cuando quieras.");
    return;
  }

  var porcentaje = Math.round(puntaje / total * 100);
  var mensaje;
  if (porcentaje === 100) {
    mensaje = "Perfect!";
  } else if (porcentaje >= 80) {
    mensaje = "Excellent!";
  } else if (porcentaje >= 60) {
    mensaje = "Good job!";
  } else {
    mensaje = "Keep practicing!";
  }
  alert("Resultado: " + puntaje + " de " + total + " (" + porcentaje + "%)\n" + mensaje);
}

// Una funcion corta por tema, para llamarla desde los botones
function quizPresentSimple()     { hacerQuiz("Present Simple",     bancoPreguntas.presentSimple); }
function quizPresentContinuous() { hacerQuiz("Present Continuous", bancoPreguntas.presentContinuous); }
function quizPastSimple()        { hacerQuiz("Past Simple",        bancoPreguntas.pastSimple); }
function quizPastContinuous()    { hacerQuiz("Past Continuous",    bancoPreguntas.pastContinuous); }
function quizFuture()            { hacerQuiz("Going to vs. Will",  bancoPreguntas.future); }

// Actividades integradas en la pagina, sin prompt, alert ni confirm.
function comprobarPractica(tipo) {
 const input=document.getElementById('entrada-'+tipo), salida=document.getElementById('resultado-'+tipo);
 const valor=input.value.trim();
 if(!valor){salida.textContent='Escribe una respuesta para comenzar.';salida.className='feedback warning';return;}
 let respuesta='';
 if(tipo==='be') {const forma=formaDeBe(valor); respuesta=forma ? valor.charAt(0).toUpperCase()+valor.slice(1).toLowerCase()+' '+forma : 'Pronombre no reconocido. Usa I, you, he, she, it, we o they.';}
 if(tipo==='present') respuesta='I / you / we / they: '+valor.toLowerCase()+' · He / she / it: '+agregarS(valor);
 if(tipo==='past') respuesta='Past simple: '+agregarEd(valor);
 salida.textContent=respuesta; salida.className='feedback success';
}
function montarQuiz(tipo) {
 const cont=document.getElementById('quiz-'+tipo);
 if(!cont || !window.bancoPreguntas || !bancoPreguntas[tipo])return;
 const preguntas=bancoPreguntas[tipo];
 cont.innerHTML='';
 preguntas.forEach((q,i)=>{
   const bloque=document.createElement('div');bloque.className='question-card';
   const titulo=document.createElement('label');titulo.htmlFor='respuesta-'+tipo+'-'+i;titulo.textContent=(i+1)+'. '+q.pregunta;
   const entrada=document.createElement('input');entrada.type='text';entrada.id='respuesta-'+tipo+'-'+i;entrada.autocomplete='off';entrada.placeholder='Write your answer here';
   const feedback=document.createElement('div');feedback.className='feedback';feedback.id='feedback-'+tipo+'-'+i;
   bloque.append(titulo,entrada,feedback);cont.appendChild(bloque);
 });
 const acciones=document.createElement('div');acciones.className='quiz-actions';
 const revisar=document.createElement('button');revisar.type='button';revisar.className='boton-js';revisar.textContent='Check my answers';revisar.onclick=()=>corregirQuiz(tipo);
 const reiniciar=document.createElement('button');reiniciar.type='button';reiniciar.className='boton-js secondary';reiniciar.textContent='Try again';reiniciar.onclick=()=>montarQuiz(tipo);
 const resultado=document.createElement('div');resultado.id='puntaje-'+tipo;resultado.className='score-result';resultado.setAttribute('aria-live','polite');
 acciones.append(revisar,reiniciar);cont.append(acciones,resultado);
}
function corregirQuiz(tipo){
 const preguntas=bancoPreguntas[tipo];let aciertos=0;
 preguntas.forEach((q,i)=>{
  const entrada=document.getElementById('respuesta-'+tipo+'-'+i);
  const feedback=document.getElementById('feedback-'+tipo+'-'+i);
  const normalizar=t=>String(t).trim().toLowerCase().replace(/\s+/g,' ').replace(/[.!?]+$/,'');
  const bien=normalizar(entrada.value)===normalizar(q.respuesta);
  if(bien)aciertos++;
  feedback.textContent=bien?'✓ Correct!':'✗ Correct answer: '+q.respuesta;
  feedback.className='feedback '+(bien?'success':'error');
 });
 const porcentaje=Math.round(aciertos/preguntas.length*100);
 document.getElementById('puntaje-'+tipo).textContent='Your score: '+aciertos+'/'+preguntas.length+' ('+porcentaje+'%) · '+(porcentaje===100?'Perfect!':porcentaje>=80?'Excellent!':porcentaje>=60?'Good job!':'Keep practicing!');
}
