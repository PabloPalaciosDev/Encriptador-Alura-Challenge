const btn_encriptador = document.getElementById('btn-encriptador');
const btn_desencriptador = document.getElementById('btn-desencriptador');
const formulario = document.getElementById('formulario');
const output_encript_text = document.querySelector('.output-encript-text');
const body = document.getElementById('body')

function validarMensaje(mensaje) {
  var patron = /^[a-zA-Z\s]*$/;
  return patron.test(mensaje);
}



btn_encriptador.addEventListener('click', function() {

  let mensaje = formulario.elements.textarea.value;
  let input = formulario.elements.textarea;

  if(validarMensaje(mensaje)){
    let mensaje_a_procesar = mensaje;

    mensaje_a_procesar = mensaje_a_procesar.toLowerCase();
    
    const mensaje_encriptado = mensaje_a_procesar.replace(/[aeiou]/gi, function(vocal) {
      if (vocal === "a") {
        return "ai";
      } else if (vocal === "e") {
        return "enter";
      } else if (vocal === "i") {
        return "imes";
      } else if (vocal === "o") {
        return "ober";
      } else if (vocal === "u") {
        return "ufat";
      }
    });
  
  
    const output_text = document.createElement('p');
    output_text.classList.add('output-text')
    output_text.textContent = mensaje_encriptado;
    const botonCopiar = document.createElement('button');
    botonCopiar.classList.add('btn-copiar');
    botonCopiar.textContent = 'Copiar';
    output_encript_text.innerHTML = '';
    output_encript_text .appendChild(output_text);
    output_encript_text.appendChild(botonCopiar); 
  
  
    botonCopiar.addEventListener('click', function() {
      const portapapeles = output_text.textContent;
    
      if (navigator.clipboard) {
        navigator.clipboard.writeText(portapapeles).then(function() {
          console.log('Contenido copiado al portapapeles');
        }, function(error) {
          alert('Error al copiar al portapapeles: ', error);
        });
      } else {
        alert('Tu navegador no soporta el API de portapapeles de la Web');
      }
    });
  }
  else{
    const aviso_validacion = document.createElement('div');
    aviso_validacion.classList.add('aviso-validacion');
    aviso_validacion.textContent = 'No se pueden cifrar vocales acentuadas o caracteres especiales, ingresa de nuevo tu texto';
    body.appendChild(aviso_validacion);

    input.addEventListener('click', function(){
      body.removeChild(aviso_validacion);
    })

  }


});


btn_desencriptador.addEventListener('click', function() {
  let mensaje = formulario.elements.textarea.value;
  let input = formulario.elements.textarea;

  if(validarMensaje(mensaje)){
    let mensaje_a_procesar = mensaje;

    mensaje_a_procesar = mensaje_a_procesar.toLowerCase();
    if (/ai|enter|imes|ober|ufat/g.test(mensaje_a_procesar)) {

      const mensaje_encriptado = mensaje_a_procesar.replace(/ai|enter|imes|ober|ufat/g, function(cadena) {
        if (cadena === "ai") {
          return "a";
        } else if (cadena === "enter") {
          return "e";
        } else if (cadena === "imes") {
          return "i";
        } else if (cadena === "ober") {
          return "o";
        } else if (cadena === "ufat") {
          return "u";
        }
      });
  
    const output_text = document.createElement('p');
    output_text.classList.add('output-text')
    output_text.textContent = mensaje_encriptado;
    const botonCopiar = document.createElement('button');
    botonCopiar.classList.add('btn-copiar');
    botonCopiar.textContent = 'Copiar';
    output_encript_text.innerHTML = '';
    output_encript_text .appendChild(output_text);
    output_encript_text.appendChild(botonCopiar);
    botonCopiar.addEventListener('click', function() {
      const portapapeles = output_text.textContent;
    
      if (navigator.clipboard) {
        navigator.clipboard.writeText(portapapeles).then(function() {
          console.log('Contenido copiado al portapapeles');
        }, function(error) {
          alert('Error al copiar: ', error);
        });
      } else {
        alert('Tu navegador no soporta el copiado a portapapeles');
      }
    });
  
    }
    else{
      const aviso_validacion = document.createElement('div');
      aviso_validacion.classList.add('aviso-validacion');
      aviso_validacion.textContent = 'Tu texto no tiene nada para descifrar, ingresa de nuevo tu texto';
      body.appendChild(aviso_validacion);
  
      input.addEventListener('click', function(){
        body.removeChild(aviso_validacion);
      })
    }
  }
  else{
    const aviso_validacion = document.createElement('div');
      aviso_validacion.classList.add('aviso-validacion');
      aviso_validacion.textContent = 'No se pueden descifrar vocales acentuadas o caracteres especiales, ingresa de nuevo tu texto';
      body.appendChild(aviso_validacion);
  
      input.addEventListener('click', function(){
        body.removeChild(aviso_validacion);
      })
  }
});




//crear un evento para que cree la burbuja si la funcion de validacion manda un true
//Crear un evento para cuando clicle nuevamente el ingresr tu texto aqui 
//y que elimina el mensaje emergente
