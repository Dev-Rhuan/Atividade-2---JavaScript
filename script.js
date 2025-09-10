numero = 0

function increment() {
    numero ++;
    setValue(numero);
}

function decrement() {
    numero --;
    setValue(numero);
}

function setValue(value) {
    if(value < 0) {
        alert("O contador ja esta em zero");
        value = 0;
        return;
    }
    document.getElementById('num').value = value
}

setValue(numero);

// Adicionar texto dinamico

let texto = document.getElementById('text');

texto.addEventListener('keydown', function(event){

    if (event.key === 'Enter') {
        let textoDigitado = texto.value;

        let destino = document.getElementById("elemento");
        let p = document.createElement("p");
        p.textContent = textoDigitado;
        destino.append(p);
    }
})

// Contador de caracteres

let frase = document.getElementById('caracter');

frase.addEventListener('keydown', function(event){

    if (event.key === 'Enter') {
        let fraseDigitada = frase.value;
        var fraseDigitadaSemEspaco = fraseDigitada.replace(/\s+/g, '');
        let qtdCaractere = fraseDigitadaSemEspaco.length;

        console.log(qtdCaractere);
        let resultado = document.getElementById('resultado');
        resultado.textContent = `${qtdCaractere}`;
    }
})

// Adicionar novo item

document.getElementById('addItem').addEventListener('click', function() {

    let tipo = document.getElementById('tipoLista').value;

    let elemento = document.createElement(tipo);

    elemento.innerHTML = '<li>Item<\li>';

    let container = document.getElementById('campo');
    campo.appendChild(elemento);
})

// Resetar

document.getElementById('reset').addEventListener('click', function(){
    location.reload();
})
